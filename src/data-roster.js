// ============================================================================
// 成组名录 —— 二十八宿 · 九曜 · 龙九子 · 十二生肖 · 六丁六甲 · 四值功曹 · 五方揭谛 · 天罡地煞
// 出处：道教星斗体系（《云笈七签》《上清灵宝大法》）、佛经（《心经》五揭谛）、
//       《淮南子》《山海经》四象、民间生肖信仰
// ============================================================================
const Ns = [];
const Es = [];
const N = (id, name, category, level, desc, aliases = [], shape) =>
  Ns.push({ id, name, category, level, desc, aliases, shape });
const E = (source, target, type, desc) => Es.push({ source, target, type, desc });

// —— 二十八宿（角亢氐房心尾箕 / 斗牛女虚危室壁 / 奎娄胃昴毕觜参 / 井鬼柳星张翼轸）——
const xu = [
  ['jiaomujiao','角木蛟','东方苍龙七宿之首，角宿。','青龙'],
  ['kangjinlong','亢金龙','东方苍龙七宿之二，亢宿。','青龙'],
  ['dituhe','氐土貉','东方苍龙七宿之三，氐宿。','青龙'],
  ['fangritu','房日兔','东方苍龙七宿之四，房宿。','青龙'],
  ['xinyuehu','心月狐','东方苍龙七宿之五，心宿（商星）。','青龙'],
  ['weihuohu','尾火虎','东方苍龙七宿之六，尾宿。','青龙'],
  ['jishuibao','箕水豹','东方苍龙七宿之七，箕宿。','青龙'],
  ['doumu_xie','斗木獬','北方玄武七宿之首，斗宿。','玄武'],
  ['niujinniu','牛金牛','北方玄武七宿之二，牛宿。','玄武'],
  ['nvtu_fu','女土蝠','北方玄武七宿之三，女宿。','玄武'],
  ['xuri_shu','虚日鼠','北方玄武七宿之四，虚宿。','玄武'],
  ['weiyueyan','危月燕','北方玄武七宿之五，危宿。','玄武'],
  ['shihuozhu','室火猪','北方玄武七宿之六，室宿。','玄武'],
  ['bishuiyu','壁水㺄','北方玄武七宿之七，壁宿。','玄武'],
  ['kuimulang','奎木狼','西方白虎七宿之首，奎宿。','白虎'],
  ['loujin_gou','娄金狗','西方白虎七宿之二，娄宿。','白虎'],
  ['weitu_zhi','胃土雉','西方白虎七宿之三，胃宿。','白虎'],
  ['maoriji','昴日鸡','西方白虎七宿之四，昴宿。','白虎'],
  ['biyue_wu','毕月乌','西方白虎七宿之五，毕宿。','白虎'],
  ['zihuohou','觜火猴','西方白虎七宿之六，觜宿。','白虎'],
  ['shenshuiyuan','参水猿','西方白虎七宿之七，参宿。','白虎'],
  ['jing_mu_an','井木犴','南方朱雀七宿之首，井宿。','朱雀'],
  ['guijinyang','鬼金羊','南方朱雀七宿之二，鬼宿。','朱雀'],
  ['liutu_zhang','柳土獐','南方朱雀七宿之三，柳宿。','朱雀'],
  ['xingri_ma','星日马','南方朱雀七宿之四，星宿。','朱雀'],
  ['zhangyuelu','张月鹿','南方朱雀七宿之五，张宿。','朱雀'],
  ['yihuoshe','翼火蛇','南方朱雀七宿之六，翼宿。','朱雀'],
  ['zhenshuiyin','轸水蚓','南方朱雀七宿之七，轸宿。','朱雀'],
];
const XIANG = { '青龙': 'qinglong', '白虎': 'baihu', '朱雀': 'zhuque', '玄武': 'xuanwu' };
xu.forEach(([id, name, d, xiang]) => {
  N(id, name, 'daojiao', 2, `${xiang}七宿之一（${name.replace(/宿.*/,'')}），道教护法星君。`, [], 'god');
  Es.push({ source: XIANG[xiang], target: id, type: 'sovereign', desc: `${xiang}统辖${name}。` });
});

// —— 九曜星君 ——
const jiuyao = [
  ['ry_taiyang','太阳星君','日曜，太阳之神。'],
  ['ry_taiyin','太阴星君','月曜，太阴之神。'],
  ['ry_jinxing','金星','金曜，太白。'],
  ['ry_muxing','木星','岁星，主福寿。'],
  ['ry_shuixing','水星','辰星。'],
  ['ry_huoxing','火星','荧惑，火神。'],
  ['ry_tuxing','土星','镇星，土德。'],
  ['ry_luohou','罗睺星君','隐曜之首，蚀星。'],
  ['ry_jidu','计都星君','隐曜之二，蚀星。'],
];
jiuyao.forEach(([id, name, d]) => {
  N(id, name, 'daojiao', 2, `${d}（九曜星君之一，道教星斗）。`, [], 'god');
  Es.push({ source: 'ziwei', target: id, type: 'sovereign', desc: `${name}为紫微大帝统辖之曜。` });
});

// —— 龙生九子 ——
const jiuzi = [
  ['qiuniu','囚牛','轩琴瑟之上，好音乐。'],
  ['yazi','睚眦','好斗，刀柄吞口。'],
  ['chaofeng','嘲风','好登高望远，殿脊走兽。'],
  ['pulao','蒲牢','好鸣，钟纽。'],
  ['suanni','狻猊','好坐，佛座蹲狮。'],
  ['bixi','赑屃','力大负重，驮碑。'],
  ['bian','狴犴','好讼，狱门。'],
  ['fuxi2','负屃','好文，碑额蟠龙。'],
  ['chiwen','螭吻','好吞火，殿脊兽头。'],
];
jiuzi.forEach(([id, name, d]) => {
  N(id, name, 'tianting', 4, `${d}（龙生九子之一，《升庵外集》）。`, [], 'yao');
  Es.push({ source: 'qinglong', target: id, type: 'blood', desc: `${name}为龙所生九子之一。` });
});

// —— 十二生肖（地支生肖神）——
const shengxiao = [
  ['shu_zi','子鼠神','地支子，鼠。'],['niu_chou','丑牛神','地支丑，牛。'],['hu_yin','寅虎神','地支寅，虎。'],
  ['tu_mao','卯兔神','地支卯，兔。'],['long_chen','辰龙神','地支辰，龙。'],['she_si','巳蛇神','地支巳，蛇。'],
  ['ma_wu','午马神','地支午，马。'],['yang_wei','未羊神','地支未，羊。'],['hou_shen','申猴神','地支申，猴。'],
  ['ji_you','酉鸡神','地支酉，鸡。'],['gou_xu','戌狗神','地支戌，狗。'],['zhu_hai','亥猪神','地支亥，猪。'],
];
shengxiao.forEach(([id, name, d]) => {
  N(id, name, 'tianting', 4, `${d}（十二生肖神，道教值年神）。`, [], 'yao');
  Es.push({ source: 'taiyi_zhuishen', target: id, type: 'subordinate', desc: `${name}为值年太岁所辖生肖神。` });
});

// —— 六丁六甲 ——
const lddj = [
  ['dingmao','丁卯神','六丁之一，阴神。'],['dingchou','丁丑神','六丁之一。'],['dinghai','丁亥神','六丁之一。'],
  ['dingyou','丁酉神','六丁之一。'],['dingwei','丁未神','六丁之一。'],['dingsi','丁巳神','六丁之一。'],
  ['jiazid','甲子神','六甲之一，阳神，值符。'],['jiaxu','甲戌神','六甲之一。'],['jiashen','甲申神','六甲之一。'],
  ['jiawu','甲午神','六甲之一。'],['jiachen','甲辰神','六甲之一。'],['jiayin','甲寅神','六甲之一。'],
];
lddj.forEach(([id, name, d]) => {
  N(id, name, 'daojiao', 3, `${d}（六丁六甲护法神将，《道藏》）。`, [], 'xian');
  Es.push({ source: 'leizubing', target: id, type: 'subordinate', desc: `${name}为雷部所辖护法神将。` });
});

// —— 四值功曹 ——
const sgcao = [
  ['zhinian','值年功曹','四值功曹之首，值年。'],['zhiyue','值月功曹','值月。'],
  ['zhiri','值日功曹','值日。'],['zhishi','值时功曹','值时。'],
];
sgcao.forEach(([id, name, d]) => {
  N(id, name, 'daojiao', 3, `${d}（四值功曹，天庭传奏之神）。`, [], 'xian');
  Es.push({ source: 'yuhuang', target: id, type: 'subordinate', desc: `${name}为玉帝传奏功曹。` });
});

// —— 五方揭谛（《心经》五揭谛）——
const jiedi = [
  ['jd_jintou','金头揭谛','五方揭谛，护法。'],['jd_yintou','银头揭谛','五方揭谛。'],
  ['jd_boluo','波罗揭谛','五方揭谛。'],['jd_boluo_seng','波罗僧揭谛','五方揭谛。'],['jd_mohe','摩诃揭谛','五方揭谛。'],
];
jiedi.forEach(([id, name, d]) => {
  N(id, name, 'fojiao', 3, `${d}（《心经》五揭谛，护法神）。`, [], 'god');
  Es.push({ source: 'rulai', target: id, type: 'subordinate', desc: `${name}为如来护法揭谛。` });
});

// —— 三十六天罡星 ——
const tiangang = ['天魁','天罡','天机','天闲','天勇','天雄','天猛','天威','天英','天贵','天富','天满','天孤','天伤','天立','天捷','天暗','天佑','天空','天速','天异','天杀','天微','天究','天退','天寿','天剑','天平','天罪','天损','天败','天牢','天慧','天暴','天哭','天巧'];
tiangang.forEach((name, i) => {
  const id = 'tg_' + i;
  N(id, name + '星', 'daojiao', 3, `三十六天罡星之${name}（道教斗部星神，参见《水浒》星号）。`, [], 'xian');
  Es.push({ source: 'ziwei', target: id, type: 'subordinate', desc: `${name}星为紫微斗部所辖天罡。` });
});

// —— 七十二地煞星 ——
const disha = ['地魁','地煞','地勇','地杰','地雄','地威','地英','地奇','地猛','地文','地正','地辟','地阖','地强','地暗','地辅','地会','地佐','地佑','地灵','地兽','地微','地慧','地暴','地默','地猖','地狂','地飞','地走','地巧','地明','地进','地退','地满','地遂','地周','地隐','地异','地理','地俊','地乐','地捷','地速','地镇','地羁','地魔','地妖','地幽','地伏','地僻','地空','地孤','地全','地短','地角','地囚','地藏','地平','地损','地奴','地察','地恶','地魂','地数','地阴','地刑','地壮','地劣','地健','地耗','地贼','地狗'];
disha.forEach((name, i) => {
  const id = 'ds_' + i;
  N(id, name + '星', 'daojiao', 4, `七十二地煞星之${name}（道教斗部地煞，参见《水浒》星号）。`, [], 'xian');
  Es.push({ source: 'ziwei', target: id, type: 'subordinate', desc: `${name}星为紫微斗部所辖地煞。` });
});

// —— 星斗归属（二十八宿主星归属四御/北斗）——
E('ziwei', 'jiaomujiao', 'sovereign', '二十八宿隶北极紫微大帝（道教星斗）。');
E('doum', 'jiaomujiao', 'origin', '斗姆为众星之母，二十八宿亦其支属。');
E('doum', 'ziwei', 'kin', '斗姆与紫微并为星斗枢纽。');

export { Ns as nodes, Es as edges };