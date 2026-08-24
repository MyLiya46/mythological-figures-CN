// ============================================================================
// data-seq.js —— 程序化生成「次第相承」序列边（全部有典籍依据）
// 干支循环、二十八宿宿序、生肖序、诸天层序、十殿殿序、北斗/南斗星序、
// 天罡地煞星号序（《水浒传》）、五方五帝、五帝配五岳
// ============================================================================
export const nodes = [];
export const edges = [];

// 相邻连接生成器：sourceTarget 列表 → 相邻 sequence 边；closed=true 最后连回首
function seqChain(list, closed, label, descFn) {
  for (let i = 0; i < list.length - 1; i++) {
    edges.push({ source: list[i], target: list[i + 1], type: 'sequence', desc: descFn(list[i + 1], i + 1) });
  }
  if (closed && list.length > 2) {
    edges.push({ source: list[list.length - 1], target: list[0], type: 'sequence', desc: `${label}环序，首尾相续。` });
  }
}

// 1) 二十八宿宿序（角→轸，东方七宿…南方七宿顺序）
const XU = ['jiaomujiao','kangjinlong','dituhe','fangritu','xinyuehu','weihuohu','jishuibao',
  'doumu_xie','niujinniu','nvtu_fu','xuri_shu','weiyueyan','shihuozhu','bishuiyu',
  'kuimulang','loujin_gou','weitu_zhi','maoriji','biyue_wu','zihuohou','shenshuiyuan',
  'jing_mu_an','guijinyang','liutu_zhang','xingri_ma','zhangyuelu','yihuoshe','zhenshuiyin'];
seqChain(XU, false, '二十八宿', (name) => `二十八宿依周天次序列位（《淮南子·天文训》《史记·天官书》）。`);
// 二十八宿隶紫微大帝
XU.forEach(id => edges.push({ source: 'ziwei', target: id, type: 'sovereign', desc: '二十八宿隶北极紫微大帝（道教星斗体系）。' }));

// 2) 六十甲子干支循环（甲子→癸亥，天干地支相配）
const SJ = Array.from({ length: 60 }, (_, i) => 'sj_' + i);
seqChain(SJ, true, '六十甲子', (n, i) => `六十甲子依干支相配次序流转（天干地支纪年）。`);

// 3) 十二生肖循环
const SX = ['shu_zi','niu_chou','hu_yin','tu_mao','long_chen','she_si','ma_wu','yang_wei','hou_shen','ji_you','gou_xu','zhu_hai'];
seqChain(SX, true, '十二生肖', (n) => `十二地支生肖相序（子鼠…亥猪）。`);

// 4) 三十六天层序（欲界→大罗，居上者统摄居下者）
const TT = Array.from({ length: 36 }, (_, i) => 'tt_' + i);
for (let i = TT.length - 1; i > 0; i--) {
  edges.push({ source: TT[i], target: TT[i - 1], type: 'sovereign', desc: `道教诸天层级相摄，上位统下位（《云笈七签·天地部》）。` });
}

// 5) 十殿阎王殿序（一殿→十殿）
const DIAN = ['qin_guang','chu_jiang','song_di','wu_guan','yanluo','bian_cheng','taishan','du_shi','ping_deng','zhuan_lun'];
seqChain(DIAN, false, '十殿', (n) => `冥司十殿依殿序相承（民间《玉历宝钞》十王信仰）。`);

// 6) 五方五帝（东南中西北）
const WD = ['wd_qing','wd_chi','wd_huang','wd_bai','wd_hei'];
seqChain(WD, true, '五方五帝', (n) => `五方上帝依方位环列（纬书《春秋文耀钩》）。`);
// 五帝配五岳
const WD_YUE = { wd_qing: 'dongyue', wd_chi: 'nanyue', wd_huang: 'zhongyue', wd_bai: 'xiyue', wd_hei: 'beiyue' };
for (const [di, yue] of Object.entries(WD_YUE)) {
  edges.push({ source: di, target: yue, type: 'govern', desc: '五方上帝各领其岳（纬书·五帝配五岳）。' });
}

// 7) 北斗七星（斗柄环序）
const BD = ['tianshu','tianxuan','tianji','tianquan','yuheng','kaiyang','yaoguang'];
seqChain(BD, true, '北斗七星', (n) => `北斗七星依斗柄次序排列（《史记·天官书》）。`);

// 8) 二十诸天（环序，皆天部护法）
const ZT = ['datian','di_shitian','biancai','gongde','jieri','yuegong','yanmo_tian','zhi_shui','moli_tian','jin_tian','gailuocha','jiangu','luocha','xunxiang','xing_xiu','ziwei_tian'];
seqChain(ZT, true, '二十诸天', (n) => `二十诸天并列护法（《金光明经》诸天）。`);

// 9) 天龙八部（环序）
const LB = ['tianbu','longbu','yecha','gandapo','asura','garuda','jinnn','mohouluo'];
seqChain(LB, true, '天龙八部', (n) => `天龙八部并列（《法华经》八部众）。`);

// 10) 六丁六甲（十二神将环序）
const LD = ['dingmao','dingchou','dinghai','dingyou','dingwei','dingsi','jiazid','jiaxu','jiashen','jiawu','jiachen','jiayin'];
seqChain(LD, true, '六丁六甲', (n) => `六丁六甲护法神将并列（《道藏》）。`);

// 11) 四值功曹（年→时）
seqChain(['zhinian','zhiyue','zhiri','zhishi'], false, '四值功曹', (n) => `四值功曹依年月日时相承（道教功曹）。`);

// 12) 五方揭谛
seqChain(['jd_jintou','jd_yintou','jd_boluo','jd_boluo_seng','jd_mohe'], false, '五方揭谛', (n) => `五方揭谛并列（《心经》）。`);

// 13) 天罡三十六星序（依《水浒传》星号次序）
const TG = Array.from({ length: 36 }, (_, i) => 'tg_' + i);
seqChain(TG, false, '三十六天罡', (n) => `天罡星依星号次序（《水浒传》所载道教斗部星号）。`);

// 14) 地煞七十二星序（依《水浒传》星号次序）
const DS = Array.from({ length: 72 }, (_, i) => 'ds_' + i);
seqChain(DS, false, '七十二地煞', (n) => `地煞星依星号次序（《水浒传》所载道教斗部星号）。`);