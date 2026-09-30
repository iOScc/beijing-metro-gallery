/* SECTION: metro-data
 * 北京地铁线路照片数据。标志色依据北京地铁官方线路标识色整理（截至 2026 年）。
 * 照片均为网络公开图片，通过搜索工具获取的直链引用，caption 为画面内容说明。
 */
window.METRO_DATA = {
  networkNote: "截至 2026 年 6 月，北京城市轨道交通运营线路 30 条，运营里程 909 公里，车站 423 座。",
  lines: [
    {
      id: "l1", name: "1号线", color: "#E4002B", onDark: true, kind: "地铁",
      brief: "中国第一条地铁线路，1969 年试运营，贯穿长安街东西走向。",
      photos: [
        { url: "https://agent.qianwen.com/service/4c35f58d-c33f-4b/4367a7a3db6a10d3d70381fb09f209e8", caption: "五棵松站 列车进站", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/4c35f58d-c33f-4b/f960e5451bedb6f36d6fa29f67c79f1b", caption: "建国门站 列车停靠", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/4c35f58d-c33f-4b/9d2b9a250349411ecdc7433819ce68a2", caption: "西单站 列车停靠", source: "bilibili" },
        
                { url: "https://i0.hdslb.com/bfs/archive/aa5540cee9c45da4e08a74f478d2a0c3414bdd63.jpg", caption: "dkz4 即将退役", source: "百科" },
        { url: "https://agent.qianwen.com/service/4c35f58d-c33f-4b/41297ab9f966476bc5b31e502396c809", caption: "苹果园站 站台列车", source: "bilibili" }
      ]
    },
    {
      id: "l2", name: "2号线", color: "#0067B0", onDark: true, kind: "地铁",
      brief: "1984 年通车的环线，沿原北京城墙走向绕行中心城区。",
      photos: [
        { url: "https://agent.qianwen.com/service/d7b9dfb1-a6a7-49/26aec0cad12133c93515b5696aefb00e", caption: "站台列车与屏蔽门", source: "百度百科" },
        { url: "https://agent.qianwen.com/service/d7b9dfb1-a6a7-49/ef81f095f7e659f424a1baf7340464ef", caption: "东四十条站 站台楼梯口", source: "百度百家号" },
        { url: "https://agent.qianwen.com/service/d7b9dfb1-a6a7-49/dda81fd2e68845f5982ad6058920f84d", caption: "米色圆柱站台候车", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/d7b9dfb1-a6a7-49/358c1547bcbb1a3bc10c5e6086fb55a6", caption: "水磨石立柱与信息屏", source: "新浪看点" }
      ]
    },
    {
      id: "l3", name: "3号线", color: "#C1007E", onDark: true, kind: "地铁",
      brief: "2024 年 12 月开通一期，服务东部地区新增轨道走廊。",
      photos: [
        { url: "https://agent.qianwen.com/service/835fc7f0-2064-46/0bbab06bd0e17a59657b0456d2046c2a", caption: "东四十条站 站台列车", source: "新京报" },
        { url: "https://agent.qianwen.com/service/835fc7f0-2064-46/818c66aff202e825f87dd304a7560808", caption: "东四十条站 站台指示牌", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/835fc7f0-2064-46/4ab410500edc3902adea1c6841efdf6d", caption: "东四十条站 列车进站", source: "新浪新闻" },
        { url: "https://agent.qianwen.com/service/cdb9c1cc-db36-42/65ee21a70a1cc20029a4290c707cad5c", caption: "银灰红腰涂装的 3 号线列车", source: "bilibili" }
      ]
    },
    {
      id: "l4", name: "4号线", color: "#009A9A", onDark: true, kind: "地铁",
      brief: "2009 年开通并由京港地铁运营，与大兴线贯通运行，安河桥北至天宫院。",
      photos: [
        { url: "https://agent.qianwen.com/service/fdce9c56-1243-40/e8590ba2a9b547807f8111c66b61d384", caption: "西四站 站台与列车", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/fdce9c56-1243-40/f92a57550f67b3c75583a2edeb389cda", caption: "北京大学东门站 站台", source: "微博" },
        { url: "https://agent.qianwen.com/service/fdce9c56-1243-40/df876c50a625cee6247f34f5ef5b99f0", caption: "西直门站 站台及列车", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/fdce9c56-1243-40/d9cc43868e5984a6a2a47fc5f9fff815", caption: "西单站 进站列车", source: "bilibili" }
      ]
    },
    {
      id: "l5", name: "5号线", color: "#7B4FA0", onDark: true, kind: "地铁",
      brief: "南北向骨干线，天通苑北至宋家庄，北侧含高架区间。",
      photos: [
        { url: "https://agent.qianwen.com/service/5b0cf68f-4bec-49/b5d188b23918cdefaf66dbed08ef56d3", caption: "高架车站顶棚下列车", source: "百度新闻" },
        { url: "https://agent.qianwen.com/service/5b0cf68f-4bec-49/0f97215ed9ebdca7cdfbd29802a84b8c", caption: "紫色列车停靠站台", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/5b0cf68f-4bec-49/17cf10b617e3d4a5f92c70ff7665b8ad", caption: "大屯路东站 拱形顶棚", source: "搜狐" },
        { url: "https://agent.qianwen.com/service/5b0cf68f-4bec-49/e5d1decd859cdc87869e28c0f55a07b7", caption: "高架区间行驶列车", source: "bilibili" }
      ]
    },
    {
      id: "l6", name: "6号线", color: "#D08E16", onDark: false, kind: "地铁",
      brief: "东西向骨干快线，金安桥至潞阳，贯通城市南北中轴东侧。",
      photos: [
        { url: "https://agent.qianwen.com/service/df1e9cd5-f8c6-4c/714f41a71064e9faa7ae76f5308c1cce", caption: "南锣鼓巷站 列车车门", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/df1e9cd5-f8c6-4c/fdf077327c598ae4bea299da0b48bbd7", caption: "站台黄色饰带与屏蔽门", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/df1e9cd5-f8c6-4c/1645d9713fef3d45362ad6e9b58ac908", caption: "开往潞城方向指示牌", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/df1e9cd5-f8c6-4c/e0bd8af1bd18de3d962f7522f8e5975d", caption: "屏蔽门上方线路图", source: "bilibili" }
      ]
    },
    {
      id: "l7", name: "7号线", color: "#F08300", onDark: false, kind: "地铁",
      brief: "东西向加密线，北京西站至环球度假区。",
      photos: [
        { url: "https://agent.qianwen.com/service/869f63a4-63fa-4c/2ccd4520108fe64a13c7831a3c852e92", caption: "黄柱黑网顶站台实景", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/869f63a4-63fa-4c/6e18998715411e6f72958694e1e7b9d3", caption: "紫柱吊顶一侧停靠列车", source: "新浪新闻" },
        { url: "https://agent.qianwen.com/service/869f63a4-63fa-4c/a45c6acd8267c72dd40e4169dc5bbac6", caption: "万盛东站 屏蔽门与列车", source: "takefoto" }
      ]
    },
    {
      id: "l8", name: "8号线", color: "#009A44", onDark: true, kind: "地铁",
      brief: "贯穿京城南北的“地下中轴线”，朱辛庄至瀛海，2008 年首通。",
      photos: [
        { url: "https://agent.qianwen.com/service/1d85f2c7-8eb9-42/1350ff4f9d96c239c923e0b9a175527e", caption: "站台实景及停靠列车", source: "新京报" },
        { url: "https://agent.qianwen.com/service/1d85f2c7-8eb9-42/52ad1fb1a5e835c19ec687c2e3c71c38", caption: "青绿色列车与屏蔽门", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/1d85f2c7-8eb9-42/ca73faaec3fe56c9eed14f5e2e58d179", caption: "永泰庄站 站台与列车", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/1d85f2c7-8eb9-42/7f0a9bd012a718f54f3155d2d8362c63", caption: "车站绿色拱形天花板", source: "小红书" }
      ]
    },
    {
      id: "l9", name: "9号线", color: "#8CC63E", onDark: false, kind: "地铁",
      brief: "西南—城区干线，郭公庄至国家图书馆，接入北京西站。",
      photos: [
        { url: "https://agent.qianwen.com/service/91638a3b-04dd-49/957bcfbb339787435a641a766ed89998", caption: "国家图书馆站 站台列车", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/91638a3b-04dd-49/1cde0556e25318f2d2890deb40f29e80", caption: "国家图书馆站 屏蔽门", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/91638a3b-04dd-49/8278a1d2410f2d6e142b1e0d97d63c1f", caption: "北京西站 绿色列车进站", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/91638a3b-04dd-49/94dd354829de4356b92f59e51d7258bf", caption: "丰台南路站 站台指示牌", source: "bilibili" }
      ]
    },
    {
      id: "l10", name: "10号线", color: "#0092CE", onDark: true, kind: "地铁",
      brief: "全地下环线，串联 CBD、中关村、丰台站等核心功能区。",
      photos: [
        { url: "https://agent.qianwen.com/service/c6c43711-0636-41/78f5e09b73ccc8ed33e8f6f2efac055d", caption: "海淀黄庄站 站台实景", source: "搜狐" },
        { url: "https://agent.qianwen.com/service/c6c43711-0636-41/deaf2107d0b2862f573c36718c478233", caption: "列车与站台门特写", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/c6c43711-0636-41/c75226472e1c0d5a4fff36b18c9f2c42", caption: "宋家庄站 屏蔽门视角", source: "bilibili" }
      ]
    },
    {
      id: "l11", name: "11号线", color: "#FF6A4D", onDark: false, kind: "地铁",
      brief: "冬奥支线，金安桥至新首钢，服务首钢园区与模式口片区。",
      photos: [
        { url: "https://agent.qianwen.com/service/96e18fc6-faa5-4d/f0d96338340216288bafe0532c340a7f", caption: "白色列车户外轨道行驶", source: "搜狐" },
        { url: "https://agent.qianwen.com/service/96e18fc6-faa5-4d/335f60763233433dd79f3a5f577c5b21", caption: "粉色涂装列车高架行驶", source: "搜狐" },
        { url: "https://agent.qianwen.com/service/96e18fc6-faa5-4d/468984b621f5dac6c81a650e69dd0d98", caption: "列车停靠新首钢站附近", source: "小红书" },
        { url: "https://agent.qianwen.com/service/96e18fc6-faa5-4d/ac7fafa86f06dfe51707ec23acd9049e", caption: "列车停靠模式口站站台", source: "bilibili" }
      ]
    },
    {
      id: "l12", name: "12号线", color: "#9A6A45", onDark: true, kind: "地铁",
      brief: "2024 年 12 月开通，四季青桥至东坝北，北部东西向干线。",
      photos: [
        { url: "https://agent.qianwen.com/service/87cd4626-35d5-41/cae370475eb93a0c4b20dc9627753a41", caption: "两列列车行驶高架轨道", source: "搜狐" },
        { url: "https://agent.qianwen.com/service/87cd4626-35d5-41/1ed15ac4392346b204ed6cdaa284754f", caption: "高架车站背景下列车", source: "网易" },
        { url: "https://agent.qianwen.com/service/87cd4626-35d5-41/3508978f028caaf72d6e72572f93f53f", caption: "银紫色列车经过高架站", source: "bilibili" }
      ]
    },
    {
      id: "l13", name: "13号线", color: "#F5D300", onDark: false, kind: "地铁",
      brief: "连接北部大型居住区与中心城区，高架段比例高。",
      photos: [
        { url: "https://agent.qianwen.com/service/ca75f363-a3bc-43/01d1ff773b91c7e472986435c35ad90b", caption: "银黄蓝涂装驶过高架站", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/ca75f363-a3bc-43/2c04b3f7dfa58a6381bc4eea3e8b0653", caption: "蓝白涂装停靠高架站台", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/ca75f363-a3bc-43/a58e02a5422e00189a456d1ccf90a8eb", caption: "经典涂装行驶于高架轨道", source: "小红书" },
        { url: "https://agent.qianwen.com/service/ca75f363-a3bc-43/2bafa9ad2f657402514611a89c763b46", caption: "列车穿行高架车站旁", source: "人民日报图片" }
      ]
    },
    {
      id: "l14", name: "14号线", color: "#F5A7B8", onDark: false, kind: "地铁",
      brief: "东北—西南对角干线，串联丽泽商务区与望京等板块。",
      photos: [
        { url: "https://agent.qianwen.com/service/4ff8c043-d452-4f/00bca7b62f2978f4e74121acda408ca3", caption: "丽泽商务区站 俯拍进站", source: "新浪财经" },
        { url: "https://agent.qianwen.com/service/4ff8c043-d452-4f/216af07ed38629b75f0a964f9a592cc4", caption: "黄色立柱站台与列车", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/4ff8c043-d452-4f/5d92752822a9623cbcf95b141feedb65", caption: "14028 号列车停靠站台", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/4ff8c043-d452-4f/47fd0d2cb2ab5e9b2d2928e51fb64f69", caption: "西局站 站台及列车", source: "gaokedl" }
      ]
    },
    {
      id: "l15", name: "15号线", color: "#6C2B9B", onDark: true, kind: "地铁",
      brief: "服务顺义与中心城区的东西向线路，多为高架运行。",
      photos: [
        { url: "https://agent.qianwen.com/service/883d0e7a-c197-40/c87102a86333408c42c77e7c4c16e2d9", caption: "15077 号列车高架行驶", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/883d0e7a-c197-40/34e6b2574985b320f57902ead6600526", caption: "15029 号列车高架行驶", source: "bilibili" }
      ]
    },
    {
      id: "l16", name: "16号线", color: "#009849", onDark: true, kind: "地铁",
      brief: "海淀—丰台南北干线，途经国家图书馆、宛平城等站。",
      photos: [
        { url: "https://agent.qianwen.com/service/fd4abab3-b395-4d/c53e820f28ebd81dbdd9aebe2c007fcf", caption: "白色圆柱与条纹吊顶站台", source: "一点资讯" },
        { url: "https://agent.qianwen.com/service/fd4abab3-b395-4d/9749b309d39505df85d717d3c6dec9da", caption: "宛平城站 浮雕壁画站台", source: "搜狐" },
        { url: "https://agent.qianwen.com/service/fd4abab3-b395-4d/d7aefdce7e83c977640afccd5f577730", caption: "甘家口站 站名与导向屏", source: "中国日报" },
        { url: "https://agent.qianwen.com/service/fd4abab3-b395-4d/d5773201c31e60f3d9f1af30c51e2c86", caption: "红白拱形天花站台", source: "千龙网" }
      ]
    },
    {
      id: "l17", name: "17号线", color: "#00838F", onDark: true, kind: "地铁",
      brief: "南北向快线，未来科学城北至嘉会湖，连接亦庄与CBD。",
      photos: [
        { url: "https://agent.qianwen.com/service/8a06978a-430c-43/400710065a129281310c6cbd4e748852", caption: "橙色装饰墙站台实景", source: "一点资讯" },
        { url: "https://agent.qianwen.com/service/8a06978a-430c-43/40e4b8bedb195494f67ff1a18e0c5332", caption: "望京西站 站台屏蔽门", source: "UC" },
        { url: "https://agent.qianwen.com/service/8a06978a-430c-43/ae7197a8e7fdf3f06515f276f85f9521", caption: "工人体育场站 站台列车", source: "微博" },
        { url: "https://agent.qianwen.com/service/8a06978a-430c-43/8ad7490a05ea896e6c673a9b74fe6f8a", caption: "未来科学城北站标识", source: "搜狐新闻" }
      ]
    },
    {
      id: "l18", name: "18号线", color: "#4C5FB8", onDark: true, kind: "地铁",
      brief: "2025 年 12 月开通，马连洼至天通苑东，缓解回龙观通勤压力。",
      photos: [
        { url: "https://agent.qianwen.com/service/b8965336-33b3-4a/f7ef248f8021fadb7b352375a00d5b4f", caption: "农大南路站 站台实景", source: "网易" },
        { url: "https://agent.qianwen.com/service/b8965336-33b3-4a/54c9efe1fb9389d493c0967c0c3cf648", caption: "站厅层悬挂指示牌", source: "光明网" }
      ]
    },
    {
      id: "l19", name: "19号线", color: "#BE4C7B", onDark: true, kind: "地铁",
      brief: "南北向快线，牡丹园至新宫，站内装修多有京味元素。",
      photos: [
        { url: "https://agent.qianwen.com/service/ac8f250d-4e89-4a/d234bc4a84e56d03898e018082ef5a36", caption: "铜色浮雕墙面站台", source: "百度新闻" },
        { url: "https://agent.qianwen.com/service/ac8f250d-4e89-4a/429a977f0f548e8aa4cddd3f6f9e5f4e", caption: "平安里站 仿古吊顶", source: "新京报" },
        { url: "https://agent.qianwen.com/service/ac8f250d-4e89-4a/c1c1a53b2f93991bc194c8ce07eac619", caption: "平安里站 列车与屏蔽门", source: "蜂鸟网" },
        { url: "https://agent.qianwen.com/service/ac8f250d-4e89-4a/26140ea6f017867078e023becb88cd40", caption: "传统建筑风格站台", source: "小红书" }
      ]
    },
    {
      id: "lbatong", name: "八通线", color: "#E8720C", onDark: false, kind: "地铁",
      brief: "与 1 号线贯通运行，古城至环球度假区，服务通州副中心。",
      photos: [
        { url: "https://agent.qianwen.com/service/45397aa4-1038-40/b9ad2cbcf2ccc7bc7e6c4083ffb500b2", caption: "屏蔽门上方线路图特写", source: "红鹅集团" },
        { url: "https://agent.qianwen.com/service/45397aa4-1038-40/2c129f525341756ab0ac14be58493acb", caption: "高架站弧形顶棚下列车", source: "小红书" },
        { url: "https://agent.qianwen.com/service/45397aa4-1038-40/ffc40a63a530ac8556a5260598b265bc", caption: "站台全景", source: "知乎" },
        { url: "https://agent.qianwen.com/service/45397aa4-1038-40/cd2a99e8fd217d0e2c79bcce21fa8e35", caption: "古城站 站台指示牌", source: "搜狐" }
      ]
    },
    {
      id: "lairport", name: "首都机场线", color: "#9EA7B0", onDark: false, kind: "机场专线",
      brief: "自东直门通往首都机场，红色涂装列车是它的辨识点。",
      photos: [
        { url: "https://agent.qianwen.com/service/423739d6-e828-45/5be4695c57e4fc88ad306edcce64d11e", caption: "红色列车停靠拱形玻璃顶车站", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/423739d6-e828-45/a48823f1165f6d3986ba4425d6cdb58f", caption: "带英文标识的站台", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/423739d6-e828-45/574bc0e84e9e3b844853e79842605577", caption: "红黑配色列车车头", source: "bilibili" },
        { url: "https://agent.qianwen.com/service/423739d6-e828-45/80d7bac3ba51c87780d17e4d73865664", caption: "红银配色列车行驶高架", source: "小红书" }
      ]
    },
    {
      id: "ldxairport", name: "大兴机场线", color: "#003A70", onDark: true, kind: "机场专线",
      brief: "草桥直达大兴机场的市域快线，站内穹顶空间开阔。",
      photos: [
        { url: "https://agent.qianwen.com/service/8a801407-9177-4e/ced28702406f87b437722ab8181653b5", caption: "草桥站蓝色环形吊顶", source: "小红书" },
        { url: "https://agent.qianwen.com/service/8a801407-9177-4e/0da3d58288cf2a9468bddf47822ed6ba", caption: "草桥站站台与屏蔽门", source: "百度百科" },
        { url: "https://agent.qianwen.com/service/8a801407-9177-4e/66432666c22099d71e64266306f6eab6", caption: "拱形玻璃穹顶车站", source: "百度资讯" },
        { url: "https://agent.qianwen.com/service/8a801407-9177-4e/768dd2fef7c8515359f399e166846e2a", caption: "开往大兴机场方向站台", source: "海外网" }
      ]
    }
  ]
};
