// basic interactions: gallery thumbs, tabs, mortgage calc, form handling, lightbox
(function(){
  // gallery
  const mainImg = document.getElementById('mainImg');
  document.getElementById('thumbs').addEventListener('click', e=>{
    const btn = e.target.closest('.thumb');
    if(!btn) return;
    const src = btn.dataset.src;
    mainImg.style.backgroundImage = `url('${src}')`;
    // show in lightbox on click of main image
  });

  // lightbox open
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  mainImg.addEventListener('click', ()=>{
    const bg = mainImg.style.backgroundImage;
    const url = bg.slice(5,-2);
    lbImg.src = url;
    lightbox.setAttribute('aria-hidden','false');
  });
  document.querySelector('.lb-close').addEventListener('click', ()=>{
    lightbox.setAttribute('aria-hidden','true');
    lbImg.src = '';
  });

  // tabs
  const tabs = document.getElementById('tabs');
  const tabButtons = tabs.querySelectorAll('button');
  const panels = document.querySelectorAll('.tabpanel');
  tabs.addEventListener('click', e=>{
    const b = e.target.closest('button[data-tab]');
    if(!b) return;
    const target = b.dataset.tab;
    tabButtons.forEach(btn=>{
      const sel = (btn.dataset.tab === target);
      btn.setAttribute('aria-selected', sel ? 'true' : 'false');
    });
    panels.forEach(p=>{
      if(p.id === target){
        p.hidden = false; p.classList.add('active');
      } else { p.hidden = true; p.classList.remove('active'); }
    });
  });

  // mortgage calculation: standard annuity formula
  function calcMortgage(){
    const priceText = document.querySelector('.price .value').textContent.replace(/[^\d]/g,'')||'0';
    const price = Number(priceText);
    const ltv = Number(document.getElementById('ltv').value)/100;
    const rate = Number(document.getElementById('rate').value)/100;
    const years = Number(document.getElementById('years').value);
    const loan = price * ltv;
    if(!loan || !years) {
      document.getElementById('monthly').textContent = '-';
      return;
    }
    const n = years * 12;
    const monthlyRate = rate / 12;
    const monthly = (monthlyRate === 0) ? (loan / n) : (loan * monthlyRate / (1 - Math.pow(1+monthlyRate, -n)));
    document.getElementById('monthly').textContent = monthly.toLocaleString('ko-KR', {maximumFractionDigits:0}) + '원';
  }
  document.getElementById('calcBtn').addEventListener('click', calcMortgage);
  calcMortgage();

  // contact form
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const agree = document.getElementById('agree').checked;
    if(!name || !phone || !agree){
      formMsg.textContent = '이름, 연락처, 개인정보 동의는 필수야.';
      formMsg.style.color = '#c0392b';
      return;
    }
    // fake submit (replace with real API)
    formMsg.textContent = '신청이 접수되었어. 유선으로 연락할게.';
    formMsg.style.color = '#0a7b3b';
    form.reset();
  });
  document.getElementById('resetBtn').addEventListener('click', ()=>{ form.reset(); formMsg.textContent=''; });

  // small accessibility: enable Enter on main image to open lightbox
  mainImg.tabIndex = 0;
  mainImg.addEventListener('keydown', e=>{ if(e.key === 'Enter') mainImg.click(); });

  // bounce: scroll to contact when booking
  document.getElementById('bookBtn').addEventListener('click', e=>{
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    document.getElementById('name').focus();
  });

  // map placeholder: can initialize real map here (Naver/Google/Kakao)
  const mapEl = document.getElementById('map');
  mapEl.addEventListener('click', ()=> alert('지도 API 연동 자리임. 실제 API 키 넣어라.'));

  // basic image prefetch for thumbs
  document.querySelectorAll('.thumb').forEach(t=> {
    const img = new Image();
    img.src = t.dataset.src;
  });
})();