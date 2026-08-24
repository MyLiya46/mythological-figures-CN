// ============================================================================
// layout.js —— 预计算静态坐标（一次性力导向，交互阶段不再计算布局）
// 运行：node layout.js  （读 build/combined.json → 写 data.json）
// 策略：六大神系按「径向分簇」分布（各神系一个扇区/环），
//       level 决定距簇心距离（创世神居中），再跑有限轮力导向微调。
// ============================================================================
import { readFileSync, writeFileSync } from 'node:fs';
import { CATEGORIES, LEVELS, EDGE_TYPES } from './meta.js';

const data = JSON.parse(readFileSync(new URL('../build/combined.json', import.meta.url), 'utf8'));
const nodes = data.nodes;
const edges = data.edges;

const W = 5200, H = 5200, CX = W / 2, CY = H / 2;

// ---- 1. 神系分簇中心（六系沿环分布）----
const CAT_ORDER = ['shanggu', 'tianting', 'daojiao', 'fojiao', 'fengshen', 'xiyou'];
const catPos = {};
CAT_ORDER.forEach((c, i) => {
  const ang = (i / CAT_ORDER.length) * Math.PI * 2 - Math.PI / 2;
  const R = 1500; // 簇心距画布中心
  catPos[c] = { x: CX + Math.cos(ang) * R, y: CY + Math.sin(ang) * R };
});
// 未分类的兜底到中心
function cc(n) { return catPos[n.category] || { x: CX, y: CY }; }

// ---- 2. 每节点 level 决定距簇心半径，按簇内随机角度散布 ----
const levelR = { 0: 40, 1: 200, 2: 440, 3: 720, 4: 900, 5: 800 };
const pos = new Map();
// 确定性伪随机（保证可复现）
let seed = 42;
function rnd() { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; }

// 按 degree 排序，高 degree 的节点优先占内环
const deg = new Map();
for (const e of edges) { deg.set(e.source, (deg.get(e.source) || 0) + 1); deg.set(e.target, (deg.get(e.target) || 0) + 1); }

for (const n of nodes) {
  const c = cc(n);
  const lvl = n.level;
  const r = levelR[lvl] != null ? levelR[lvl] : 600;
  const ang = rnd() * Math.PI * 2;
  const d = (n.level === 0) ? rnd() * r * 0.3 : r * (0.55 + rnd() * 0.9);
  pos.set(n.id, {
    x: c.x + Math.cos(ang) * d,
    y: c.y + Math.sin(ang) * d,
    nx: 0, ny: 0,
    r,
    cat: n.category,
  });
}

// ---- 3. 有限轮力导向（排斥 + 锚点弹簧 + 边弹簧）----
const ITER = 140;
const REPEL = 38000;
const ANCHOR = 0.006;
const LINK = 0.004;
const MAXD = 2600;

// 构建邻接与前向索引
const index = new Map(); nodes.forEach((n, i) => index.set(n.id, i));

function step(iter) {
  // 排斥力（O(n) 近似：仅对同簇内做，避免 O(n^2)；不同簇之间天然分离）
  // 为性能用网格近似：简单起见对同 category 内做全对
  const byCat = {};
  for (const n of nodes) {
    (byCat[n.category] = byCat[n.category] || []).push(n);
  }
  for (const cat in byCat) {
    const arr = byCat[cat];
    for (let i = 0; i < arr.length; i++) {
      const a = arr[i], pa = pos.get(a.id);
      for (let j = i + 1; j < arr.length; j++) {
        const b = arr[j], pb = pos.get(b.id);
        let dx = pa.x - pb.x, dy = pa.y - pb.y;
        let d2 = dx * dx + dy * dy;
        if (d2 < 0.01) { dx = (rnd() - 0.5); dy = (rnd() - 0.5); d2 = dx * dx + dy * dy; }
        if (d2 > MAXD * MAXD) continue;
        const d = Math.sqrt(d2);
        let f = REPEL / d2;
        // 层级差越大，排斥越强（避免高低混杂）
        if (Math.abs(a.level - b.level) > 1) f *= 1.6;
        const fx = (dx / d) * f, fy = (dy / d) * f;
        pa.nx += fx; pa.ny += fy;
        pb.nx -= fx; pb.ny -= fy;
      }
    }
  }
  // 锚点弹簧（拉回簇心层级）
  for (const n of nodes) {
    const p = pos.get(n.id);
    const c = cc(n);
    const tx = c.x, ty = c.y;
    // 锚点到簇心 + level 半径的环
    p.nx += (tx - p.x) * ANCHOR;
    p.ny += (ty - p.y) * ANCHOR;
  }
  // 边弹簧
  for (const e of edges) {
    const pa = pos.get(e.source), pb = pos.get(e.target);
    if (!pa || !pb) continue;
    const dx = pb.x - pa.x, dy = pb.y - pa.y;
    const d = Math.sqrt(dx * dx + dy * dy) || 1;
    const f = (d - 210) * LINK;
    const fx = (dx / d) * f, fy = (dy / d) * f;
    pa.nx += fx; pa.ny += fy;
    pb.nx -= fx; pb.ny -= fy;
  }
  // 应用位移 + 阻尼 + 边界
  for (const n of nodes) {
    const p = pos.get(n.id);
    p.x += p.nx; p.y += p.ny;
    p.nx *= 0.78; p.ny *= 0.78;
    // 边界软约束
    if (p.x < 60) p.x += (60 - p.x) * 0.4;
    if (p.x > W - 60) p.x -= (p.x - (W - 60)) * 0.4;
    if (p.y < 60) p.y += (60 - p.y) * 0.4;
    if (p.y > H - 60) p.y -= (p.y - (H - 60)) * 0.4;
  }
  if (iter % 35 === 0) {
    let s = 0; for (const n of nodes) { const p = pos.get(n.id); s += p.nx * p.nx + p.ny * p.ny; }
    console.log(`  iter ${iter}: energy=${Math.round(s)}`);
  }
}

console.log(`布局 ${nodes.length} 节点 / ${edges.length} 边 ...`);
for (let i = 1; i <= ITER; i++) step(i);

// ---- 4. 写回坐标（整数，缩小到可持续画布）----
const finalNodes = nodes.map(n => {
  const p = pos.get(n.id);
  return { ...n, x: Math.round(p.x), y: Math.round(p.y) };
});
// 边显式唯一 id（G6 默认 id 为 source-target，同对多边会冲突）
const finalEdges = edges.map((e, i) => ({ ...e, id: 'e' + i }));

// ---- 5. 前端渲染所需元信息（单一数据源）----
// shape → 节点形状（按身份类型）
const SHAPE_MAP = { creator: 'star', god: 'circle', xian: 'diamond', yao: 'triangle', ren: 'rect' };
const meta = {
  categories: CATEGORIES,
  levels: LEVELS,
  edgeTypes: EDGE_TYPES,
  shapeMap: SHAPE_MAP,
};

// 归一化到 core 尺寸（使缩放基线合理）
const out = { meta, nodes: finalNodes, edges: finalEdges };
writeFileSync(new URL('../data.json', import.meta.url), JSON.stringify(out));
// 同时输出 data.js 供 file:// 双击直开（<script> 加载不受 CORS 限制）
writeFileSync(new URL('../data.js', import.meta.url), 'window.SHENHUA_DATA=' + JSON.stringify(out) + ';');
console.log('已写入 data.json（含预计算坐标）');

// 打印包围盒
let minx = 1e9, miny = 1e9, maxx = -1e9, maxy = -1e9;
for (const n of finalNodes) { minx = Math.min(minx, n.x); miny = Math.min(miny, n.y); maxx = Math.max(maxx, n.x); maxy = Math.max(maxy, n.y); }
console.log(`包围盒: ${minx},${miny} ~ ${maxx},${maxy}`);