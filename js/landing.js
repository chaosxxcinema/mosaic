/* ── 語言系統 ── */
let lang = 'zh';

const i18n = {
  eyebrow:    { zh:'一份活著的檔案 · 2026',   'zh-cn':'一份活着的档案 · 2026',   en:'A LIVING ARCHIVE · 2026' },
  title_line1:{ zh:'在時間的樹下，<br>',       'zh-cn':'在时间的树下，<br>',        en:'Beneath the Tree of Time,<br>' },
  title_accent:{ zh:'每一片葉子都是一次抗爭。', 'zh-cn':'每一片叶子都是一次抗争。',  en:'every leaf is an act of resistance.' },
  subtitle:   { zh:'華語 LGBTQ+ 的記憶、現實與未來。', 'zh-cn':'华语 LGBTQ+ 的记忆、现实与未来。', en:'Memory, Reality, and Future of Chinese-speaking LGBTQ+.' },
  quote:      { zh:'給那些躲在被窩裡，關掉燈，戴上耳機才敢搜索 "gay" 這個詞的人', 'zh-cn':'给那些躲在被窝里，关掉灯，戴上耳机才敢搜索 "gay" 这个词的人', en:'For those who hide under the covers, lights off, headphones on, just to search the word "gay"' },
  scroll:     { zh:'SCROLL · 順流而下', 'zh-cn':'SCROLL · 顺流而下', en:'SCROLL · DESCEND' },
  root_text:  { zh:'時間之樹仍在生長。<br>還有更多事件、更多名字、更多記憶，等待被寫入。', 'zh-cn':'时间之树仍在生长。<br>还有更多事件、更多名字、更多记忆，等待被写入。', en:'The Tree of Time is still growing.<br>More events, more names, more memories — waiting to be written.' },
  root_cta:   { zh:'進入完整檔案庫', 'zh-cn':'进入完整档案库', en:'ENTER THE ARCHIVE' },
  nav_archive:{ zh:'檔案庫', 'zh-cn':'档案库', en:'Archive' },
  nav_tools:  { zh:'生存工具', 'zh-cn':'生存工具', en:'Survival Tools' },
  nav_guest:  { zh:'特邀嘉賓', 'zh-cn':'特邀嘉宾', en:'Guest Voices' },
};

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (i18n[k]) el.textContent = i18n[k][lang] || i18n[k].zh;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.dataset.i18nHtml;
    if (i18n[k]) el.innerHTML = i18n[k][lang] || i18n[k].zh;
  });
  // 更新 title
  const titles = {
    zh:'Mosaic — 為那些在黑暗中搜索的人',
    'zh-cn':'Mosaic — 为那些在黑暗中搜索的人',
    en:'Mosaic — For Those Who Search in the Dark'
  };
  document.title = titles[lang];
  // 更新 html lang
  const htmlLang = { zh:'zh-Hant', 'zh-cn':'zh-Hans', en:'en' };
  document.documentElement.lang = htmlLang[lang];
  // 同步 select
  document.getElementById('lang-select').value = lang;
  // 儲存偏好
  localStorage.setItem('mosaicLang', lang);
}

function switchLang(l) {
  lang = l;
  applyI18n();
  renderTree();
}

/* ── 時間軸數據 ── */
// timelineData loaded from data/timeline.js via script tag

function renderTree() {
  const container = document.getElementById('tree-nodes');
  container.innerHTML = '';

  timelineData.forEach(item => {
    if (item.type === 'divider') {
      container.innerHTML += `
        <div class="year-divider">
          <div class="year-line"></div>
          <span class="year-text">${item.text[lang] || item.text.zh}</span>
        </div>`;

    } else if (item.type === 'quote') {
      container.innerHTML += `
        <div class="epoch-quote">
          <p class="epoch-quote-text">${item.text[lang] || item.text.zh}</p>
          <div class="epoch-quote-cite">${item.cite[lang] || item.cite.zh}</div>
        </div>`;

    } else if (item.type === 'node') {
      const dateStr = (typeof item.date === 'object')
        ? (item.date[lang] || item.date.zh)
        : item.date;
      const tag     = item.tag[lang]     || item.tag.zh;
      const title   = item.title[lang]   || item.title.zh;
      const summary = item.summary[lang] || item.summary.zh;
      const titleClass = item.titleClass ? ` ${item.titleClass}` : '';

      container.innerHTML += `
        <div class="event-node ${item.side} ${item.era}" data-delay="${item.delay}">
          <div class="node-dot"></div>
          <div class="node-connector"></div>
          <div class="event-card">
            <div class="card-meta">
              <span class="card-date">${dateStr}</span>
              <span class="card-region">${item.region}</span>
              <span class="card-tag">${tag}</span>
            </div>
            <h3 class="card-title${titleClass}">${title}</h3>
            <p class="card-summary">${summary}</p>
          </div>
        </div>`;
    }
  });

  observeNodes();
}

function observeNodes() {
  const nodes = document.querySelectorAll('.event-node');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  nodes.forEach(n => observer.observe(n));
}

/* ── 食譜數據（完整 9 道菜，逃生系統用）── */
const recipes = [
  {icon:"🐔🌶️",name:{zh:"宫保鸡丁",en:"Kung Pao Chicken"},diff:{zh:"中等",en:"Medium"},time:{zh:"30分鐘",en:"30min"},
   ingredients:["鸡胸肉 300克","花生米 50克","黄瓜 1根（切丁）","葱白 2根"],
   seasonings:["干辣椒 10个","花椒 1小勺","生抽 2湯匙","老抽 半湯匙","糖 1湯匙","醋 1湯匙","淀粉 1湯匙"],
   steps:["鸡胸肉切成1.5cm小丁，加料酒、生抽、淀粉腌制15分钟。","调酱汁：生抽、老抽、糖、醋、淀粉、少许水混合备用。","锅中倒油，中火炒花生米至金黄，盛出备用。","锅留底油，中大火，下鸡丁快炒至变色，盛出。","锅中加少许油，小火炒干辣椒和花椒至出香味。","转大火，倒入鸡丁、黄瓜丁、葱白，快速翻炒。","倒入调好的酱汁，翻炒均匀至收汁。","最后撒入炒好的花生米，翻匀即可出锅。"],
   tips:"💡 小貼士：鸡丁一定要大火快炒，保持嫩滑；干辣椒别炒糊；花生米最后放，保持酥脆。"},
  {icon:"🌶️🧊",name:{zh:"麻婆豆腐",en:"Mapo Tofu"},diff:{zh:"簡單",en:"Easy"},time:{zh:"20分鐘",en:"20min"},
   ingredients:["嫩豆腐 1盒（400克）","猪肉末 100克","蒜末 2瓣","姜末 适量"],
   seasonings:["郫县豆瓣酱 2湯匙","花椒粉 1小勺","生抽 1湯匙","糖 半小勺","淀粉水 适量","葱花 适量"],
   steps:["豆腐切2cm小块，用淡盐水浸泡10分钟去腥。","锅中倒油，中火炒猪肉末至变色出油。","加入豆瓣酱、姜蒜末，小火炒出红油。","倒入半碗清水，烧开。","轻轻放入豆腐，加生抽、糖，小火煮3-5分钟。","倒入淀粉水勾芡，轻轻推动豆腐。","出锅前撒花椒粉和葱花，淋少许热油。"],
   tips:"💡 小貼士：豆腐要用推的方式，不要搅；花椒粉最后放，香味最浓。"},
  {icon:"🐷🌶️",name:{zh:"鱼香肉丝",en:"Yu Xiang Pork"},diff:{zh:"中等",en:"Medium"},time:{zh:"25分鐘",en:"25min"},
   ingredients:["猪里脊肉 300克（切丝）","木耳 50克（泡发切丝）","胡萝卜 半根（切丝）","青椒 1个（切丝）"],
   seasonings:["泡椒 3个（剁碎）","姜蒜末 适量","生抽 2湯匙","醋 1.5湯匙","糖 1湯匙","淀粉 1湯匙"],
   steps:["肉丝加料酒、淀粉、少许油腌制10分钟。","调鱼香汁：生抽、醋、糖、淀粉、少许水混合。","锅中倒油，下肉丝快炒至变色，盛出。","锅中加油，小火炒泡椒、姜蒜末至出香味。","转大火，倒入木耳、胡萝卜、青椒快炒1分钟。","倒回肉丝，快速翻炒均匀。","倒入鱼香汁，大火快炒至收汁裹匀即可。"],
   tips:"💡 小貼士：鱼香味的灵魂是泡椒，要用正宗四川泡椒；全程大火快炒。"},
  {icon:"🥩🍯",name:{zh:"红烧肉",en:"Braised Pork Belly"},diff:{zh:"中等",en:"Medium"},time:{zh:"90分鐘",en:"90min"},
   ingredients:["五花肉 500克（切2cm方块）","冰糖 20克","八角 2个","桂皮 1小块","香叶 2片"],
   seasonings:["生抽 3湯匙","老抽 1湯匙","料酒 2湯匙","姜片 3片"],
   steps:["五花肉冷水下锅，加姜片、料酒焯水5分钟，洗净。","锅中放少许油，小火炒冰糖至棕红色冒泡。","快速倒入五花肉翻炒上色。","加入香料、生抽、老抽翻炒均匀。","加开水没过肉块，大火烧开后转小火炖60分钟。","开盖，大火收汁至浓稠即可。"],
   tips:"💡 小貼士：炒糖色是关键；一定要小火慢炖，肉才会软烂。"},
  {icon:"🍖🍯",name:{zh:"糖醋排骨",en:"Sweet & Sour Ribs"},diff:{zh:"簡單",en:"Easy"},time:{zh:"40分鐘",en:"40min"},
   ingredients:["小排 500克","料酒 1湯匙","姜片 3片","葱段 2根"],
   seasonings:["糖 3湯匙","醋 2湯匙","生抽 1湯匙","老抽 半湯匙"],
   steps:["小排冷水下锅，加姜片、葱段、料酒焯水，洗净。","调糖醋汁：糖、醋、生抽、老抽混合（比例3:2:1:0.5）。","锅中倒少许油，中火煎排骨至两面微黄。","倒入糖醋汁，加开水，大火烧开后中小火焖25分钟。","开盖转大火收汁，边收边翻动，至浓稠红亮。","撒白芝麻，出锅。"],
   tips:"💡 小貼士：糖醋比例3:2是黄金比例；收汁要大火，不停翻动防止粘锅。"},
  {icon:"🍅🥚",name:{zh:"番茄炒蛋",en:"Tomato Scrambled Eggs"},diff:{zh:"超簡單",en:"Very Easy"},time:{zh:"10分鐘",en:"10min"},
   ingredients:["番茄 2个（切块）","鸡蛋 3个","葱花 适量"],
   seasonings:["糖 1小勺","盐 适量","料酒 少许"],
   steps:["鸡蛋打散，加少许盐、料酒搅匀。","锅中倒油烧热，倒入蛋液，快速划散成大块，盛出。","锅中再加少许油，倒入番茄块，中火炒出汁水。","加糖、盐调味，炒至番茄软烂出沙。","倒回炒好的鸡蛋，快速翻炒均匀，撒葱花出锅。"],
   tips:"💡 小貼士：鸡蛋炒到7分熟就盛出；番茄要炒出汁，加点糖提鲜。"},
  {icon:"🐟🌶️🔥",name:{zh:"水煮鱼",en:"Boiled Fish in Chili Oil"},diff:{zh:"中等",en:"Medium"},time:{zh:"35分鐘",en:"35min"},
   ingredients:["草鱼 1条（切片）","豆芽 200克","干辣椒 30克","花椒 20克"],
   seasonings:["郫县豆瓣酱 2湯匙","姜蒜末 适量","料酒 1湯匙","蛋清 1个","淀粉 1湯匙"],
   steps:["鱼片加盐、料酒、蛋清、淀粉腌制15分钟。","豆芽焯水至断生，铺在碗底。","锅中倒油，小火炒豆瓣酱、姜蒜末出红油，加清水烧开调盐。","轻轻放入鱼片，小火煮2-3分钟至熟，倒入铺好豆芽的碗中。","另起锅烧热油，放入干辣椒、花椒炸香。","趁热把辣椒油浇在鱼片上，撒葱花即可。"],
   tips:"💡 小貼士：鱼片要薄才嫩滑；最后泼油一定要够热，才能激发香味。"},
  {icon:"🌶️🩸🔥",name:{zh:"毛血旺",en:"Spicy Offal Hot Pot"},diff:{zh:"中等",en:"Medium"},time:{zh:"30分鐘",en:"30min"},
   ingredients:["鸭血 1盒","午餐肉 200克","豆芽 150克","木耳 50克"],
   seasonings:["郫县豆瓣酱 2湯匙","干辣椒 30克","花椒 20克","姜蒜末 适量"],
   steps:["鸭血、午餐肉切片，分别焯烫，铺碗底。","锅中倒油，小火炒豆瓣酱、姜蒜末出红油。","加清水烧开，加生抽、糖调味。","放入午餐肉煮1分钟，连汤倒入碗中。","洗净锅，倒油烧热，炸香干辣椒和花椒。","把辣椒油趁热浇在碗中，撒葱花即可。"],
   tips:"💡 小貼士：鸭血要提前焯水去腥；最后泼的油要够热。"},
  {icon:"🍗🥤",name:{zh:"可乐鸡翅",en:"Cola Chicken Wings"},diff:{zh:"超簡單",en:"Very Easy"},time:{zh:"30分鐘",en:"30min"},
   ingredients:["鸡翅 10个","可乐 1罐（330ml）","姜片 3片"],
   seasonings:["生抽 2湯匙","老抽 半湯匙","料酒 1湯匙"],
   steps:["鸡翅洗净，两面各划两刀。","锅中倒少许油，放姜片爆香。","倒入鸡翅，中火煎至两面金黄。","倒入可乐（要有糖的！），加生抽、老抽、料酒。","大火烧开后转中小火，盖锅炖15分钟。","开盖转大火收汁，不停翻动至浓稠红亮，出锅。"],
   tips:"💡 小貼士：一定要用真可乐（有糖的），糖分是关键！收汁时不停翻动防止粘锅。"}
];

/* ── 逃生系統（完整保留原版邏輯）── */
let currentRecipePage = 0;
const totalRecipePages = 9;
const panicBtn    = document.getElementById('panic-btn');
const disguisePage = document.getElementById('disguise-page');

function renderRecipe(pageNum) {
  const recipe = recipes[pageNum - 1];
  const l = lang;
  const isZh = (l === 'zh' || l === 'zh-cn');

  const siteTitles = { zh:'美食天下 - 家常菜做法大全', 'zh-cn':'美食天下 - 家常菜做法大全', en:'Recipe Paradise - Home Cooking Collection' };
  document.getElementById('recipe-site-title').textContent = siteTitles[l] || siteTitles.zh;
  document.getElementById('recipe-icon').textContent = recipe.icon;
  document.getElementById('recipe-name').textContent = recipe.name[isZh ? 'zh' : 'en'] || recipe.name.zh;
  document.getElementById('recipe-meta').textContent =
    (isZh ? '難度：' : 'Difficulty: ') + (recipe.diff[isZh ? 'zh' : 'en'] || recipe.diff.zh) +
    (isZh ? ' | 時間：' : ' | Time: ') + (recipe.time[isZh ? 'zh' : 'en'] || recipe.time.zh);

  document.getElementById('label-ingredients').textContent = isZh ? '主料' : 'Main Ingredients';
  document.getElementById('label-seasonings').textContent  = isZh ? '調料' : 'Seasonings';
  document.getElementById('label-steps').textContent       = isZh ? '做法步驟' : 'Cooking Steps';
  document.getElementById('recipe-footer').textContent     = isZh ? '© 2026 美食天下 meishichina.com | 更多菜譜請訪問首頁' : '© 2026 Recipe Paradise | More recipes on homepage';
  document.getElementById('recipe-categories').textContent = isZh ? '熱門分類：川菜 | 粵菜 | 湘菜 | 素菜 | 湯羹 | 烘焙' : 'Popular: Sichuan | Cantonese | Hunan | Vegetarian | Soups | Baking';

  const ingList = document.getElementById('recipe-ingredients');
  ingList.innerHTML = '';
  recipe.ingredients.forEach(ing => {
    const li = document.createElement('li');
    li.textContent = ing;
    ingList.appendChild(li);
  });

  const seaList = document.getElementById('recipe-seasonings');
  seaList.innerHTML = '';
  recipe.seasonings.forEach(sea => {
    const li = document.createElement('li');
    li.textContent = sea;
    seaList.appendChild(li);
  });

  const stepsDiv = document.getElementById('recipe-steps');
  stepsDiv.innerHTML = '';
  recipe.steps.forEach((step, i) => {
    const p = document.createElement('p');
    p.textContent = `${i + 1}. ${step}`;
    stepsDiv.appendChild(p);
  });

  document.getElementById('recipe-tips').textContent = recipe.tips || '';
}

function updateRecipeTitle(pageNum) {
  const titles = {
    zh:['家常菜做法大全','經典家常菜','精選菜譜','快手菜','家庭最愛','周末特輯','療癒美食','晚餐靈感','甜品專輯'],
    'zh-cn':['家常菜做法大全','经典家常菜','精选菜谱','快手菜','家庭最爱','周末特辑','疗愈美食','晚餐灵感','甜品专辑'],
    en:['Home Cooking','Classic Dishes','Featured Recipes','Quick Meals','Family Favorites','Weekend Specials','Comfort Food','Dinner Ideas','Dessert Special'],
  };
  const pageTitles = titles[lang] || titles.zh;
  document.title = pageTitles[pageNum - 1] || '美食天下';
}

function checkRecipeMode() {
  const inRecipeMode = localStorage.getItem('recipeMode') === 'true';
  const savedPage    = parseInt(localStorage.getItem('recipePage')) || 9;
  if (inRecipeMode) {
    currentRecipePage = savedPage;
    disguisePage.classList.add('active');
    renderRecipe(currentRecipePage);
    updateRecipeTitle(currentRecipePage);
  }
}

panicBtn.addEventListener('click', e => {
  e.stopPropagation();

  if (disguisePage.classList.contains('active')) {
    // 退出食譜模式
    disguisePage.classList.remove('active');
    currentRecipePage = 0;
    document.title = (lang === 'zh-cn') ? 'Mosaic — 为那些在黑暗中搜索的人'
                   : (lang === 'en')    ? 'Mosaic — For Those Who Search in the Dark'
                   :                     'Mosaic — 為那些在黑暗中搜索的人';
    localStorage.setItem('recipeMode', 'false');
    if (window.location.hash.includes('recipe')) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  } else {
    // 進入食譜偽裝模式
    disguisePage.classList.add('active');
    localStorage.setItem('recipeMode', 'true');
    // 推入 9 個歷史條目，讓返回鍵消耗在食譜裡
    for (let i = 1; i <= totalRecipePages; i++) {
      window.history.pushState({ recipe: true, page: i }, 'Recipe', '#recipe' + i);
    }
    currentRecipePage = 9;
    localStorage.setItem('recipePage', '9');
    renderRecipe(currentRecipePage);
    updateRecipeTitle(currentRecipePage);
  }
});

// 監聽瀏覽器返回鍵 — 退無可退時跳轉真實食譜搜尋
window.addEventListener('popstate', e => {
  if (currentRecipePage === 0) return;
  if (e.state && e.state.recipe) {
    currentRecipePage = e.state.page;
    renderRecipe(currentRecipePage);
    updateRecipeTitle(currentRecipePage);
    localStorage.setItem('recipePage', currentRecipePage.toString());
  } else {
    // 最後防線：跳到真實的食譜搜尋結果
    window.location.replace('https://www.google.com/search?q=%E5%AE%B6%E5%B8%B8%E8%8F%9C%E5%81%9A%E6%B3%95');
  }
});

/* ── 初始化 ── */
// ── 初始化 ──
(function init() {
  const savedLang = localStorage.getItem('mosaicLang');
  if (savedLang && ['zh','zh-cn','en'].includes(savedLang)) lang = savedLang;

  applyI18n();
  renderTree();
  checkRecipeMode();
})();