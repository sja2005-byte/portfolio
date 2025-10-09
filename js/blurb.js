// js/blurb.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.blurb_content form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const agree = form.querySelector('.form_checkbox input[type="checkbox"]');
    if (!agree?.checked) {
      alert('개인정보 동의 체크하세요.');
      return;
    }
    const payload = Object.fromEntries(fd.entries());
    const list = JSON.parse(localStorage.getItem('app.adInquiries') || '[]');
    list.push({ ...payload, createdAt: new Date().toISOString() });
    localStorage.setItem('app.adInquiries', JSON.stringify(list));
    alert('광고 문의 접수 완료.');
    form.reset();
  });
});