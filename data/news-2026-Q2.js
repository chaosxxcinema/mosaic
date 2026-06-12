// Mosaic 新聞 · 2026 第二季 (4-6月)
// 2026-06-11 清理:移除4條無法核實的測試條目(原id 1,2,5,9)
// 保留原id 3,4(蝦蝦確認真實)——⚠️ TODO:兩條的 url 仍是媒體首頁,請補上具體報道的永久鏈接
window.newsData = (window.newsData || []).concat([
  {
    "id": 3,
    "cat": "news",
    "country": "cn",
    "date": "2026-04-25",
    "urgent": false,
    "source": { "en": "Radio Free Asia", "zh": "自由亞洲電台" },
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
      { "t": { "en": "🇨🇳 China", "zh": "🇨🇳 中國" }, "c": "ct-cn" },
      { "t": { "en": "📰 News", "zh": "📰 新聞" }, "c": "ct-news" },
      { "t": { "en": "⚠️ Suppression", "zh": "⚠️ 打壓" }, "c": "ct-urgent" }
    ],
    "color": "var(--glass-orange)",
    "url": "https://rfa.org",
    "sub": "zh-sphere"
  },
  {
    "id": 4,
    "cat": "news",
    "country": "cn",
    "date": "2026-04-20",
    "urgent": false,
    "source": { "en": "The Initium Media", "zh": "端傳媒" },
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
      { "t": { "en": "🇨🇳 China", "zh": "🇨🇳 中國" }, "c": "ct-cn" },
      { "t": { "en": "📰 Investigative", "zh": "📰 調查報道" }, "c": "ct-news" }
    ],
    "color": "var(--glass-orange)",
    "url": "https://theinitium.com",
    "sub": "zh-sphere"
  },
  {
    "id": 260429,
    "cat": "news",
    "country": "us",
    "date": "2026-04-29",
    "urgent": true,
    "source": { "en": "Federal Register (DHS/USCIS)", "zh": "美國聯邦公報（國土安全部/移民局）" },
    "title": {
      "en": "URGENT: From May 29, Unpaid Annual Asylum Fee Can Get Pending Asylum Cases Rejected",
      "zh": "緊急：5月29日起，未繳「庇護年費」可導致待審庇護申請被駁回"
    },
    "summary": {
      "en": "DHS published an interim final rule (effective 2026-05-29) codifying the H.R.1 asylum fees: a one-time $100 fee for Form I-589 and an Annual Asylum Fee ($100 for FY2025, $102 after inflation adjustment) for every pending case. Failure to pay the AAF within 30 days of USCIS notification will result in rejection of the pending asylum application; applicants without legal status may face removal proceedings. The fees cannot be waived.",
      "zh": "國土安全部發布《臨時最終規則》（2026年5月29日生效），落實 H.R.1 法案的庇護收費：I-589 表格一次性申請費100美元，加上每件待審案件須繳的「庇護年費」（AAF，2025財年100美元，通脹調整後為102美元）。收到移民局繳費通知後30天內未繳納年費，待審庇護申請將被駁回；無合法身份者並可能被啟動遣返程序。上述費用不可豁免。"
    },
    "full": {
      "en": "[What happened] USCIS began collecting H.R.1 immigration fees for filings postmarked on or after 2025-07-22 (Federal Register notice of the same date). On 2026-04-29 DHS published an interim final rule, effective 2026-05-29, codifying the fees and the consequences of non-payment. Note: AAF notices were court-ordered paused on 2025-10-30 (ASAP v. USCIS) before this rule. [What this means] Every Chinese-speaking asylum seeker with a pending I-589 — whether or not the interview has happened — is subject to the annual fee until the case is decided. Missing a payment deadline now has case-ending consequences. [What you can do] Check the USCIS online account and mailbox regularly for fee notices; pay online within 30 days; if a notice seems wrong or was missed, contact an accredited legal aid organization immediately rather than ignoring it. [Source] Federal Register, DHS interim final rule, 2026-04-29; USCIS fee alert, 2025-07-18.",
      "zh": "【發生了什麼】移民局自2025年7月22日起對 H.R.1 法案規定的多項移民費用開始收費（同日聯邦公報公告）；2026年4月29日，國土安全部發布《臨時最終規則》，5月29日生效，正式寫入收費規定及不繳費的後果。註：庇護年費通知曾因法院命令於2025年10月30日暫停（ASAP 訴 USCIS 案），本規則後恢復推進。【對你意味著什麼】所有持有待審 I-589 的華語庇護申請人——無論是否已面談——在案件審結前每年都須繳納年費；錯過繳費期限如今會直接導致案件被駁回。【可以做什麼】定期查看移民局線上帳戶與郵件，收到繳費通知後30天內在線繳納；若認為通知有誤或已錯過期限，立即聯繫認證的法律援助組織，切勿置之不理。【信源】聯邦公報，國土安全部臨時最終規則，2026-04-29；移民局收費公告，2025-07-18。"
    },
    "tags": [
      { "t": { "en": "🆘 Urgent", "zh": "🆘 緊急" }, "c": "ct-urgent" },
      { "t": { "en": "⚖️ Asylum", "zh": "⚖️ 庇護" }, "c": "ct-legal" },
      { "t": { "en": "🇺🇸 US", "zh": "🇺🇸 美國" }, "c": "ct-us" }
    ],
    "color": "var(--glass-red, #e8463a)",
    "url": "https://www.federalregister.gov/documents/2026/04/29/2026-08333/uscis-immigration-fees-and-related-procedures-required-by-hr1-reconciliation-bill",
    "sub": "global"
  },
  {
    "id": 260420,
    "cat": "news",
    "country": "us",
    "date": "2026-04-20",
    "urgent": false,
    "source": { "en": "NewYork.cn", "zh": "NewYork.cn 紐約中文導覽" },
    "title": {
      "en": "NYC Pride 2026: March Set for Sunday, June 28, Down Fifth Avenue Past Stonewall",
      "zh": "2026 紐約驕傲遊行：6月28日（週日）沿第五大道舉行，途經石牆酒吧"
    },
    "summary": {
      "en": "The 2026 NYC Pride March takes place Sunday, June 28, heading down Fifth Avenue into Greenwich Village past the Stonewall Inn, with PrideFest street festival the same day and events throughout June.",
      "zh": "2026年紐約驕傲遊行於6月28日（週日）舉行，隊伍沿第五大道南行進入格林威治村，途經石牆酒吧；同日舉辦驕傲節街會，整個六月均有相關活動。"
    },
    "full": {
      "en": "[What happened] The march starts at 26th St & Fifth Ave around 11am and ends near 15th St & Seventh Ave, passing the Stonewall Inn — site of the 1969 riots. Proceeds from Pride events support local LGBTQIA+ organizations. [What this means] For Chinese-speaking newcomers and asylum seekers in the NYC area, Pride weekend is a low-barrier way to connect with community organizations that table at PrideFest, including legal and health service providers. [What you can do] Attendance is free; check nycpride.org for the official route, accessibility info and volunteer registration. [Source] NewYork.cn Chinese-language event guide, 2026.",
      "zh": "【發生了什麼】遊行約於上午11時從第五大道與26街交界出發，至第七大道與15街附近結束，途經1969年石牆暴動發生地石牆酒吧；驕傲活動收益用於支持本地 LGBTQIA+ 組織。【對你意味著什麼】對紐約地區的華語新移民與庇護申請人而言，驕傲週末是低門檻接觸社群組織的機會——驕傲節街會上有法律、醫療等服務機構設攤。【可以做什麼】活動免費參加；官方路線、無障礙資訊與義工報名請以 nycpride.org 為準。【信源】NewYork.cn 中文活動指南，2026年。"
    },
    "tags": [
      { "t": { "en": "🇺🇸 NYC", "zh": "🇺🇸 紐約" }, "c": "ct-us" },
      { "t": { "en": "🗓 Event", "zh": "🗓 活動" }, "c": "ct-event" },
      { "t": { "en": "🆓 Free", "zh": "🆓 免費" }, "c": "ct-free" }
    ],
    "color": "var(--glass-red, #e8463a)",
    "url": "https://www.newyork.cn/niuyuejiaoao/",
    "sub": "overseas"
  }
]);
