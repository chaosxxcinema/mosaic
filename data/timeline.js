// Mosaic 時間軸數據
const timelineData = [
  {
    "type": "divider",
    "text": {
      "zh": "2026 · 此刻",
      "zh-cn": "2026 · 此刻",
      "en": "2026 · NOW"
    }
  },
  {
    "type": "node",
    "era": "era-now",
    "side": "right",
    "delay": 0.1,
    "date": "2026.05",
    "region": "CHINA",
    "tag": {
      "zh": "壓制",
      "zh-cn": "压制",
      "en": "SUPPRESSION"
    },
    "title": {
      "zh": "\"娘炮文化\"整治三週年",
      "zh-cn": "\"娘炮文化\"整治三周年",
      "en": "3 Years of \"Sissy Culture\" Crackdown"
    },
    "titleClass": "gradient-now",
    "summary": {
      "zh": "從 2021 年廣電總局發出的一紙通知開始，男性氣質審查已成為日常。回顧整治期間消失的劇集、被下架的演員，以及那些在審查中誕生的隱秘語言。",
      "zh-cn": "从 2021 年广电总局发出的一纸通知开始，男性气质审查已成为日常。回顾整治期间消失的剧集、被下架的演员，以及那些在审查中诞生的隐秘语言。",
      "en": "Since the 2021 NRTA directive, masculine presentation policing has become normalized. A review of erased dramas, deplatformed celebrities, and coded language born from censorship."
    },
    "action": {
      "zh": "閱讀",
      "zh-cn": "阅读",
      "en": "READ"
    }
  },
  {
    "type": "quote",
    "text": {
      "zh": "\"當下的傷口是熱的，<br>遠古的記憶是冷的，<br>但都是同一道彩虹的延續。\"",
      "zh-cn": "\"当下的伤口是热的，<br>远古的记忆是冷的，<br>但都是同一道彩虹的延续。\"",
      "en": "\"Fresh wounds are warm,<br>ancient memories are cold,<br>but both are extensions of the same rainbow.\""
    },
    "cite": {
      "zh": "— Mosaic 編輯部",
      "zh-cn": "— Mosaic 编辑部",
      "en": "— Mosaic Editorial"
    }
  },
  {
    "type": "divider",
    "text": {
      "zh": "2020 — 2024 · 收緊的年代",
      "zh-cn": "2020 — 2024 · 收紧的年代",
      "en": "2020 — 2024 · THE TIGHTENING"
    }
  },
  {
    "type": "node",
    "era": "era-recent",
    "side": "right",
    "delay": 0.3,
    "date": "2023.05",
    "region": "BEIJING",
    "tag": {
      "zh": "里程碑",
      "zh-cn": "里程碑",
      "en": "MILESTONE"
    },
    "title": {
      "zh": "北京同志中心永久關閉",
      "zh-cn": "北京同志中心永久关闭",
      "en": "Beijing LGBT Center Permanently Closes"
    },
    "summary": {
      "zh": "運營 15 年的中國最大 LGBTQ+ 倡導組織宣告關閉。創辦人的最後信件、員工與志願者的口述歷史，以及一個時代的終結。",
      "zh-cn": "运营 15 年的中国最大 LGBTQ+ 倡导组织宣告关闭。创办人的最后信件、员工与志愿者的口述历史，以及一个时代的终结。",
      "en": "China's largest LGBTQ+ advocacy org, operating 15 years, announces closure. Final letters, oral histories, and the end of an era."
    },
    "action": {
      "zh": "深度檔案",
      "zh-cn": "深度档案",
      "en": "DEEP DIVE"
    }
  },
  {
    "type": "node",
    "era": "era-recent",
    "side": "left",
    "delay": 0.4,
    "date": "2021.09",
    "region": "CHINA",
    "tag": {
      "zh": "政策",
      "zh-cn": "政策",
      "en": "POLICY"
    },
    "title": {
      "zh": "廣電總局禁止\"娘炮\"形象",
      "zh-cn": "广电总局禁止\"娘炮\"形象",
      "en": "NRTA Bans \"Effeminate\" Imagery"
    },
    "summary": {
      "zh": "《關於進一步加強文藝節目及其人員管理的通知》。一紙通知如何重塑整個娛樂產業，以及它背後對男性氣質的政治焦慮。",
      "zh-cn": "《关于进一步加强文艺节目及其人员管理的通知》。一纸通知如何重塑整个娱乐产业，以及它背后对男性气质的政治焦虑。",
      "en": "How a single directive reshaped the entertainment industry, and the political anxiety over masculinity behind it."
    },
    "action": {
      "zh": "本質分析",
      "zh-cn": "本质分析",
      "en": "ANALYSIS"
    }
  },
  {
    "type": "divider",
    "text": {
      "zh": "2010 — 2019 · 短暫的春天",
      "zh-cn": "2010 — 2019 · 短暂的春天",
      "en": "2010 — 2019 · A BRIEF SPRING"
    }
  },
  {
    "type": "node",
    "era": "era-mid",
    "side": "right",
    "delay": 0.5,
    "date": "2019.05.17",
    "region": "TAIWAN",
    "tag": {
      "zh": "里程碑",
      "zh-cn": "里程碑",
      "en": "MILESTONE"
    },
    "title": {
      "zh": "台灣同性婚姻合法化",
      "zh-cn": "台湾同性婚姻合法化",
      "en": "Taiwan Legalizes Same-Sex Marriage"
    },
    "summary": {
      "zh": "亞洲第一。從祁家威 1986 年遞交申請被拒，到 2017 年大法官釋字 748 號，再到 2019 年立法院三讀通過 — 33 年的等待。",
      "zh-cn": "亚洲第一。从祁家威 1986 年递交申请被拒，到 2017 年大法官释字 748 号，再到 2019 年立法院三读通过 — 33 年的等待。",
      "en": "First in Asia. From Chi Chia-wei's 1986 petition to the 2019 legislative vote — 33 years of waiting."
    },
    "action": {
      "zh": "時間線",
      "zh-cn": "时间线",
      "en": "TIMELINE"
    }
  },
  {
    "type": "node",
    "era": "era-mid",
    "side": "left",
    "delay": 0.6,
    "date": "2014.07",
    "region": "BEIJING",
    "tag": {
      "zh": "案例",
      "zh-cn": "案例",
      "en": "CASE"
    },
    "title": {
      "zh": "中國首例\"同性戀矯正治療\"勝訴",
      "zh-cn": "中国首例\"同性恋矫正治疗\"胜诉",
      "en": "China's First \"Conversion Therapy\" Victory"
    },
    "summary": {
      "zh": "小振訴重慶心語飄香心理諮詢中心案。北京海淀法院判決電擊「矯正」違法，矯正治療在中國第一次被司法明確否定。",
      "zh-cn": "小振诉重庆心语飘香心理咨询中心案。北京海淀法院判决电击\"矫正\"违法，矫正治疗在中国第一次被司法明确否定。",
      "en": "Xiao Zhen v. Xinyu Piaoxiang Counseling Center. Beijing court rules electro-shock \"correction\" illegal — conversion therapy rejected by law for the first time."
    },
    "action": {
      "zh": "判例詳情",
      "zh-cn": "判例详情",
      "en": "CASE DETAILS"
    }
  },
  {
    "type": "quote",
    "text": {
      "zh": "\"我們以為門開了，<br>結果只是窗縫透進的光。\"",
      "zh-cn": "\"我们以为门开了，<br>结果只是窗缝透进的光。\"",
      "en": "\"We thought the door had opened.<br>It was only light through a crack in the window.\""
    },
    "cite": {
      "zh": "— 一位北京志願者，2024",
      "zh-cn": "— 一位北京志愿者，2024",
      "en": "— A Beijing volunteer, 2024"
    }
  },
  {
    "type": "divider",
    "text": {
      "zh": "1990 — 2009 · 從黑暗中走出",
      "zh-cn": "1990 — 2009 · 从黑暗中走出",
      "en": "1990 — 2009 · EMERGING FROM DARKNESS"
    }
  },
  {
    "type": "node",
    "era": "era-distant",
    "side": "right",
    "delay": 0.7,
    "date": "2001.04.20",
    "region": "CHINA",
    "tag": {
      "zh": "里程碑",
      "zh-cn": "里程碑",
      "en": "MILESTONE"
    },
    "title": {
      "zh": "同性戀從《精神疾病分類》中刪除",
      "zh-cn": "同性恋从《精神疾病分类》中删除",
      "en": "Homosexuality Removed from Mental Illness List"
    },
    "summary": {
      "zh": "中華精神病學會發布《CCMD-3》，將同性戀從精神疾病列表中移除。一個遲到的承認：愛不是病。但「自我不和諧型同性戀」的尾巴，還在。",
      "zh-cn": "中华精神病学会发布《CCMD-3》，将同性恋从精神疾病列表中移除。一个迟到的承认：爱不是病。但\"自我不和谐型同性恋\"的尾巴，还在。",
      "en": "CCMD-3 removes homosexuality from mental illness list. A belated recognition: love is not a disease. But the \"ego-dystonic\" loophole remains."
    },
    "action": {
      "zh": "延伸閱讀",
      "zh-cn": "延伸阅读",
      "en": "READ MORE"
    }
  },
  {
    "type": "node",
    "era": "era-distant",
    "side": "left",
    "delay": 0.8,
    "date": "1997.10.01",
    "region": "CHINA",
    "tag": {
      "zh": "法律",
      "zh-cn": "法律",
      "en": "LAW"
    },
    "title": {
      "zh": "\"流氓罪\"取消，同性性行為非罪化",
      "zh-cn": "\"流氓罪\"取消，同性性行为非罪化",
      "en": "\"Hooliganism\" Abolished, Homosexuality Decriminalized"
    },
    "summary": {
      "zh": "新《刑法》生效，流氓罪被廢除。在此之前，同性性行為可以「流氓罪」被判七年以下有期徒刑。一個污名化條款的終結，但污名沒有結束。",
      "zh-cn": "新《刑法》生效，流氓罪被废除。在此之前，同性性行为可以\"流氓罪\"被判七年以下有期徒刑。一个污名化条款的终结，但污名没有结束。",
      "en": "New Criminal Law takes effect. Previously, same-sex acts could bring up to 7 years under \"hooliganism.\" The stigmatizing clause ends — the stigma does not."
    },
    "action": {
      "zh": "歷史背景",
      "zh-cn": "历史背景",
      "en": "CONTEXT"
    }
  },
  {
    "type": "divider",
    "text": {
      "zh": "古代 · 被遺忘的記憶",
      "zh-cn": "古代 · 被遗忘的记忆",
      "en": "ANCIENT · FORGOTTEN MEMORIES"
    }
  },
  {
    "type": "node",
    "era": "era-ancient",
    "side": "right",
    "delay": 0.9,
    "date": {
      "zh": "公元前",
      "zh-cn": "公元前",
      "en": "BCE"
    },
    "region": "CHINA",
    "tag": {
      "zh": "歷史",
      "zh-cn": "历史",
      "en": "HISTORY"
    },
    "title": {
      "zh": "斷袖之癖 · 漢哀帝與董賢",
      "zh-cn": "断袖之癖 · 汉哀帝与董贤",
      "en": "The Cut Sleeve · Emperor Ai & Dong Xian"
    },
    "summary": {
      "zh": "《漢書》記載，漢哀帝為不驚醒董賢而割斷衣袖。中國歷史上對同性愛意的書寫從未缺席 — 直到近代化進程中「傳統文化」被重新發明。",
      "zh-cn": "《汉书》记载，汉哀帝为不惊醒董贤而割断衣袖。中国历史上对同性爱意的书写从未缺席 — 直到近代化进程中\"传统文化\"被重新发明。",
      "en": "The Book of Han records Emperor Ai cutting his sleeve to not wake Dong Xian. Queer love was never absent from Chinese history — until \"tradition\" was reinvented by modernization."
    },
    "action": {
      "zh": "文化考",
      "zh-cn": "文化考",
      "en": "CULTURAL STUDY"
    }
  }
];
