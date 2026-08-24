// ============================================================================
// 天庭 · 民间俗神 · 历史神化 —— 玉皇 · 王母 · 诸天君 · 城隍土地 · 门神 · 星辰
// 出处：道教神谱（《玉皇经》《云笈七签》）、民间信仰、历代祀典
// ============================================================================
const Ns = [];
const Es = [];
const N = (id, name, category, level, desc, aliases = [], shape) =>
  Ns.push({ id, name, category, level, desc, aliases, shape });
const E = (source, target, type, desc) => Es.push({ source, target, type, desc });

// —— 天庭高位 ——
N('yuhuang', '玉皇大帝', 'tianting', 0, '昊天金阙无上至尊自然妙有弥罗至真玉皇上帝，执掌三界（《玉皇经》）。', ['玉帝', '昊天上帝', '玄穹高上帝'], 'god');
N('wangmu_t', '王母娘娘', 'tianting', 1, '西王母，瑶池金母，掌蟠桃园，群仙之首（道教化）。', ['西王母', '金母', '瑶池金母'], 'god');
N('dongting', '东王公', 'tianting', 1, '木公，男仙之首，与西王母并称（《神异经》）。', ['木公', '东华帝君', '扶桑大帝'], 'god');
N('xuannv', '九天玄女', 'tianting', 2, '黄帝之师，传兵法符咒，助黄帝破蚩尤（《龙鱼河图》）。', ['玄女', '九天娘娘'], 'xian');
N('taiyi_zhuishen', '太岁星君', 'tianting', 2, '六十甲子神，轮值岁星，主吉凶（道教太岁信仰）。', ['值年太岁', '岁神'], 'god');
N('zhizhu_yuejing', '月老', 'tianting', 2, '月下老人，红绳系足，主婚姻（《续幽怪录》）。', ['月下老人', '姻缘神'], 'xian');
N('jiu_yao_taiyin', '太阴星君', 'tianting', 2, '月亮之神，嫦娥所居（道教星辰神）。', ['月神', '太阴'], 'god');
N('jiu_yao_taiyang', '太阳星君', 'tianting', 2, '太阳之神，日精（道教星辰神）。', ['日神', '太阳'], 'god');
N('jiu_yao_jin', '太白星君', 'tianting', 2, '金星之神，主杀伐（道教星辰神）。', ['金星', '长庚'], 'god');
N('kui_xing', '魁星', 'tianting', 2, '奎宿之神，主文运魁首，脚踢斗（民间科举神）。', ['奎星', '文魁'], 'god');
N('zao_shen', '灶神', 'tianting', 2, '灶王爷，一户之主，腊月上天言事（《礼记》五祀）。', ['灶君', '灶王爷', '东厨司命'], 'god');
N('men_shen_qin', '秦琼', 'tianting', 3, '唐将，与尉迟恭并为门神（民间门神）。', ['秦叔宝'], 'ren');
N('men_shen_yu', '尉迟恭', 'tianting', 3, '唐将，与秦琼并为门神。', ['敬德', '门神'], 'ren');
N('chenghuang', '城隍', 'tianting', 2, '城池守护神，司一方幽冥（城隍信仰）。', ['城隍爷', '城隍神'], 'god');
N('tudi', '土地神', 'tianting', 3, '土地公公，一方土地，乡里庇护（《周礼》社神）。', ['土地公', '社神', '福德正神'], 'god');
N('shanshen', '山神', 'tianting', 3, '山川之灵，司一方山岳。', [], 'god');
N('heshen_g', '河神', 'tianting', 3, '大川之灵，主水。', [], 'god');
N('zhongkui', '钟馗', 'tianting', 2, '捉鬼天师，唐终南进士，逐鬼驱邪（《梦溪笔谈》）。', ['钟馗天师', '赐福镇宅圣君'], 'ren');
N('mengpo', '孟婆', 'tianting', 3, '奈何桥边，熬汤忘前尘（民间幽冥信仰）。', ['孟婆神'], 'god');
N('heibai', '黑白无常', 'tianting', 3, '勾魂使者，黑无常范无救、白无常谢必安（民间幽冥信仰）。', ['无常', '谢必安', '范无救'], 'god');
N('niulang', '牛郎', 'tianting', 5, '织女之夫，七夕鹊桥会（民间传说）。', ['牵牛'], 'ren');
N('zhinv', '织女', 'tianting', 3, '天帝之女（一说王母孙女），巧手织云锦，与牛郎隔河（《荆楚岁时记》）。', ['天孙', '织女星'], 'xian');
N('queshen', '喜鹊', 'tianting', 4, '七夕为牛郎织女搭桥（民间）。', ['鹊桥'], 'yao');
N('hehe', '和合二仙', 'tianting', 3, '寒山、拾得二僧，后为和合神（民间）。', ['寒山', '拾得', '万回哥哥'], 'xian');
N('panguan', '崔判官', 'tianting', 3, '崔珏，幽冥判官，掌生死簿（民间阴间信仰，《西游记》）。', ['崔珏', '判官'], 'god');
N('jinguang', '金光圣母', 'fengshen', 3, '截教弟子，封雷部闪电之母（封神演义哈雷部）。', ['闪电娘娘'], 'xian');

// —— 关系 ——
E('yuhuang', 'wangmu_t', 'spouse', '玉皇与王母并坐大罗天（民间并祀）。');
E('yuhuang', 'taibai', 'sovereign', '太白金星为玉帝近臣（《西游记》）。');
E('yuhuang', 'tuota', 'sovereign', '托塔天王为玉帝先锋。');
E('yuhuang', 'erlang', 'kin', '二郎神为玉帝外甥（《西游记》）。');
E('yuhuang', 'leigong', 'sovereign', '雷公、电母隶天庭。');
E('yuhuang', 'dianmu', 'sovereign', '电母隶天庭。');
E('wangmu_t', 'zhinv', 'kin', '织女为王母之女（一说孙女）。');
E('zhinv', 'niulang', 'spouse', '牛郎织女为夫妻（民间传说）。');
E('queshen', 'niulang', 'ally', '喜鹊为牛郎织女搭桥。');
E('queshen', 'zhinv', 'ally', '鹊桥助织女。');
E('dongting', 'wangmu_t', 'spouse', '东王公与西王母并称，男女仙之首（道教）。');
E('xuannv', 'huangdi', 'master', '九天玄女为黄帝之师，传兵符（《龙鱼河图》）。');
E('men_shen_qin', 'yuhuang', 'subordinate', '门神奉祀于人间，隶天庭。');
E('men_shen_yu', 'men_shen_qin', 'ally', '秦琼、尉迟恭并守门户。');
E('chenghuang', 'tudi', 'sovereign', '城隍统辖一方土地。');
E('chenghuang', 'dongting', 'origin', '城隍为东岳大帝属下（冥司）。');
E('tudi', 'shanshen', 'ally', '土地、山神并司地方。');
E('zhongkui', 'yuhuang', 'subordinate', '钟馗受封赐福镇宅（民间）。');
E('mengpo', 'zhuan_lun', 'subordinate', '孟婆于奈何桥，隶幽冥轮回。');
E('heibai', 'dizangwang', 'subordinate', '黑白无常隶幽冥。');
E('heibai', 'panguan', 'ally', '无常、判官同司阴司勾摄。');
E('panguan', 'dizangwang', 'subordinate', '判官掌生死簿，隶幽冥。');
E('mengpo', 'dizangwang', 'subordinate', '冥河、奈何隶地藏幽冥。');
E('taiyi_zhuishen', 'yuhuang', 'sovereign', '太岁隶天庭，轮值。');
E('yuegong', 'jiu_yao_taiyin', 'incarnation', '太阴星君即月宫之主。');
E('jiu_yao_jin', 'taibai', 'incarnation', '太白星君与太白金星同一金星神。');
E('kui_xing', 'wenchang', 'subordinate', '魁星主文运，隶文昌。');
E('hehe', 'wenchang', 'ally', '和合（寒山拾得）亦为民间神。');
E('zao_shen', 'yuhuang', 'sovereign', '灶神上天述职，隶天庭。');
E('pangu', 'yuhuang', 'origin', '道教神谱中玉帝为三界主，承盘古开天之后。');

export { Ns as nodes, Es as edges };