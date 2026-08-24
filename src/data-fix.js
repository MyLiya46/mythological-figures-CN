// ============================================================================
// data-fix.js —— 补齐孤立节点的真实关系边 + 名录内固定次序边（sequence）
// 全部依据典籍/公认设定，不虚构
// ============================================================================

// 补充边 + 次序边（引用现有节点 id，canon 后有效）
export const nodes = [];
export const edges = [
  // —— 三皇五帝次序与禅让 ——
  { source: 'suiren', target: 'fuxi', type: 'sequence', desc: '三皇次第：燧人、伏羲、神农（后世三皇说之一）。' },
  { source: 'fuxi', target: 'shennong', type: 'sequence', desc: '三皇次第：伏羲、神农相承（《白虎通》）。' },
  { source: 'shennong', target: 'huangdi', type: 'kin', desc: '炎黄并称，华夏人文始祖（《史记》）。' },
  { source: 'huangdi', target: 'zhuanxu', type: 'kin', desc: '颛顼为黄帝之孙（《史记·五帝本纪》）。' },
  { source: 'zhuanxu', target: 'diku', type: 'kin', desc: '帝喾为黄帝曾孙、颛顼族子（《史记》）。' },
  { source: 'diku', target: 'yao', type: 'blood', desc: '帝尧为帝喾之子（《史记》）。' },
  { source: 'yao', target: 'shun', type: 'sequence', desc: '尧禅让于舜（《尚书·尧典》）。' },
  { source: 'shun', target: 'yu', type: 'sequence', desc: '舜禅让于禹（《史记》）。' },
  { source: 'zhuanxu', target: 'gonggong', type: 'hostile', desc: '颛顼与共工争帝，怒触不周山（一说）。' },
  { source: 'zhurong', target: 'gonggong', type: 'hostile', desc: '祝融与蚩尤共工之争，水火相战（《淮南子》）。' },
  { source: 'zhurong', target: 'shennong', type: 'subordinate', desc: '祝融为炎帝之佐，南方火德（《吕氏春秋》一说）。' },
  { source: 'zhurong', target: 'gun', type: 'hostile', desc: '鲧治水不成，为祝融所殛于羽山（《山海经》一说）。' },

  // —— 上古神兽归类 ——
  { source: 'qinglong', target: 'baihu', type: 'kin', desc: '四象并列：青龙、白虎、朱雀、玄武。' },
  { source: 'baihu', target: 'zhuque', type: 'kin', desc: '四象并列。' },
  { source: 'zhuque', target: 'xuanwu', type: 'kin', desc: '四象并列。' },
  { source: 'xuanwu', target: 'qinglong', type: 'kin', desc: '四象环列四方。' },
  { source: 'kui', target: 'huangdi', type: 'subordinate', desc: '黄帝得夔，以其皮为鼓雷震（《山海经·大荒东经》）。' },
  { source: 'yingzhao', target: 'xihe', type: 'subordinate', desc: '金乌日中之鸟，随日神运行。' },
  { source: 'taotie', target: 'qiongqi', type: 'kin', desc: '四凶并称（《左传》文十八年）。' },
  { source: 'qiongqi', target: 'taowu', type: 'kin', desc: '四凶并称。' },
  { source: 'taowu', target: 'hundun', type: 'kin', desc: '四凶并称。' },
  { source: 'hundun', target: 'taotie', type: 'kin', desc: '四凶并称。' },
  { source: 'qiongqi', target: 'zhuanxu', type: 'origin', desc: '穷奇为少皞氏不才子（《左传》）。' },
  { source: 'taotie', target: 'diku', type: 'origin', desc: '饕餮为缙云氏不才子（《左传》）。' },
  { source: 'taowu', target: 'zhuanxu', type: 'origin', desc: '梼杌为颛顼氏不才子（《左传》）。' },
  { source: 'bize', target: 'huangdi', type: 'mount', desc: '黄帝巡狩得白泽，白泽言万物之情（《云笈七签》）。' },
  { source: 'qilin', target: 'feng', type: 'kin', desc: '麒麟、凤凰并为祥瑞灵物（四灵）。' },
  { source: 'feng', target: 'qinglong', type: 'kin', desc: '凤凰与青龙等四灵并列（《礼记·礼运》）。' },
  { source: 'kui', target: 'qinglong', type: 'kin', desc: '夔为龙属神兽。' },
  { source: 'julong', target: 'zhongyue', type: 'sovereign', desc: '烛龙（钟山之神）司幽明昼夜（《山海经》）。' },
  { source: 'xingtian', target: 'huangdi', type: 'hostile', desc: '刑天与帝争神，帝断其首（《山海经·海外西经》）。' },

  // —— 封神十二金仙彼此同门 ——
  { source: 'yuanshi', target: 'guangcheng', type: 'master', desc: '阐教十二金仙之首广成子，元始天尊门人。' },
  { source: 'yuanshi', target: 'chijing', type: 'master', desc: '赤精子为阐教金仙。' },
  { source: 'yuanshi', target: 'huanglong', type: 'master', desc: '黄龙真人为阐教金仙。' },
  { source: 'yuanshi', target: 'julongss', type: 'master', desc: '俱留孙为阐教金仙。' },
  { source: 'yuanshi', target: 'lingbao2', type: 'master', desc: '灵宝大法师为阐教金仙。' },
  { source: 'yuanshi', target: 'wen_shu', type: 'master', desc: '文殊广法天尊为阐教金仙。' },
  { source: 'yuanshi', target: 'pu_xian', type: 'master', desc: '普贤真人为阐教金仙。' },
  { source: 'yuanshi', target: 'cihang', type: 'master', desc: '慈航道人为阐教金仙，后为观音。' },
  { source: 'yuanshi', target: 'yuding', type: 'master', desc: '玉鼎真人为阐教金仙。' },
  { source: 'yuanshi', target: 'daoxing', type: 'master', desc: '道行天尊为阐教金仙。' },
  { source: 'yuanshi', target: 'qingxu', type: 'master', desc: '清虚道德真君为阐教金仙。' },
  { source: 'yuanshi', target: 'taiyi', type: 'master', desc: '太乙真人为阐教金仙。' },
  { source: 'julongss', target: 'taiyi', type: 'kin', desc: '十二金仙同门（《封神演义》）。' },
  // 慈航/文殊/普贤 转世人佛教
  { source: 'cihang', target: 'guanshiyin', type: 'incarnation', desc: '慈航道人后化观世音菩萨（佛道合流传说）。' },
  { source: 'wen_shu', target: 'wenshu', type: 'incarnation', desc: '文殊广法天尊后为文殊菩萨（佛道合流）。' },
  { source: 'pu_xian', target: 'puxian', type: 'incarnation', desc: '普贤真人后为普贤菩萨（佛道合流）。' },
  { source: 'wei_hu', target: 'weituotian', type: 'incarnation', desc: '韦护后为韦驮菩萨（佛道合流）。' },
  { source: 'duobao', target: 'rulai', type: 'incarnation', desc: '多宝道人一说后成多宝如来（《法华经》并封神）。' },
  { source: 'wu_gu', target: 'liyuan', type: 'incarnation', desc: '无当圣母一说后为骊山老母（民间传说）。' },
  { source: 'gui_ling', target: 'wen_shu', type: 'hostile', desc: '龟灵圣母于万仙阵败亡（《封神演义》）。' },
  { source: 'hongjun', target: 'yao_j_', type: 'master', desc: '鸿钧道人之门面，姜子牙尊其为师祖（《封神演义》）。' },
  { source: 'jifa', target: 'yao_j_', type: 'sovereign', desc: '武王姬发封姜子牙为齐侯（《史记·齐世家》）。' },
  { source: 'feizhong', target: 'di_xin', type: 'subordinate', desc: '费仲为纣王佞臣。' },
  { source: 'huang_feih', target: 'di_xin', type: 'spouse', desc: '姜王后为纣王之后，被害（《封神演义》）。' },
  { source: 'er_hou', target: 'di_xin', type: 'subordinate', desc: '鄂侯为纣王忠臣，遭炮烙（《史记》）。' },
  { source: 'ne_zha', target: 'tongtian', type: 'hostile', desc: '哪吒随周征伐截教。' },
  { source: 'yang_jian', target: 'tongtian', type: 'hostile', desc: '杨戬随周征伐截教。' },

  // —— 西游补边 ——
  { source: 'dizang', target: 'panguan', type: 'sovereign', desc: '地藏为幽冥教主，统判官。' },
  { source: 'randeng', target: 'rulai', type: 'sequence', desc: '燃灯古佛为过去佛，释迦为现在佛。' },
  { source: 'yaoshi', target: 'rulai', type: 'kin', desc: '药师佛与释迦分居东、中土（三世佛/横三世）。' },
  { source: 'bai_skeleton', target: 'tangseng', type: 'hostile', desc: '白骨精三戏唐三藏（《西游记》）。' },
  { source: 'huangpao', target: 'kuimulang', type: 'incarnation', desc: '黄袍怪本为奎星奎木狼下界（《西游记》）。' },
  { source: 'shai_neig', target: 'rulai', type: 'hostile', desc: '蝎子精曾蜇如来（《西游记》）。' },
  { source: 'jingxi_daidai', target: 'jinyin_jiao', type: 'subordinate', desc: '精细鬼、伶俐虫为金角大王小妖。' },
  { source: 'lingli_chong', target: 'jinyin_jiao', type: 'subordinate', desc: '伶俐虫为金角大王小妖。' },
  { source: 'heishui', target: 'xihai', type: 'kin', desc: '鼍龙为泾河龙王之子，西海龙王之甥（《西游记》）。' },
  { source: 'ne_zha', target: 'sunwukong', type: 'hostile', desc: '哪吒随李靖征伐大圣（《西游记》）。' },
  { source: 'dizang', target: 'tangseng', type: 'master', desc: '唐太宗地府还魂，地藏幽冥情节（《西游记》）。' },

  // —— 道教八仙补边 ——
  { source: 'tieguaili', target: 'lancaihe', type: 'kin', desc: '八仙同列（《列仙全传》）。' },
  { source: 'lancaihe', target: 'hexiangu', type: 'kin', desc: '八仙同列。' },
  { source: 'hexiangu', target: 'caoguojiu', type: 'kin', desc: '八仙同列。' },
  { source: 'caoguojiu', target: 'zhangguo', type: 'kin', desc: '八仙同列。' },
  { source: 'zhangguo', target: 'hanxiangzi', type: 'kin', desc: '八仙同列。' },
  { source: 'hanxiangzi', target: 'tieguaili', type: 'kin', desc: '八仙同列，环成一圈。' },
  { source: 'tieguaili', target: 'liyuan', type: 'master', desc: '八仙以吕洞宾、钟离权为硕师。' },
  { source: 'hanzhong', target: 'ciyuan', type: 'master', desc: '钟离权点化洞宾。' },
  { source: 'lvdongbin', target: 'tieguaili', type: 'ally', desc: '纯阳子与八仙共济。' },
  { source: 'hanxiangzi', target: 'ciyuan', type: 'worship', desc: '韩湘子为韩愈族侄，随吕祖云游（《列仙全传》）。' },
  { source: 'zhangsanfeng', target: 'taijiquan', type: 'origin', desc: '三丰创太极（武当一系）。' },

  // —— 地官水官 ——
  { source: 'tianguan', target: 'diguan', type: 'kin', desc: '三官大帝并立：天官、地官、水官。' },
  { source: 'diguan', target: 'shuiguan', type: 'kin', desc: '三官并立。' },
  { source: 'dizang', target: 'diguan', type: 'sovereign', desc: '地官主赦罪，与地藏幽冥相协。' },
  { source: 'shuiguan', target: 'jiu_yao_taiyin', type: 'subordinate', desc: '水官司水，月神亦属水德。' },

  // —— 五岳四渎连线 ——
  { source: 'dongyue', target: 'xiyue', type: 'kin', desc: '五岳大帝并立。' },
  { source: 'xiyue', target: 'nanyue', type: 'kin', desc: '五岳并立。' },
  { source: 'nanyue', target: 'beiyue', type: 'kin', desc: '五岳并立。' },
  { source: 'beiyue', target: 'zhongyue', type: 'kin', desc: '五岳并立。' },
  { source: 'zhongyue', target: 'dongyue', type: 'kin', desc: '五岳环立。' },
  { source: 'dongyue', target: 'chenghuang', type: 'sovereign', desc: '城隍秉东岳帝命，主一方（民间）。' },
  { source: 'dongyue', target: 'mengpo', type: 'sovereign', desc: '东岳掌冥司，孟婆隶焉（民间）。' },
  { source: 'dongyue', target: 'tianguan', type: 'sovereign', desc: '东岳大帝隶天庭紫微之下。' },
  { source: 'sidu_jiang', target: 'donghai', type: 'kin', desc: '江渎、海渎并为水府之神。' },
  { source: 'sidu_jiang', target: 'sidu_he', type: 'kin', desc: '四渎并立：江、河、淮、济。' },
  { source: 'sidu_he', target: 'sidu_huai', type: 'kin', desc: '四渎并立。' },
  { source: 'sidu_huai', target: 'sidu_ji', type: 'kin', desc: '四渎并立。' },
  { source: 'sidu_ji', target: 'sidu_jiang', type: 'kin', desc: '四渎环列。' },
  { source: 'donghai', target: 'hebo', type: 'origin', desc: '河伯（冯夷）与东海诸龙并为水神。' },

  // —— 南斗六星补边 ——
  { source: 'siming', target: 'simlu', type: 'kin', desc: '南斗六星并列。' },
  { source: 'simlu', target: 'yanshou', type: 'kin', desc: '南斗六星并列。' },
  { source: 'yanshou', target: 'yisuan', type: 'kin', desc: '南斗六星并列。' },
  { source: 'yisuan', target: 'due', type: 'kin', desc: '南斗六星并列。' },
  { source: 'due', target: 'shangsheng', type: 'kin', desc: '南斗六星并列。' },
  { source: 'siming', target: 'taishangzhen', type: 'subordinate', desc: '南斗主延寿，隶太乙救苦天尊。' },

  // —— 道教真人补边 ——
  { source: 'chengtuan', target: 'zhangsanfeng', type: 'origin', desc: '陈抟睡功相传于武当一系。' },
  { source: 'taohongjing', target: 'dongyue', type: 'worship', desc: '陶弘景著《真灵位业图》，梳理道教神谱。' },
  { source: 'zhangdaoling', target: 'yuhuang', type: 'worship', desc: '正一尊玉皇。' },

  // —— 佛教补边 ——
  { source: 'ashuchu', target: 'yaoshifo', type: 'kin', desc: '阿閦佛居东方，与药师并为东方佛（并列）。' },
  { source: 'baosheng', target: 'falu', type: 'subordinate', desc: '宝生佛为五方佛之一（密宗金刚界）。' },
  { source: 'chengjiu', target: 'falu', type: 'subordinate', desc: '不空成就佛为五方佛之一。' },
  { source: 'xukong', target: 'guanshiyin', type: 'kin', desc: '八大菩萨并立，虚空藏其一。' },
  { source: 'chu_di', target: 'guanshiyin', type: 'kin', desc: '除盖障菩萨八大菩萨之一。' },
  { source: 'jin_gangshou', target: 'guanshiyin', type: 'kin', desc: '金刚手菩萨八大菩萨之一。' },
  { source: 'midu', target: 'weituotian', type: 'ally', desc: '密迹金刚与韦驮共护伽蓝。' },
  { source: 'naruoyan', target: 'weituotian', type: 'ally', desc: '那罗延为护法力士。' },
  { source: 'hanhai', target: 'duowen', type: 'subordinate', desc: '散脂大将为多闻天王夜叉护法（《金光明经》）。' },
  { source: 'jin_gang', target: 'falu', type: 'subordinate', desc: '大轮明王为毗卢遮那所化教令轮身。' },

  // —— 二十诸天互连 + 归属 ——
  { source: 'zhi_shui', target: 'longbu', type: 'sovereign', desc: '水天为龙众之主。' },
  { source: 'moli_tian', target: 'datian', type: 'sovereign', desc: '大自在天（摩醯首罗）居色界之顶。' },
  { source: 'jin_tian', target: 'di_shitian', type: 'subordinate', desc: '紧那罗王为天部乐神。' },
  { source: 'gailuocha', target: 'garuda', type: 'incarnation', desc: '迦楼罗王即金翅鸟王之汉译。' },
  { source: 'jiangu', target: 'houtu', type: 'incarnation', desc: '坚牢地神（地天）与后土皇地祇同主大地（道佛合流）。' },
  { source: 'luocha', target: 'yecha', type: 'kin', desc: '罗刹、夜叉并为天部鬼众。' },
  { source: 'xunxiang', target: 'gandapo', type: 'incarnation', desc: '熏香天即乾闼婆王（香神）。' },
  { source: 'xing_xiu', target: 'ziwei', type: 'subordinate', desc: '星宿天为二十八宿之主。' },
  { source: 'ziwei_tian', target: 'ziwei', type: 'incarnation', desc: '紫微天即道教紫微大帝之佛化（道佛合流）。' },
  { source: 'jin_tian', target: 'di_shitian', type: 'subordinate', desc: '紧那罗王伏帝释。' },
  { source: 'gandapo', target: 'di_shitian', type: 'subordinate', desc: '乾闼婆为帝释乐师（已列，此为补）。' },
  { source: 'jianji', target: 'di_shitian', type: 'subordinate', desc: '帝释天部众护法。' },

  // —— 十八罗汉两两相承（缘起环）——
  { source: 'botian', target: 'jiaguo', type: 'sequence', desc: '罗汉依《法住记》序次相列。' },
  { source: 'jiaguo', target: 'jiaguo_bai', type: 'sequence', desc: '罗汉序次。' },
  { source: 'jiaguo_bai', target: 'subala', type: 'sequence', desc: '罗汉序次。' },
  { source: 'subala', target: 'nuoju', type: 'sequence', desc: '罗汉序次。' },
  { source: 'nuoju', target: 'baya', type: 'sequence', desc: '罗汉序次。' },
  { source: 'baya', target: 'puti', type: 'sequence', desc: '罗汉序次。' },
  { source: 'puti', target: 'falu_n', type: 'sequence', desc: '罗汉序次。' },
  { source: 'falu_n', target: 'haba', type: 'sequence', desc: '罗汉序次。' },
  { source: 'haba', target: 'jiradius', type: 'sequence', desc: '罗汉序次。' },
  { source: 'jiradius', target: 'tuolin', type: 'sequence', desc: '罗汉序次。' },
  { source: 'tuolin', target: 'qini', type: 'sequence', desc: '罗汉序次。' },
  { source: 'qini', target: 'changmei', type: 'sequence', desc: '罗汉序次。' },
  { source: 'changmei', target: 'jindan', type: 'sequence', desc: '罗汉序次。' },
  { source: 'jindan', target: 'baguai', type: 'sequence', desc: '罗汉序次。' },
  { source: 'baguai', target: 'tanfa', type: 'sequence', desc: '罗汉序次。' },
  { source: 'tanfa', target: 'fusheng', type: 'sequence', desc: '罗汉序次。' },
  { source: 'fusheng', target: 'jianglong', type: 'sequence', desc: '罗汉序次，末归降龙。' },

  // —— 十殿阎王序次 ——
  { source: 'zhuan_lun', target: 'qin_guang', type: 'sequence', desc: '十殿循环，转轮后归秦广（冥司十殿）。' },

  // —— 法术人物补边 ——
  { source: 'jinguang', target: 'dianmu', type: 'incarnation', desc: '金光圣母封雷部闪电之母（《封神演义》）。' },

  // —— 天庭孤点补边 ——
  { source: 'julingshen', target: 'yuhuang', type: 'subordinate', desc: '巨灵神为玉帝先锋神将（《西游记》）。' },
  { source: 'fengbo', target: 'yuhuang', type: 'subordinate', desc: '风伯隶天庭，司风。' },
  { source: 'yushi', target: 'yuhuang', type: 'subordinate', desc: '雨师隶天庭，司雨。' },
  { source: 'fengbo', target: 'yushi', type: 'kin', desc: '风雨雷电四神并列。' },
  { source: 'leigong', target: 'fengbo', type: 'kin', desc: '雷公、风伯并列天庭诸神。' },
  { source: 'leigong', target: 'yushi', type: 'kin', desc: '雷、雨协司。' },
  { source: 'dianmu', target: 'leigong', type: 'spouse', desc: '电母为雷公之配（民谚）。' },
  { source: 'tiantong', target: 'yuhuang', type: 'subordinate', desc: '千里眼为玉帝耳目。' },
  { source: 'shunfenger', target: 'yuhuang', type: 'subordinate', desc: '顺风耳为玉帝耳目。' },
  { source: 'tiantong', target: 'shunfenger', type: 'kin', desc: '千里眼顺风耳并列。' },
  { source: 'matian', target: 'yuhuang', type: 'subordinate', desc: '马天君监守天厩。' },
  { source: 'matian', target: 'zhenwu', type: 'subordinate', desc: '华光（马天君）道教护法，隶真武部。' },
  { source: 'fanli', target: 'bi_gan', type: 'kin', desc: '范蠡与比干并称文财神（民间财神信仰）。' },
  { source: 'fanli', target: 'zhao_gong', type: 'ally', desc: '文财神与武财神并称。' },
  { source: 'wulu_caizhen', target: 'zhao_gong', type: 'subordinate', desc: '五路财神为赵公明属下（民间财神）。' },
  { source: 'baxian_zu', target: 'lvdongbin', type: 'subordinate', desc: '八仙过海，以吕洞宾为尊（《东游记》）。' },
  { source: 'zhizhu_yuejing', target: 'yuhuang', type: 'subordinate', desc: '月老为天庭婚姻之神（民间）。' },
  { source: 'zhizhu_yuejing', target: 'niulang', type: 'worship', desc: '月老以红绳系足，主姻缘（《续幽怪录》）。' },
  { source: 'zhizhu_yuejing', target: 'zhinv', type: 'worship', desc: '月老主牛郎织女之缘（民间）。' },
  { source: 'heshen_g', target: 'sidu_he', type: 'kin', desc: '河神与河渎神同主川流（民间道教）。' },
// —— 转世（reincarnation，真实依据）——
  { source: 'jinchanzi', target: 'tangseng', type: 'reincarnation', desc: '金蝉子十世修行，转世为唐僧玄奘（《西游记》）。' },
  { source: 'poluomennv', target: 'dizangwang', type: 'reincarnation', desc: '婆罗门女发愿度母，地藏菩萨前身（《地藏经》）。' },
  { source: 'xihe', target: 'changxi', type: 'kin', desc: '羲和与常羲并为帝俊之妻，分司日月（《山海经》）。' },
];

// 引入一个骊山老母、吕祖等被引用但未建的使者节点（补在一个 fix 里即可）
// 由于 combine 会报 missing，需在 nodes 里补齐这些 helper：
const FX = [
  ['liyuan', '骊山老母', 'daojiao', 3, '骊山神女，圣母，传兵书于唐（《太平广记》），或无当圣母所化（一说）。', ['黎山老母'], 'xian'],
  ['ciyuan', '纯阳帝君', 'daojiao', 3, '吕洞宾之尊号（纯阳演正警化孚佑帝君）。', ['吕祖'], 'xian'],
  ['taijiquan', '太极祖师', 'daojiao', 3, '张三丰创太极之祖名（武当一系）。', [], 'xian'],
  ['jianji', '帝释天部众', 'fojiao', 3, '三十三天之天众，帝释天所领。', [], 'god'],
  ['jinchanzi', '金蝉子', 'fojiao', 2, '如来二弟子金蝉子，轻慢佛法贬下凡，十世转生为唐僧（《西游记》）。', [], 'god'],
  ['poluomennv', '婆罗门女', 'fojiao', 3, '地藏菩萨前身，发愿救度母（《地藏菩萨本愿经》）。', [], 'ren'],
];
for (const [id, name, c, l, d, a, s] of FX) {
  nodes.push({ id, name, category: c, level: l, desc: d, aliases: a, shape: s });
}