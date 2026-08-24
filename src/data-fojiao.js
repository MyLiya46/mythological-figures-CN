// ============================================================================
// 佛教神系 —— 诸佛 · 菩萨 · 罗汉 · 天王金刚 · 二十诸天 · 十殿阎王 · 天龙八部
// 出处：佛经（《法华经》《华严经》《地藏经》《药师经》）并以民间汉化信仰
// ============================================================================
const Ns = [];
const Es = [];
const N = (id, name, category, level, desc, aliases = [], shape) =>
  Ns.push({ id, name, category, level, desc, aliases, shape });
const E = (source, target, type, desc) => Es.push({ source, target, type, desc });

// —— 三身佛 · 三世佛 · 五方佛 ——
N('falu', '毗卢遮那佛', 'fojiao', 0, '法身佛，大日如来，光明遍照（《华严经》）。', ['大日如来', '毗卢佛', '觉性'], 'creator');
N('luzha', '卢舍那佛', 'fojiao', 0, '报身佛，莲华藏世界主（《华严经》）。', ['报身佛'], 'creator');
N('amisuo', '阿弥陀佛', 'fojiao', 0, '西方极乐世界教主，四十八愿接引众生（《无量寿经》）。', ['无量寿佛', '无量光佛', '接引佛'], 'creator');
N('yaoshifo', '药师佛', 'fojiao', 0, '东方琉璃光如来，医王，十二大愿（《药师经》）。', ['药师琉璃光如来'], 'creator');
N('ashuchu', '阿閦佛', 'fojiao', 0, '东方妙喜世界教主，不动如来。', ['不动佛', '阿閦如来'], 'creator');
N('baosheng', '宝生佛', 'fojiao', 0, '南方宝生如来，五方佛之一（密宗）。', ['宝生如来'], 'creator');
N('chengjiu', '不空成就佛', 'fojiao', 0, '北方不空成就如来，五方佛之一（密宗）。', ['不空成就如来'], 'creator');
N('a_tou', '阿閦鞞佛', 'fojiao', 0, '即阿閦佛异译。', [], 'creator');

// —— 菩萨（大乘）——
N('guanshiyin', '观世音菩萨', 'fojiao', 1, '大慈大悲救苦救难，普陀山道场，三十三应身（《法华经·普门品》）。', ['观音', '观自在', '观音大士'], 'god');
N('dashizhi', '大势至菩萨', 'fojiao', 1, '西方三圣之一，以智慧光遍照（《观无量寿经》）。', ['大势至'], 'god');
N('wenshu', '文殊菩萨', 'fojiao', 1, '文殊师利，智慧第一，五台山道场（《华严经》）。', ['文殊师利', '妙吉祥', '曼殊室利'], 'god');
N('puxian', '普贤菩萨', 'fojiao', 1, '行愿第一，峨眉山道场，白象为骑（《华严经》）。', ['普贤'], 'god');
N('dizangwang', '地藏菩萨', 'fojiao', 1, '幽冥教主，众生度尽方证菩提（《地藏经》）。', ['地藏', '幽冥教主'], 'god');
N('milesi', '弥勒菩萨', 'fojiao', 1, '未来佛，兜率天内院（《弥勒上生经》）。', ['慈氏', '未来佛'], 'god');
N('yaoshi_pu', '药王菩萨', 'fojiao', 1, '兄净藏、弟药王，善医（《法华经·药王菩萨本事品》）。', ['药王'], 'god');
N('yaoshang', '药上菩萨', 'fojiao', 1, '药王之弟，同证菩提（《法华经》）。', [], 'god');
N('weituotian', '韦驮菩萨', 'fojiao', 1, '护法菩萨，持金刚杵，护持佛法（《景德传灯录》）。', ['韦陀', '韦将军'], 'god');
N('galu_pu', '日光菩萨', 'fojiao', 1, '药师佛胁侍，日光遍照菩萨。', ['日光遍照'], 'god');
N('yueguang', '月光菩萨', 'fojiao', 1, '药师佛胁侍，月光遍照菩萨。', ['月光遍照'], 'god');
N('xukong', '虚空藏菩萨', 'fojiao', 1, '智慧、功德、财富如虚空（《虚空藏菩萨经》）。', [], 'god');
N('chu_di', '除盖障菩萨', 'fojiao', 1, '除去烦恼盖障（密宗八大菩萨）。', [], 'god');
N('jin_gangshou', '金刚手菩萨', 'fojiao', 1, '执金刚菩萨，护法（《大日经》）。', ['执金刚'], 'god');

// —— 四大天王 & 韦驮 金刚力士 ——
N('chiguo', '持国天王', 'fojiao', 2, '东方持国天，护东胜身洲，掌琵琶（《佛说四天王经》）。', ['提头赖吒', '多罗吒'], 'god');
N('zengzhang', '增长天王', 'fojiao', 2, '南方增长天，护南赡部洲，掌宝剑。', ['毗琉璃', '毗留博叉'], 'god');
N('guangmu', '广目天王', 'fojiao', 2, '西方广目天，护西牛贺洲，掌龙蛇。', ['毗留博叉'], 'god');
N('duowen', '多闻天王', 'fojiao', 2, '北方多闻天，护北俱卢洲，掌宝伞（财神毗沙门）。', ['毗沙门', '北方毗沙门天王'], 'god');
N('midu', '密迹金刚', 'fojiao', 2, '金刚力士，守卫山门（《大宝积经》）。', ['仁王', '王将'], 'god');
N('naruoyan', '那罗延', 'fojiao', 2, '坚固力士，金刚之别名。', ['金刚', '那罗延天'], 'god');
N('hanhai', '散脂大将', 'fojiao', 2, '夜叉大将，护法（《金光明经》）。', ['散脂夜叉'], 'god');
N('jin_gang', '大轮明王', 'fojiao', 2, '金刚明王，摧伏邪魔（密宗五大明王）。', ['明王'], 'god');

// —— 二十诸天（择要）——
const zhutian = [
  ['datian','大梵天','色界初禅天之主，四面二臂（诸天之首）。'],
  ['di_shitian','帝释天','忉利天主，三十三天之王（《法华经》）。'],
  ['biancai','辩才天','智慧、辩才之神，妙音天女。'],
  ['gongde','功德天','吉祥天女，司福德（《金光明经》）。'],
  ['jieri','日宫天子','日天，宝光天子。'],
  ['yuegong','月宫天子','月天，净光天子。'],
  ['yanmo_tian','阎罗天子','地狱主，即阎王。'],
  ['zhi_shui','水天','江河之神，龙王之王。'],
  ['moli_tian','摩醯首罗天','大自在天，三千界主（《楞严经》）。'],
  ['jin_tian','紧那罗王','乐神之王，音乐供养。'],
  ['gailuocha','迦楼罗王','金翅鸟王，食龙。'],
  ['jiangu','坚牢地神','地天，大地之神（《地藏经》）。'],
  ['luocha','罗刹王','罗刹夜叉之主，护法（《法华经》）。'],
  ['xunxiang','熏香天','香神，乾闼婆王。'],
  ['xing_xiu','星宿天','二十八宿之主。'],
  ['ziwei_tian','紫微天','北斗之神（道教合流）。'],
];
zhutian.forEach(([id, name, d]) => N(id, name, 'fojiao', 2, d, [], 'god'));

// —— 十八罗汉 ——
const lohan = [
  ['botian','跋陀罗尊者','坐鹿罗汉，佛之侍者。'],
  ['jiaguo','迦诺迦伐蹉尊者','庆友罗汉，知一切善恶。'],
  ['jiaguo_bai','迦诺迦跋厘惰阇尊者','骑象罗汉。'],
  ['subala','苏频陀尊者','托塔罗汉，佛之侍者。'],
  ['nuoju','诺距罗尊者','静坐罗汉，战胜烦恼。'],
  ['baya','跋陀罗（乘鹿）尊者','关于跋陀罗尊者述。'],
  ['puti','菩提达磨尊者','一作达摩，禅宗初祖。'],
  ['falu_n','法光尊者','出淤泥不染。'],
  ['haba','诃梨跋甉尊者','守佛之药。'],
  ['jiradius','举钵罗汉','迦留陀夷，化缘。'],
  ['tuolin','托塔罗汉','苏频陀，护佛塔。'],
  ['qini','骑鹿罗汉','宾度罗跋罗堕阁。'],
  ['changmei','长眉罗汉','阿氏多尊者，勤俭持家。'],
  ['jindan','解空第一尊者','那伽犀那，注疏经。'],
  ['baguai','静坐罗汉','诺矩那。'],
  ['tanfa','说法罗汉','迦旃延，说法第一。'],
  ['fusheng','伏虎罗汉','宾头卢尊者，降伏猛虎。'],
  ['jianglong','降龙罗汉','迦叶尊者（一说庆友），降龙。'],
];
lohan.forEach(([id, name, d]) => N(id, name, 'fojiao', 2, d, [], 'god'));

// —— 十殿阎王 ——
const yama = [
  ['qin_guang','秦广王','一殿，司人间寿夭、生死册。'],
  ['chu_jiang','楚江王','二殿，掌孽镜台。'],
  ['song_di','宋帝王','三殿，掌钉床地狱。'],
  ['wu_guan','五官王','四殿，掌柞臼地狱。'],
  ['yanluo','阎罗王','五殿，地狱主，铁面无私。'],
  ['bian_cheng','卞城王','六殿，掌煻铐地狱。'],
  ['taishan','泰山王','七殿，掌石磨地狱。'],
  ['du_shi','都市王','八殿，掌柞财地狱。'],
  ['ping_deng','平等王','九殿，掌铁网地狱。'],
  ['zhuan_lun','转轮王','十殿，掌轮回转生。'],
];
yama.forEach(([id, name, d]) => N(id, name, 'fojiao', 2, d, [], 'god'));

// —— 天龙八部 ——
N('tianbu', '天人', 'fojiao', 2, '天众，六道中最胜。', ['天'], 'god');
N('longbu', '龙众', 'fojiao', 2, '水族，护持佛法。', ['龙王'], 'yao');
N('yecha', '夜叉', 'fojiao', 3, '勇健、轻捷，护法天部（《法华经》）。', ['药叉'], 'yao');
N('gandapo', '乾闼婆', 'fojiao', 3, '香神、乐神，帝释天乐师。', ['香神'], 'god');
N('asura', '阿修罗', 'fojiao', 3, '非天，好战，与帝释争（《法华经》）。', ['修罗', '阿素洛'], 'yao');
N('garuda', '迦楼罗', 'fojiao', 3, '金翅鸟，食龙（《法华经》）。', ['金翅鸟'], 'yao');
N('jinnn', '紧那罗', 'fojiao', 3, '歌神，头上生角（《法华经》）。', ['歌神'], 'god');
N('mohouluo', '摩睺罗伽', 'fojiao', 3, '大蟒神，乐神之一。', ['蟒神', '摩呼罗伽'], 'yao');

// —— 关系 ——
E('falu', 'luzha', 'incarnation', '毗卢遮那（法身）现卢舍那（报身）与释迦（应身），三身一体。');
E('falu', 'rulai', 'incarnation', '大日如来的应化身即释迦牟尼佛。');
E('amisuo', 'guanshiyin', 'subordinate', '观世音为大势至、阿弥陀佛西方三圣之一。');
E('amisuo', 'dashizhi', 'subordinate', '西方三圣：阿弥陀佛、观世音、大势至。');
E('guanshiyin', 'dashizhi', 'kin', '同为阿弥陀佛胁侍。');
E('yaoshifo', 'galu_pu', 'subordinate', '日光菩萨为药师佛左胁侍。');
E('yaoshifo', 'yueguang', 'subordinate', '月光菩萨为药师佛右胁侍。');
E('yaoshifo', 'yaoshi_pu', 'subordinate', '药王、药上菩萨为药师法门。');
E('yaoshi_pu', 'yaoshang', 'blood', '药王、药上原为兄弟（《法华经》）。');
E('rulai', 'guanshiyin', 'subordinate', '观音为释迦法会常随众（《法华经》）。');
E('rulai', 'wenshu', 'subordinate', '文殊为释迦左胁侍（华严三圣）。');
E('rulai', 'puxian', 'subordinate', '普贤为释迦右胁侍（华严三圣）。');
E('rulai', 'dizangwang', 'master', '释迦于忉利天嘱地藏度众（《地藏经》）。');
E('rulai', 'milesi', 'master', '释迦授记弥勒为未来佛。');
E('rulai', 'weituotian', 'subordinate', '韦驮为释迦护法。');
E('wenshu', 'puxian', 'ally', '华严三圣之左右胁侍。');
E('chiguo', 'zengzhang', 'kin', '四大天王并列护世。');
E('zengzhang', 'guangmu', 'kin', '四大天王并列。');
E('guangmu', 'duowen', 'kin', '四大天王并列。');
E('chiguo', 'rulai', 'subordinate', '四大天王护持佛法。');
E('datian', 'rulai', 'master', '大梵天请佛转法轮（佛传）。');
E('di_shitian', 'rulai', 'master', '帝释天为佛护法。');
E('di_shitian', 'datian', 'ally', '梵天、帝释并为佛天部之首。');
E('jieri', 'di_shitian', 'subordinate', '日宫天子、月宫天子为帝释天臣。');
E('yuegong', 'di_shitian', 'subordinate', '月宫天子为帝释天臣。');
E('biancai', 'di_shitian', 'subordinate', '辩才天（妙音天）为天部乐神。');
E('gongde', 'di_shitian', 'subordinate', '功德天（吉祥天）为天部福德神。');
E('yanmo_tian', 'yanluo', 'incarnation', '阎罗天子即阎王（第五殿）。');
E('garuda', 'longbu', 'hostile', '迦楼罗食龙（《法华经》天龙八部）。');
E('asura', 'di_shitian', 'hostile', '阿修罗与帝释天战（修罗场）。');
E('gandapo', 'di_shitian', 'subordinate', '乾闼婆为帝释天乐师。');
E('jinnn', 'di_shitian', 'subordinate', '紧那罗为天部歌神。');
E('mohouluo', 'di_shitian', 'subordinate', '摩睺罗伽为天部。');
E('tianbu', 'rulai', 'subordinate', '天人护法，闻法得度。');
E('yecha', 'rulai', 'subordinate', '夜叉护法（《法华经》）。');
E('weituotian', 'chiguo', 'ally', '韦驮与四天王共护伽蓝。');
E('botian', 'rulai', 'subordinate', '十八罗汉为佛弟子。');
E('jiaguo', 'rulai', 'subordinate', '罗汉为佛弟子。');
E('nuoju', 'rulai', 'subordinate', '罗汉为佛弟子。');
E('fusheng', 'rulai', 'subordinate', '伏虎罗汉为佛弟子。');
E('jianglong', 'rulai', 'subordinate', '降龙罗汉为佛弟子。');
E('botian', 'luzha', 'origin', '罗汉皆依佛修证。');
E('dizangwang', 'yanmo_tian', 'sovereign', '地藏为幽冥教主，统阎罗十殿。');
E('dizangwang', 'qin_guang', 'sovereign', '十殿阎王隶地藏。');
E('dizangwang', 'chu_jiang', 'sovereign', '十殿阎王隶地藏。');
E('dizangwang', 'song_di', 'sovereign', '十殿阎王隶地藏。');
E('dizangwang', 'wu_guan', 'sovereign', '十殿阎王隶地藏。');
E('dizangwang', 'yanluo', 'sovereign', '十殿阎王隶地藏。');
E('dizangwang', 'bian_cheng', 'sovereign', '十殿阎王隶地藏。');
E('dizangwang', 'taishan', 'sovereign', '十殿阎王隶地藏。');
E('dizangwang', 'du_shi', 'sovereign', '十殿阎王隶地藏。');
E('dizangwang', 'ping_deng', 'sovereign', '十殿阎王隶地藏。');
E('dizangwang', 'zhuan_lun', 'sovereign', '十殿阎王隶地藏。');
E('yanluo', 'qin_guang', 'kin', '十殿阎王并立。');
E('zhuan_lun', 'dizangwang', 'subordinate', '转轮王执轮回，隶地藏。');
E('taishan', 'dongyue', 'origin', '泰山王与东岳大帝主冥司（道佛合流）。');

export { Ns as nodes, Es as edges };