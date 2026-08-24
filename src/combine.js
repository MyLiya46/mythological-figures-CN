// ============================================================================
// combine.js —— 合并所有数据模块，canonical 归一，去重，校验
// 运行：node combine.js  （输出 build/combined.json）
// ============================================================================
import { writeFileSync } from 'node:fs';
import * as shanggu from './data-shanggu.js';
import * as fengshen from './data-fengshen.js';
import * as xiyou from './data-xiyou.js';
import * as daojiao from './data-daojiao.js';
import * as fojiao from './data-fojiao.js';
import * as tianting from './data-tianting.js';
import * as roster from './data-roster.js';
import * as roster2 from './data-roster2.js';
import * as fix from './data-fix.js';
import * as seq from './data-seq.js';

const modules = [shanggu, fengshen, xiyou, daojiao, fojiao, tianting, roster, roster2, fix, seq];

// ---- canonical 归一：同一人物的多个 id 收敛为一个 ----
// { 待废弃id: 保留的canonical id }
const CANON = {
  // 西王母（上古 kunlun 为主）
  'wangmu': 'kunlun', 'wangmu_t': 'kunlun',
  // 玉皇大帝
  'yudi': 'yuhuang',
  // 哪吒
  'nezhalth': 'ne_zha',
  // 观音
  'guanyin': 'guanshiyin',
  // 赵公明
  'caizhao': 'zhao_gong',
  // 李靖 / 托塔天王
  'tuota': 'li_jing',
  // 二郎神
  'erlang': 'yang_jian',
  // 地藏
  'dizang': 'dizangwang',
  // 药师佛
  'yaoshi': 'yaoshifo',
  // 铁拐李 / 汉钟离
  'tiegong': 'tieguaili', 'hanzhongli': 'hanzhong',
  // 太阳星君（tianting 的归并到 roster 之 ry_taiyang）
  'jiu_yao_taiyang': 'ry_taiyang',
  // 阿閦佛异译
  'a_tou': 'ashuchu',
};
const canon = id => CANON[id] || id;

// ---- 合并节点 ----
const nodeMap = new Map();
const conflicts = [];
for (const m of modules) {
  for (const n of m.nodes) {
    const id = canon(n.id);
    if (nodeMap.has(id)) {
      const prev = nodeMap.get(id);
      if (prev.name !== n.name) conflicts.push({ id, a: prev.name, b: n.name });
      if (Array.isArray(n.aliases)) prev.aliases = Array.from(new Set([...(prev.aliases || []), ...n.aliases]));
      // 若已有分类，保留首个；若先出现的是弱分类（低层级），以更尊者优先
      continue;
    }
    nodeMap.set(id, { ...n, id });
  }
}

// ---- 合并边（canon 重写 + 去重）----
const edgeSet = new Set();
const edges = [];
for (const m of modules) {
  for (const e of m.edges) {
    const s = canon(e.source), t = canon(e.target);
    if (s === t) continue; // 自环丢弃
    const key = `${s}|${t}|${e.type}`;
    if (edgeSet.has(key)) continue;
    edgeSet.add(key);
    edges.push({ ...e, source: s, target: t });
  }
}

// ---- 校验 ----
const missing = [];
for (const e of edges) {
  if (!nodeMap.has(e.source)) missing.push({ edge: e, side: 'source' });
  if (!nodeMap.has(e.target)) missing.push({ edge: e, side: 'target' });
}
const degree = new Map();
for (const e of edges) {
  degree.set(e.source, (degree.get(e.source) || 0) + 1);
  degree.set(e.target, (degree.get(e.target) || 0) + 1);
}
const isolated = [...nodeMap.values()].filter(n => !degree.has(n.id)).map(n => n.id);

// ---- 统计 ----
const nodes = [...nodeMap.values()];
const byCat = {}, byLevel = {}, byType = {};
for (const n of nodes) { byCat[n.category] = (byCat[n.category] || 0) + 1; byLevel[n.level] = (byLevel[n.level] || 0) + 1; }
for (const e of edges) byType[e.type] = (byType[e.type] || 0) + 1;

console.log('=== 统计 ===');
console.log('节点总数:', nodes.length);
console.log('边总数:', edges.length);
console.log('关系类型数:', Object.keys(byType).length);
console.log('各神系:', JSON.stringify(byCat));
console.log('各层级:', JSON.stringify(byLevel));
console.log('各关系:', JSON.stringify(byType, null, 2));
if (conflicts.length) console.log('同ID不同名冲突:', JSON.stringify(conflicts));
if (missing.length) console.log('悬挂边引用:', missing.length, JSON.stringify(missing.slice(0, 20)));
if (isolated.length) console.log('孤立节点(' + isolated.length + '):', isolated.join(', '));

// ---- 输出 data.json（最终 schema）----
const sortedNodes = nodes.map(n => ({
  id: n.id, name: n.name, category: n.category, level: n.level,
  desc: n.desc || '', aliases: n.aliases || [], shape: n.shape || 'circle',
}));
const out = { nodes: sortedNodes, edges, meta_extra: { conflicts: conflicts.length, missing: missing.length, isolated: isolated.length } };
writeFileSync(new URL('../build/combined.json', import.meta.url), JSON.stringify(out));
console.log('\n已写入 build/combined.json');