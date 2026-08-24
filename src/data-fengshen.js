// ============================================================================
// 封神演义 —— 阐教 · 截教 · 周与商 · 封神榜群星
// 出处：许仲琳《封神演义》
// ============================================================================
const Ns = [];
const Es = [];
const N = (id, name, category, level, desc, aliases = [], shape) =>
  Ns.push({ id, name, category, level, desc, aliases, shape });
const E = (source, target, type, desc) => Es.push({ source, target, type, desc });

// —— 圣人·掌教师尊 ——
N('hongjun', '鸿钧老祖', 'fengshen', 0, '封神世界之师，分宝岩分宝，传道三友（《封神演义》第84回）。', ['鸿钧道人'], 'creator');
N('laojun', '太上老君', 'daojiao', 0, '三清之首太清，老子之号，若去若来，化胡为佛（《封神》并《道德经》传说）。', ['老子', '李耳', '太清道德天尊', '太上道祖'], 'creator');
N('yuanshi', '元始天尊', 'daojiao', 0, '三清之一，玉清，阐教教主，掌封神榜（《封神演义》）。', ['玉清元始天尊'], 'creator');
N('tongtian', '通天教主', 'daojiao', 0, '三清之一，上清灵宝，截教教主，摆诛仙、万仙阵（《封神演义》）。', ['灵宝天尊', '上清'], 'creator');
N('nu_dad', '接引道人', 'fojiao', 0, '西方教教主，接引封神有缘之人（《封神演义》）。', ['接引', '西方教主'], 'god');
N('zhunti', '准提道人', 'fojiao', 0, '西方教副教主，收孔宣、降马元等（《封神演义》）。', ['准提'], 'god');

// —— 阐教十二金仙（道教北五祖一系另有归类，封神从阐教）——
const jx = [
  ['guangcheng', '广成子', '黄帝之师，居崆峒山，授轩辕、授赤精子铁板。'],
  ['chijing', '赤精子', '太华山修真，曾助文王脱难。'],
  ['huanglong', '黄龙真人', '黄龙山修真，五路神之一说。'],
  ['julongss', '俱留孙', '夹龙山飞云洞，土行孙之师。'],
  ['lingbao2', '灵宝大法师', '玄都大法师同门，助周伐纣。'],
  ['wen_shu', '文殊广法天尊', '五台山修真，后成文殊菩萨。'],
  ['pu_xian', '普贤真人', '九宫山白鹤洞，后成普贤菩萨。'],
  ['cihang', '慈航道人', '普陀山落伽洞，后成观世音菩萨。'],
  ['yuding', '玉鼎真人', '玉泉山金霞洞，杨戬之师。'],
  ['daoxing', '道行天尊', '金庭山玉屋洞。'],
  ['qingxu', '清虚道德真君', '青峰山紫阳洞，黄天化之师、杨任之师。'],
  ['taiyi', '太乙真人', '乾元山金光洞，哪吒之师。'],
];
jx.forEach(([id, name, desc]) => N(id, name, 'daojiao', 2, desc + '（《封神演义》十二金仙）。', [], 'xian'));

// —— 截教弟子·群仙 ——
N('zhao_gong', '赵公明', 'daojiao', 2, '罗浮山炼气士，跨虎执鞭，助商伐周，后封金龙如意正一龙虎玄坛真君（财神）。', ['黑虎玄坛', '正一玄坛真君'], 'xian');
N('sanxiao_yun', '云霄娘娘', 'fengshen', 3, '三霄娘娘之首，摆九曲黄河阵，执混元金斗。', ['云霄'], 'xian');
N('sanxiao_qiong', '琼霄娘娘', 'fengshen', 3, '三霄之一，助其姐摆阵。', ['琼霄'], 'xian');
N('sanxiao_bi', '碧霄娘娘', 'fengshen', 3, '三霄之一，持金蛟剪。', ['碧霄'], 'xian');
N('jinling', '金灵圣母', 'fengshen', 3, '截教大师姐，万仙阵为敌所伤，后封斗姆元君。', ['斗姆元君'], 'xian');
N('wu_gu', '无当圣母', 'fengshen', 3, '截教女仙，后入释为骊山老母（一说）。', ['骊山老母'], 'xian');
N('gui_ling', '龟灵圣母', 'fengshen', 3, '截教圣母，仓颉所化（一说），后为蚊道人噬。', [], 'xian');
N('huo_ling', '火灵圣母', 'fengshen', 3, '多宝道人弟子，胡雷之师，金灵圣母之徒。', [], 'xian');
N('duobao', '多宝道人', 'fengshen', 2, '截教大弟子，诛仙阵中被西方教收服，后成多宝如来（一说）。', ['多宝佛'], 'xian');
N('princip', '诛仙四剑', 'fengshen', 4, '通天教主镇教之宝，诛仙、戮仙、陷仙、绝仙四剑（封神法宝）。', [], 'yao');
N('wanxian', '万仙阵群仙', 'fengshen', 4, '截教众弟子布万仙阵，为阐教与西方教所破（《封神演义》第88回）。', [], 'yao');

// —— 周营群英 ——
N('wenzhong_wen', '姬昌', 'fengshen', 3, '西伯侯文王，演《周易》，渭水访贤（《史记》）。', ['周文王', '西伯侯'], 'ren');
N('jifa', '姬发', 'fengshen', 2, '武王，率诸侯伐纣，克商建周（《史记》）。', ['周武王'], 'ren');
N('yao_j_', '姜子牙', 'fengshen', 2, '太公望，元始天尊门下，昆仑山玉虚宫，执打神鞭、封神榜，周之谋主（《封神演义》）。', ['姜太公', '吕尚', '太公望'], 'xian');
N('shen_g', '申公豹', 'fengshen', 3, '阐教弟子，因唆使截教下山助商，遭沉北海（《封神演义》）。', [], 'xian');
N('yang_jian', '杨戬', 'fengshen', 2, '玉鼎真人弟子，二郎神，驯哮天犬，会八九玄功（〈封神演义〉）。', ['二郎神', '清源妙道真君', '显圣二郎真君'], 'god');
N('ne_zha', '哪吒', 'fengshen', 2, '太乙真人弟子，李靖第三子，斩龙闹海、剔骨还父，莲花化身（《封神演义》）。', ['哪吒三太子', '中坛元帅'], 'god');
N('li_jing', '李靖', 'fengshen', 2, '陈塘关总兵，托塔天王，后入天庭（《封神演义》）。', ['托塔天王', '托塔李靖'], 'god');
N('wei_hu', '韦护', 'fengshen', 2, '道行天尊弟子，持降魔杵，后成韦陀菩萨。', ['韦陀'], 'god');
N('lei_zhenzi', '雷震子', 'fengshen', 3, '姬昌第一百子（一作义子），翅膀风雷，云中子弟子。', [], 'xian');
N('yang_ren', '杨任', 'fengshen', 3, '清虚道德真君弟子，眼眶生手。', [], 'xian');
N('huang_tianhua', '黄天化', 'fengshen', 2, '清虚道德真君弟子，黄飞虎长子。', [], 'xian');
N('jin_zha', '金吒', 'fengshen', 3, '李靖长子，文殊广法天尊弟子。', [], 'xian');
N('mu_zha', '木吒', 'fengshen', 3, '李靖次子，普贤真人弟子，后随观音。', ['木叉'], 'xian');
N('tu_xingsun', '土行孙', 'fengshen', 3, '俱留孙弟子，地行术，配邓婵玉。', [], 'xian');
N('deng_chan', '邓婵玉', 'fengshen', 3, '邓九公之女，善五色石。', [], 'ren');
N('longxu_hu', '龙须虎', 'fengshen', 4, '姜子牙坐骑，青龙所化（《封神演义》）。', [], 'yao');

// —— 商营 ——
N('di_xin', '纣王', 'fengshen', 5, '殷商末世之君，荒淫无道，为武王所伐（《史记》《封神》）。', ['商纣', '帝辛'], 'ren');
N('da_ji', '妲己', 'fengshen', 4, '九尾狐狸精附体，惑乱商政（《封神演义》）。', ['苏妲己'], 'yao');
N('feizhong', '费仲', 'fengshen', 5, '纣之佞臣（《史记》）。', [], 'ren');
N('kun_peng', '闻仲', 'fengshen', 2, '截教金灵圣母弟子，商太师，额生天眼（《封神演义》）。', ['闻太师'], 'god');
N('mo_ye', '黄飞虎', 'fengshen', 2, '商武成王，纣杀其妻妹，遂反商归周（《封神演义》）。', ['武成王'], 'ren');
N('zhang_kui', '张奎', 'fengshen', 3, '渑池守将，善地行术，杀五岳之首。', [], 'ren');
N('kong_xuan', '孔宣', 'fengshen', 2, '孔雀大明王所化，五色神光，后被准提道人收服（《封神演义》）。', ['孔雀大明王'], 'god');
N('bi_gan', '比干', 'fengshen', 5, '商之王子，忠臣，纣剖其心（《史记》），后被封文财神。', ['文财神'], 'ren');
N('huang_feih', '姜王后', 'fengshen', 5, '纣之后，为妲己所陷，剜目而死（《封神演义》）。', [], 'ren');
N('er_hou', '鄂侯', 'fengshen', 5, '纣之忠臣，炮烙之刑。', [], 'ren');

// —— 关系 ——
E('hongjun', 'laojun', 'master', '鸿钧传道三友：老子、元始、通天（《封神演义》）。');
E('hongjun', 'yuanshi', 'master', '鸿钧传道三友，元始承其教。');
E('hongjun', 'tongtian', 'master', '鸿钧传道三友，通天承其教，立截教。');
E('yuanshi', 'yao_j_', 'master', '姜子牙拜元始天尊门下，领封神榜下山佐周。');
E('yuanshi', 'shen_g', 'master', '申公豹为元始天尊弟子。');
E('tongtian', 'duobao', 'master', '多宝道人为通天教主大弟子。');
E('tongtian', 'sanxiao_yun', 'master', '三霄娘娘为截教教主赵公明之妹（通天门下）。');
E('tongtian', 'zhao_gong', 'master', '赵公明为截教外门大师兄，通天门下。');
E('zhao_gong', 'sanxiao_yun', 'kin', '赵公明与三霄娘娘为兄妹。');
E('sanxiao_yun', 'sanxiao_qiong', 'blood', '三霄娘娘姊妹三人。');
E('sanxiao_qiong', 'sanxiao_bi', 'blood', '三霄姊妹，碧霄最幼。');
E('princip', 'tongtian', 'mount', '诛仙四剑乃通天教主镇教法宝。');
E('tongtian', 'wanxian', 'subordinate', '截教万仙，通天教主门下。');
E('jinling', 'duobao', 'kin', '同门截教大师姐弟。');
E('jinling', 'huo_ling', 'master', '火灵圣母为金灵圣母弟子（《封神演义》）。');
E('jinling', 'zhang_kui', 'master', '张奎地行术传自截教金灵圣母门下（略载）。');
E('duobao', 'huo_ling', 'master', '火灵圣母为多宝道人（一说通天）弟子。');
E('nu_dad', 'duobao', 'master', '接引、准提收多宝道人入西方教。');
E('nu_dad', 'kong_xuan', 'hostile', '准提道人收服孔宣为坐骑。');
E('zhunti', 'kong_xuan', 'master', '孔宣败于准提，皈依西方。');
E('wenzhong_wen', 'jifa', 'blood', '姬发为文王姬昌之子。');
E('wenzhong_wen', 'lei_zhenzi', 'blood', '雷震子为姬昌第一百子（封神演义）。');
E('yao_j_', 'wenzhong_wen', 'sovereign', '姜子牙辅佐文王、武王伐纣。');
E('yao_j_', 'jifa', 'sovereign', '姜子牙为武王之太师。');
E('yang_jian', 'yuding', 'master', '杨戬师从玉鼎真人。');
E('ne_zha', 'taiyi', 'master', '哪吒师从太乙真人。');
E('ne_zha', 'li_jing', 'blood', '哪吒为李靖第三子。');
E('li_jing', 'jin_zha', 'blood', '金吒为李靖长子。');
E('li_jing', 'mu_zha', 'blood', '木吒为李靖次子。');
E('jin_zha', 'wen_shu', 'master', '金吒为文殊广法天尊弟子。');
E('mu_zha', 'pu_xian', 'master', '木吒为普贤真人弟子。');
E('wei_hu', 'daoxing', 'master', '韦护为道行天尊弟子。');
E('huang_tianhua', 'qingxu', 'master', '黄天化为清虚道德真君弟子。');
E('yang_ren', 'qingxu', 'master', '杨任亦为清虚道德真君弟子。');
E('tu_xingsun', 'julongss', 'master', '土行孙为俱留孙弟子。');
E('tu_xingsun', 'deng_chan', 'spouse', '土行孙娶邓婵玉。');
E('kun_peng', 'jinling', 'master', '闻仲为金灵圣母弟子。');
E('kun_peng', 'di_xin', 'sovereign', '闻仲为商纣太师。');
E('di_xin', 'da_ji', 'spouse', '纣王宠妲己（九尾狐附体）。');
E('da_ji', 'di_xin', 'subordinate', '妲己惑乱纣王，商政日衰。');
E('mo_ye', 'huang_tianhua', 'blood', '黄天化为黄飞虎长子。');
E('mo_ye', 'di_xin', 'hostile', '黄飞虎遭纣王逼害，反商投周。');
E('bi_gan', 'di_xin', 'kin', '比干为纣王之叔（或异母兄）。');
E('bi_gan', 'zhao_gong', 'origin', '比干剖心后被封文财神，与赵公明（武财神）并称。');
E('longxu_hu', 'yao_j_', 'mount', '龙须虎为姜子牙坐骑。');
E('yao_j_', 'jifa', 'master', '姜子牙辅武王讨伐无道。');

export { Ns as nodes, Es as edges };