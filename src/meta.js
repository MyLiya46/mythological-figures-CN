// ============================================================================
// 元信息 / schema —— 中国神话人物知识图谱
// 配色采用中国古典色板：朱砂、鎏金、黛蓝、墨、月白、青碧、赭石
// ============================================================================

// 六大神系
export const CATEGORIES = {
  shanggu:  { name: '上古原始神话', color: '#8C6C45', sub: '山海经·楚辞·淮南子·史记' },
  fengshen: { name: '封神演义',     color: '#B23A2E', sub: '封神演义·武王伐纣' },
  xiyou:    { name: '西游记',       color: '#C77D2E', sub: '西游记·取经群妖' },
  daojiao:  { name: '道教神系',     color: '#3E5C76', sub: '道藏·三清四御·星君' },
  fojiao:   { name: '佛教神系',     color: '#6E5B8F', sub: '佛经·诸佛菩萨罗汉' },
  tianting: { name: '天庭·民间俗神', color: '#7D8A4C', sub: '天庭·儒信仰·历史神化' },
};

// 地位层级（数值越小地位越高）
export const LEVELS = {
  0: '创世·至高神',
  1: '主神·佛·大仙',
  2: '次级神·星官·罗汉',
  3: '仙·真人·人杰',
  4: '妖·精怪·鬼',
  5: '人间帝王·英雄·圣',
};

// 关系类型（14 类），含绘制样式
// line: 线型（solid/dashed/dotted）  color: 线色  arrow: 是否带方向箭头
export const EDGE_TYPES = {
  blood:          { name: '血缘',   color: '#9E4A3B', line: 'solid',  desc: '亲子·兄弟等血缘' },
  master:         { name: '师徒',   color: '#4A6B8A', line: 'solid',  desc: '授业·度化之师' },
  spouse:         { name: '夫妻',   color: '#C2577E', line: 'solid',  desc: '夫妻·配偶' },
  sovereign:      { name: '君臣',   color: '#8A5A2E', line: 'solid',  desc: '君主与臣属' },
  subordinate:    { name: '隶属',   color: '#5E7A66', line: 'dashed', desc: '部属·门下·执事' },
  hostile:        { name: '敌对',   color: '#8C1F1F', line: 'dashed', desc: '敌对·征讨' },
  ally:           { name: '同盟',   color: '#4E8A6B', line: 'solid',  desc: '同盟·结义·同道' },
  reincarnation:  { name: '转世',   color: '#7A5C8A', line: 'dotted', desc: '转世·轮回' },
  incarnation:    { name: '化身·感生', color: '#6E7B8A', line: 'dotted', desc: '化身·化生·感生' },
  govern:         { name: '主宰·管辖', color: '#A08020', line: 'solid',  desc: '主宰·统领一方' },
  kin:            { name: '亲族·同门', color: '#6B6B8A', line: 'dashed', desc: '族人·同门师兄' },
  mount:          { name: '坐骑·随侍', color: '#5A7D7D', line: 'dotted', desc: '坐骑·随从·法宝所化' },
  worship:        { name: '奉祀·庇护', color: '#8A7840', line: 'dotted', desc: '信众奉祀·庇护人间' },
  origin:         { name: '起源·所出', color: '#9A8A6A', line: 'dotted', desc: '由某神化生·出自某处' },
  sequence:       { name: '次第相承', color: '#6A7A8A', line: 'dashed', desc: '星宿环序·地支序·甲子序·殿序等固定次序' },
};

// 布局用的层级半径基准（地位越高离核越近）与节点基准尺寸
export const LEVEL_RADIUS = { 0: 30, 1: 120, 2: 260, 3: 430, 4: 560, 5: 520 };
export const LEVEL_SIZE  = { 0: 22, 1: 16, 2: 11, 3: 8, 4: 6.5, 5: 9 };

// 节点类型（形态）——按地位与身份微调形状
// shape: circle / star / diamond 等，render 阶段取用
export const SHAPES = {
  creator: { shape: 'star',   note: '创世至高' },
  god:     { shape: 'circle', note: '神佛' },
  xian:    { shape: 'diamond',note: '仙人' },
  yao:     { shape: 'triangle', note: '妖' },
  ren:     { shape: 'rect',   note: '人' },
};