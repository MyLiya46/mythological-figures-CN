// ============================================================================
// 道教神系 —— 三清四御 · 星斗 · 八仙 · 五岳四海 · 天师道
// 出处：道藏（《云笈七签》《无上秘要》诸经）、葛洪《神仙传》、《列仙传》
// ============================================================================
const Ns = [];
const Es = [];
const N = (id, name, category, level, desc, aliases = [], shape) =>
  Ns.push({ id, name, category, level, desc, aliases, shape });
const E = (source, target, type, desc) => Es.push({ source, target, type, desc });

// —— 四御 ——
N('ziwei', '紫微北极大帝', 'daojiao', 1, '中天北极紫微大帝，四御之一，执掌天经地纬，统率三界星神（《道藏》）。', ['紫微大帝', '北极星君'], 'god');
N('gouchen', '勾陈上宫天皇大帝', 'daojiao', 1, '四御之一，协掌南北极与天地人三才（《道藏》）。', ['勾陈大帝', '天皇大帝', '太极天皇'], 'god');
N('nantian', '南极长生大帝', 'daojiao', 1, '四御之一，主寿考，即南极仙翁之本（《道藏》）。', ['南极仙翁', '寿星', '老人星'], 'god');
N('houtu', '后土皇地祇', 'daojiao', 1, '四御之一，大地之母，主阴阳生育与山川（《道藏》）。', ['后土娘娘', '土皇地祇'], 'god');

// —— 三官、文昌、真武 ——
N('tianguan', '天官大帝', 'daojiao', 2, '上元一品赐福天官，紫微大帝，三官大帝之一，主赐福（《道藏》）。', ['上元天官', '赐福天官'], 'god');
N('diguan', '地官大帝', 'daojiao', 2, '中元二品赦罪地官，主赦罪（《道藏》）。', ['中元地官', '赦罪地官'], 'god');
N('shuiguan', '水官大帝', 'daojiao', 2, '下元三品解厄水官，主解厄（《道藏》）。', ['下元水官', '解厄水官'], 'god');
N('wenchang', '文昌帝君', 'daojiao', 2, '梓潼帝君张亚子，主文章科名（《文昌帝君阴骘文》）。', ['梓潼帝君', '文曲星君'], 'god');
N('zhenwu', '真武大帝', 'daojiao', 1, '北方玄武之神，镇守武当，荡魔天尊（《道藏》并道教传说）。', ['玄武', '荡魔天尊', '北方真武'], 'god');
N('doum', '斗姆元君', 'daojiao', 1, '众星之母，生北斗诸星，金灵圣母所化（道教星斗信仰，参见封神）。', ['斗母', '圆明道姆天尊'], 'god');
N('leizubing', '九天应元雷声普化天尊', 'daojiao', 2, '雷部主宰，统三十六雷将（《道藏·雷部》）。', ['雷祖', '雷声普化天尊'], 'god');
N('taishangzhen', '太乙救苦天尊', 'daojiao', 2, '东极青华大帝，寻声救苦，度亡魂（《道藏》）。', ['东极青华大帝', '太一救苦天尊', '青玄上帝'], 'god');
N('shou_xing', '南极寿星', 'daojiao', 2, '寿星老人，司人间寿算（参见南极长生大帝）。', ['南极仙翁', '寿星'], 'xian');
N('meishan', '福禄寿三星', 'daojiao', 3, '福星、禄星、寿星三神并祀，主福禄寿（民间道教信仰）。', ['福禄寿'], 'xian');

// —— 财神系 ——
N('caizhao', '赵公明', 'daojiao', 2, '金龙如意正一龙虎玄坛真君，四大元帅之一，武财神（参见封神）。', ['黑虎玄坛', '正一玄坛真君'], 'god');
N('guanyu', '关羽', 'tianting', 2, '三国蜀汉名将，后封关圣帝君、武财神、伏魔大帝（历史神化）。', ['关公', '关圣帝君', '关王', '武圣'], 'ren');
N('fanli', '范蠡', 'tianting', 5, '越国大夫，功成身退，后世祀为文财神（《史记》）。', ['陶朱公'], 'ren');
N('wulu_caizhen', '五路财神', 'daojiao', 3, '东西南北中五路财神，民间迎财神（道教财神信仰）。', ['五路财神'], 'xian');
N('biaogan', '利市仙官', 'daojiao', 3, '赵公明之下，掌管市场利市（道教财神系统）。', [], 'xian');
N('zhaobao', '招宝天尊', 'daojiao', 3, '赵公明属下，招纳财宝（道教财神系统）。', ['纳珍天尊'], 'xian');

// —— 八仙 ——
N('tieguaili', '铁拐李', 'daojiao', 3, '八仙之首，名李玄，跛足拄铁拐，背葫芦（《列仙全传》）。', ['李铁拐', '李凝阳'], 'xian');
N('hanzhong', '汉钟离', 'daojiao', 3, '八仙之一，钟离权，传吕洞宾（《列仙全传》）。', ['钟离权', '正阳祖师'], 'xian');
N('lvdongbin', '吕洞宾', 'daojiao', 3, '八仙之一，纯阳子，被奉为纯阳帝君，全真五祖之一（《列仙传》）。', ['纯阳子', '吕祖', '纯阳帝君'], 'xian');
N('zhangguo', '张果老', 'daojiao', 3, '八仙之一，倒骑驴，中条山道士（《明皇杂录》）。', ['张果', '通玄先生'], 'xian');
N('lancaihe', '蓝采和', 'daojiao', 3, '八仙之一，踏歌市井（《续仙传》）。', [], 'xian');
N('hexiangu', '何仙姑', 'daojiao', 3, '八仙之一，女仙，采莲（《列仙全传》）。', ['何琼'], 'xian');
N('hanxiangzi', '韩湘子', 'daojiao', 3, '八仙之一，韩愈族侄（《列仙全传》）。', ['韩湘'], 'xian');
N('caoguojiu', '曹国舅', 'daojiao', 3, '八仙之一，宋仁宗曹皇后之弟曹佾（《列仙全传》）。', ['曹佾'], 'xian');
N('baxian_zu', '八仙过海', 'daojiao', 3, '八仙各显神通渡海故事（《东游记》）。', [], 'xian');

// —— 五岳大帝 ——
N('dongyue', '东岳大帝', 'daojiao', 1, '泰山天齐仁圣大帝，司幽冥地狱，主人生死贵贱（道教五岳之说）。', ['黄飞虎', '泰山大帝', '天齐王'], 'god');
N('xiyue', '西岳大帝', 'daojiao', 2, '华山金天愿圣大帝（道教五岳）。', ['华山神'], 'god');
N('nanyue', '南岳大帝', 'daojiao', 2, '衡山司天昭圣大帝（道教五岳）。', ['衡山神'], 'god');
N('beiyue', '北岳大帝', 'daojiao', 2, '恒山安天玄圣大帝（道教五岳）。', ['恒山神'], 'god');
N('zhongyue', '中岳大帝', 'daojiao', 2, '嵩山中天崇圣大帝（道教五岳）。', ['嵩山神'], 'god');

// —— 四海龙王 & 四渎 ——
N('donghai', '东海龙王', 'daojiao', 2, '东海敖广，司东海风雨（《西游记》道教龙神）。', ['敖广', '东海敖广'], 'god');
N('nanhai', '南海龙王', 'daojiao', 2, '南海敖钦。', ['敖钦'], 'god');
N('xihai', '西海龙王', 'daojiao', 2, '西海敖闰。', ['敖闰'], 'god');
N('beihai', '北海龙王', 'daojiao', 2, '北海敖顺。', ['敖顺'], 'god');
N('sidu_jiang', '江渎神', 'daojiao', 2, '长江水神（四渎之一，道教江河神）。', ['长江之神'], 'god');
N('sidu_he', '河渎神', 'daojiao', 2, '黄河水神（四渎之一）。', ['黄河之神'], 'god');
N('sidu_huai', '淮渎神', 'daojiao', 2, '淮河水神（四渎之一）。', [], 'god');
N('sidu_ji', '济渎神', 'daojiao', 2, '济水水神（四渎之一）。', [], 'god');

// —— 北斗七星 & 南斗六星 ——
const bd = [['tianshu','贪狼星','天枢，北斗一，主阳德（《道藏》北斗经）。'],['tianxuan','巨门星','天璇，北斗二。'],['tianji','禄存星','天玑，北斗三。'],['tianquan','文曲星','天权，北斗四，主文运。'],['yuheng','廉贞星','玉衡，北斗五。'],['kaiyang','武曲星','开阳，北斗六，主武功。'],['yaoguang','破军星','摇光，北斗七。']];
bd.forEach(([id, name, d]) => N(id, name, 'daojiao', 2, d, [name.replace(/星$/,'')], 'god'));
const nd = [['siming','司命星','南斗一，主寿夭。'],['simlu','司禄星','南斗二，主禄位。'],['yanshou','延寿星','南斗三。'],['yisuan','益算星','南斗四。'],['due','度厄星','南斗五。'],['shangsheng','上生星','南斗六。']];
nd.forEach(([id, name, d]) => N(id, name, 'daojiao', 2, d, [], 'god'));

// —— 天师道系 & 真人 ——
N('zhangdaoling', '张道陵', 'daojiao', 2, '正一道天师，东汉创五斗米道，龙虎山（《神仙传》）。', ['张天师', '正一天师'], 'xian');
N('gehong', '葛洪', 'daojiao', 3, '东晋道士，抱朴子，炼丹术集大成（《晋书》《抱朴子》）。', ['抱朴子'], 'xian');
N('taohongjing', '陶弘景', 'daojiao', 3, '南朝梁道士，山中宰相，上清派（《梁书》）。', ['华阳隐居'], 'xian');
N('wangchongyang', '王重阳', 'daojiao', 2, '全真道祖师，北五祖之一（《元史·释老志》）。', ['王嘉'], 'xian');
N('qiuchuji', '丘处机', 'daojiao', 2, '全真七子之一，龙门派祖师，西行见成吉思汗（《长春真人西游记》）。', ['长春子', '丘真人'], 'xian');
N('zhangsanfeng', '张三丰', 'daojiao', 2, '元明道士，武当派，太极（《明史》）。', ['三丰', '张君宝'], 'xian');
N('chengtuan', '陈抟', 'daojiao', 3, '宋初道士，希夷先生，睡仙（《宋史》）。', ['希夷先生'], 'xian');

// —— 关系 ——
E('laojun', 'ziwei', 'sovereign', '三清为尊，四御辅佐，紫微受太清统摄（道教神谱）。');
E('ziwei', 'gouchen', 'ally', '四御并位，协理三才。');
E('ziwei', 'nantian', 'ally', '四御并位。');
E('houtu', 'ziwei', 'ally', '四御并位，皇地祇主大地。');
E('houtu', 'dongyue', 'sovereign', '东岳大帝隶于后土，主冥府。');
E('doum', 'tianshu', 'blood', '斗姆生北斗七星（道教星斗神话）。');
E('doum', 'tianxuan', 'blood', '斗姆生北斗。');
E('doum', 'tianji', 'blood', '斗姆生北斗。');
E('doum', 'tianquan', 'blood', '斗姆生北斗。');
E('doum', 'yuheng', 'blood', '斗姆生北斗。');
E('doum', 'kaiyang', 'blood', '斗姆生北斗。');
E('doum', 'yaoguang', 'blood', '斗姆生北斗。');
E('ziwei', 'tianshu', 'sovereign', '北斗七星隶于北极紫微大帝。');
E('ziwei', 'tianxuan', 'sovereign', '北斗隶紫微。');
E('ziwei', 'tianji', 'sovereign', '北斗隶紫微。');
E('ziwei', 'tianquan', 'sovereign', '北斗隶紫微。');
E('ziwei', 'yuheng', 'sovereign', '北斗隶紫微。');
E('ziwei', 'kaiyang', 'sovereign', '北斗隶紫微。');
E('ziwei', 'yaoguang', 'sovereign', '北斗隶紫微。');
E('siming', 'nantian', 'kin', '南斗掌生，南极主寿，并司寿算（道教）。');
E('wenchang', 'tianquan', 'origin', '文昌帝君与文曲星相系，主文运。');
E('zhenwu', 'xuanwu', 'incarnation', '真武大帝即玄武之神，龟蛇合体。');
E('leizubing', 'leigong', 'sovereign', '雷声普化天尊统雷公（雷部）。');
E('leizubing', 'dianmu', 'sovereign', '雷部统电母。');
E('caizhao', 'tianguan', 'sovereign', '赵公明为天官属下财神。');
E('caizhao', 'zhaobao', 'subordinate', '招宝天尊为赵公明属下。');
E('caizhao', 'biaogan', 'subordinate', '利市仙官为赵公明属下。');
E('guanyu', 'zhao_gong', 'ally', '文武财神并称（关羽与赵公明）。');
E('guanyu', 'tianguan', 'master', '关羽封帝受天官之封。');
E('tieguaili', 'hanzhong', 'kin', '八仙同列（钟离权与铁拐李）。');
E('hanzhong', 'lvdongbin', 'master', '钟离权度吕洞宾。');
E('lvdongbin', 'tianguan', 'subordinate', '吕洞宾为八仙之一，受道教神谱。');
E('zhangdaoling', 'laojun', 'master', '张道陵受太上老君所传（正一派传说）。');
E('zhangdaoling', 'tieguaili', 'origin', '天师道与八仙同出道教。');
E('gehong', 'zhangdaoling', 'subordinate', '葛洪继承天师道术。');
E('taohongjing', 'gehong', 'master', '陶弘景承葛洪茅山派。');
E('wangchongyang', 'lvdongbin', 'master', '全真道奉吕洞宾为祖师。');
E('qiuchuji', 'wangchongyang', 'master', '丘处机为王重阳弟子。');
E('zhangsanfeng', 'zhenwu', 'master', '张三丰于武当山奉真武，创立武当派。');
E('donghai', 'dongyue', 'sovereign', '四海龙王司水，隶天庭（道教水府）。');
E('donghai', 'nanhai', 'kin', '四海龙王兄弟。');
E('nanhai', 'xihai', 'kin', '四海龙王兄弟。');
E('xihai', 'beihai', 'kin', '四海龙王兄弟。');
E('donghai', 'bailong', 'blood', '东海龙王敖广有诸子（小白龙为西海敖闰之子）。');
E('xihai', 'bailong', 'blood', '白龙马为西海龙王三太子。');
E('taishangzhen', 'jiuling', 'mount', '九灵元圣为太乙救苦天尊坐骑。');
E('shou_xing', 'bailu', 'mount', '白鹿精为南极寿星坐骑。');
E('meishan', 'shou_xing', 'kin', '福禄寿三星中寿星即南极寿星。');
E('huangdi', 'zhangsanfeng', 'origin', '道教尊黄帝为始祖（道教史观）。');

export { Ns as nodes, Es as edges };