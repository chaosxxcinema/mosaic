// ── UTILS ──
function fmtDate(s){const[y,m,d]=s.split('-');return`${MN[+m-1]} ${+d}, ${y}`;}
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function hlText(t,q){if(!q)return esc(t);return esc(t).replace(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`,'gi'),'<mark class="hl">$1</mark>');}

// ── STATE ──
let lang='en', activeCat='all', activeCountry='all';
let searchQuery='', activeTagFilter='', dateFrom='2025-06-01', dateTo='2026-05-01';
let currentPage=1;
const itemsPerPage=9;

// ── FILTER ──
function filtered(){
  const q=searchQuery.toLowerCase().trim();
  const atf=activeTagFilter.toLowerCase();
  return items.filter(it=>{
    if(activeCat!=='all'&&it.cat!==activeCat)return false;
    if(activeCountry!=='all'&&it.country!==activeCountry)return false;
    if(dateFrom&&it.date<dateFrom)return false;
    if(dateTo&&it.date>dateTo)return false;
    if(atf){
      const tagText=it.tags.map(t=>t.t[lang]).join(' ').toLowerCase();
      if(!tagText.includes(atf))return false;
    }
    if(q){
      const hay=(it.title[lang]+' '+it.summary[lang]+' '+it.source[lang]+' '+it.tags.map(t=>t.t[lang]).join(' ')).toLowerCase();
      if(!hay.includes(q))return false;
    }
    return true;
  });
}

// ── RENDER CARDS ──
function renderCards(){
  const grid=document.getElementById('cards-grid');
  const data=filtered();
  const q=searchQuery.toLowerCase().trim();
  
  const totalPages=Math.ceil(data.length/itemsPerPage);
  const startIdx=(currentPage-1)*itemsPerPage;
  const endIdx=startIdx+itemsPerPage;
  const pageData=data.slice(startIdx,endIdx);
  
  grid.innerHTML='';

  pageData.forEach((it,i)=>{
    const card=document.createElement('div');
    card.className='card';
    card.style.animationDelay=`${i*0.03}s`;
    if(it.urgent)card.style.borderColor='rgba(200,36,31,.22)';

    const geoMap={
      us:{en:'🇺🇸 US',zh:'🇺🇸 美國'}, cn:{en:'🇨🇳 China',zh:'🇨🇳 中國'}, ca:{en:'🇨🇦 Canada',zh:'🇨🇦 加拿大'},
      nl:{en:'🇳🇱 Netherlands',zh:'🇳🇱 荷蘭'}, is:{en:'🇮🇸 Iceland',zh:'🇮🇸 冰島'}, tw:{en:'🇹🇼 Taiwan',zh:'🇹🇼 台灣'},
      gb:{en:'🇬🇧 UK',zh:'🇬🇧 英國'}, ru:{en:'🇷🇺 Russia',zh:'🇷🇺 俄羅斯'}, ir:{en:'🇮🇷 Iran',zh:'🇮🇷 伊朗'},
      ug:{en:'🇺🇬 Uganda',zh:'🇺🇬 烏干達'}, sa:{en:'🇸🇦 Saudi Arabia',zh:'🇸🇦 沙烏地'}, all:{en:'🌐 Global',zh:'🌐 全球'}
    };
    const geoLabel=geoMap[it.country]?geoMap[it.country][lang]:geoMap.all[lang];

    card.innerHTML=`
      <div class="card-strip" style="background:${it.color}"></div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-source">${esc(it.source[lang])}</span>
          <span class="card-date">${fmtDate(it.date)}</span>
          <span class="card-geo">${geoLabel}</span>
          ${it.urgent?`<span class="ctag ct-urgent" style="font-size:9.5px;padding:1px 7px">${lang==='zh'?'🆘 緊急':'🆘 Urgent'}</span>`:''}
        </div>
        <div class="card-title${lang==='zh'?' zh':''}">${q?hlText(it.title[lang],q):esc(it.title[lang])}</div>
        <div class="card-summary">${esc(it.summary[lang])}</div>
        <div class="card-tags">
          ${it.tags.map(t=>{
            const isActive=activeTagFilter&&t.t[lang].toLowerCase()===activeTagFilter.toLowerCase();
            return`<span class="ctag ${t.c}${isActive?' tag-active':''}" data-tag="${t.t[lang]}">${t.t[lang]}</span>`;
          }).join('')}
        </div>
      </div>
      ${it.cat==='guest'?'':` <a class="card-link" href="${it.url}" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="${lang==='zh'?'查看原文':'Read original'}">↗</a>`}`;

    card.querySelectorAll('.ctag').forEach(tag=>{
      tag.addEventListener('click',ev=>{
        ev.stopPropagation();
        const f=tag.dataset.tag;
        if(activeTagFilter===f) clearTagFilter();
        else setTagFilter(f);
      });
    });
    card.addEventListener('click',()=>openPanel(it));
    grid.appendChild(card);
  });

  const empty=document.getElementById('empty-state');
  empty.style.display=data.length===0?'block':'none';
  empty.textContent=lang==='zh'?'找不到相關內容 🌈':'No results found 🌈';

  const isZh=lang==='zh';
  document.getElementById('content-count').textContent=isZh?`${data.length} 則`:`${data.length} item${data.length!==1?'s':''}`;

  renderPagination(data.length,totalPages);

  ['all','news','events','legal','health','toolkit','vpn','guest'].forEach(cat=>{
    const el=document.getElementById(`count-${cat}`);
    if(!el)return;
    el.textContent=items.filter(it=>{
      if(cat!=='all'&&it.cat!==cat)return false;
      if(dateFrom&&it.date<dateFrom)return false;
      if(dateTo&&it.date>dateTo)return false;
      return true;
    }).length;
  });
}

// ── PAGINATION ──
function renderPagination(totalItems,totalPages){
  let paginationEl=document.getElementById('pagination');
  if(paginationEl) paginationEl.remove();
  if(totalItems<=itemsPerPage) return;
  
  paginationEl=document.createElement('div');
  paginationEl.id='pagination';
  paginationEl.className='pagination';
  
  const isZh=lang==='zh';
  const prevBtn=document.createElement('button');
  prevBtn.className='pagination-btn';
  prevBtn.textContent='←';
  prevBtn.disabled=currentPage===1;
  prevBtn.onclick=()=>{
    if(currentPage>1){currentPage--;renderCards();document.querySelector('.cards-scroll').scrollTop=0;}
  };
  paginationEl.appendChild(prevBtn);
  
  const maxPageButtons=5;
  let startPage=Math.max(1,currentPage-Math.floor(maxPageButtons/2));
  let endPage=Math.min(totalPages,startPage+maxPageButtons-1);
  if(endPage-startPage<maxPageButtons-1) startPage=Math.max(1,endPage-maxPageButtons+1);
  
  for(let i=startPage;i<=endPage;i++){
    const pageBtn=document.createElement('button');
    pageBtn.className='pagination-btn'+(i===currentPage?' active':'');
    pageBtn.textContent=i;
    pageBtn.onclick=()=>{currentPage=i;renderCards();document.querySelector('.cards-scroll').scrollTop=0;};
    paginationEl.appendChild(pageBtn);
  }
  
  const nextBtn=document.createElement('button');
  nextBtn.className='pagination-btn';
  nextBtn.textContent='→';
  nextBtn.disabled=currentPage===totalPages;
  nextBtn.onclick=()=>{
    if(currentPage<totalPages){currentPage++;renderCards();document.querySelector('.cards-scroll').scrollTop=0;}
  };
  paginationEl.appendChild(nextBtn);
  
  const info=document.createElement('div');
  info.className='pagination-info';
  info.textContent=isZh?`第 ${currentPage} 頁，共 ${totalPages} 頁`:`Page ${currentPage} of ${totalPages}`;
  paginationEl.appendChild(info);
  
  document.querySelector('.cards-scroll').appendChild(paginationEl);
}
function resetPagination(){ currentPage=1; }

// ── TAG FILTER ──
function setTagFilter(f){
  activeTagFilter=f;
  const badge=document.getElementById('active-tag-badge');
  badge.classList.add('show');
  document.getElementById('atb-text').textContent=f;
  resetPagination();
  renderCards();
}
function clearTagFilter(){
  activeTagFilter='';
  document.getElementById('active-tag-badge').classList.remove('show');
  resetPagination();
  renderCards();
}
document.getElementById('atb-clear').addEventListener('click',clearTagFilter);

function wirePanelTags(){
  document.querySelectorAll('#panel-tags .ctag').forEach(tag=>{
    tag.addEventListener('click',()=>{
      document.getElementById('overlay').classList.remove('open');
      setTagFilter(tag.textContent.trim());
    });
  });
}

// ── DETAIL PANEL ──
function openPanel(it){
  const overlay=document.getElementById('overlay');
  const isGuest=it.cat==='guest';
  
  document.getElementById('panel-strip').style.background=it.color;
  document.getElementById('detail-panel').style.setProperty('--panel-color',it.color);
  document.getElementById('panel-src').textContent=`${it.source[lang]} · ${fmtDate(it.date)}`;
  document.getElementById('panel-title').textContent=it.title[lang];
  
  const summaryBox=document.getElementById('panel-summary-box');
  if(isGuest){
    summaryBox.style.display='none';
  }else{
    summaryBox.style.display='block';
    document.getElementById('lbl-ai').textContent='✦ '+(lang==='zh'?'AI 摘要':'AI Summary');
    document.getElementById('panel-summary').textContent=it.summary[lang];
  }
  
  const tagsEl=document.getElementById('panel-tags');
  tagsEl.innerHTML=it.tags.map(t=>`<span class="ctag ${t.c}" data-tag="${t.t[lang]}" style="cursor:pointer" title="${lang==='zh'?'點擊篩選':'Click to filter'}">${t.t[lang]}</span>`).join('');
  wirePanelTags();
  
  let existingAuthorBox=document.getElementById('panel-author-box');
  if(existingAuthorBox)existingAuthorBox.remove();
  
  if(isGuest&&it.author){
    const authorBox=document.createElement('div');
    authorBox.id='panel-author-box';
    authorBox.className='panel-author-box';
    authorBox.innerHTML=`
      <div class="panel-author-label">${lang==='zh'?'✍️ 作者簡介':'✍️ About the Author'}</div>
      <div class="panel-author-name">${it.author.name}</div>
      <div class="panel-author-bio">${it.author.bio[lang]}</div>
    `;
    tagsEl.parentNode.insertBefore(authorBox,tagsEl.nextSibling);
  }
  
  // 👇 冷萃魔法：多語言「正文」標記
  const mainTextLabels = {
    en: '[Main Text]\n\n',
    zh: '【正文】\n\n',
    es: '[Texto Principal]\n\n',
    ar: '[النص الرئيسي]\n\n',
    ru: '[Основной текст]\n\n'
  };
  const bodyPrefix = mainTextLabels[lang] || mainTextLabels.en;
  // 將 [正文] 與實際內容拼接在一起
  const fullArticleText = bodyPrefix + it.full[lang];
  
  const panelFull = document.getElementById('panel-full');
  panelFull.textContent = fullArticleText;
  
  // 👇 通用控制列（朗讀 + 字體大小）
  let existingControls = document.getElementById('panel-controls');
  if(existingControls) existingControls.remove();

  const controls = document.createElement('div');
  controls.id = 'panel-controls';
  controls.className = 'panel-controls';
  controls.style.display = 'flex';
  controls.style.gap = '8px';
  controls.style.marginBottom = '16px';
  controls.style.alignItems = 'center';

  if(isGuest){
    const listenBtn=document.createElement('button');
    listenBtn.id='panel-listen-btn';
    listenBtn.className='panel-listen-btn';
    listenBtn.style.marginBottom = '0'; 
    listenBtn.innerHTML=`<span id="listen-icon">🔊</span> <span id="listen-text">${lang==='zh'?'朗讀全文':'Listen to Article'}</span>`;
    // 讓朗讀引擎連著 [正文] 兩個字一起唸，盲人體驗更好！
    listenBtn.onclick=()=>toggleSpeech(fullArticleText, listenBtn); 
    controls.appendChild(listenBtn);
  }

  const fontGroup = document.createElement('div');
  fontGroup.style.display = 'flex';
  fontGroup.style.gap = '6px';
  if(isGuest) fontGroup.style.marginLeft = 'auto'; 
  
  fontGroup.innerHTML = `
    <button id="font-decrease" class="font-btn" title="${lang==='zh'?'縮小字體':'Decrease Font Size'}">A-</button>
    <button id="font-increase" class="font-btn" title="${lang==='zh'?'放大字體':'Increase Font Size'}">A+</button>
  `;
  controls.appendChild(fontGroup);

  panelFull.parentNode.insertBefore(controls, panelFull);

  // 👇 正文字體動態控制（基準改成 14.5）
  let currentBaseSize = 14.5; 
  panelFull.style.fontSize = currentBaseSize + 'px'; 
  
  document.getElementById('font-decrease').onclick = () => {
    currentBaseSize = Math.max(12, currentBaseSize - 1.5); 
    panelFull.style.fontSize = currentBaseSize + 'px';
  };
  
  document.getElementById('font-increase').onclick = () => {
    currentBaseSize = Math.min(28, currentBaseSize + 1.5); 
    panelFull.style.fontSize = currentBaseSize + 'px';
  };
  // 👆 替換結束！
  
  // 👇 冷萃魔法：隱藏跳轉按鈕，換成首發時間戳（把它補回來！）
  const cta = document.getElementById('panel-cta');
  let existingPubTime = document.getElementById('panel-pub-time');
  if(existingPubTime) existingPubTime.remove(); 

  if(isGuest){
    // 特邀嘉賓：隱藏跳轉按鈕
    cta.style.display = 'none';
    
    // 建立專屬的美式發佈時間（例如：Apr 30, 2026）
    const pubTime = document.createElement('div');
    pubTime.id = 'panel-pub-time';
    pubTime.style.fontFamily = "'DM Mono', monospace";
    pubTime.style.fontSize = '12px';
    pubTime.style.color = 'var(--text-dim)';
    pubTime.style.marginTop = '28px'; 
    pubTime.style.marginBottom = '8px';
    pubTime.style.textAlign = 'right'; 
    pubTime.style.letterSpacing = '0.04em';
    pubTime.innerHTML = (lang === 'zh' ? '✦ 發佈時間：' : '✦ Published: ') + fmtDate(it.date);
    
    // 把時間插在按鈕原本的位置
    cta.parentNode.insertBefore(pubTime, cta);
  } else {
    // 一般新聞：顯示跳轉按鈕
    cta.style.display = 'inline-flex';
    cta.href = it.url;
    document.getElementById('cta-text').textContent = (lang === 'zh' ? '查看原文 →' : 'Read Original Article →');
  }
  // 👆 首發時間戳補回結束！
  
  let existingDisclaimer=document.getElementById('panel-guest-disclaimer');
  if(existingDisclaimer)existingDisclaimer.remove();
  let existingCopyright=document.getElementById('panel-copyright');
  if(existingCopyright)existingCopyright.remove();
  let existingComments=document.getElementById('panel-comments');
  if(existingComments)existingComments.remove();
  
  if(isGuest){
    const disclaimer=document.createElement('div');
    disclaimer.id='panel-guest-disclaimer';
    disclaimer.className='panel-guest-disclaimer';
    disclaimer.innerHTML=lang==='zh'?
      '<strong>⚠️ 免責聲明</strong><br>本文為特邀嘉賓投稿，不代表 Mosaic 製作者的個人立場或觀點。內容僅代表作者個人意見。':
      '<strong>⚠️ Disclaimer</strong><br>This is a guest submission and does not represent the personal views or positions of Mosaic\'s creator. Content represents the author\'s individual perspective only.';
    
    const copyright=document.createElement('div');
    copyright.id='panel-copyright';
    copyright.className='panel-copyright';
    copyright.innerHTML=lang==='zh'?
      '<strong>© 版權聲明</strong><br>本文為 Mosaic 獨家首發內容。未經授權，禁止任何形式的轉載、複製或傳播。Mosaic 為內容源頭。':
      '<strong>© Copyright Notice</strong><br>This is exclusive original content published by Mosaic. Unauthorized reproduction, copying, or distribution in any form is prohibited. Mosaic is the source.';
    
    const comments=document.createElement('div');
    comments.id='panel-comments';
    comments.className='panel-comments';
    comments.innerHTML=`
      <div class="panel-comments-header">${lang==='zh'?'💬 讀者留言':'💬 Reader Comments'}</div>
      <div class="panel-comments-placeholder">
        <div class="panel-comments-placeholder-icon">🔒</div>
        <div class="panel-comments-placeholder-text">
          ${lang==='zh'?
            '<strong>評論功能即將推出</strong><br>為確保內容品質與安全，評論需要登錄才能發布。<br>我們正在開發這個功能，敬請期待。':
            '<strong>Comments Feature Coming Soon</strong><br>To ensure content quality and safety, comments require login to post.<br>We are developing this feature. Stay tuned.'
          }
        </div>
      </div>
    `;
    
    const panelBody=document.getElementById('panel-full').parentNode;
    panelBody.appendChild(disclaimer);
    panelBody.appendChild(copyright);
    panelBody.appendChild(comments);
  }
  
  overlay.classList.add('open');
}

let currentSpeech=null;
function toggleSpeech(text,btn){
  const icon=document.getElementById('listen-icon');
  const btnText=document.getElementById('listen-text');
  
  // 👇 冷萃魔法：不相信瀏覽器，我們看自己的圖標和按鈕狀態最準！
  const isPlaying = btn.classList.contains('playing');
  const isPaused = icon.textContent === '▶️';

  if(isPlaying){
    // 正在播放，按下後暫停
    window.speechSynthesis.pause();
    icon.textContent='▶️';
    btnText.textContent=lang==='zh'?'繼續播放':'Resume';
    btn.classList.remove('playing');
  } else if(isPaused && currentSpeech){
    // 處於暫停狀態，按下後繼續
    window.speechSynthesis.resume();
    icon.textContent='⏸';
    btnText.textContent=lang==='zh'?'暫停':'Pause';
    btn.classList.add('playing');
  } else {
    // 全新播放
    window.speechSynthesis.cancel();
    currentSpeech=new SpeechSynthesisUtterance(text);
    currentSpeech.lang=lang==='zh'?'zh-TW':'en-US';
    currentSpeech.rate=0.9;
    
    currentSpeech.onend=()=>{
      currentSpeech=null;
      icon.textContent='🔊';
      btnText.textContent=lang==='zh'?'朗讀全文':'Listen to Article';
      btn.classList.remove('playing');
    };
    
    window.speechSynthesis.speak(currentSpeech);
    icon.textContent='⏸';
    btnText.textContent=lang==='zh'?'暫停':'Pause';
    btn.classList.add('playing');
  }
}

document.getElementById('panel-close').addEventListener('click',()=>{
  if(currentSpeech){window.speechSynthesis.cancel();currentSpeech=null;}
  document.getElementById('overlay').classList.remove('open');
});
document.getElementById('overlay').addEventListener('click',e=>{
  if(e.target.id==='overlay'){
    if(currentSpeech){window.speechSynthesis.cancel();currentSpeech=null;}
    document.getElementById('overlay').classList.remove('open');
  }
});
document.getElementById('overlay').addEventListener('mouseenter',()=>{
  const sidebar=document.getElementById('sidebar');
  if(sidebar.classList.contains('open')) sidebar.classList.remove('open');
});
document.querySelector('.main').addEventListener('click',()=>{
  const sidebar=document.getElementById('sidebar');
  if(sidebar.classList.contains('open')) sidebar.classList.remove('open');
});

/// ── SIDEBAR NAV ──
const catTitles={en:{all:'All Sources',news:'News',events:'Events',legal:'Legal Aid',health:'Health & Medical',guest:'Guest Voices'},zh:{all:'全部來源',news:'新聞',events:'活動',legal:'法律援助',health:'醫療援助',guest:'特邀嘉賓'}};
function updateTitle(){document.getElementById('content-title').textContent=catTitles[lang][activeCat]||'All';}

document.querySelectorAll('.nav-item').forEach(el=>{
  el.addEventListener('click',()=>{
    activeCat=el.dataset.cat;
    
    // 👇 冷萃魔法 1：點擊「分類」時，強行把「地區」重置為全部，並把地區按鈕的亮光切換回去
    activeCountry='all';
    document.querySelectorAll('.country-item').forEach(n=>n.classList.remove('active'));
    document.querySelector('.country-item[data-country="all"]').classList.add('active');

    document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
    el.classList.add('active');
    resetPagination();
    updateTitle();renderCards();
    // 👇 更新標題後，呼叫清理標籤的魔法！
    // (因為 clearTagFilter() 裡面已經包含了 resetPagination 和 renderCards，所以我們不需要再重複寫那兩句了)
    updateTitle();
    clearTagFilter(); 
    if(window.innerWidth<=700)document.getElementById('sidebar').classList.remove('open');
  });
});

document.querySelectorAll('.country-item').forEach(el=>{
  el.addEventListener('click',()=>{
    activeCountry=el.dataset.country;
    
    // 👇 冷萃魔法 2：點擊「地區」時，強行把「分類」重置為全部，並熄滅分類按鈕的亮光
    activeCat='all';
    document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));

    document.querySelectorAll('.country-item').forEach(n=>n.classList.remove('active'));
    el.classList.add('active');
    // 👇 同樣在這裡加上清理標籤！
    updateTitle();
    clearTagFilter(); 
    if(window.innerWidth<=700)document.getElementById('sidebar').classList.remove('open');
  });
});

// ── SEARCH ──
const si=document.getElementById('search-input');
const sc=document.getElementById('search-clear');
const sic=document.getElementById('search-icon');
const hints={en:['Try: asylum…','Try: free clinic…','Try: trans health…','Try: NYC events…','Try: China…','Try: legal aid…'],zh:['試試：庇護…','試試：免費診所…','試試：跨性別…','試試：紐約…','試試：中國…','試試：法律援助…']};
let hIdx=0;
function rotatePh(){if(!si.value){si.placeholder=hints[lang][hIdx%hints[lang].length];hIdx++;}}
rotatePh();setInterval(rotatePh,2800);
si.addEventListener('input',()=>{searchQuery=si.value;sc.style.display=searchQuery?'block':'none';sic.style.display=searchQuery?'none':'block';resetPagination();renderCards();});
sc.addEventListener('click',()=>{si.value='';searchQuery='';sc.style.display='none';sic.style.display='block';si.focus();resetPagination();renderCards();});

// ── DATE ──
function syncDisp(){
  const df=document.getElementById('date-from').value;
  const dt=document.getElementById('date-to').value;
  if(df)document.getElementById('disp-from').textContent=fmtDate(df);
  if(dt)document.getElementById('disp-to').textContent=fmtDate(dt);
}
document.getElementById('date-from').addEventListener('change',syncDisp);
document.getElementById('date-to').addEventListener('change',syncDisp);
document.getElementById('btn-filter').addEventListener('click',()=>{
  dateFrom=document.getElementById('date-from').value||null;
  dateTo=document.getElementById('date-to').value||null;
  resetPagination();
  renderCards();
});
document.getElementById('btn-reset').addEventListener('click',()=>{
  dateFrom='2025-06-01';dateTo='2026-05-01';
  document.getElementById('date-from').value='2025-06-01';
  document.getElementById('date-to').value='2026-05-01';
  document.getElementById('disp-from').textContent='Jun 1, 2025';
  document.getElementById('disp-to').textContent='May 1, 2026';
  clearTagFilter();
  si.value='';searchQuery='';sc.style.display='none';sic.style.display='block';
  resetPagination();
  renderCards();
});

// ── LANGUAGE & DISCLAIMER ──
function updateDisclaimer(){
  const translations = {
    en: {
      title: 'ℹ️ About & Contact', s1: 'About This Tool',
      b1: '<strong>Mosaic</strong> is an independently developed LGBTQ+ news aggregator by XiaXia (ChaosXX™). <strong>Built by a marginalized creator, for the marginalized community</strong> — Mosaic exists because safe, accessible information can mean the difference between survival and persecution. In countries where being LGBTQ+ is criminalized, where censorship blocks vital resources, where seeking help can be dangerous, having the right information at the right time can save lives.<br><br>This platform aggregates news, legal resources, medical information, and emergency tools from trusted sources worldwide. It is designed for LGBTQ+ individuals in hostile environments, providing the knowledge needed to navigate persecution, seek asylum, access healthcare, and find community support.<br><br>Not affiliated with any organization. All content sourced from public third-party publications.',
      s2: 'AI Summary Notice',
      b2: 'Summaries are auto-generated by <strong>Gemini AI (Google)</strong> and may contain errors. Not legal, medical, or psychological advice. Always refer to the original source.',
      s3: 'Privacy & Data', b3: 'No visitor data is collected. No tracking cookies. No information is sold to third parties.',
      s4: 'User Responsibility', b4: 'In any crisis, contact professional services directly. To request content removal: <a href="mailto:chaosxxcinema@outlook.com" style="color:var(--glass-blue)">chaosxxcinema@outlook.com</a>',
      s5: 'Maintainer', b5: 'XiaXia · ChaosXX™ · © 2026 · Independent creator, non-commercial'
    },
    zh: {
      title: 'ℹ️ 關於與聯繫', s1: '關於本工具',
      b1: '<strong>Mosaic</strong> 是由邊緣化創作者 XiaXia（ChaosXX™）獨立開發的 LGBTQ+ 新聞聚合工具。<strong>由邊緣化創作者製作，為邊緣化社群服務</strong> — Mosaic 的存在，是因為安全且可及的信息往往意味著生存與迫害之間的差別。在 LGBTQ+ 身份被刑事化的國家，在審查封鎖重要資源的地方，在尋求幫助可能帶來危險的環境中，在正確的時間獲得正確的信息可以拯救生命。<br><br>本平台聚合來自全球可信來源的新聞、法律資源、醫療信息和緊急工具。專為處於敵對環境中的 LGBTQ+ 個體設計，提供應對迫害、尋求庇護、獲取醫療和尋找社群支持所需的知識。<br><br>與任何組織無關。所有內容來源於公開的第三方媒體，著作權歸原作者所有。',
      s2: 'AI 摘要說明',
      b2: '摘要由 <strong>Gemini AI（Google）</strong> 自動生成，可能存在誤差，不構成法律、醫療或心理諮詢意見。請以原文為準。',
      s3: '隱私與資料', b3: '不收集訪客個人資料。不使用追蹤 Cookie。不向第三方出售任何資訊。',
      s4: '使用者責任', b4: '遇到危機請直接聯繫專業支援機構，勿依賴本工具。如需移除內容請聯繫：<a href="mailto:chaosxxcinema@outlook.com" style="color:var(--glass-blue)">chaosxxcinema@outlook.com</a>',
      s5: '維護者', b5: 'XiaXia · ChaosXX™ · © 2026 · 獨立製作，非商業公司'
    },
    es: {
      title: 'ℹ️ Acerca de y Contacto', s1: 'Acerca de Esta Herramienta',
      b1: '<strong>Mosaic</strong> es un agregador de noticias LGBTQ+ desarrollado independientemente por XiaXia (ChaosXX™). <strong>Construido por un creador marginalizado, para la comunidad marginalizada</strong> — esta es una herramienta de supervivencia nacida de una necesidad personal, diseñada para proporcionar recursos vitales, ayuda legal e información segura para las personas LGBTQ+ que más lo necesitan.<br><br>No está afiliado a ninguna organización. Todo el contenido proviene de publicaciones públicas de terceros.',
      s2: 'Aviso de Resumen de IA',
      b2: 'Los resúmenes son generados automáticamente por <strong>Gemini AI (Google)</strong> y pueden contener errores. No constituyen asesoramiento legal, médico o psicológico. Siempre consulte la fuente original.',
      s3: 'Privacidad y Datos', b3: 'No se recopilan datos de visitantes. No hay cookies de seguimiento. No se vende información a terceros.',
      s4: 'Responsabilidad del Usuario', b4: 'En cualquier crisis, contacte directamente con los servicios profesionales. Para solicitar la eliminación de contenido: <a href="mailto:chaosxxcinema@outlook.com" style="color:var(--glass-blue)">chaosxxcinema@outlook.com</a>',
      s5: 'Mantenedor', b5: 'XiaXia · ChaosXX™ · © 2026 · Creador independiente, no comercial'
    },
    ar: {
      title: 'ℹ️ حول واتصل', s1: 'حول هذه الأداة',
      b1: '<strong>Mosaic</strong> هو مجمع أخبار LGBTQ+ تم تطويره بشكل مستقل بواسطة XiaXia (ChaosXX™). <strong>تم بناؤه بواسطة منشئ مهمش، للمجتمع المهمش</strong> — هذه أداة بقاء ولدت من ضرورة شخصية، مصممة لتوفير موارد حيوية ومساعدة قانونية ومعلومات آمنة للأفراد LGBTQ+ الذين يحتاجونها أكثر.<br><br>غير تابع لأي منظمة. جميع المحتويات مصدرها منشورات عامة من طرف ثالث.',
      s2: 'إشعار ملخص الذكاء الاصطناعي',
      b2: 'يتم إنشاء الملخصات تلقائيًا بواسطة <strong>Gemini AI (Google)</strong> وقد تحتوي على أخطاء. ليست استشارة قانونية أو طبية أو نفسية. راجع دائمًا المصدر الأصلي.',
      s3: 'الخصوصية والبيانات', b3: 'لا يتم جمع بيانات الزوار. لا ملفات تعريف ارتباط للتتبع. لا يتم بيع المعلومات لأطراف ثالثة.',
      s4: 'مسؤولية المستخدم', b4: 'في أي أزمة، اتصل بخدمات الدعم المهنية مباشرة. لطلب إزالة المحتوى: <a href="mailto:chaosxxcinema@outlook.com" style="color:var(--glass-blue)">chaosxxcinema@outlook.com</a>',
      s5: 'المشرف', b5: 'XiaXia · ChaosXX™ · © 2026 · منشئ مستقل، غير تجاري'
    },
    ru: {
      title: 'ℹ️ О проекте и Контакты', s1: 'О Этом Инструменте',
      b1: '<strong>Mosaic</strong> — это независимо разработанный агрегатор новостей LGBTQ+ от XiaXia (ChaosXX™). <strong>Создан маргинализированным создателем для маргинализированного сообщества</strong> — это инструмент выживания, рожденный из личной необходимости, предназначенный для предоставления жизненно важных ресурсов, юридической помощи и безопасной информации для тех LGBTQ+ людей, которые нуждаются в этом больше всего.<br><br>Не связан ни с какой организацией. Весь контент взят из общедоступных сторонних публикаций.',
      s2: 'Уведомление о Резюме ИИ',
      b2: 'Резюме автоматически создаются <strong>Gemini AI (Google)</strong> и могут содержать ошибки. Не являются юридической, медицинской или психологической консультацией. Всегда обращайтесь к первоисточнику.',
      s3: 'Конфиденциальность и Данные', b3: 'Данные посетителей не собираются. Файлы cookie для отслеживания не используются. Информация не продается третьим лицам.',
      s4: 'Ответственность Пользователя', b4: 'В любом кризисе обращайтесь непосредственно к профессиональным службам. Чтобы запросить удаление контента: <a href="mailto:chaosxxcinema@outlook.com" style="color:var(--glass-blue)">chaosxxcinema@outlook.com</a>',
      s5: 'Сопровождающий', b5: 'XiaXia · ChaosXX™ · © 2026 · Независимый создатель, некоммерческий'
    }
  };
  const t = translations[lang] || translations.en;
  document.getElementById('disc-title').textContent=t.title;
  document.getElementById('disc-s1').textContent=t.s1;
  document.getElementById('disc-b1').innerHTML=t.b1;
  document.getElementById('disc-s2').textContent=t.s2;
  document.getElementById('disc-b2').innerHTML=t.b2;
  document.getElementById('disc-s3').textContent=t.s3;
  document.getElementById('disc-b3').textContent=t.b3;
  document.getElementById('disc-s4').textContent=t.s4;
  document.getElementById('disc-b4').innerHTML=t.b4;
  document.getElementById('disc-s5').textContent=t.s5;
  document.getElementById('disc-b5').textContent=t.b5;
}

function applyLang(){
  const z=lang==='zh';
  document.querySelectorAll('[data-en][data-zh]').forEach(el=>{
    el.textContent=el.dataset[lang]||el.textContent;
  });
  setRandomQuote();
  document.querySelectorAll('.nav-label').forEach(el=>{el.textContent=el.dataset[lang]||el.textContent;});
  document.getElementById('lbl-categories').textContent=z?'分類':'Categories';
  document.getElementById('lbl-regions').textContent=z?'地區':'Regions';
  document.getElementById('lbl-sources').textContent=z?'來源':'Sources';
  document.getElementById('newspaper-tagline').textContent=z?'LGBTQ+ 全球新聞與資源':'LGBTQ+ Global News & Resources';
  document.getElementById('content-hint').textContent=z?'點擊卡片展開 · 點擊標籤篩選':'Click cards to expand · Click tags to filter';
  document.getElementById('kofi-label').textContent=z?'請我喝杯咖啡':'Buy me a coffee';
  document.getElementById('btn-filter').textContent=z?'篩選':'Filter';
  document.getElementById('btn-reset').textContent=z?'重置':'Reset';
  if(activeTagFilter)document.getElementById('lbl-filtering')&&(document.getElementById('lbl-filtering').textContent=z?'篩選中':'Filtering');
  updateTitle();updateDisclaimer();
  hIdx=0;rotatePh();
  activeTagFilter='';document.getElementById('active-tag-badge').classList.remove('show');
  renderCards();
}

document.getElementById('lang-select').addEventListener('change',e=>{
  lang=e.target.value;
  if(lang==='zh-cn')lang='zh';
  applyLang();
  renderCards();
});

// ── MOBILE SIDEBAR & SWIPE ──
document.getElementById('sidebar-toggle').addEventListener('click',()=>document.getElementById('sidebar').classList.toggle('open'));
let touchStartX = 0;
let touchEndX = 0;
const sidebar = document.getElementById('sidebar');

function handleSwipe() {
  // 👇 冷萃防護罩：如果文章面板(overlay)或免責聲明(disc-overlay)開著，就取消滑動側邊欄的功能！
  if (document.getElementById('overlay').classList.contains('open') || 
      document.getElementById('disc-overlay').classList.contains('open')) {
    return;
  }

  const swipeDistance = touchEndX - touchStartX;
  const minSwipeDistance = 50; 
  if (Math.abs(swipeDistance) > minSwipeDistance) {
    if (swipeDistance > 0) sidebar.classList.add('open');
    else sidebar.classList.remove('open');
  }
}
document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; });
document.addEventListener('touchend', e => { touchEndX = e.changedTouches[0].screenX; handleSwipe(); });

// ── NEWSPAPER DATE & WEATHER ──
function setNewspaperDate(){
  const now=new Date();
  const z=lang==='zh';
  const day=z?DAYS_ZH[now.getDay()]:DAYS_EN[now.getDay()];
  const dateStr=`${day}, ${MN[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  document.getElementById('newspaper-date').textContent=dateStr;
}

async function fetchWeather(){
  try{
    const pos=await new Promise((res,rej)=>navigator.geolocation.getCurrentPosition(res,rej,{timeout:4000})).catch(()=>null);
    const lat=pos?pos.coords.latitude:40.7128;
    const lon=pos?pos.coords.longitude:-74.006;
    const r=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&temperature_unit=fahrenheit&timezone=auto`);
    const d=await r.json();
    const temp=Math.round(d.current.temperature_2m);
    const code=d.current.weather_code;
    const icon=weatherIcon(code);
    document.getElementById('weather-icon').textContent=icon;
    document.getElementById('weather-text').textContent=`${temp}°F`;
    document.getElementById('weather-badge').style.display='flex';
  }catch(e){}
}

function weatherIcon(code){
  if(code===0)return'☀️';
  if(code<=2)return'⛅';
  if(code<=3)return'☁️';
  if(code<=48)return'🌫';
  if(code<=57)return'🌦';
  if(code<=67)return'🌧';
  if(code<=77)return'🌨';
  if(code<=82)return'🌦';
  if(code<=86)return'❄️';
  if(code<=99)return'⛈';
  return'🌤';
}

function setRandomQuote(){
  const randomQuote=quotes[Math.floor(Math.random()*quotes.length)];
  document.getElementById('quote-text').textContent=randomQuote[lang];
}

function updateCountryBadges(){
  const now=new Date();
  const threeDaysAgo=new Date(now.getTime()-3*24*60*60*1000);
  const threeDaysAgoStr=threeDaysAgo.toISOString().split('T')[0];
  
  document.querySelectorAll('.country-item').forEach(item=>{
    const countryCode=item.dataset.country;
    if(countryCode==='all')return;
    const hasRecent=items.some(it=>it.country===countryCode&&it.date>=threeDaysAgoStr);
    const existingBadge=item.querySelector('.country-new');
    if(existingBadge)existingBadge.remove();
    if(hasRecent){
      const badge=document.createElement('span');
      badge.className='country-new';
      badge.textContent='🆕';
      item.appendChild(badge);
    }
  });
}

// ── INIT ──
setNewspaperDate();
setRandomQuote();
updateCountryBadges();
fetchWeather();
renderCards();
updateDisclaimer();

// ── RECIPE DISGUISE SYSTEM ──
function renderRecipe(pageNum) {
  const recipe = recipes[pageNum - 1];
  const l = lang || 'zh'; 
  
  const siteTitles = {
    zh: "美食天下 - 家常菜做法大全",
    en: "Recipe Paradise - Home Cooking Collection",
    es: "Recetas del Paraíso - Cocina Casera",
    ar: "جنة الوصفات - المطبخ المنزلي",
    ru: "Рай Рецептов - Домашняя Кухня"
  };
  document.getElementById('recipe-site-title').textContent = siteTitles[l];
  document.getElementById('recipe-icon').textContent = recipe.icon;
  document.getElementById('recipe-name').textContent = recipe.name[l];
  document.getElementById('recipe-meta').textContent = `${{zh:"難度",en:"Difficulty",es:"Dificultad",ar:"صعوبة",ru:"Сложность"}[l]}：${recipe.diff[l]} | ${{zh:"時間",en:"Time",es:"Tiempo",ar:"وقت",ru:"Время"}[l]}：${recipe.time[l]}`;
  
  const labels = {
    zh: {ing:"主料",sea:"調料",steps:"做法步驟",footer:"© 2026 美食天下 meishichina.com | 更多菜譜請訪問首頁",cat:"熱門分類：川菜 | 粵菜 | 湘菜 | 素菜 | 湯羹 | 烘焙"},
    en: {ing:"Main Ingredients",sea:"Seasonings",steps:"Cooking Steps",footer:"© 2026 Recipe Paradise | More recipes on homepage",cat:"Popular: Sichuan | Cantonese | Hunan | Vegetarian | Soups | Baking"},
    es: {ing:"Ingredientes Principales",sea:"Condimentos",steps:"Pasos de Cocción",footer:"© 2026 Recetas del Paraíso | Más recetas",cat:"Popular: Sichuan | Cantonés | Hunan | Vegetariano | Sopas | Hornear"},
    ar: {ing:"المكونات الرئيسية",sea:"التوابل",steps:"خطوات الطهي",footer:"© 2026 جنة الوصفات | المزيد من الوصفات",cat:"شعبي: سيتشوان | كانتوني | هونان | نباتي | شوربات | خبز"},
    ru: {ing:"Основные Ингредиенты",sea:"Приправы",steps:"Шаги Приготовления",footer:"© 2026 Рай Рецептов | Больше рецептов",cat:"Популярные: Сычуань | Кантонская | Хунань | Вегетарианская | Супы | Выпечка"}
  };
  const lb = labels[l];
  
  document.getElementById('label-ingredients').textContent = lb.ing;
  document.getElementById('label-seasonings').textContent = lb.sea;
  document.getElementById('label-steps').textContent = lb.steps;
  document.getElementById('recipe-footer').textContent = lb.footer;
  document.getElementById('recipe-categories').textContent = lb.cat;
  
  const ingList = document.getElementById('recipe-ingredients');
  ingList.innerHTML = '';
  if(l === 'zh') {
    recipe.ingredients.forEach(ing => {
      const li = document.createElement('li');
      li.textContent = ing;
      ingList.appendChild(li);
    });
  } else {
    const genericIngs = [
      {en:"Main protein ingredient",es:"Ingrediente proteico principal",ar:"المكون البروتيني الرئيسي",ru:"Основной белковый ингредиент"},
      {en:"Vegetables",es:"Verduras",ar:"خضروات",ru:"Овощи"},
      {en:"Aromatics (garlic, ginger, scallions)",es:"Aromáticos (ajo, jengibre, cebolletas)",ar:"عطريات (ثوم، زنجبيل، بصل أخضر)",ru:"Ароматические (чеснок, имбирь, лук)"},
      {en:"Additional ingredients",es:"Ingredientes adicionales",ar:"مكونات إضافية",ru:"Дополнительные ингредиенты"}
    ];
    genericIngs.forEach(ing => {
      const li = document.createElement('li');
      li.textContent = ing[l];
      ingList.appendChild(li);
    });
  }
  
  const seaList = document.getElementById('recipe-seasonings');
  seaList.innerHTML = '';
  if(l === 'zh') {
    recipe.seasonings.forEach(sea => {
      const li = document.createElement('li');
      li.textContent = sea;
      seaList.appendChild(li);
    });
  } else {
    const genericSeas = [
      {en:"Soy sauce",es:"Salsa de soja",ar:"صلصة الصويا",ru:"Соевый соус"},
      {en:"Cooking wine",es:"Vino de cocina",ar:"نبيذ الطهي",ru:"Рисовое вино"},
      {en:"Sugar, salt, pepper",es:"Azúcar, sal, pimienta",ar:"سكر، ملح، فلفل",ru:"Сахар, соль, перец"},
      {en:"Cornstarch (for thickening)",es:"Maicena (para espesar)",ar:"نشا الذرة (للتكثيف)",ru:"Крахмал (для загустения)"}
    ];
    genericSeas.forEach(sea => {
      const li = document.createElement('li');
      li.textContent = sea[l];
      seaList.appendChild(li);
    });
  }
  
  const stepsDiv = document.getElementById('recipe-steps');
  stepsDiv.innerHTML = '';
  if(l === 'zh') {
    recipe.steps.forEach((step, i) => {
      const p = document.createElement('p');
      p.textContent = `${i+1}. ${step}`;
      stepsDiv.appendChild(p);
    });
  } else {
    const genericSteps = [
      {en:"Prepare and cut all ingredients.",es:"Preparar y cortar todos los ingredientes.",ar:"تحضير وتقطيع جميع المكونات.",ru:"Подготовить и нарезать все ингредиенты."},
      {en:"Marinate the main ingredient if needed.",es:"Marinar el ingrediente principal si es necesario.",ar:"تتبيل المكون الرئيسي إذا لزم الأمر.",ru:"Мариновать основной ингредиент при необходимости."},
      {en:"Heat oil in wok or large pan over high heat.",es:"Calentar aceite en wok o sartén grande a fuego alto.",ar:"تسخين الزيت في المقلاة على نار عالية.",ru:"Нагреть масло в воке на сильном огне."},
      {en:"Stir-fry aromatics until fragrant.",es:"Saltear aromáticos hasta que estén fragantes.",ar:"قلي العطريات حتى تصبح عطرية.",ru:"Обжарить ароматические компоненты до аромата."},
      {en:"Add main ingredient and stir-fry quickly.",es:"Agregar ingrediente principal y saltear rápidamente.",ar:"إضافة المكون الرئيسي وقلي سريع.",ru:"Добавить основной ингредиент и быстро обжарить."},
      {en:"Add sauce and vegetables, cook until done.",es:"Agregar salsa y verduras, cocinar hasta terminar.",ar:"إضافة الصلصة والخضروات، طهي حتى تنضج.",ru:"Добавить соус и овощи, готовить до готовности."},
      {en:"Adjust seasoning to taste and serve hot.",es:"Ajustar sazón al gusto y servir caliente.",ar:"ضبط التتبيل حسب الذوق وتقديم ساخن.",ru:"Отрегулировать приправы по вкусу и подавать горячим."}
    ];
    genericSteps.forEach((step, i) => {
      const p = document.createElement('p');
      p.textContent = `${i+1}. ${step[l]}`;
      stepsDiv.appendChild(p);
    });
  }
  
  document.getElementById('recipe-tips').textContent = l === 'zh' ? recipe.tips : '';
}

const panicBtn = document.getElementById('panic-btn');
const disguisePage = document.getElementById('disguise-page');
let currentRecipePage = 0; 
const totalRecipePages = 9;

function checkRecipeMode() {
  const inRecipeMode = localStorage.getItem('recipeMode') === 'true';
  const savedPage = parseInt(localStorage.getItem('recipePage')) || 9; 
  
  if(inRecipeMode) {
    currentRecipePage = savedPage;
    disguisePage.classList.add('active');
    renderRecipe(currentRecipePage);
    updateRecipeTitle(currentRecipePage);
  }
}

function updateRecipeTitle(pageNum) {
  const titles = {
    en: ['Home Cooking','Classic Dishes','Featured Recipes','Quick Meals','Family Favorites','Weekend Specials','Comfort Food','Dinner Ideas','Dessert Special'],
    zh: ['家常菜做法大全','經典家常菜','精選菜譜','快手菜','家庭最愛','周末特輯','療癒美食','晚餐靈感','甜品專輯'],
    es: ['Cocina Casera','Platos Clásicos','Recetas Destacadas','Comidas Rápidas','Favoritos Familiares','Especiales de Fin de Semana','Comida Reconfortante','Ideas para Cena','Especial Postres'],
    ar: ['الطبخ المنزلي','أطباق كلاسيكية','وصفات مميزة','وجبات سريعة','المفضلات العائلية','عروض نهاية الأسبوع','طعام مريح','أفكار العشاء','حلويات خاصة'],
    ru: ['Домашняя Кухня','Классические Блюда','Избранные Рецепты','Быстрые Блюда','Семейные Фавориты','Выходные Специальные','Комфортная Еда','Идеи для Ужина','Специальные Десерты']
  };
  const pageTitles = titles[lang] || titles.zh;
  document.title = pageTitles[pageNum - 1];
}

panicBtn.addEventListener('click', e => {
  e.stopPropagation();

  // 👇 冷萃魔法：一鍵閉嘴防護機制
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  currentSpeech = null;
  const listenBtn = document.getElementById('panel-listen-btn');
  if (listenBtn) {
    listenBtn.classList.remove('playing');
    const icon = document.getElementById('listen-icon');
    const btnText = document.getElementById('listen-text');
    if (icon) icon.textContent = '🔊';
    if (btnText) btnText.textContent = (lang === 'zh' ? '朗讀全文' : 'Listen to Article');
  }
  // 👆 閉嘴防護機制結束

  if(disguisePage.classList.contains('active')){
    disguisePage.classList.remove('active');
    currentRecipePage = 0;
    document.title = 'Mosaic — LGBTQ+ Global News';
    localStorage.setItem('recipeMode', 'false');
    if(window.location.hash.includes('recipe')){
      window.history.replaceState(null, '', window.location.pathname);
    }
  } else {
    disguisePage.classList.add('active');
    localStorage.setItem('recipeMode', 'true');
    for(let i = 1; i <= totalRecipePages; i++){
      window.history.pushState({recipe: true, page: i}, 'Recipe', '#recipe' + i);
    }
    currentRecipePage = 9;
    localStorage.setItem('recipePage', '9');
    renderRecipe(currentRecipePage);
    updateRecipeTitle(currentRecipePage);
  }
});

// ── 監聽瀏覽器的「上一頁 / 下一頁」按鈕 ──
window.addEventListener('popstate', e => {
  if(currentRecipePage === 0) return; 
  if(e.state && e.state.recipe) {
    currentRecipePage = e.state.page;
    renderRecipe(currentRecipePage);
    updateRecipeTitle(currentRecipePage);
    localStorage.setItem('recipePage', currentRecipePage.toString());
  } else {
    // 戰略官防禦：退無可退時跳轉到真實食譜搜尋
    window.location.replace('https://www.google.com/search?q=%E5%AE%B6%E5%B8%B8%E8%8F%9C%E5%81%9A%E6%B3%95');
  }
});

// ── INIT (初始化網頁) ──
setNewspaperDate();
setRandomQuote();
updateCountryBadges();
fetchWeather();
applyLang();        // ✨ 確保語言同步
renderCards();
updateDisclaimer();
checkRecipeMode();  // ✨ 檢查是否要進入偽裝模式