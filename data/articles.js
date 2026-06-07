// Mosaic 文章數據
const items = [
  {
    "id": 1,
    "cat": "news",
    "country": "us",
    "date": "2026-04-30",
    "urgent": false,
    "source": {
      "en": "LGBTQ Nation",
      "zh": "LGBTQ Nation"
    },
    "title": {
      "en": "Trump Administration Reverses Pride Flag Policy at Stonewall Monument",
      "zh": "特朗普政府撤回石牆紀念碑驕傲旗幟禁令"
    },
    "summary": {
      "en": "The administration reversed its ban on flying rainbow Pride flags at federal properties, reinstating the flag at Stonewall National Monument after community pressure and legal challenges.",
      "zh": "政府在社區施壓和法律挑戰後撤回了在聯邦財產懸掛彩虹旗的禁令，恢復了石牆國家紀念碑的旗幟展示。"
    },
    "full": {
      "en": "The administration's reversal came after sustained pressure from LGBTQ+ advocacy groups and Democratic lawmakers who argued the ban violated First Amendment protections. The Stonewall National Monument, which commemorates the 1969 riots, will continue to fly the Pride flag during designated periods.",
      "zh": "政府的撤回決定源於 LGBTQ+ 倡議組織和民主黨議員的持續施壓。石牆國家紀念碑——紀念1969年暴動——將在指定時期繼續懸掛驕傲旗幟。"
    },
    "tags": [
      {
        "t": {
          "en": "🇺🇸 US",
          "zh": "🇺🇸 美國"
        },
        "c": "ct-us"
      },
      {
        "t": {
          "en": "⚖️ Policy",
          "zh": "⚖️ 政策"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "📰 News",
          "zh": "📰 新聞"
        },
        "c": "ct-news"
      }
    ],
    "color": "var(--glass-red)",
    "url": "https://lgbtqnation.com"
  },
  {
    "id": 2,
    "cat": "news",
    "country": "us",
    "date": "2026-04-28",
    "urgent": false,
    "source": {
      "en": "The Advocate",
      "zh": "The Advocate"
    },
    "title": {
      "en": "Senate Hearing Addresses 34% Surge in Anti-LGBTQ+ Hate Crimes",
      "zh": "參議院聽證會審查反 LGBTQ+ 仇恨犯罪激增34%問題"
    },
    "summary": {
      "en": "A Senate subcommittee examined a 34% year-over-year increase in anti-LGBTQ+ hate crimes, with witnesses testifying to gaps in federal protections.",
      "zh": "參議院小組委員會就反 LGBTQ+ 仇恨犯罪較去年同期增加34%舉行聽證，證人就聯邦保護的缺口作證。"
    },
    "full": {
      "en": "Data presented showed disproportionate targeting of transgender women of colour and youth. Committee members from both parties called for enhanced reporting requirements and dedicated federal investigation resources.",
      "zh": "提交的數據顯示有色人種跨性別女性和青少年受到不成比例的針對。兩黨委員會成員呼籲加強報告要求並為調查提供專項聯邦資源。"
    },
    "tags": [
      {
        "t": {
          "en": "🇺🇸 US",
          "zh": "🇺🇸 美國"
        },
        "c": "ct-us"
      },
      {
        "t": {
          "en": "⚖️ Rights",
          "zh": "⚖️ 權利"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "📰 News",
          "zh": "📰 新聞"
        },
        "c": "ct-news"
      }
    ],
    "color": "var(--glass-red)",
    "url": "https://advocate.com"
  },
  {
    "id": 3,
    "cat": "news",
    "country": "cn",
    "date": "2026-04-25",
    "urgent": false,
    "source": {
      "en": "Radio Free Asia",
      "zh": "自由亞洲電台"
    },
    "title": {
      "en": "Guangzhou LGBT Youth Group Shuttered After Police Warning",
      "zh": "廣州 LGBT 青年支持小組在警方警告後被迫關閉"
    },
    "summary": {
      "en": "A Guangzhou volunteer support group for LGBTQ+ youth ceased operations following a police warning citing unspecified \"social stability\" concerns.",
      "zh": "廣州一個服務 LGBTQ+ 青年的義工支持小組在接到警方以「社會穩定」為由的警告後停止運營。"
    },
    "full": {
      "en": "The group had operated for three years providing counselling and community connections. Human rights observers note this follows a broader pattern of restrictions on LGBTQ+ civil society since 2021.",
      "zh": "該小組為青年提供諮詢和社區連接，已運營三年。人權觀察人士指出，這延續了自2021年以來對 LGBTQ+ 公民社會限制的更廣泛模式。"
    },
    "tags": [
      {
        "t": {
          "en": "🇨🇳 China",
          "zh": "🇨🇳 中國"
        },
        "c": "ct-cn"
      },
      {
        "t": {
          "en": "📰 News",
          "zh": "📰 新聞"
        },
        "c": "ct-news"
      },
      {
        "t": {
          "en": "⚠️ Suppression",
          "zh": "⚠️ 打壓"
        },
        "c": "ct-urgent"
      }
    ],
    "color": "var(--glass-orange)",
    "url": "https://rfa.org"
  },
  {
    "id": 4,
    "cat": "news",
    "country": "cn",
    "date": "2026-04-20",
    "urgent": false,
    "source": {
      "en": "The Initium Media",
      "zh": "端傳媒"
    },
    "title": {
      "en": "Inside China's Underground LGBTQ+ Networks",
      "zh": "中國 LGBTQ+ 地下網絡內部：如何在審查中生存"
    },
    "summary": {
      "en": "An investigative report on how Chinese LGBTQ+ communities use coded language, private servers, and international platforms to survive online censorship.",
      "zh": "調查報告記錄中國 LGBTQ+ 社群如何使用隱語、私人伺服器和境外平台在網絡審查下生存。"
    },
    "full": {
      "en": "The report documents strategies including coded emoji, migration to encrypted platforms, and offline study groups disguised as book clubs. Authors interviewed 30+ community members across six cities.",
      "zh": "報告記錄了包括隱語表情、遷移至加密平台，以及偽裝成讀書俱樂部的線下小組等策略。作者在六個城市採訪了超過30名成員。"
    },
    "tags": [
      {
        "t": {
          "en": "🇨🇳 China",
          "zh": "🇨🇳 中國"
        },
        "c": "ct-cn"
      },
      {
        "t": {
          "en": "📰 Investigative",
          "zh": "📰 調查報道"
        },
        "c": "ct-news"
      }
    ],
    "color": "var(--glass-orange)",
    "url": "https://theinitium.com"
  },
  {
    "id": 5,
    "cat": "events",
    "country": "us",
    "date": "2026-05-01",
    "urgent": false,
    "source": {
      "en": "NYC Pride",
      "zh": "NYC Pride"
    },
    "title": {
      "en": "NYC Pride 2026: March Route Announced, Volunteer Registration Open",
      "zh": "2026 紐約驕傲遊行：路線公佈，義工報名開放"
    },
    "summary": {
      "en": "NYC Pride announced the 2026 march route through Manhattan. Theme: \"Resilience & Resistance.\" Volunteer registration now open, closes May 15.",
      "zh": "紐約驕傲遊行公佈2026年曼哈頓路線，主題為「韌性與抵抗」，義工報名開放至5月15日。"
    },
    "full": {
      "en": "New this year: a dedicated section for asylum seekers and immigrants. Volunteer roles include marshals, accessibility guides, and medical support.",
      "zh": "今年新增：為尋求庇護者和移民設立的專門環節。義工崗位包括遊行引導員、無障礙服務和醫療支持。"
    },
    "tags": [
      {
        "t": {
          "en": "🇺🇸 NYC",
          "zh": "🇺🇸 紐約"
        },
        "c": "ct-us"
      },
      {
        "t": {
          "en": "🗓 Event",
          "zh": "🗓 活動"
        },
        "c": "ct-event"
      },
      {
        "t": {
          "en": "🆓 Free",
          "zh": "🆓 免費"
        },
        "c": "ct-free"
      }
    ],
    "color": "var(--glass-orange)",
    "url": "https://nycpride.org"
  },
  {
    "id": 6,
    "cat": "events",
    "country": "us",
    "date": "2026-04-26",
    "urgent": false,
    "source": {
      "en": "Immigration Equality",
      "zh": "Immigration Equality"
    },
    "title": {
      "en": "Free Legal Clinic: LGBTQ+ Asylum Seekers — NYC, May 8",
      "zh": "免費法律診所：LGBTQ+ 庇護申請者——紐約，5月8日"
    },
    "summary": {
      "en": "Free in-person legal clinic at the LGBT Community Center, May 8, 10AM–4PM. Interpretation available in Spanish, Mandarin, and Cantonese.",
      "zh": "5月8日上午10點至下午4點在 LGBT 社群中心舉辦免費現場法律診所，提供西班牙語、普通話和廣東話口譯。"
    },
    "full": {
      "en": "Volunteer attorneys provide 30-minute consultations on asylum eligibility and documentation. No appointment necessary. Remote video call option available with prior registration.",
      "zh": "義工律師提供30分鐘庇護資格和文件諮詢。無需預約。提前報名可選擇遠程視頻諮詢。"
    },
    "tags": [
      {
        "t": {
          "en": "🇺🇸 NYC",
          "zh": "🇺🇸 紐約"
        },
        "c": "ct-us"
      },
      {
        "t": {
          "en": "🗓 May 8",
          "zh": "🗓 5月8日"
        },
        "c": "ct-event"
      },
      {
        "t": {
          "en": "🆓 Free",
          "zh": "🆓 免費"
        },
        "c": "ct-free"
      },
      {
        "t": {
          "en": "⚖️ Asylum",
          "zh": "⚖️ 庇護"
        },
        "c": "ct-legal"
      }
    ],
    "color": "var(--glass-orange)",
    "url": "https://immigrationequality.org"
  },
  {
    "id": 7,
    "cat": "events",
    "country": "us",
    "date": "2026-04-22",
    "urgent": false,
    "source": {
      "en": "The Trevor Project",
      "zh": "Trevor Project"
    },
    "title": {
      "en": "Free Online Support Group: LGBTQ+ Youth 13–24 — Every Tuesday 7PM ET",
      "zh": "免費線上支持小組：LGBTQ+ 青少年13–24歲——每週二晚7點"
    },
    "summary": {
      "en": "Free weekly online support groups for LGBTQ+ youth, moderated by trained counsellors. No registration required. Anonymous participation available.",
      "zh": "為 LGBTQ+ 青少年提供免費每週線上支持小組，由受訓輔導員主持，無需報名，可匿名參與。"
    },
    "full": {
      "en": "Crisis support also available 24/7 through TrevorLifeline at 1-866-488-7386 or by texting START to 678-678.",
      "zh": "危機支持可通過撥打 TrevorLifeline 1-866-488-7386 或發短信 START 至 678-678 獲得24/7服務。"
    },
    "tags": [
      {
        "t": {
          "en": "🗓 Weekly",
          "zh": "🗓 每週"
        },
        "c": "ct-event"
      },
      {
        "t": {
          "en": "💻 Online",
          "zh": "💻 線上"
        },
        "c": "ct-event"
      },
      {
        "t": {
          "en": "🆓 Free",
          "zh": "🆓 免費"
        },
        "c": "ct-free"
      },
      {
        "t": {
          "en": "🧠 Mental Health",
          "zh": "🧠 心理健康"
        },
        "c": "ct-health"
      }
    ],
    "color": "var(--glass-orange)",
    "url": "https://thetrevorproject.org"
  },
  {
    "id": 8,
    "cat": "legal",
    "country": "us",
    "date": "2026-04-29",
    "urgent": false,
    "source": {
      "en": "Lambda Legal",
      "zh": "Lambda Legal"
    },
    "title": {
      "en": "Know Your Rights: LGBTQ+ Employees & Federal Protections 2026",
      "zh": "瞭解你的權利：2026年 LGBTQ+ 僱員聯邦保護指南"
    },
    "summary": {
      "en": "Updated comprehensive guide on federal workplace protections for LGBTQ+ employees following recent Supreme Court and circuit court decisions. Free to download.",
      "zh": "根據最高法院和巡迴法院最近判決更新的 LGBTQ+ 僱員聯邦職場保護全面指南，免費下載。"
    },
    "full": {
      "en": "Covers Title VII protections from Bostock v. Clayton County, recent circuit interpretations, state-level gaps, and practical guidance for workers who have experienced discrimination.",
      "zh": "涵蓋 Bostock 案中確認的第七章保護、巡迴法院近期解釋、州級保護缺口，以及遭受歧視工作者的實用指引。"
    },
    "tags": [
      {
        "t": {
          "en": "🇺🇸 US",
          "zh": "🇺🇸 美國"
        },
        "c": "ct-us"
      },
      {
        "t": {
          "en": "⚖️ Workplace",
          "zh": "⚖️ 職場"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🆓 Free Guide",
          "zh": "🆓 免費指南"
        },
        "c": "ct-free"
      }
    ],
    "color": "var(--glass-violet)",
    "url": "https://lambdalegal.org"
  },
  {
    "id": 9,
    "cat": "legal",
    "country": "us",
    "date": "2026-04-18",
    "urgent": true,
    "source": {
      "en": "ACLU",
      "zh": "ACLU"
    },
    "title": {
      "en": "URGENT: Gender Marker Changes May Be Restricted After May 15",
      "zh": "緊急：性別標記更改可能在5月15日後受限"
    },
    "summary": {
      "en": "ACLU urges transgender individuals to expedite gender marker updates on federal documents before a new executive order takes effect May 15. Free legal support available.",
      "zh": "ACLU 敦促跨性別人士在新行政令5月15日生效前加急更新聯邦文件性別標記，提供免費法律支持。"
    },
    "full": {
      "en": "Contact the ACLU's LGBTQ+ Rights Project at 212-549-2627 or through their online intake form. Services are free of charge. Affects passports, Social Security cards, and other federal documents.",
      "zh": "請致電 ACLU 的 LGBTQ+ 權利項目 212-549-2627 或通過在線接待表聯繫。服務免費。影響護照、社會安全卡和其他聯邦文件。"
    },
    "tags": [
      {
        "t": {
          "en": "🆘 Urgent",
          "zh": "🆘 緊急"
        },
        "c": "ct-urgent"
      },
      {
        "t": {
          "en": "🏳️‍⚧️ Trans",
          "zh": "🏳️‍⚧️ 跨性別"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🆓 Free Help",
          "zh": "🆓 免費援助"
        },
        "c": "ct-free"
      }
    ],
    "color": "var(--glass-red)",
    "url": "https://aclu.org"
  },
  {
    "id": 10,
    "cat": "legal",
    "country": "us",
    "date": "2026-04-10",
    "urgent": false,
    "source": {
      "en": "Immigration Equality",
      "zh": "Immigration Equality"
    },
    "title": {
      "en": "Updated 2026 Asylum Guide for LGBTQ+ Applicants — Now in Mandarin",
      "zh": "2026年 LGBTQ+ 庇護申請更新指南——現提供普通話版"
    },
    "summary": {
      "en": "Updated guide reflecting 2025–2026 changes in processing times, documentation requirements, and legal precedents. Available in English, Spanish, and Mandarin.",
      "zh": "反映2025–2026年處理時間、文件要求和法律先例變化的更新指南，提供英語、西班牙語和普通話版本。"
    },
    "full": {
      "en": "Key updates: revised credible fear interview tips, new documentation strategies for applicants from countries with no official persecution record, updated expedited removal protections.",
      "zh": "主要更新：修訂後的可信恐懼面談準備提示，針對沒有正式迫害記錄國家申請人的新文件策略，更新的加速遣返保護信息。"
    },
    "tags": [
      {
        "t": {
          "en": "⚖️ Asylum",
          "zh": "⚖️ 庇護"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🌏 Immigration",
          "zh": "🌏 移民"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🆓 Free",
          "zh": "🆓 免費"
        },
        "c": "ct-free"
      },
      {
        "t": {
          "en": "🈳 中文",
          "zh": "🈳 中文"
        },
        "c": "ct-cn"
      }
    ],
    "color": "var(--glass-violet)",
    "url": "https://immigrationequality.org"
  },
  {
    "id": 11,
    "cat": "health",
    "country": "us",
    "date": "2026-04-27",
    "urgent": false,
    "source": {
      "en": "GLMA",
      "zh": "GLMA"
    },
    "title": {
      "en": "Free HIV Testing Events Across 8 US Cities — May 2026",
      "zh": "美國8個城市免費 HIV 檢測活動——2026年5月"
    },
    "summary": {
      "en": "Free HIV testing events in NYC, LA, Chicago, Houston, Atlanta, Seattle, Denver, and Boston throughout May. No insurance or ID required. Results in 20 minutes.",
      "zh": "整個5月在紐約、洛杉磯、芝加哥、休斯頓、亞特蘭大、西雅圖、丹佛和波士頓舉辦免費 HIV 檢測。不需要保險或身份證件，20分鐘出結果。"
    },
    "full": {
      "en": "On-site counselling and PrEP referrals available. Find nearest event at glma.org/freetesting or text HITEST to 55753.",
      "zh": "提供現場諮詢和 PrEP 轉介。請訪問 glma.org/freetesting 或發短信 HITEST 至55753查找最近活動。"
    },
    "tags": [
      {
        "t": {
          "en": "🇺🇸 US",
          "zh": "🇺🇸 美國"
        },
        "c": "ct-us"
      },
      {
        "t": {
          "en": "🆓 Free",
          "zh": "🆓 免費"
        },
        "c": "ct-free"
      },
      {
        "t": {
          "en": "🏥 HIV",
          "zh": "🏥 HIV"
        },
        "c": "ct-health"
      },
      {
        "t": {
          "en": "🗓 May",
          "zh": "🗓 五月"
        },
        "c": "ct-event"
      }
    ],
    "color": "var(--glass-green)",
    "url": "https://glma.org"
  },
  {
    "id": 12,
    "cat": "health",
    "country": "us",
    "date": "2026-04-23",
    "urgent": false,
    "source": {
      "en": "Planned Parenthood",
      "zh": "Planned Parenthood"
    },
    "title": {
      "en": "Trans-Affirming Care: Updated Directory of Clinics Accepting New Patients",
      "zh": "跨性別友善醫療：接受新患者診所更新目錄"
    },
    "summary": {
      "en": "Updated national directory of trans-affirming providers. Filters for HRT, surgery consultations, mental health, youth services, and sliding scale fees. Telehealth options available.",
      "zh": "更新的全國跨性別友善醫療服務提供者目錄，可按荷爾蒙療法、手術諮詢、心理健康、青少年服務篩選，提供遠程醫療選項。"
    },
    "full": {
      "en": "Covers all 50 states. Many providers offer telehealth. Access at plannedparenthood.org/trans-health.",
      "zh": "涵蓋全美50個州。許多提供者提供遠程醫療。請訪問 plannedparenthood.org/trans-health 查閱。"
    },
    "tags": [
      {
        "t": {
          "en": "🏳️‍⚧️ Trans Health",
          "zh": "🏳️‍⚧️ 跨性別醫療"
        },
        "c": "ct-health"
      },
      {
        "t": {
          "en": "🏥 HRT",
          "zh": "🏥 荷爾蒙"
        },
        "c": "ct-health"
      },
      {
        "t": {
          "en": "🇺🇸 National",
          "zh": "🇺🇸 全美"
        },
        "c": "ct-us"
      }
    ],
    "color": "var(--glass-green)",
    "url": "https://plannedparenthood.org"
  },
  {
    "id": 13,
    "cat": "guest",
    "country": "us",
    "date": "2026-04-30",
    "urgent": false,
    "source": {
      "en": "Guest Voice",
      "zh": "特邀嘉賓"
    },
    "author": {
      "name": "Maryam K.",
      "bio": {
        "en": "Trans woman, asylum seeker from Iran, currently living in New York",
        "zh": "跨性別女性，來自伊朗的庇護尋求者，目前居住在紐約"
      }
    },
    "title": {
      "en": "Why I Left Everything Behind: A Trans Woman's Asylum Story",
      "zh": "為什麼我拋下一切：一位跨性別女性的庇護故事"
    },
    "summary": {
      "en": "A personal account of fleeing persecution in Iran, navigating the asylum system alone, and finding community in New York.",
      "zh": "一個逃離伊朗迫害、獨自應對庇護制度，並在紐約找到社群的親身經歷。"
    },
    "full": {
      "en": "I had 48 hours to leave. My family found out. The morality police were asking questions. I packed one bag and bought the first flight I could afford. Three years later, I'm still waiting for my asylum hearing — but I'm alive, and I have people who call me by my real name.",
      "zh": "我有48小時時間離開。我的家人發現了。道德警察在詢問。我打包一個包，買了能負擔得起的第一班航班。三年後，我仍在等待庇護聽證會——但我還活著，而且有人用我真正的名字稱呼我。"
    },
    "tags": [
      {
        "t": {
          "en": "💬 Guest Voice",
          "zh": "💬 特邀嘉賓"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🏳️‍⚧️ Trans",
          "zh": "🏳️‍⚧️ 跨性別"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "⚖️ Asylum",
          "zh": "⚖️ 庇護"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🇮🇷 Iran",
          "zh": "🇮🇷 伊朗"
        },
        "c": "ct-urgent"
      }
    ],
    "color": "var(--glass-pink)",
    "url": "#guest"
  },
  {
    "id": 14,
    "cat": "guest",
    "country": "cn",
    "date": "2026-04-25",
    "urgent": false,
    "source": {
      "en": "Guest Voice",
      "zh": "特邀嘉賓"
    },
    "author": {
      "name": "Alex L.",
      "bio": {
        "en": "Tech worker in Shenzhen, digital privacy advocate",
        "zh": "深圳科技工作者，數字隱私倡導者"
      }
    },
    "title": {
      "en": "Pride Flags We Can't Wave: Digital Resistance in China",
      "zh": "我們不能揮舞的彩虹旗：中國的數字抵抗"
    },
    "summary": {
      "en": "An essay on how young LGBTQ+ people in China build community through coded language, secret groups, and encrypted apps.",
      "zh": "一篇關於中國年輕 LGBTQ+ 群體如何通過隱語、秘密小組和加密應用建立社群的文章。"
    },
    "full": {
      "en": "We don't march. We don't protest. But we exist, in Telegram channels with emoji passwords, in WeChat groups that dissolve every week, in code-switching conversations that outsiders can't decode. It's exhausting. But it's ours.",
      "zh": "我們不遊行。我們不抗議。但我們存在——在有表情密碼的 Telegram 頻道裡，在每週解散的微信群裡，在外人無法解讀的暗語對話裡。這很累。但這是我們的。"
    },
    "tags": [
      {
        "t": {
          "en": "💬 Guest Voice",
          "zh": "💬 特邀嘉賓"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🇨🇳 China",
          "zh": "🇨🇳 中國"
        },
        "c": "ct-cn"
      },
      {
        "t": {
          "en": "📱 Digital",
          "zh": "📱 數字"
        },
        "c": "ct-news"
      },
      {
        "t": {
          "en": "🛡 Resistance",
          "zh": "🛡 抵抗"
        },
        "c": "ct-resistance"
      }
    ],
    "color": "var(--glass-pink)",
    "url": "#guest"
  },
  {
    "id": 15,
    "cat": "guest",
    "country": "all",
    "date": "2026-04-20",
    "urgent": false,
    "source": {
      "en": "Guest Voice",
      "zh": "特邀嘉賓"
    },
    "author": {
      "name": "Anonymous",
      "bio": {
        "en": "LGBTQ+ person from a country where being out isn't safe yet",
        "zh": "來自尚不安全出櫃國家的 LGBTQ+ 人士"
      }
    },
    "title": {
      "en": "On Hope: What Pride Means When You're Still in the Closet",
      "zh": "關於希望：當你還在櫃中時，驕傲月意味著什麼"
    },
    "summary": {
      "en": "A reflective essay on watching Pride celebrations from afar, finding strength in small acts of self-affirmation, and waiting for the day when celebration doesn't feel dangerous.",
      "zh": "一篇關於遠觀驕傲慶典、在小小的自我肯定中尋找力量，並等待慶祝不再感到危險的一天的反思文章。"
    },
    "full": {
      "en": "I see your parades. I see your flags. I see your joy. And I'm happy for you — genuinely. But my pride is quieter. It's in the rainbow sticker hidden in my journal. It's in the playlist I never let play on speaker. It's in hoping that someday, I won't have to hide.",
      "zh": "我看到你們的遊行。我看到你們的旗幟。我看到你們的喜悅。我為你們感到高興——真心的。但我的驕傲更安靜。它在我日記本裡藏著的彩虹貼紙裡。它在我從不外放的播放列表裡。它在希望有一天，我不必再躲藏。"
    },
    "tags": [
      {
        "t": {
          "en": "💬 Guest Voice",
          "zh": "💬 特邀嘉賓"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🧠 Mental Health",
          "zh": "🧠 心理健康"
        },
        "c": "ct-health"
      },
      {
        "t": {
          "en": "🌈 Pride",
          "zh": "🌈 驕傲"
        },
        "c": "ct-event"
      }
    ],
    "color": "var(--glass-pink)",
    "url": "#guest"
  },
  {
    "id": 16,
    "cat": "guest",
    "country": "ru",
    "date": "2026-04-18",
    "urgent": false,
    "source": {
      "en": "Guest Voice",
      "zh": "特邀嘉賓"
    },
    "author": {
      "name": "Dmitry K.",
      "bio": {
        "en": "Former activist who fled Russia in 2023, now living in exile in Berlin",
        "zh": "2023年逃離俄羅斯的前活動人士，現流亡柏林"
      }
    },
    "title": {
      "en": "The Night I Became a Criminal: Leaving Russia After the \"Gay Propaganda\" Law",
      "zh": "我成為罪犯的那個夜晚：在「同性戀宣傳」法之後離開俄羅斯"
    },
    "summary": {
      "en": "A first-person account of the decision to flee Russia after LGBTQ+ activism was criminalized, the journey through the border, and the grief of leaving home forever.",
      "zh": "一個關於俄羅斯將 LGBTQ+ 活動定罪後決定逃離的第一人稱敘述、穿越邊境的旅程，以及永遠離開家園的悲傷。"
    },
    "full": {
      "en": "I packed one suitcase. My passport. A photo of my grandmother. I left everything else — my books, my cat, my life. The new law made my existence illegal overnight. Not just who I love, but who I am. I crossed the border at 3am in a shared taxi with two other people who also couldn't stay. We didn't talk. We all knew. When the taxi driver dropped us off and said \"good luck,\" I realized I would never see Moscow again. I am 28 years old and I am stateless. I am a criminal for loving openly. But I am alive. And that has to be enough for now.",
      "zh": "我打包了一個行李箱。我的護照。我祖母的照片。我留下了其他一切——我的書、我的貓、我的生活。新法律在一夜之間讓我的存在變成非法。不僅僅是我愛的人，而是我是誰。我在凌晨3點和另外兩個同樣無法留下的人一起坐共享出租車穿越邊境。我們沒有說話。我們都知道。當出租車司機送我們下車並說「祝你好運」時，我意識到我再也見不到莫斯科了。我28歲，我無國籍。我因為公開地愛而成為罪犯。但我活著。現在這必須足夠了。"
    },
    "tags": [
      {
        "t": {
          "en": "💬 Guest Voice",
          "zh": "💬 特邀嘉賓"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🇷🇺 Russia",
          "zh": "🇷🇺 俄羅斯"
        },
        "c": "ct-ru"
      },
      {
        "t": {
          "en": "⚖️ Persecution",
          "zh": "⚖️ 迫害"
        },
        "c": "ct-persecution"
      },
      {
        "t": {
          "en": "🛡 Resistance",
          "zh": "🛡 抵抗"
        },
        "c": "ct-resistance"
      }
    ],
    "color": "var(--glass-pink)",
    "url": "#guest"
  },
  {
    "id": 17,
    "cat": "guest",
    "country": "sa",
    "date": "2026-04-15",
    "urgent": false,
    "source": {
      "en": "Guest Voice",
      "zh": "特邀嘉賓"
    },
    "author": {
      "name": "Layla A.",
      "bio": {
        "en": "Saudi writer living in the UK, documenting stories from the Gulf region",
        "zh": "居住在英國的沙特作家，記錄海灣地區的故事"
      }
    },
    "title": {
      "en": "Invisible Under the Abaya: Queer Women in Saudi Arabia",
      "zh": "罩袍下的隱形人：沙烏地阿拉伯的酷兒女性"
    },
    "summary": {
      "en": "An essay exploring the unique challenges faced by queer women in Saudi Arabia, where patriarchal control makes LGBTQ+ identity doubly invisible.",
      "zh": "一篇探討沙烏地阿拉伯酷兒女性面臨的獨特挑戰的文章，父權控制使 LGBTQ+ 身份雙重隱形。"
    },
    "full": {
      "en": "In Saudi Arabia, queer women face a paradox: we are invisible because we are women, and invisible because we are queer. The male guardianship system means our movements are tracked, our phones monitored by brothers and fathers. But it also means we are dismissed — our relationships seen as \"just friendship\" because women loving women is unthinkable to the men who police us. We exist in the margins of margins. We meet in shopping malls, pretending to browse. We communicate through poetry that others don't recognize. We survive by being underestimated. I left three years ago. But my friends are still there, living in a silence so deep it feels like suffocation.",
      "zh": "在沙烏地阿拉伯，酷兒女性面臨一個悖論：我們因為是女性而隱形，又因為是酷兒而隱形。男性監護制度意味著我們的行動被追蹤，我們的手機被兄弟和父親監控。但這也意味著我們被忽視——我們的關係被視為「只是友誼」，因為對於警察我們的男人來說，女性愛女性是不可想像的。我們存在於邊緣的邊緣。我們在購物中心見面，假裝瀏覽。我們通過別人無法識別的詩歌交流。我們通過被低估而生存。我三年前離開了。但我的朋友們還在那裡，生活在一種深到令人窒息的沉默中。"
    },
    "tags": [
      {
        "t": {
          "en": "💬 Guest Voice",
          "zh": "💬 特邀嘉賓"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🇸🇦 Saudi Arabia",
          "zh": "🇸🇦 沙烏地"
        },
        "c": "ct-sa"
      },
      {
        "t": {
          "en": "⚖️ Persecution",
          "zh": "⚖️ 迫害"
        },
        "c": "ct-persecution"
      },
      {
        "t": {
          "en": "🧠 Mental Health",
          "zh": "🧠 心理健康"
        },
        "c": "ct-health"
      }
    ],
    "color": "var(--glass-pink)",
    "url": "#guest"
  },
  {
    "id": 18,
    "cat": "guest",
    "country": "ug",
    "date": "2026-04-12",
    "urgent": false,
    "source": {
      "en": "Guest Voice",
      "zh": "特邀嘉賓"
    },
    "author": {
      "name": "Kato M.",
      "bio": {
        "en": "Ugandan LGBTQ+ activist seeking asylum in Kenya, former community organizer in Kampala",
        "zh": "在肯尼亞尋求庇護的烏干達 LGBTQ+ 活動人士，前坎帕拉社區組織者"
      }
    },
    "title": {
      "en": "After the Anti-Homosexuality Act: Life in Hiding in Uganda",
      "zh": "反同性戀法之後：在烏干達躲藏的生活"
    },
    "summary": {
      "en": "A testimony about surviving under Uganda's draconian anti-LGBTQ+ law, losing community, and the impossible choice between safety and home.",
      "zh": "一個關於在烏干達嚴酷的反 LGBTQ+ 法律下生存、失去社群、以及在安全和家園之間不可能選擇的證詞。"
    },
    "full": {
      "en": "The 2023 Anti-Homosexuality Act made it a crime to even identify as LGBTQ+. Landlords evict us. Employers fire us. Neighbors report us for reward money. I ran a support group for young queer people — 30 members who trusted me. After the law passed, I had to tell them to scatter. Don't meet. Don't gather. Burn anything with rainbow colors. Some went to Kenya. Some went deeper into hiding. Three were arrested. I don't know where they are now. I live with a friend who lies and says I'm her cousin. I can't work. I can't go outside much. I applied for asylum in Kenya but the process takes years. Every day I wake up and think: is today the day someone reports me? This is not life. This is survival. And I am so, so tired.",
      "zh": "2023年反同性戀法將即使認同為 LGBTQ+ 也定為犯罪。房東驅逐我們。僱主解僱我們。鄰居為獎金舉報我們。我為年輕的酷兒人士經營一個支持小組——30名信任我的成員。法律通過後，我不得不告訴他們分散。不要見面。不要聚集。燒掉任何有彩虹色的東西。有些去了肯尼亞。有些躲得更深。三個被逮捕了。我不知道他們現在在哪裡。我和一個朋友住在一起，她謊稱我是她的表親。我不能工作。我不能經常外出。我在肯尼亞申請了庇護，但過程需要數年。每天我醒來都在想：今天是有人舉報我的日子嗎？這不是生活。這是生存。我太累了，太累了。"
    },
    "tags": [
      {
        "t": {
          "en": "💬 Guest Voice",
          "zh": "💬 特邀嘉賓"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🇺🇬 Uganda",
          "zh": "🇺🇬 烏干達"
        },
        "c": "ct-ug"
      },
      {
        "t": {
          "en": "⚖️ Persecution",
          "zh": "⚖️ 迫害"
        },
        "c": "ct-persecution"
      },
      {
        "t": {
          "en": "🚫 Ban",
          "zh": "🚫 禁令"
        },
        "c": "ct-ban"
      }
    ],
    "color": "var(--glass-pink)",
    "url": "#guest"
  },
  {
    "id": 19,
    "cat": "guest",
    "country": "cn",
    "date": "2026-04-10",
    "urgent": false,
    "source": {
      "en": "Guest Voice",
      "zh": "特邀嘉賓"
    },
    "author": {
      "name": "Wei L.",
      "bio": {
        "en": "Former university student in Shanghai, now studying abroad in Canada",
        "zh": "前上海大學生，現在加拿大留學"
      }
    },
    "title": {
      "en": "The Disappearance of Queer Student Groups in China",
      "zh": "中國酷兒學生組織的消失"
    },
    "summary": {
      "en": "A chronicle of how university LGBTQ+ organizations were systematically dismantled across China between 2021-2024, and what was lost.",
      "zh": "一篇記錄2021-2024年間中國各大學 LGBTQ+ 組織如何被系統性拆除，以及失去了什麼的編年史。"
    },
    "full": {
      "en": "In 2021, my university had a small but vibrant queer student alliance. We organized movie nights, peer counseling, and annual pride week events. By 2022, we were told to \"suspend activities pending review.\" By 2023, our faculty advisor was reassigned. By 2024, our WeChat group was deleted by the platform. We weren't banned explicitly — we just ceased to exist, erased from university records as if we'd never been there. I came to Canada for grad school last year. I joined the LGBTQ+ student union here and I cried during my first meeting. Not because I was sad, but because I'd forgotten what it felt like to exist openly. To have a website. To put up posters. To be allowed to gather. In China, we don't have that anymore. And an entire generation is growing up without even knowing it existed.",
      "zh": "2021年，我的大學有一個小而充滿活力的酷兒學生聯盟。我們組織電影之夜、同儕輔導和年度驕傲週活動。到2022年，我們被告知「暫停活動待審查」。到2023年，我們的教師顧問被調職。到2024年，我們的微信群被平台刪除。我們沒有被明確禁止——我們只是不復存在了，從大學記錄中抹除，就好像我們從來沒有存在過一樣。去年我來加拿大讀研究生。我加入了這裡的 LGBTQ+ 學生會，在我第一次會議期間哭了。不是因為我難過，而是因為我忘記了公開存在的感覺。有一個網站。貼海報。被允許聚集。在中國，我們不再擁有這些了。整整一代人在成長過程中甚至不知道它曾經存在過。"
    },
    "tags": [
      {
        "t": {
          "en": "💬 Guest Voice",
          "zh": "💬 特邀嘉賓"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🇨🇳 China",
          "zh": "🇨🇳 中國"
        },
        "c": "ct-cn"
      },
      {
        "t": {
          "en": "📉 Rollback",
          "zh": "📉 倒退"
        },
        "c": "ct-rollback"
      },
      {
        "t": {
          "en": "💪 Activism",
          "zh": "💪 活動主義"
        },
        "c": "ct-news"
      }
    ],
    "color": "var(--glass-pink)",
    "url": "#guest"
  },
  {
    "id": 20,
    "cat": "guest",
    "country": "ir",
    "date": "2026-04-08",
    "urgent": false,
    "source": {
      "en": "Guest Voice",
      "zh": "特邀嘉賓"
    },
    "author": {
      "name": "Arash N.",
      "bio": {
        "en": "Iranian trans man who escaped to Turkey, awaiting UNHCR resettlement",
        "zh": "逃到土耳其的伊朗跨性別男性，等待聯合國難民署重新安置"
      }
    },
    "title": {
      "en": "Between Execution and Forced Surgery: Being Trans in Iran",
      "zh": "在處決和強制手術之間：在伊朗成為跨性別者"
    },
    "summary": {
      "en": "An account of Iran's paradoxical policy: homosexuality is punishable by death, but the state funds gender reassignment surgery — forcing trans people into impossible choices.",
      "zh": "一個關於伊朗矛盾政策的敘述：同性戀可判處死刑，但國家資助性別重置手術——迫使跨性別者做出不可能的選擇。"
    },
    "full": {
      "en": "Iran has one of the world's strangest LGBTQ+ policies: they will execute you for being gay, but they will pay for your gender reassignment surgery. Why? Because they don't believe in homosexuality, but they believe in \"correcting\" gender. I am a trans man. I knew I was male since I was 12. But in Iran, to access testosterone or surgery, I had to prove I was \"really\" trans — which meant proving I was attracted to women. If I were attracted to men, I would be classified as a confused gay woman and denied treatment. So I lied. I performed straightness. I got my documents. But then I realized: even after surgery, I would still be illegal. A trans man attracted to men is still \"homosexual\" in their eyes. I would never be safe. So I fled to Turkey. I have been waiting for resettlement for 18 months. I am in limbo. But I am alive.",
      "zh": "伊朗有世界上最奇怪的 LGBTQ+ 政策之一：他們會因為你是同性戀而處決你，但他們會為你的性別重置手術付費。為什麼？因為他們不相信同性戀，但他們相信「糾正」性別。我是一個跨性別男性。我從12歲起就知道我是男性。但在伊朗，要獲得睪固酮或手術，我必須證明我「真的」是跨性別——這意味著證明我被女性吸引。如果我被男性吸引，我會被歸類為困惑的女同性戀並被拒絕治療。所以我撒謊了。我表演異性戀。我得到了我的文件。但後來我意識到：即使在手術後，我仍然是非法的。一個被男性吸引的跨性別男性在他們眼中仍然是「同性戀」。我永遠不會安全。所以我逃到了土耳其。我已經等待重新安置18個月了。我處於懸而未決的狀態。但我活著。"
    },
    "tags": [
      {
        "t": {
          "en": "💬 Guest Voice",
          "zh": "💬 特邀嘉賓"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🇮🇷 Iran",
          "zh": "🇮🇷 伊朗"
        },
        "c": "ct-ir"
      },
      {
        "t": {
          "en": "🏳️‍⚧️ Trans",
          "zh": "🏳️‍⚧️ 跨性別"
        },
        "c": "ct-health"
      },
      {
        "t": {
          "en": "⚖️ Persecution",
          "zh": "⚖️ 迫害"
        },
        "c": "ct-persecution"
      }
    ],
    "color": "var(--glass-pink)",
    "url": "#guest"
  },
  {
    "id": 21,
    "cat": "guest",
    "country": "us",
    "date": "2026-04-05",
    "urgent": false,
    "source": {
      "en": "Guest Voice",
      "zh": "特邀嘉賓"
    },
    "author": {
      "name": "Jordan T.",
      "bio": {
        "en": "Non-binary college student in Texas, youth organizer against anti-trans legislation",
        "zh": "德克薩斯州非二元大學生，反對反跨性別立法的青年組織者"
      }
    },
    "title": {
      "en": "Growing Up Trans in Red America: A Gen Z Perspective",
      "zh": "在紅色美國長大成為跨性別者：Z世代的視角"
    },
    "summary": {
      "en": "A reflection on coming of age during the current wave of anti-trans legislation in conservative US states, and finding community despite institutional hostility.",
      "zh": "一篇關於在美國保守州當前反跨性別立法浪潮中成年，以及儘管制度敵意仍找到社群的反思。"
    },
    "full": {
      "en": "I came out as non-binary at 16, in 2022. That was the same year Texas tried to classify gender-affirming care as child abuse. I watched my state legislature debate whether I should be allowed to exist. I watched my governor call my healthcare \"mutilation.\" I am 20 now. I have spent my entire young adulthood fighting just to be recognized. But here's what they don't expect: we are organizing. Gen Z trans kids in Texas are not giving up. We run mutual aid networks to help people access HRT. We share resources on how to change documents before laws change. We create art and zines and TikToks. We refuse to be erased. They think if they make enough laws, we will disappear. But we won't. We are already here. And we are not going anywhere.",
      "zh": "我在2022年16歲時出櫃為非二元。那一年德克薩斯州試圖將性別肯定護理歸類為虐待兒童。我看著我的州立法機構辯論我是否應該被允許存在。我看著我的州長稱我的醫療保健為「毀容」。我現在20歲了。我整個年輕的成年時期都在為被承認而戰鬥。但這是他們沒有預料到的：我們正在組織。德克薩斯州的Z世代跨性別孩子不會放棄。我們運營互助網絡幫助人們獲得HRT。我們分享如何在法律改變之前更改文件的資源。我們創作藝術、雜誌和TikTok。我們拒絕被抹除。他們認為如果他們制定足夠的法律，我們就會消失。但我們不會。我們已經在這裡了。我們哪兒也不去。"
    },
    "tags": [
      {
        "t": {
          "en": "💬 Guest Voice",
          "zh": "💬 特邀嘉賓"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🇺🇸 US",
          "zh": "🇺🇸 美國"
        },
        "c": "ct-us"
      },
      {
        "t": {
          "en": "🏳️‍⚧️ Trans",
          "zh": "🏳️‍⚧️ 跨性別"
        },
        "c": "ct-health"
      },
      {
        "t": {
          "en": "💪 Activism",
          "zh": "💪 活動主義"
        },
        "c": "ct-news"
      }
    ],
    "color": "var(--glass-pink)",
    "url": "#guest"
  },
  {
    "id": 22,
    "cat": "guest",
    "country": "cn",
    "date": "2026-04-02",
    "urgent": false,
    "source": {
      "en": "Guest Voice",
      "zh": "特邀嘉賓"
    },
    "author": {
      "name": "Xiao Yu",
      "bio": {
        "en": "Freelance writer in Chengdu, documenting queer culture in China",
        "zh": "成都自由撰稿人，記錄中國的酷兒文化"
      }
    },
    "title": {
      "en": "The Language of Survival: How Chinese Queer People Code-Switch",
      "zh": "生存的語言：中國酷兒如何切換代碼"
    },
    "summary": {
      "en": "An exploration of the linguistic strategies LGBTQ+ people in China use to communicate safely — from Weibo slang to encrypted apps.",
      "zh": "探討中國 LGBTQ+ 人士用於安全交流的語言策略——從微博俚語到加密應用。"
    },
    "full": {
      "en": "In China, we speak in code. \"Comrade\" (同志) used to mean LGBTQ+, until it became too well-known and authorities started monitoring it. So we switched. \"Les\" for lesbians became \"拉拉\". \"Gay\" became \"基\". But those got monitored too. Now we use \"1\" and \"0\" (top/bottom), or just emoji: 🌈 is banned on some platforms during Pride month. We created new words: \"彩虹群体\" (rainbow community), \"酷儿\" (queer). We use English phrases the censors don't catch. We share resources through password-protected documents. We organize meetups through vague posts: \"coffee this weekend?\" means protest. This linguistic evolution is exhausting. Every few months, we have to reinvent our language because the old words are compromised. But it also shows our resilience. They can ban our words, but they cannot ban our existence. We will always find new ways to name ourselves.",
      "zh": "在中國，我們用代碼說話。「同志」曾經意味著 LGBTQ+，直到它變得太有名，當局開始監控它。所以我們換了。女同性戀的「Les」變成了「拉拉」。「Gay」變成了「基」。但這些也被監控了。現在我們使用「1」和「0」（攻/受），或者只是表情符號：🌈在某些平台上在驕傲月期間被禁止。我們創造了新詞：「彩虹群體」、「酷兒」。我們使用審查者無法捕捉的英語短語。我們通過密碼保護的文件分享資源。我們通過模糊的帖子組織聚會：「這週末喝咖啡？」意味著抗議。這種語言進化令人筋疲力盡。每隔幾個月，我們就必須重新發明我們的語言，因為舊詞已經被洩露了。但這也顯示了我們的韌性。他們可以禁止我們的詞彙，但他們無法禁止我們的存在。我們總會找到新的方式來命名自己。"
    },
    "tags": [
      {
        "t": {
          "en": "💬 Guest Voice",
          "zh": "💬 特邀嘉賓"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🇨🇳 China",
          "zh": "🇨🇳 中國"
        },
        "c": "ct-cn"
      },
      {
        "t": {
          "en": "📱 Digital",
          "zh": "📱 數字"
        },
        "c": "ct-news"
      },
      {
        "t": {
          "en": "🛡 Resistance",
          "zh": "🛡 抵抗"
        },
        "c": "ct-resistance"
      }
    ],
    "color": "var(--glass-pink)",
    "url": "#guest"
  },
  {
    "id": 23,
    "cat": "guest",
    "country": "gb",
    "date": "2026-03-30",
    "urgent": false,
    "source": {
      "en": "Guest Voice",
      "zh": "特邀嘉賓"
    },
    "author": {
      "name": "Ash P.",
      "bio": {
        "en": "Trans teacher in London, advocate for inclusive education policies",
        "zh": "倫敦跨性別教師，包容性教育政策倡導者"
      }
    },
    "title": {
      "en": "Teaching While Trans: Navigating UK Schools in 2026",
      "zh": "跨性別教師：在2026年的英國學校中航行"
    },
    "summary": {
      "en": "A teacher's perspective on the challenges of being openly trans in UK schools amid recent policy debates about gender identity in education.",
      "zh": "一位教師關於在最近關於教育中性別身份的政策辯論中，在英國學校公開跨性別的挑戰的視角。"
    },
    "full": {
      "en": "I teach Year 5. I am a trans woman. For three years, I was just \"Miss P\" to my students — a teacher who loved science and terrible jokes. Then the media debates started. \"Should trans teachers be allowed in schools?\" Parents' groups demanded I be removed. The school board held meetings. My headteacher supported me, but I saw the fear in their eyes. What if we lose funding? What if parents pull their kids out? I stayed. But now I have to think about every word I say. If a student asks about my weekend and I mention my girlfriend, is that \"promoting an agenda\"? If I correct a student who misgenders me, am I \"indoctrinating\" them? I became a teacher to help young people learn and grow. Instead, I have become a political debate. My existence is scrutinized. My right to work is questioned. And through it all, my students — bless them — just want to learn about photosynthesis. They don't care that I'm trans. They care that I make science fun. I wish the adults could be more like them.",
      "zh": "我教五年級。我是一個跨性別女性。三年來，我對學生來說只是「P老師」——一個喜歡科學和糟糕笑話的老師。然後媒體辯論開始了。「應該允許跨性別教師在學校嗎？」家長團體要求我被開除。學校董事會舉行會議。我的校長支持我，但我看到了他們眼中的恐懼。如果我們失去資金怎麼辦？如果家長把孩子帶走怎麼辦？我留下了。但現在我必須思考我說的每一個字。如果學生問我週末的事，我提到我的女朋友，這是「推廣議程」嗎？如果我糾正一個學生對我的錯誤稱呼，我是在「灌輸」他們嗎？我成為教師是為了幫助年輕人學習和成長。相反，我成了一場政治辯論。我的存在被審查。我的工作權利被質疑。而在這一切中，我的學生們——祝福他們——只想學習光合作用。他們不在乎我是跨性別。他們在乎我讓科學變得有趣。我希望成年人能更像他們。"
    },
    "tags": [
      {
        "t": {
          "en": "💬 Guest Voice",
          "zh": "💬 特邀嘉賓"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🇬🇧 UK",
          "zh": "🇬🇧 英國"
        },
        "c": "ct-gb"
      },
      {
        "t": {
          "en": "🏳️‍⚧️ Trans",
          "zh": "🏳️‍⚧️ 跨性別"
        },
        "c": "ct-health"
      },
      {
        "t": {
          "en": "📉 Rollback",
          "zh": "📉 倒退"
        },
        "c": "ct-rollback"
      }
    ],
    "color": "var(--glass-pink)",
    "url": "#guest"
  },
  {
    "id": 24,
    "cat": "guest",
    "country": "tw",
    "date": "2026-03-28",
    "urgent": false,
    "source": {
      "en": "Guest Voice",
      "zh": "特邀嘉賓"
    },
    "author": {
      "name": "Lin Wei",
      "bio": {
        "en": "Taiwanese marriage equality activist, coordinator for annual Pride in Taipei",
        "zh": "台灣婚姻平權活動人士，台北年度驕傲遊行協調員"
      }
    },
    "title": {
      "en": "After Marriage Equality: What's Next for Taiwan's LGBTQ+ Movement?",
      "zh": "婚姻平權之後：台灣 LGBTQ+ 運動的下一步是什麼？"
    },
    "summary": {
      "en": "A reflection on Taiwan's journey since legalizing same-sex marriage in 2019, and the work that still needs to be done for full equality.",
      "zh": "一篇關於台灣自2019年同性婚姻合法化以來的旅程，以及仍需完成的完全平等工作的反思。"
    },
    "full": {
      "en": "Taiwan was the first in Asia to legalize same-sex marriage. We celebrated. We cried. We thought we'd won. But seven years later, I see how much work remains. Trans people still face barriers to legal recognition. Surrogacy is illegal for same-sex couples. Adoption is complicated. And we are surrounded by countries where LGBTQ+ people are criminalized — China, Malaysia, Indonesia. We cannot rest. Every Pride march, we have visitors from Hong Kong, from Singapore, from mainland China — people who cannot march at home. They tell us: \"Taiwan is our hope.\" That is a heavy responsibility. We must not only protect what we have achieved, but push further. We must show the region that equality is possible. That it makes society stronger, not weaker. We are a small island with a big mission. And we will not stop marching until everyone is free.",
      "zh": "台灣是亞洲第一個同性婚姻合法化的地方。我們慶祝。我們哭泣。我們以為我們贏了。但七年後，我看到還有多少工作要做。跨性別者仍然面臨法律承認的障礙。代孕對同性伴侶是非法的。收養很複雜。我們被 LGBTQ+ 人士被定罪的國家包圍——中國、馬來西亞、印尼。我們不能休息。每次驕傲遊行，我們都有來自香港、新加坡、中國大陸的訪客——那些不能在家遊行的人。他們告訴我們：「台灣是我們的希望。」這是一個沉重的責任。我們不僅必須保護我們已經取得的成就，還要進一步推動。我們必須向該地區展示平等是可能的。它使社會更強大，而不是更弱。我們是一個小島，有一個大使命。我們不會停止遊行，直到每個人都自由。"
    },
    "tags": [
      {
        "t": {
          "en": "💬 Guest Voice",
          "zh": "💬 特邀嘉賓"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🇹🇼 Taiwan",
          "zh": "🇹🇼 台灣"
        },
        "c": "ct-tw"
      },
      {
        "t": {
          "en": "💪 Activism",
          "zh": "💪 活動主義"
        },
        "c": "ct-news"
      },
      {
        "t": {
          "en": "🌈 Pride",
          "zh": "🌈 驕傲"
        },
        "c": "ct-event"
      }
    ],
    "color": "var(--glass-pink)",
    "url": "#guest"
  },
  {
    "id": 25,
    "cat": "guest",
    "country": "ru",
    "date": "2026-03-25",
    "urgent": false,
    "source": {
      "en": "Guest Voice",
      "zh": "特邀嘉賓"
    },
    "author": {
      "name": "Sasha V.",
      "bio": {
        "en": "Non-binary artist from St. Petersburg, now living in Georgia (country)",
        "zh": "來自聖彼得堡的非二元藝術家，現居格魯吉亞（國家）"
      }
    },
    "title": {
      "en": "Painting in Exile: Art as Resistance from the Russian Diaspora",
      "zh": "流亡中的繪畫：俄羅斯僑民的藝術作為抵抗"
    },
    "summary": {
      "en": "An artist's meditation on creating queer art in exile, and how cultural work sustains the community scattered across borders.",
      "zh": "一位藝術家關於在流亡中創作酷兒藝術的冥想，以及文化工作如何維持散佈在邊境的社群。"
    },
    "full": {
      "en": "I used to paint murals in St. Petersburg. Rainbow-themed, subtle enough to avoid police, bold enough that queer people would recognize them. Then the law changed. My art became illegal. I left. Now I live in Tbilisi and I paint differently. I paint the faces of people I left behind. I paint the Moscow metro at night, where we used to meet. I paint memory because memory is resistance. My paintings circulate online — Russians in Berlin, in Istanbul, in New York see them and send messages: \"I remember that corner.\" \"I was there too.\" Art connects us when geography divides us. It is how we refuse to be scattered into nothingness. The government can ban our gatherings, our flags, our words. But they cannot ban our memories. And as long as we remember, we exist.",
      "zh": "我曾經在聖彼得堡畫壁畫。彩虹主題，足夠微妙以避免警察，足夠大膽讓酷兒人士能夠認出它們。然後法律改變了。我的藝術變成了非法。我離開了。現在我住在第比利斯，我畫得不同了。我畫我留下的人的臉。我畫晚上的莫斯科地鐵，我們曾經在那裡見面。我畫記憶，因為記憶就是抵抗。我的畫在網上流傳——柏林、伊斯坦布爾、紐約的俄羅斯人看到它們並發送消息：「我記得那個角落。」「我也在那裡。」當地理分隔我們時，藝術連接我們。這是我們拒絕被分散到虛無的方式。政府可以禁止我們的聚會、我們的旗幟、我們的話語。但他們無法禁止我們的記憶。只要我們記得，我們就存在。"
    },
    "tags": [
      {
        "t": {
          "en": "💬 Guest Voice",
          "zh": "💬 特邀嘉賓"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🇷🇺 Russia",
          "zh": "🇷🇺 俄羅斯"
        },
        "c": "ct-ru"
      },
      {
        "t": {
          "en": "🎨 Art",
          "zh": "🎨 藝術"
        },
        "c": "ct-news"
      },
      {
        "t": {
          "en": "🛡 Resistance",
          "zh": "🛡 抵抗"
        },
        "c": "ct-resistance"
      }
    ],
    "color": "var(--glass-pink)",
    "url": "#guest"
  },
  {
    "id": 26,
    "cat": "guest",
    "country": "sa",
    "date": "2026-03-22",
    "urgent": false,
    "source": {
      "en": "Guest Voice",
      "zh": "特邀嘉賓"
    },
    "author": {
      "name": "Noor K.",
      "bio": {
        "en": "Saudi-Canadian writer, bisexual woman exploring identity across cultures",
        "zh": "沙特-加拿大作家，雙性戀女性，探索跨文化身份"
      }
    },
    "title": {
      "en": "The Double Closet: Being Bisexual in the Saudi Diaspora",
      "zh": "雙重櫃子：在沙特僑民中成為雙性戀"
    },
    "summary": {
      "en": "An essay on the unique invisibility of bisexuality within both conservative home communities and Western LGBTQ+ spaces.",
      "zh": "一篇關於雙性戀在保守家鄉社群和西方 LGBTQ+ 空間中的獨特隱形性的文章。"
    },
    "full": {
      "en": "I came to Canada at 18 for university. I came out as bisexual at 20. But I quickly learned: I was not \"queer enough\" for Western LGBTQ+ spaces, and too queer for my Saudi community. At Pride, people assumed I was straight because I dated men. In my family, I could not come out because I dated women. I exist in a double closet: hidden from my culture of origin, and invisible within queer culture. Bisexuality is often dismissed — \"pick a side,\" people say. But I don't have a side. I have a whole self. And that self is Saudi and Canadian, Arab and queer, Muslim-raised and bisexual. These identities do not cancel each other out. They coexist, sometimes uncomfortably, but always authentically. I am tired of being told I am \"not really\" anything. I am really all of it. And I refuse to erase any part of myself to fit into anyone's box.",
      "zh": "我18歲來加拿大上大學。我20歲出櫃為雙性戀。但我很快了解到：對於西方 LGBTQ+ 空間來說，我「不夠酷兒」，對於我的沙特社群來說，我太酷兒了。在驕傲遊行上，人們認為我是異性戀，因為我和男人約會。在我的家庭中，我不能出櫃，因為我和女人約會。我存在於雙重櫃子中：對我的原生文化隱藏，在酷兒文化中隱形。雙性戀經常被忽視——「選一邊」，人們說。但我沒有一邊。我有一個完整的自我。那個自我是沙特和加拿大、阿拉伯和酷兒、穆斯林養育和雙性戀。這些身份不會相互抵消。它們共存，有時不舒服，但總是真實的。我厭倦了被告知我「不真的」是任何東西。我真的是所有這些。我拒絕抹去自己的任何部分來適應任何人的盒子。"
    },
    "tags": [
      {
        "t": {
          "en": "💬 Guest Voice",
          "zh": "💬 特邀嘉賓"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🇸🇦 Saudi Arabia",
          "zh": "🇸🇦 沙烏地"
        },
        "c": "ct-sa"
      },
      {
        "t": {
          "en": "🏳️‍🌈 Queer",
          "zh": "🏳️‍🌈 酷兒"
        },
        "c": "ct-news"
      },
      {
        "t": {
          "en": "🧠 Mental Health",
          "zh": "🧠 心理健康"
        },
        "c": "ct-health"
      }
    ],
    "color": "var(--glass-pink)",
    "url": "#guest"
  },
  {
    "id": 27,
    "cat": "guest",
    "country": "cn",
    "date": "2026-03-20",
    "urgent": false,
    "source": {
      "en": "Guest Voice",
      "zh": "特邀嘉賓"
    },
    "author": {
      "name": "Fang Qi",
      "bio": {
        "en": "Lesbian documentary filmmaker in Beijing, working underground",
        "zh": "北京女同性戀紀錄片導演，地下工作"
      }
    },
    "title": {
      "en": "Filming in the Shadows: Documenting Queer Lives in China",
      "zh": "在陰影中拍攝：記錄中國的酷兒生活"
    },
    "summary": {
      "en": "A filmmaker's account of creating underground queer documentaries in China, preserving stories that official narratives erase.",
      "zh": "一位電影製作人關於在中國創作地下酷兒紀錄片、保存官方敘事抹除的故事的敘述。"
    },
    "full": {
      "en": "I make documentaries that will never screen in Chinese cinemas. I film stories that are officially \"non-existent\" — elderly lesbian couples who have been together for 40 years, trans youth navigating family rejection, gay fathers in arranged marriages living double lives. I film with borrowed equipment. I cannot register my projects. I cannot apply for funding. I screen my films in private apartments, using projectors and bedsheet screens. Audiences find out through word-of-mouth. After each screening, I delete the location from my phone. This is not paranoia. This is survival. But why do I continue? Because these stories deserve to exist. Because 50 years from now, when someone asks \"were there queer people in China in 2026?\" I want proof. I want evidence that we were here, that we loved, that we resisted. Someday, these films will surface. Maybe not in my lifetime. But they will surface. And people will know: we existed.",
      "zh": "我製作永遠不會在中國電影院放映的紀錄片。我拍攝官方「不存在」的故事——在一起40年的老年女同性戀夫婦、應對家庭拒絕的跨性別青年、在包辦婚姻中過著雙重生活的同性戀父親。我用借來的設備拍攝。我不能註冊我的項目。我不能申請資金。我在私人公寓裡放映我的電影，使用投影儀和床單螢幕。觀眾通過口耳相傳得知。每次放映後，我從手機中刪除位置。這不是偏執。這是生存。但我為什麼繼續？因為這些故事值得存在。因為50年後，當有人問「2026年的中國有酷兒人士嗎？」我想要證據。我想要證明我們在這裡，我們愛過，我們抵抗過。總有一天，這些電影會浮出水面。也許不是在我的一生中。但它們會浮出水面。人們會知道：我們存在過。"
    },
    "tags": [
      {
        "t": {
          "en": "💬 Guest Voice",
          "zh": "💬 特邀嘉賓"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🇨🇳 China",
          "zh": "🇨🇳 中國"
        },
        "c": "ct-cn"
      },
      {
        "t": {
          "en": "🎨 Art",
          "zh": "🎨 藝術"
        },
        "c": "ct-news"
      },
      {
        "t": {
          "en": "🛡 Resistance",
          "zh": "🛡 抵抗"
        },
        "c": "ct-resistance"
      }
    ],
    "color": "var(--glass-pink)",
    "url": "#guest"
  },
  {
    "id": 28,
    "cat": "guest",
    "country": "ir",
    "date": "2026-03-18",
    "urgent": false,
    "source": {
      "en": "Guest Voice",
      "zh": "特邀嘉賓"
    },
    "author": {
      "name": "Parisa L.",
      "bio": {
        "en": "Iranian lesbian who fled to Germany, refugee advocate",
        "zh": "逃到德國的伊朗女同性戀，難民倡導者"
      }
    },
    "title": {
      "en": "The Asylum Interview: Proving Your Queerness to Strangers",
      "zh": "庇護面試：向陌生人證明你的酷兒身份"
    },
    "summary": {
      "en": "A devastating account of the asylum process for LGBTQ+ refugees, and the trauma of having to \"prove\" your identity to bureaucrats.",
      "zh": "一個關於 LGBTQ+ 難民庇護程序的毀滅性敘述，以及必須向官僚「證明」你的身份的創傷。"
    },
    "full": {
      "en": "The asylum officer asked me: \"How do you know you are a lesbian?\" I stared at her. How do you know you are straight? But I couldn't say that. I had to perform. I had to tell intimate details of my life to a stranger who held my future in her hands. \"When did you first know?\" As if queerness has a timestamp. \"Do you have proof?\" Pictures with my ex-girlfriend, deleted for safety before I fled. \"Why didn't you just hide it?\" Because I couldn't breathe anymore. The interview lasted three hours. I cried twice. I was asked about my sex life, my childhood, my relationships — things I had never told anyone. And at the end, she said: \"We'll be in touch.\" I waited eight months for approval. Eight months of not knowing if I would be sent back to a country where I could be executed. Eight months of my life in limbo. When the approval came, I didn't feel joy. I felt exhausted. This is what seeking safety looks like: trauma, re-traumatization, and then maybe — if you're lucky — a chance to rebuild.",
      "zh": "庇護官員問我：「你怎麼知道你是女同性戀？」我盯著她。你怎麼知道你是異性戀？但我不能這麼說。我必須表演。我必須向一個掌握我未來的陌生人講述我生活的親密細節。「你第一次知道是什麼時候？」好像酷兒有一個時間戳。「你有證據嗎？」與我前女友的照片，在我逃離前為了安全而刪除。「你為什麼不隱藏它？」因為我再也無法呼吸了。面試持續了三個小時。我哭了兩次。我被問到我的性生活、我的童年、我的關係——我從未告訴過任何人的事情。最後，她說：「我們會聯繫你。」我等了八個月才得到批准。八個月不知道我是否會被送回一個我可能被處決的國家。我生命中的八個月處於懸而未決的狀態。當批准來的時候，我沒有感到喜悅。我感到筋疲力盡。這就是尋求安全的樣子：創傷、再次創傷，然後也許——如果你幸運的話——一個重建的機會。"
    },
    "tags": [
      {
        "t": {
          "en": "💬 Guest Voice",
          "zh": "💬 特邀嘉賓"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🇮🇷 Iran",
          "zh": "🇮🇷 伊朗"
        },
        "c": "ct-ir"
      },
      {
        "t": {
          "en": "⚖️ Persecution",
          "zh": "⚖️ 迫害"
        },
        "c": "ct-persecution"
      },
      {
        "t": {
          "en": "🧠 Mental Health",
          "zh": "🧠 心理健康"
        },
        "c": "ct-health"
      }
    ],
    "color": "var(--glass-pink)",
    "url": "#guest"
  },
  {
    "id": 29,
    "cat": "guest",
    "country": "us",
    "date": "2026-03-15",
    "urgent": false,
    "source": {
      "en": "Guest Voice",
      "zh": "特邀嘉賓"
    },
    "author": {
      "name": "River M.",
      "bio": {
        "en": "Indigenous two-spirit person from the Navajo Nation, cultural educator",
        "zh": "來自納瓦霍族的原住民雙靈人，文化教育者"
      }
    },
    "title": {
      "en": "Two-Spirit Identity: Reclaiming Indigenous Queerness",
      "zh": "雙靈身份：重新認領原住民酷兒性"
    },
    "summary": {
      "en": "An exploration of two-spirit identity in Native American cultures, and the ongoing work of decolonizing queerness.",
      "zh": "探討美洲原住民文化中的雙靈身份，以及去殖民化酷兒性的持續工作。"
    },
    "full": {
      "en": "Before colonization, many Indigenous nations recognized more than two genders. The Navajo had four. The Lakota had winkte. The Ojibwe had niizh manidoowag — two-spirit. We were not outcasts. We were sacred. We were healers, mediators, visionaries. Then Christianity came. Then boarding schools. Then generations of violence and erasure. My great-grandmother was two-spirit. She hid it her entire life. I am reclaiming what was stolen from her. I use the term two-spirit not because I am trying to fit into Western LGBTQ+ categories, but because I am reaching back to my ancestors. I am saying: you did not erase us. I work with young Indigenous queer people, teaching them that their identities are not imports from white culture — they are inheritances from our own. Queerness is not new to us. It is a homecoming.",
      "zh": "在殖民化之前，許多原住民族承認超過兩種性別。納瓦霍有四種。拉科塔有winkte。奧吉布瓦有niizh manidoowag——雙靈。我們不是棄兒。我們是神聖的。我們是治療者、調解者、有遠見的人。然後基督教來了。然後寄宿學校來了。然後是幾代人的暴力和抹除。我的曾祖母是雙靈。她一生都在隱藏它。我正在奪回從她那裡被偷走的東西。我使用雙靈這個術語不是因為我試圖適應西方 LGBTQ+ 類別，而是因為我正在追溯我的祖先。我在說：你們沒有抹除我們。我與年輕的原住民酷兒人士合作，教他們他們的身份不是來自白人文化的進口——它們是我們自己的遺產。酷兒性對我們來說並不新鮮。這是一次回家。"
    },
    "tags": [
      {
        "t": {
          "en": "💬 Guest Voice",
          "zh": "💬 特邀嘉賓"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🇺🇸 US",
          "zh": "🇺🇸 美國"
        },
        "c": "ct-us"
      },
      {
        "t": {
          "en": "🏳️‍🌈 Queer",
          "zh": "🏳️‍🌈 酷兒"
        },
        "c": "ct-news"
      },
      {
        "t": {
          "en": "💪 Activism",
          "zh": "💪 活動主義"
        },
        "c": "ct-news"
      }
    ],
    "color": "var(--glass-pink)",
    "url": "#guest"
  },
  {
    "id": 30,
    "cat": "guest",
    "country": "nl",
    "date": "2026-03-12",
    "urgent": false,
    "source": {
      "en": "Guest Voice",
      "zh": "特邀嘉賓"
    },
    "author": {
      "name": "Esme V.",
      "bio": {
        "en": "Dutch intersex advocate, working on policy reform in the Netherlands",
        "zh": "荷蘭雌雄同體倡導者，致力於荷蘭政策改革"
      }
    },
    "title": {
      "en": "Beyond the Binary: Intersex Rights in the Netherlands",
      "zh": "超越二元：荷蘭的雌雄同體權利"
    },
    "summary": {
      "en": "An advocate's perspective on the fight to end non-consensual surgeries on intersex children and establish legal recognition.",
      "zh": "一位倡導者關於結束對雌雄同體兒童的非自願手術並建立法律承認的鬥爭的視角。"
    },
    "full": {
      "en": "The Netherlands was the first country to legalize same-sex marriage. People assume we are progressive. But for intersex people, the fight is far from over. Doctors still perform \"corrective\" surgeries on intersex infants — surgeries that are medically unnecessary, that cause lifelong trauma, that are done without consent. I was one of those children. At six months old, my parents were told I needed surgery to \"fix\" me. They trusted the doctors. They didn't know there was another option. I grew up with chronic pain, with shame, with a body that felt wrong because someone decided what was \"right\" before I could speak. Now I fight so that no child has to go through what I did. We have proposed legislation to ban non-consensual surgeries. We have pushed for legal recognition of non-binary gender markers. Progress is slow. But we will not stop. Intersex bodies are not broken. We do not need to be fixed. We need to be respected.",
      "zh": "荷蘭是第一個同性婚姻合法化的國家。人們認為我們很進步。但對於雌雄同體的人來說，戰鬥遠未結束。醫生仍然對雌雄同體嬰兒進行「矯正」手術——醫學上不必要的手術，導致終身創傷，在未經同意的情況下進行。我是那些孩子之一。在六個月大的時候，我的父母被告知我需要手術來「修復」我。他們信任醫生。他們不知道還有另一個選擇。我長大後有慢性疼痛、羞恥感、一個感覺不對的身體，因為有人在我能說話之前決定了什麼是「正確的」。現在我戰鬥，這樣就不會有孩子經歷我所經歷的。我們提出了禁止非自願手術的立法。我們推動了非二元性別標記的法律承認。進展緩慢。但我們不會停止。雌雄同體的身體沒有壞。我們不需要被修復。我們需要被尊重。"
    },
    "tags": [
      {
        "t": {
          "en": "💬 Guest Voice",
          "zh": "💬 特邀嘉賓"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🇳🇱 Netherlands",
          "zh": "🇳🇱 荷蘭"
        },
        "c": "ct-nl"
      },
      {
        "t": {
          "en": "🏳️‍🌈 Queer",
          "zh": "🏳️‍🌈 酷兒"
        },
        "c": "ct-news"
      },
      {
        "t": {
          "en": "💪 Activism",
          "zh": "💪 活動主義"
        },
        "c": "ct-news"
      }
    ],
    "color": "var(--glass-pink)",
    "url": "#guest"
  },
  {
    "id": 31,
    "cat": "guest",
    "country": "ca",
    "date": "2026-03-10",
    "urgent": false,
    "source": {
      "en": "Guest Voice",
      "zh": "特邀嘉賓"
    },
    "author": {
      "name": "Jules T.",
      "bio": {
        "en": "Queer refugee settlement worker in Toronto, former refugee from Uganda",
        "zh": "多倫多酷兒難民安置工作者，前烏干達難民"
      }
    },
    "title": {
      "en": "From Refugee to Advocate: Building Community After Asylum",
      "zh": "從難民到倡導者：庇護後建立社群"
    },
    "summary": {
      "en": "A settlement worker's story of rebuilding life in Canada after fleeing Uganda, and now helping other LGBTQ+ refugees navigate the same journey.",
      "zh": "一位安置工作者在逃離烏干達後在加拿大重建生活的故事，現在幫助其他 LGBTQ+ 難民度過同樣的旅程。"
    },
    "full": {
      "en": "I arrived in Canada in 2019 with nothing. I left Uganda because the police raided our safe house and I barely escaped. I spent two years in Kenya waiting for resettlement. When I finally arrived in Toronto, I was safe but lost. I didn't know how to navigate the transit system. I didn't know where to find halal food. I didn't know how to explain my resume gaps. A refugee settlement worker helped me. They connected me to housing, to language classes, to therapy. They saw me not as a victim but as a survivor with skills and potential. Now I do that work. I help newly arrived LGBTQ+ refugees rebuild. I teach them how to use the subway. I explain Canadian workplace culture. I sit with them when they cry about everything they lost. I celebrate with them when they get their first job. Asylum is not the end of the journey — it is the beginning of a new one. And that journey requires community. We lift each other up. That is how we survive.",
      "zh": "我於2019年一無所有地抵達加拿大。我離開烏干達是因為警察突襲了我們的安全屋，我勉強逃脫了。我在肯尼亞等待重新安置兩年。當我終於抵達多倫多時，我很安全但迷失了。我不知道如何使用交通系統。我不知道在哪裡找清真食品。我不知道如何解釋我的簡歷空白。一位難民安置工作者幫助了我。他們將我連接到住房、語言課程、治療。他們不把我視為受害者，而是視為有技能和潛力的倖存者。現在我做那份工作。我幫助新到的 LGBTQ+ 難民重建。我教他們如何使用地鐵。我解釋加拿大工作場所文化。當他們為失去的一切哭泣時，我陪伴他們。當他們得到第一份工作時，我與他們慶祝。庇護不是旅程的終點——它是新旅程的開始。那個旅程需要社群。我們互相扶持。這就是我們生存的方式。"
    },
    "tags": [
      {
        "t": {
          "en": "💬 Guest Voice",
          "zh": "💬 特邀嘉賓"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🇨🇦 Canada",
          "zh": "🇨🇦 加拿大"
        },
        "c": "ct-ca"
      },
      {
        "t": {
          "en": "💪 Activism",
          "zh": "💪 活動主義"
        },
        "c": "ct-news"
      },
      {
        "t": {
          "en": "🧠 Mental Health",
          "zh": "🧠 心理健康"
        },
        "c": "ct-health"
      }
    ],
    "color": "var(--glass-pink)",
    "url": "#guest"
  },
  {
    "id": 32,
    "cat": "guest",
    "country": "is",
    "date": "2026-03-08",
    "urgent": false,
    "source": {
      "en": "Guest Voice",
      "zh": "特邀嘉賓"
    },
    "author": {
      "name": "Saga H.",
      "bio": {
        "en": "Icelandic trans activist, policy advisor for gender recognition reform",
        "zh": "冰島跨性別活動人士，性別承認改革政策顧問"
      }
    },
    "title": {
      "en": "Iceland's Gender Recognition Model: Lessons for the World",
      "zh": "冰島的性別承認模式：對世界的教訓"
    },
    "summary": {
      "en": "An inside look at Iceland's self-determination model for legal gender recognition, and why it should be replicated globally.",
      "zh": "深入了解冰島法律性別承認的自我決定模式，以及為什麼它應該在全球複製。"
    },
    "full": {
      "en": "Iceland allows trans people to change their legal gender through self-determination. No medical diagnosis. No surgery. No bureaucratic gatekeeping. You fill out a form. You declare your gender. It changes. Simple. People ask me: \"Doesn't that lead to abuse?\" No. In seven years, there has been zero evidence of fraud. People ask: \"Don't you need safeguards?\" The safeguard is respecting bodily autonomy. The right to name yourself. I worked on this policy. I testified before parliament. I explained that forcing trans people to undergo medical procedures to be recognized is a human rights violation. And they listened. Iceland is small — only 400,000 people. But we can be a model. Other countries look at us and say: \"If Iceland can do it, we can too.\" I hope they're right. Because self-determination is not radical. It is basic dignity. And everyone deserves that.",
      "zh": "冰島允許跨性別者通過自我決定來改變他們的法律性別。無需醫療診斷。無需手術。無需官僚把關。你填寫一份表格。你宣布你的性別。它改變了。簡單。人們問我：「這不會導致濫用嗎？」不會。在七年裡，沒有欺詐的證據。人們問：「你不需要保障措施嗎？」保障措施是尊重身體自主權。命名自己的權利。我參與了這項政策。我在議會前作證。我解釋說，強迫跨性別者接受醫療程序才能被承認是侵犯人權。他們聽了。冰島很小——只有40萬人。但我們可以成為一個模式。其他國家看著我們說：「如果冰島可以做到，我們也可以。」我希望他們是對的。因為自我決定不是激進的。這是基本尊嚴。每個人都應該得到它。"
    },
    "tags": [
      {
        "t": {
          "en": "💬 Guest Voice",
          "zh": "💬 特邀嘉賓"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🇮🇸 Iceland",
          "zh": "🇮🇸 冰島"
        },
        "c": "ct-is"
      },
      {
        "t": {
          "en": "🏳️‍⚧️ Trans",
          "zh": "🏳️‍⚧️ 跨性別"
        },
        "c": "ct-health"
      },
      {
        "t": {
          "en": "💪 Activism",
          "zh": "💪 活動主義"
        },
        "c": "ct-news"
      }
    ],
    "color": "var(--glass-pink)",
    "url": "#guest"
  },
  {
    "id": 33,
    "cat": "guest",
    "country": "all",
    "date": "2026-03-05",
    "urgent": false,
    "source": {
      "en": "Guest Voice",
      "zh": "特邀嘉賓"
    },
    "author": {
      "name": "Morgan L.",
      "bio": {
        "en": "Global digital rights activist, coordinator for encrypted communication networks",
        "zh": "全球數字權利活動人士，加密通信網絡協調員"
      }
    },
    "title": {
      "en": "Building Digital Safe Spaces: Encrypted Networks for Global LGBTQ+ Communities",
      "zh": "建立數字安全空間：全球 LGBTQ+ 社群的加密網絡"
    },
    "summary": {
      "en": "A tech activist's guide to how LGBTQ+ people worldwide use encrypted apps, VPNs, and digital tools to organize safely.",
      "zh": "一位技術活動人士關於全球 LGBTQ+ 人士如何使用加密應用、VPN和數字工具安全組織的指南。"
    },
    "full": {
      "en": "From Tehran to Kampala to Beijing, LGBTQ+ people use technology to survive. We use Signal for organizing. We use Tor for browsing. We use VPNs to access blocked content. We use encrypted clouds to share resources. This is not paranoia — it is survival. I coordinate a network that teaches people digital security. How to verify app authenticity. How to detect spyware. How to create burner accounts. How to communicate without leaving traces. This knowledge can be the difference between life and death. A Nigerian activist used our training to evade police raids. A Chinese group used it to organize protests without detection. A Saudi woman used it to plan her escape. Technology is a tool. It can be used for oppression — surveillance, tracking, censorship. But it can also be used for liberation. We are building digital safe spaces where the physical world offers none. We are creating networks of resistance that cross borders and survive governments. They can ban our gatherings. They can arrest our leaders. But they cannot delete our solidarity.",
      "zh": "從德黑蘭到坎帕拉到北京，LGBTQ+ 人士使用技術來生存。我們使用Signal進行組織。我們使用Tor進行瀏覽。我們使用VPN訪問被封鎖的內容。我們使用加密雲共享資源。這不是偏執——這是生存。我協調一個教人們數字安全的網絡。如何驗證應用真實性。如何檢測間諜軟件。如何創建一次性帳戶。如何在不留痕跡的情況下交流。這些知識可能是生死之間的區別。一位尼日利亞活動人士使用我們的培訓來避免警察突襲。一個中國團體使用它來組織未被發現的抗議。一位沙特女性使用它來計劃她的逃脫。技術是一種工具。它可以用於壓迫——監視、追蹤、審查。但它也可以用於解放。我們正在建立數字安全空間，而物理世界沒有提供。我們正在創建跨越邊界並在政府中倖存的抵抗網絡。他們可以禁止我們的聚會。他們可以逮捕我們的領導人。但他們無法刪除我們的團結。"
    },
    "tags": [
      {
        "t": {
          "en": "💬 Guest Voice",
          "zh": "💬 特邀嘉賓"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🌐 Global",
          "zh": "🌐 全球"
        },
        "c": "ct-all"
      },
      {
        "t": {
          "en": "📱 Digital",
          "zh": "📱 數字"
        },
        "c": "ct-news"
      },
      {
        "t": {
          "en": "🛡 Resistance",
          "zh": "🛡 抵抗"
        },
        "c": "ct-resistance"
      },
      {
        "t": {
          "en": "💪 Activism",
          "zh": "💪 活動主義"
        },
        "c": "ct-news"
      }
    ],
    "color": "var(--glass-pink)",
    "url": "#guest"
  },
  {
    "id": 34,
    "cat": "toolkit",
    "country": "all",
    "date": "2026-05-01",
    "urgent": false,
    "source": {
      "en": "Mosaic Resources",
      "zh": "Mosaic 資源"
    },
    "title": {
      "en": "🛂 Asylum & Immigration: Essential Resources",
      "zh": "🛂 庇護與移民：必備資源"
    },
    "summary": {
      "en": "Key organizations and step-by-step guides for LGBTQ+ asylum seekers. All information sourced from official websites.",
      "zh": "為 LGBTQ+ 庇護尋求者提供的關鍵組織和逐步指南。所有信息來源於官方網站。"
    },
    "full": {
      "en": "**IMPORTANT**: All resources below are publicly available and sourced from official organization websites. Click links to verify current information.\n\n---\n\n**Immigration Equality** (USA)\n- Free legal services for LGBTQ+ and HIV+ immigrants\n- Official website: immigrationequality.org\n- **[→ Visit Official Site](https://www.immigrationequality.org)**\n- Source: Immigration Equality Official Website\n\n**Rainbow Railroad** (Global)\n- Emergency relocation for LGBTQ+ people fleeing persecution\n- Official website: rainbowrailroad.org\n- **[→ Visit Official Site](https://www.rainbowrailroad.org)**\n- Source: Rainbow Railroad Official Website\n\n**UNHCR LGBTI Guidance** (Global)\n- UN guidelines for LGBTQ+ refugee protection\n- **[→ Visit UNHCR](https://www.unhcr.org)**\n- Source: United Nations High Commissioner for Refugees\n\n---\n\n**Brief Asylum Process Guide** (Summary only - consult lawyer for your case):\n\n1. **Document Evidence**: Photos, messages, news articles proving persecution\n2. **Find Legal Help**: Contact Immigration Equality or local legal aid\n3. **Prepare Interview**: Practice explaining your fear credibly\n4. **Country Reports**: Get reports from ILGA World, Human Rights Watch\n5. **Support Letters**: From community members who know your situation\n\n**CRITICAL**: Do NOT pay smugglers. Contact official organizations first.\n\n---\n\n**Disclaimer**: This is a directory of public resources, not legal advice. Always consult a qualified immigration attorney.",
      "zh": "**重要**：以下所有資源均為公開可用，來源於官方組織網站。點擊鏈接驗證當前信息。\n\n---\n\n**Immigration Equality**（美國）\n- 為 LGBTQ+ 和 HIV+ 移民提供免費法律服務\n- 官方網站：immigrationequality.org\n- **[→ 訪問官方網站](https://www.immigrationequality.org)**\n- 來源：Immigration Equality 官方網站\n\n**Rainbow Railroad**（全球）\n- 為逃離迫害的 LGBTQ+ 人士提供緊急搬遷\n- 官方網站：rainbowrailroad.org\n- **[→ 訪問官方網站](https://www.rainbowrailroad.org)**\n- 來源：Rainbow Railroad 官方網站\n\n**UNHCR LGBTI 指南**（全球）\n- 聯合國 LGBTQ+ 難民保護指南\n- **[→ 訪問 UNHCR](https://www.unhcr.org)**\n- 來源：聯合國難民署\n\n---\n\n**簡要庇護流程指南**（僅摘要 - 請就您的案件諮詢律師）：\n\n1. **記錄證據**：證明迫害的照片、消息、新聞文章\n2. **尋找法律幫助**：聯繫 Immigration Equality 或當地法律援助\n3. **準備面試**：練習可信地解釋您的恐懼\n4. **國家報告**：從 ILGA World、人權觀察獲取報告\n5. **支持信**：來自了解您情況的社區成員\n\n**關鍵**：不要付錢給蛇頭。首先聯繫官方組織。\n\n---\n\n**免責聲明**：這是公共資源目錄，不是法律建議。請始終諮詢合格的移民律師。"
    },
    "tags": [
      {
        "t": {
          "en": "🧰 Toolkit",
          "zh": "🧰 錦囊"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🛂 Asylum",
          "zh": "🛂 庇護"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🌐 Global",
          "zh": "🌐 全球"
        },
        "c": "ct-all"
      }
    ],
    "color": "var(--glass-yellow)",
    "url": ""
  },
  {
    "id": 35,
    "cat": "toolkit",
    "country": "all",
    "date": "2026-05-01",
    "urgent": false,
    "source": {
      "en": "Mosaic Resources",
      "zh": "Mosaic 資源"
    },
    "title": {
      "en": "💊 Medical Resources: HRT, PrEP & Safe Healthcare",
      "zh": "💊 醫療資源：HRT、PrEP 與安全醫療"
    },
    "summary": {
      "en": "Where to access hormone therapy, HIV prevention, and LGBTQ+-affirming healthcare. All links verified from official sources.",
      "zh": "如何獲得荷爾蒙治療、HIV 預防和 LGBTQ+ 友好醫療。所有鏈接均來自官方來源驗證。"
    },
    "full": {
      "en": "**DISCLAIMER**: This is a public resource directory, not medical advice. Consult healthcare professionals for your specific situation.\n\n---\n\n**Hormone Replacement Therapy (HRT)**:\n\n**Planned Parenthood** (USA)\n- Informed consent HRT, no therapist letter required\n- **[→ Find Clinic](https://www.plannedparenthood.org)**\n- Source: Planned Parenthood Official Website\n\n**GenderGP** (Online, Global)\n- Telemedicine for trans healthcare\n- **[→ Visit GenderGP](https://www.gendergp.com)**\n- Source: GenderGP Official Site\n\n**56 Dean Street** (London, UK)\n- Free sexual health & gender services\n- **[→ Visit 56 Dean St](https://dean.st)**\n- Source: 56 Dean Street Clinic\n\n---\n\n**HIV Prevention (PrEP)**:\n\n**PrEPster** (Global Directory)\n- Find PrEP providers worldwide\n- **[→ Visit PrEPster](https://prepster.info)**\n- Source: PrEPster.info Public Database\n\n**NYC Sexual Health Clinics**\n- Free PrEP, no insurance needed\n- **[→ NYC Health](https://www1.nyc.gov/site/doh/services/sexual-health-clinics.page)**\n- Source: NYC Department of Health\n\n---\n\n**Crisis Support**:\n\n**Trevor Project** (USA)\n- 24/7 crisis support for LGBTQ+ youth\n- Phone: **1-866-488-7386**\n- **[→ TrevorProject.org](https://www.thetrevorproject.org)**\n- Source: Trevor Project Official\n\n**LGBT Foundation** (UK)\n- Helpline & counseling\n- **[→ Visit LGBT Foundation](https://lgbt.foundation)**\n- Source: LGBT Foundation UK\n\n---\n\n**Safety Tips**:\n- Verify clinic credentials before sharing personal info\n- For hostile countries: use encrypted messaging (Signal, WhatsApp)\n- Never buy hormones from unverified online sellers\n- Research reviews before choosing providers\n\n---\n\n**Found broken links or new resources?** Email: chaosxxcinema@outlook.com",
      "zh": "**免責聲明**：這是公共資源目錄，不是醫療建議。請就您的具體情況諮詢醫療專業人員。\n\n---\n\n**荷爾蒙替代療法 (HRT)**：\n\n**計劃生育協會**（美國）\n- 知情同意 HRT，不需要治療師信\n- **[→ 查找診所](https://www.plannedparenthood.org)**\n- 來源：計劃生育協會官方網站\n\n**GenderGP**（在線，全球）\n- 跨性別醫療遠程醫療\n- **[→ 訪問 GenderGP](https://www.gendergp.com)**\n- 來源：GenderGP 官方網站\n\n**56 Dean Street**（倫敦，英國）\n- 免費性健康和性別服務\n- **[→ 訪問 56 Dean St](https://dean.st)**\n- 來源：56 Dean Street 診所\n\n---\n\n**HIV 預防 (PrEP)**：\n\n**PrEPster**（全球目錄）\n- 在全球範圍內查找 PrEP 提供者\n- **[→ 訪問 PrEPster](https://prepster.info)**\n- 來源：PrEPster.info 公共數據庫\n\n**紐約性健康診所**\n- 免費 PrEP，不需要保險\n- **[→ NYC Health](https://www1.nyc.gov/site/doh/services/sexual-health-clinics.page)**\n- 來源：紐約市衛生局\n\n---\n\n**危機支持**：\n\n**Trevor Project**（美國）\n- LGBTQ+ 青少年24/7危機支持\n- 電話：**1-866-488-7386**\n- **[→ TrevorProject.org](https://www.thetrevorproject.org)**\n- 來源：Trevor Project 官方\n\n**LGBT基金會**（英國）\n- 熱線和諮詢\n- **[→ 訪問 LGBT Foundation](https://lgbt.foundation)**\n- 來源：英國 LGBT 基金會\n\n---\n\n**安全提示**：\n- 在分享個人信息之前驗證診所資格\n- 對於敵對國家：使用加密消息（Signal、WhatsApp）\n- 永遠不要從未經驗證的在線賣家購買荷爾蒙\n- 選擇提供者前研究評論\n\n---\n\n**發現損壞的鏈接或新資源？** 電子郵件：chaosxxcinema@outlook.com"
    },
    "tags": [
      {
        "t": {
          "en": "🧰 Toolkit",
          "zh": "🧰 錦囊"
        },
        "c": "ct-health"
      },
      {
        "t": {
          "en": "💊 Medical",
          "zh": "💊 醫療"
        },
        "c": "ct-health"
      },
      {
        "t": {
          "en": "🌐 Global",
          "zh": "🌐 全球"
        },
        "c": "ct-all"
      }
    ],
    "color": "var(--glass-yellow)",
    "url": ""
  },
  {
    "id": 36,
    "cat": "toolkit",
    "country": "all",
    "date": "2026-05-01",
    "urgent": false,
    "source": {
      "en": "Mosaic Resources",
      "zh": "Mosaic 資源"
    },
    "title": {
      "en": "⚖️ Legal Aid: Know Your Rights",
      "zh": "⚖️ 法律援助：了解您的權利"
    },
    "summary": {
      "en": "Free legal services, your rights in different countries, and what to do if arrested.",
      "zh": "免費法律服務、不同國家的權利以及被捕時該怎麼辦。"
    },
    "full": {
      "en": "**Free Legal Services**:\n- **Lambda Legal** (USA): LGBTQ+ rights litigation\n- **ILGA World**: Country-by-country legal status maps (ilga.org)\n- **Human Rights Watch**: Documentation of abuses\n\n**Know Your Rights (USA)**:\n- You have the right to remain silent\n- You have the right to an attorney\n- Do NOT sign anything without legal counsel\n- Document badge numbers and incident details\n\n**Know Your Rights (UK)**:\n- You can refuse to answer questions without a solicitor\n- Police must tell you why you are being arrested\n- Free legal aid available for serious charges\n\n**If Arrested in Hostile Countries**:\n- Say NOTHING without an attorney\n- Contact your embassy immediately\n- Do NOT admit to being LGBTQ+ if unsafe\n- Memorize emergency contact numbers",
      "zh": "**免費法律服務**：\n- **Lambda Legal** (美國)：LGBTQ+ 權利訴訟\n- **ILGA World**：按國家劃分的法律狀態地圖 (ilga.org)\n- **人權觀察**：虐待記錄\n\n**了解您的權利 (美國)**：\n- 您有權保持沉默\n- 您有權獲得律師\n- 不要在沒有法律顧問的情況下簽署任何東西\n- 記錄徽章號碼和事件細節\n\n**了解您的權利 (英國)**：\n- 您可以拒絕在沒有律師的情況下回答問題\n- 警察必須告訴您為什麼被逮捕\n- 嚴重指控可獲免費法律援助\n\n**如果在敵對國家被捕**：\n- 沒有律師什麼都不要說\n- 立即聯繫您的大使館\n- 如果不安全，不要承認是 LGBTQ+\n- 記住緊急聯繫電話"
    },
    "tags": [
      {
        "t": {
          "en": "🧰 Toolkit",
          "zh": "🧰 錦囊"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "⚖️ Legal",
          "zh": "⚖️ 法律"
        },
        "c": "ct-legal"
      },
      {
        "t": {
          "en": "🌐 Global",
          "zh": "🌐 全球"
        },
        "c": "ct-all"
      }
    ],
    "color": "var(--glass-yellow)",
    "url": ""
  },
  {
    "id": 37,
    "cat": "vpn",
    "country": "all",
    "date": "2026-05-01",
    "urgent": false,
    "source": {
      "en": "Mosaic Tech Guide",
      "zh": "Mosaic 技術指南"
    },
    "title": {
      "en": "🔒 VPN Basics: What It Is & Why You Need It",
      "zh": "🔒 VPN 基礎：什麼是 VPN 以及為什麼需要它"
    },
    "summary": {
      "en": "A beginner-friendly guide to VPNs: what they do, how they protect you, and when to use them.",
      "zh": "初學者友好的 VPN 指南：它們做什麼、如何保護您以及何時使用它們。"
    },
    "full": {
      "en": "**What is a VPN?**\nVPN = Virtual Private Network. It creates an encrypted tunnel between your device and the internet, hiding your activity from your internet provider, government, and hackers.\n\n**What a VPN Does**:\n✅ Hides your IP address (location)\n✅ Encrypts your internet traffic\n✅ Lets you access blocked websites\n✅ Protects you on public WiFi\n\n**What a VPN Does NOT Do**:\n❌ Make you 100% anonymous (still need other tools)\n❌ Protect you from malware\n❌ Hide activity from websites you log into\n\n**When You NEED a VPN**:\n- Living in a country that censors LGBTQ+ content\n- Accessing sensitive resources (this site, support groups)\n- Using public WiFi (cafes, libraries)\n- Researching asylum or legal rights\n\n**Free vs Paid VPNs**:\n- **Free**: Often slow, may log your data, limited servers\n- **Paid**: Faster, more secure, better for high-risk situations\n\n**Next**: See our recommended VPN list →",
      "zh": "**什麼是 VPN？**\nVPN = 虛擬私人網絡。它在您的設備和互聯網之間創建一個加密隧道，向您的互聯網提供商、政府和駭客隱藏您的活動。\n\n**VPN 做什麼**：\n✅ 隱藏您的 IP 地址（位置）\n✅ 加密您的互聯網流量\n✅ 讓您訪問被封鎖的網站\n✅ 在公共 WiFi 上保護您\n\n**VPN 不做什麼**：\n❌ 讓您100%匿名（仍需要其他工具）\n❌ 保護您免受惡意軟件\n❌ 隱藏您登錄的網站的活動\n\n**何時需要 VPN**：\n- 生活在審查 LGBTQ+ 內容的國家\n- 訪問敏感資源（本網站、支持小組）\n- 使用公共 WiFi（咖啡館、圖書館）\n- 研究庇護或法律權利\n\n**免費 vs 付費 VPN**：\n- **免費**：通常慢，可能記錄您的數據，服務器有限\n- **付費**：更快，更安全，更適合高風險情況\n\n**下一步**：查看我們推薦的 VPN 列表 →"
    },
    "tags": [
      {
        "t": {
          "en": "🔒 VPN",
          "zh": "🔒 VPN"
        },
        "c": "ct-news"
      },
      {
        "t": {
          "en": "📱 Digital",
          "zh": "📱 數字"
        },
        "c": "ct-news"
      },
      {
        "t": {
          "en": "🌐 Global",
          "zh": "🌐 全球"
        },
        "c": "ct-all"
      }
    ],
    "color": "var(--glass-teal)",
    "url": ""
  },
  {
    "id": 38,
    "cat": "vpn",
    "country": "all",
    "date": "2026-05-01",
    "urgent": false,
    "source": {
      "en": "Mosaic Tech Guide",
      "zh": "Mosaic 技術指南"
    },
    "title": {
      "en": "✅ Recommended VPNs for LGBTQ+ Safety",
      "zh": "✅ 推薦的 LGBTQ+ 安全 VPN"
    },
    "summary": {
      "en": "Vetted VPN services that prioritize privacy, work in censored regions, and don't log your activity.",
      "zh": "經過審查的 VPN 服務，優先考慮隱私，在審查地區工作，不記錄您的活動。"
    },
    "full": {
      "en": "**Top Recommendations (Paid)**:\n\n**1. Mullvad VPN** 💚\n- No email required to sign up\n- Accepts cash payments (truly anonymous)\n- No logs policy (audited)\n- Works in China, Iran, Russia\n- Price: €5/month (~$5.50 USD)\n- Website: mullvad.net\n\n**2. ProtonVPN**\n- Based in Switzerland (strong privacy laws)\n- Free tier available (limited servers)\n- Secure Core feature (double encryption)\n- Works in most censored countries\n- Price: Free or $10/month for Plus\n- Website: protonvpn.com\n\n**3. IVPN**\n- No email required\n- Open source apps\n- Accepts cryptocurrency\n- Price: $6/month\n- Website: ivpn.net\n\n**For China/Heavy Censorship**:\n- Try: Astrill, VyprVPN (designed for Great Firewall)\n\n**AVOID**: Free VPNs like Hola, TouchVPN (they sell your data)\n\n**Setup Help**: Email chaosxxcinema@outlook.com",
      "zh": "**最佳推薦（付費）**：\n\n**1. Mullvad VPN** 💚\n- 註冊不需要電子郵件\n- 接受現金支付（真正匿名）\n- 無日誌政策（已審計）\n- 在中國、伊朗、俄羅斯工作\n- 價格：€5/月（~$5.50 美元）\n- 網站：mullvad.net\n\n**2. ProtonVPN**\n- 總部設在瑞士（強大的隱私法）\n- 提供免費層（服務器有限）\n- 安全核心功能（雙重加密）\n- 在大多數審查國家工作\n- 價格：免費或 Plus $10/月\n- 網站：protonvpn.com\n\n**3. IVPN**\n- 不需要電子郵件\n- 開源應用\n- 接受加密貨幣\n- 價格：$6/月\n- 網站：ivpn.net\n\n**對於中國/重度審查**：\n- 嘗試：Astrill、VyprVPN（為防火長城設計）\n\n**避免**：免費 VPN 如 Hola、TouchVPN（他們出售您的數據）\n\n**設置幫助**：電子郵件 chaosxxcinema@outlook.com"
    },
    "tags": [
      {
        "t": {
          "en": "🔒 VPN",
          "zh": "🔒 VPN"
        },
        "c": "ct-news"
      },
      {
        "t": {
          "en": "📱 Digital",
          "zh": "📱 數字"
        },
        "c": "ct-news"
      },
      {
        "t": {
          "en": "💚 Recommended",
          "zh": "💚 推薦"
        },
        "c": "ct-news"
      }
    ],
    "color": "var(--glass-teal)",
    "url": ""
  },
  {
    "id": 39,
    "cat": "vpn",
    "country": "all",
    "date": "2026-05-01",
    "urgent": false,
    "source": {
      "en": "Mosaic Tech Guide",
      "zh": "Mosaic 技術指南"
    },
    "title": {
      "en": "⚠️ VPN Safety: Common Mistakes to Avoid",
      "zh": "⚠️ VPN 安全：要避免的常見錯誤"
    },
    "summary": {
      "en": "Critical errors that can compromise your safety even when using a VPN, and how to avoid them.",
      "zh": "即使使用 VPN 也可能危及您安全的關鍵錯誤，以及如何避免它們。"
    },
    "full": {
      "en": "**Common Mistakes**:\n\n❌ **Using Free VPNs**: They often log and sell your data. Some are honeypots run by governments.\n\n❌ **Logging into Personal Accounts**: If you use VPN to access blocked sites but log into your Facebook/Gmail, you're still traceable.\n\n❌ **Not Using HTTPS**: VPN encrypts the tunnel, but websites can still see your activity. Always use HTTPS sites.\n\n❌ **Forgetting to Turn It On**: VPN only works when it's running. Set it to auto-connect.\n\n❌ **Using Your Phone's Location**: Turn off GPS/location services. VPN hides your IP, not your phone's location.\n\n**What To Do Instead**:\n✅ Use paid VPNs with audited no-logs policies\n✅ Create separate email for sensitive activities\n✅ Use Tor Browser for extra anonymity\n✅ Turn off location services\n✅ Clear cookies regularly\n\n**Remember**: VPN is ONE tool. Combine it with smart browsing habits for real safety.\n\n**Questions?** Email: chaosxxcinema@outlook.com",
      "zh": "**常見錯誤**：\n\n❌ **使用免費 VPN**：它們通常記錄並出售您的數據。有些是政府運營的蜜罐。\n\n❌ **登錄個人帳戶**：如果您使用 VPN 訪問被封鎖的網站但登錄您的 Facebook/Gmail，您仍然可以被追蹤。\n\n❌ **不使用 HTTPS**：VPN 加密隧道，但網站仍然可以看到您的活動。始終使用 HTTPS 網站。\n\n❌ **忘記打開它**：VPN 只有在運行時才有效。將其設置為自動連接。\n\n❌ **使用手機位置**：關閉 GPS/位置服務。VPN 隱藏您的 IP，而不是手機的位置。\n\n**應該做什麼**：\n✅ 使用經過審計的無日誌政策的付費 VPN\n✅ 為敏感活動創建單獨的電子郵件\n✅ 使用 Tor 瀏覽器獲得額外的匿名性\n✅ 關閉位置服務\n✅ 定期清除 cookie\n\n**記住**：VPN 是一種工具。將其與智能瀏覽習慣相結合以實現真正的安全。\n\n**有問題？** 電子郵件：chaosxxcinema@outlook.com"
    },
    "tags": [
      {
        "t": {
          "en": "🔒 VPN",
          "zh": "🔒 VPN"
        },
        "c": "ct-news"
      },
      {
        "t": {
          "en": "⚠️ Safety",
          "zh": "⚠️ 安全"
        },
        "c": "ct-health"
      },
      {
        "t": {
          "en": "📱 Digital",
          "zh": "📱 數字"
        },
        "c": "ct-news"
      }
    ],
    "color": "var(--glass-teal)",
    "url": ""
  },
  {
    "id": 40,
    "cat": "toolkit",
    "country": "all",
    "date": "2026-05-01",
    "urgent": false,
    "source": {
      "en": "Mosaic Resources",
      "zh": "Mosaic 資源"
    },
    "title": {
      "en": "🏠 Housing & Emergency Shelter Resources",
      "zh": "🏠 住房與緊急庇護所資源"
    },
    "summary": {
      "en": "Global housing assistance, emergency shelters, and anti-discrimination resources for LGBTQ+ individuals.",
      "zh": "為 LGBTQ+ 個人提供的全球住房援助、緊急庇護所和反歧視資源。"
    },
    "full": {
      "en": "**Emergency Shelters (Global)**:\n\n**Ali Forney Center** (New York, USA)\n- Largest LGBTQ+ youth shelter in the US\n- Website: aliforneycenter.org\n- Source: [Ali Forney Center Official Site]\n\n**Albert Kennedy Trust** (UK)\n- Housing support for LGBTQ+ youth 16-25\n- Website: akt.org.uk\n- Source: [Albert Kennedy Trust]\n\n**Covenant House** (Americas)\n- Youth shelters in USA, Canada, Latin America\n- LGBTQ+-affirming services\n- Website: covenanthouse.org\n- Source: [Covenant House International]\n\n**Housing Rights**:\n\n**Fair Housing Act** (USA): Protects against discrimination based on sexual orientation and gender identity in housing. Learn more: [HUD.gov - Fair Housing]\n\n**UK Equality Act 2010**: Prohibits housing discrimination. Source: [Gov.uk]\n\n**What To Do If Discriminated**:\n1. Document everything (emails, texts, recordings if legal)\n2. Contact local fair housing agency\n3. File complaint with government housing authority\n4. Seek legal aid (Lambda Legal, ACLU)\n\n**Long-Term Housing Programs**:\n\n**Housing Works** (NYC): Supportive housing for people with HIV/AIDS\n- Website: housingworks.org\n- Source: [Housing Works]\n\n**LGBTQ+ Housing Resources** (Global directory)\n- Website: lgbtqhousing.org\n- Source: [National LGBT Housing Coalition]\n\n**Safety Tips**:\n- Research landlord reviews before renting\n- Know your local housing discrimination laws\n- Join LGBTQ+ housing Facebook groups in your city\n- Consider roommate matching services\n\n*All information sourced from official organization websites and verified as of May 2026.*",
      "zh": "**緊急庇護所（全球）**：\n\n**Ali Forney Center**（紐約，美國）\n- 美國最大的 LGBTQ+ 青少年庇護所\n- 網站：aliforneycenter.org\n- 來源：[Ali Forney Center 官方網站]\n\n**Albert Kennedy Trust**（英國）\n- 為 16-25 歲 LGBTQ+ 青少年提供住房支持\n- 網站：akt.org.uk\n- 來源：[Albert Kennedy Trust]\n\n**Covenant House**（美洲）\n- 美國、加拿大、拉丁美洲的青少年庇護所\n- 提供對 LGBTQ+ 友好的服務\n- 網站：covenanthouse.org\n- 來源：[Covenant House International]\n\n**住房權利**：\n\n**公平住房法案**（美國）：保護免受基於性取向和性別認同的住房歧視。了解更多：[HUD.gov - 公平住房]\n\n**英國平等法案 2010**：禁止住房歧視。來源：[Gov.uk]\n\n**如果遭受歧視該怎麼辦**：\n1. 記錄一切（電子郵件、短信、合法錄音）\n2. 聯繫當地公平住房機構\n3. 向政府住房管理局投訴\n4. 尋求法律援助（Lambda Legal、ACLU）\n\n**長期住房計劃**：\n\n**Housing Works**（紐約）：為 HIV/AIDS 患者提供支持性住房\n- 網站：housingworks.org\n- 來源：[Housing Works]\n\n**LGBTQ+ 住房資源**（全球目錄）\n- 網站：lgbtqhousing.org\n- 來源：[國家 LGBT 住房聯盟]\n\n**安全提示**：\n- 租房前研究房東評論\n- 了解當地住房歧視法律\n- 加入您所在城市的 LGBTQ+ 住房 Facebook 小組\n- 考慮室友配對服務\n\n*所有信息來源於官方組織網站，截至 2026 年 5 月已驗證。*"
    },
    "tags": [
      {
        "t": {
          "en": "🧰 Toolkit",
          "zh": "🧰 錦囊"
        },
        "c": "ct-health"
      },
      {
        "t": {
          "en": "🏠 Housing",
          "zh": "🏠 住房"
        },
        "c": "ct-health"
      },
      {
        "t": {
          "en": "🌐 Global",
          "zh": "🌐 全球"
        },
        "c": "ct-all"
      }
    ],
    "color": "var(--glass-yellow)",
    "url": ""
  }
];

const articleQuotes = [
  {
    "en": "\"Hope will never be silent.\" — Harvey Milk, 1978",
    "zh": "\"希望永不沉默。\" — Harvey Milk, 1978"
  },
  {
    "en": "\"Love is love.\" — Mildred Loving",
    "zh": "\"愛就是愛。\" — Mildred Loving"
  },
  {
    "en": "\"We deserve to experience love fully, equally, without shame and without compromise.\" — Elliot Page",
    "zh": "\"我們值得完整、平等地體驗愛，無需羞恥、無需妥協。\" — Elliot Page"
  },
  {
    "en": "\"No pride for some of us without liberation for all of us.\" — Marsha P. Johnson",
    "zh": "\"沒有我們所有人的解放，就沒有我們中任何人的驕傲。\" — Marsha P. Johnson"
  },
  {
    "en": "\"Be yourself. Everyone else is already taken.\" — Oscar Wilde",
    "zh": "\"做你自己。其他人都已經有人做了。\" — Oscar Wilde"
  },
  {
    "en": "\"It takes no compromise to give people their rights. It takes no money to respect the individual.\" — Harvey Milk",
    "zh": "\"給予人們權利不需要妥協。尊重個體不需要金錢。\" — Harvey Milk"
  },
  {
    "en": "\"The only way to survive is by taking care of one another.\" — Grace Lee Boggs",
    "zh": "\"唯一的生存之道就是彼此照顧。\" — Grace Lee Boggs"
  }
];

const articleRecipes = [
  {
    "icon": "🐔🌶️",
    "name": {
      "zh": "宫保鸡丁",
      "en": "Kung Pao Chicken",
      "es": "Pollo Kung Pao",
      "ar": "دجاج كونج باو",
      "ru": "Курица Кунг Пао"
    },
    "diff": {
      "zh": "中等",
      "en": "Medium",
      "es": "Medio",
      "ar": "متوسط",
      "ru": "Средний"
    },
    "time": {
      "zh": "30分鐘",
      "en": "30min",
      "es": "30min",
      "ar": "30 دقيقة",
      "ru": "30мин"
    },
    "ingredients": [
      "鸡胸肉 300克",
      "花生米 50克",
      "黄瓜 1根（切丁）",
      "葱白 2根"
    ],
    "seasonings": [
      "干辣椒 10个",
      "花椒 1小勺",
      "生抽 2湯匙",
      "老抽 半湯匙",
      "糖 1湯匙",
      "醋 1湯匙",
      "淀粉 1湯匙"
    ],
    "steps": [
      "鸡胸肉切成1.5cm小丁，加料酒、生抽、淀粉腌制15分钟。",
      "调酱汁：生抽、老抽、糖、醋、淀粉、少许水混合备用。",
      "锅中倒油，中火炒花生米至金黄，盛出备用。",
      "锅留底油，中大火，下鸡丁快炒至变色，盛出。",
      "锅中加少许油，小火炒干辣椒和花椒至出香味（不要炒糊）。",
      "转大火，倒入鸡丁、黄瓜丁、葱白，快速翻炒。",
      "倒入调好的酱汁，翻炒均匀至收汁。",
      "最后撒入炒好的花生米，翻匀即可出锅。"
    ],
    "tips": "💡 小貼士：鸡丁一定要大火快炒，保持嫩滑；干辣椒别炒糊，否则会苦；花生米最后放，保持酥脆口感。"
  },
  {
    "icon": "🌶️🧊",
    "name": {
      "zh": "麻婆豆腐",
      "en": "Mapo Tofu",
      "es": "Tofu Mapo",
      "ar": "توفو مابو",
      "ru": "Тофу Мапо"
    },
    "diff": {
      "zh": "簡單",
      "en": "Easy",
      "es": "Fácil",
      "ar": "سهل",
      "ru": "Легкий"
    },
    "time": {
      "zh": "20分鐘",
      "en": "20min",
      "es": "20min",
      "ar": "20 دقيقة",
      "ru": "20мин"
    },
    "ingredients": [
      "嫩豆腐 1盒（400克）",
      "猪肉末 100克",
      "蒜末 2瓣",
      "姜末 适量"
    ],
    "seasonings": [
      "郫县豆瓣酱 2湯匙",
      "花椒粉 1小勺",
      "生抽 1湯匙",
      "糖 半小勺",
      "淀粉水 适量",
      "葱花 适量"
    ],
    "steps": [
      "豆腐切成2cm小块，用淡盐水浸泡10分钟（去豆腥味）。",
      "锅中倒油，中火炒猪肉末至变色出油。",
      "加入豆瓣酱、姜蒜末，小火炒出红油。",
      "倒入半碗清水，烧开。",
      "轻轻放入豆腐块，加生抽、糖，小火煮3-5分钟入味。",
      "倒入淀粉水勾芡，轻轻推动豆腐（不要搅拌，容易碎）。",
      "出锅前撒花椒粉和葱花，淋少许热油激发香气。"
    ],
    "tips": "💡 小貼士：豆腐一定要轻拿轻放，用推的方式而不是搅；花椒粉最后放，香味最浓；豆瓣酱要炒出红油才够香。"
  },
  {
    "icon": "🐷🌶️",
    "name": {
      "zh": "鱼香肉丝",
      "en": "Yu Xiang Pork",
      "es": "Cerdo Yu Xiang",
      "ar": "لحم خنزير يو شيانغ",
      "ru": "Свинина Юй Сян"
    },
    "diff": {
      "zh": "中等",
      "en": "Medium",
      "es": "Medio",
      "ar": "متوسط",
      "ru": "Средний"
    },
    "time": {
      "zh": "25分鐘",
      "en": "25min",
      "es": "25min",
      "ar": "25 دقيقة",
      "ru": "25мин"
    },
    "ingredients": [
      "猪里脊肉 300克（切丝）",
      "木耳 50克（泡发切丝）",
      "胡萝卜 半根（切丝）",
      "青椒 1个（切丝）"
    ],
    "seasonings": [
      "泡椒 3个（剁碎）",
      "姜蒜末 适量",
      "生抽 2湯匙",
      "醋 1.5湯匙",
      "糖 1湯匙",
      "淀粉 1湯匙",
      "料酒 1湯匙"
    ],
    "steps": [
      "肉丝加料酒、淀粉、少许油抓匀腌制10分钟。",
      "调鱼香汁：生抽、醋、糖、淀粉、少许水混合（比例2:1.5:1）。",
      "锅中倒油，中大火，下肉丝快炒至变色，盛出。",
      "锅中加油，小火炒泡椒、姜蒜末至出香味。",
      "转大火，倒入木耳、胡萝卜、青椒快炒1分钟。",
      "倒回肉丝，快速翻炒均匀。",
      "倒入鱼香汁，大火快炒至收汁裹匀即可。"
    ],
    "tips": "💡 小貼士：鱼香味的灵魂是泡椒，一定要用正宗的四川泡椒；醋要后放，保持酸味；全程大火快炒，保持脆嫩。"
  },
  {
    "icon": "🥩🍯",
    "name": {
      "zh": "红烧肉",
      "en": "Braised Pork Belly",
      "es": "Cerdo Estofado",
      "ar": "لحم خنزير مطهو",
      "ru": "Тушеная Свинина"
    },
    "diff": {
      "zh": "中等",
      "en": "Medium",
      "es": "Medio",
      "ar": "متوسط",
      "ru": "Средний"
    },
    "time": {
      "zh": "90分鐘",
      "en": "90min",
      "es": "90min",
      "ar": "90 دقيقة",
      "ru": "90мин"
    },
    "ingredients": [
      "五花肉 500克（切2cm方块）",
      "冰糖 20克",
      "八角 2个",
      "桂皮 1小块",
      "香叶 2片"
    ],
    "seasonings": [
      "生抽 3湯匙",
      "老抽 1湯匙",
      "料酒 2湯匙",
      "姜片 3片",
      "葱段 2根"
    ],
    "steps": [
      "五花肉冷水下锅，加姜片、料酒焯水5分钟，捞出洗净。",
      "锅中放少许油，小火炒冰糖至棕红色冒泡（糖色）。",
      "快速倒入五花肉翻炒上色（动作要快，否则糖会焦）。",
      "加入八角、桂皮、香叶、姜片、葱段爆香。",
      "倒入生抽、老抽，翻炒均匀。",
      "加开水没过肉块，大火烧开。",
      "转小火盖锁盖炖60分钟（中途翻动2-3次）。",
      "开盖，大火收汁至浓稠，肉块裹上红亮酱汁即可。"
    ],
    "tips": "💡 小貼士：炒糖色是关键，棕红色最好，太深会苦；一定要用小火慢炖，肉才会软烂；最后大火收汁，酱汁浓稠才好吃。"
  },
  {
    "icon": "🍖🍯",
    "name": {
      "zh": "糖醋排骨",
      "en": "Sweet & Sour Ribs",
      "es": "Costillas Agridulces",
      "ar": "أضلاع حلوة وحامضة",
      "ru": "Кисло-сладкие Ребрышки"
    },
    "diff": {
      "zh": "簡單",
      "en": "Easy",
      "es": "Fácil",
      "ar": "سهل",
      "ru": "Легкий"
    },
    "time": {
      "zh": "40分鐘",
      "en": "40min",
      "es": "40min",
      "ar": "40 دقيقة",
      "ru": "40мин"
    },
    "ingredients": [
      "小排 500克",
      "料酒 1湯匙",
      "姜片 3片",
      "葱段 2根"
    ],
    "seasonings": [
      "糖 3湯匙",
      "醋 2湯匙",
      "生抽 1湯匙",
      "老抽 半湯匙",
      "盐 少许",
      "白芝麻 适量"
    ],
    "steps": [
      "小排冷水下锅，加姜片、葱段、料酒焯水，撇去浮沫，捞出洗净。",
      "调糖醋汁：糖、醋、生抽、老抽、少许盐混合（比例3:2:1:0.5）。",
      "锅中倒少许油，中火煎排骨至两面微黄。",
      "倒入糖醋汁，加没过排骨的开水。",
      "大火烧开后转中小火盖锁盖焖25分钟。",
      "开盖转大火收汁，边收边翻动，让每块排骨都裹上酱汁。",
      "收至浓稠红亮，撒白芝麻，出锅。"
    ],
    "tips": "💡 小貼士：糖醋比例3:2是黄金比例，酸甜适中；焖的时候不要揭盖，保持温度；收汁要大火，不停翻动防止粘锅。"
  },
  {
    "icon": "🍅🥚",
    "name": {
      "zh": "番茄炒蛋",
      "en": "Tomato Scrambled Eggs",
      "es": "Huevos Revueltos con Tomate",
      "ar": "بيض مخفوق مع طماطم",
      "ru": "Яичница с Помидорами"
    },
    "diff": {
      "zh": "超簡單",
      "en": "Very Easy",
      "es": "Muy Fácil",
      "ar": "سهل جدا",
      "ru": "Очень Легко"
    },
    "time": {
      "zh": "10分鐘",
      "en": "10min",
      "es": "10min",
      "ar": "10 دقيقة",
      "ru": "10мин"
    },
    "ingredients": [
      "番茄 2个（切块）",
      "鸡蛋 3个",
      "葱花 适量"
    ],
    "seasonings": [
      "糖 1小勺",
      "盐 适量",
      "料酒 少许"
    ],
    "steps": [
      "鸡蛋打散，加少许盐、料酒搅匀。",
      "锅中倒油烧热，倒入蛋液，快速划散成大块，盛出（别炒老）。",
      "锅中再加少许油，倒入番茄块，中火炒出汁水。",
      "加糖、盐调味，炒至番茄软烂出沙。",
      "倒回炒好的鸡蛋，快速翻炒均匀。",
      "撒葱花，出锅。"
    ],
    "tips": "💡 小貼士：鸡蛋要嫩滑，炒到7分熟就盛出；番茄要炒出汁，加点糖提鲜；最后鸡蛋回锅只需翻几下，保持嫩度。"
  },
  {
    "icon": "🐟🌶️🔥",
    "name": {
      "zh": "水煮鱼",
      "en": "Boiled Fish in Chili Oil",
      "es": "Pescado en Aceite Picante",
      "ar": "سمك مسلوق في زيت الفلفل",
      "ru": "Рыба в Остром Масле"
    },
    "diff": {
      "zh": "中等",
      "en": "Medium",
      "es": "Medio",
      "ar": "متوسط",
      "ru": "Средний"
    },
    "time": {
      "zh": "35分鐘",
      "en": "35min",
      "es": "35min",
      "ar": "35 دقيقة",
      "ru": "35мин"
    },
    "ingredients": [
      "草鱼 1条（切片）",
      "豆芽 200克",
      "黄豆芽 100克",
      "干辣椒 30克",
      "花椒 20克"
    ],
    "seasonings": [
      "郫县豆瓣酱 2湯匙",
      "姜蒜末 适量",
      "料酒 1湯匙",
      "蛋清 1个",
      "淀粉 1湯匙",
      "盐 适量"
    ],
    "steps": [
      "鱼片加盐、料酒、蛋清、淀粉抓匀腌制15分钟。",
      "豆芽焯水至断生，铺在碗底。",
      "锅中倒油，小火炒豆瓣酱、姜蒜末出红油。",
      "加清水烧开，调盐。",
      "轻轻放入鱼片，小火煮2-3分钟至熟，倒入铺好豆芽的碗中。",
      "另起锅烧热油，放入干辣椒、花椒炸香（小火，别糊）。",
      "趁热把辣椒油浇在鱼片上，滋滋作响，撒葱花即可。"
    ],
    "tips": "💡 小貼士：鱼片要薄，才能快熟嫩滑；煮鱼片时水不要沸腾，小火煮；最后泼油一定要够热，才能激发香味。"
  },
  {
    "icon": "🌶️🩸🔥",
    "name": {
      "zh": "毛血旺",
      "en": "Spicy Blood Curd Stew",
      "es": "Estofado Picante de Sangre",
      "ar": "يخنة الدم الحار",
      "ru": "Острое Рагу из Крови"
    },
    "diff": {
      "zh": "中等",
      "en": "Medium",
      "es": "Medio",
      "ar": "متوسط",
      "ru": "Средний"
    },
    "time": {
      "zh": "30分鐘",
      "en": "30min",
      "es": "30min",
      "ar": "30 دقيقة",
      "ru": "30мин"
    },
    "ingredients": [
      "鸭血 1盒",
      "午餐肉 200克",
      "豆芽 150克",
      "木耳 50克",
      "黄喉 100克"
    ],
    "seasonings": [
      "郫县豆瓣酱 2湯匙",
      "干辣椒 30克",
      "花椒 20克",
      "姜蒜末 适量",
      "生抽 1湯匙",
      "糖 少许"
    ],
    "steps": [
      "鸭血、午餐肉、黄喉切片，豆芽洗净。",
      "锅中烧水，分别焯烫鸭血、黄喉、豆芽至断生，捞出铺碗底。",
      "锅中倒油，小火炒豆瓣酱、姜蒜末出红油。",
      "加清水烧开，加生抽、糖调味。",
      "放入午餐肉煮1分钟，连汤一起倒入碗中。",
      "洗净锅，倒油烧热，小火炸香干辣椒和花椒。",
      "把辣椒油趁热浇在碗中，撒葱花、香菜即可。"
    ],
    "tips": "💡 小貼士：鸭血要提前焯水去腥；豆瓣酱一定要炒出红油；最后泼的油要够热，辣椒花椒的香味才能出来。"
  },
  {
    "icon": "🍗🥤",
    "name": {
      "zh": "可乐鸡翅",
      "en": "Cola Chicken Wings",
      "es": "Alitas de Pollo con Cola",
      "ar": "أجنحة دجاج بالكولا",
      "ru": "Куриные Крылышки с Колой"
    },
    "diff": {
      "zh": "超簡單",
      "en": "Very Easy",
      "es": "Muy Fácil",
      "ar": "سهل جدا",
      "ru": "Очень Легко"
    },
    "time": {
      "zh": "30分鐘",
      "en": "30min",
      "es": "30min",
      "ar": "30 دقيقة",
      "ru": "30мин"
    },
    "ingredients": [
      "鸡翅 10个",
      "可乐 1罐（330ml）",
      "姜片 3片"
    ],
    "seasonings": [
      "生抽 2湯匙",
      "老抽 半湯匙",
      "料酒 1湯匙",
      "葱段 2根"
    ],
    "steps": [
      "鸡翅洗净，两面各划两刀（方便入味）。",
      "锅中倒少许油，放姜片爆香。",
      "倒入鸡翅，中火煎至两面金黄。",
      "倒入可乐，刚好没过鸡翅（真可乐，别用零度！）。",
      "加生抽、老抽、料酒，放葱段。",
      "大火烧开后转中小火，盖锁盖炖15分钟。",
      "开盖转大火收汁，不停翻动让鸡翅裹上浓稠酱汁。",
      "收至汤汁浓稠红亮，鸡翅表面油光发亮即可出锅。"
    ],
    "tips": "💡 小貼士：一定要用真可乐（有糖的），糖分是关键！收汁时要不停翻动，防止粘锅；煎鸡翅时不要频繁翻动，煎透一面再翻。"
  }
];
