// js/find-id.js
// 탭 전환 + 아이디 찾기/비번 재설정(흉내)

document.addEventListener('DOMContentLoaded', () => {
  const { getUsers } = window.App;

  const btnId = document.querySelector('#find-id-btn');
  const btnPw = document.querySelector('#find-pw-btn');
  const idForm = document.querySelector('#id-form');
  const pwForm = document.querySelector('#pw-form');

  if (btnId && btnPw) {
    btnId.addEventListener('click', () => {
      btnId.classList.add('active');
      btnPw.classList.remove('active');
      idForm.classList.add('active');
      pwForm.classList.remove('active');
    });
    btnPw.addEventListener('click', () => {
      btnPw.classList.add('active');
      btnId.classList.remove('active');
      pwForm.classList.add('active');
      idForm.classList.remove('active');
    });
  }

  // 아이디 찾기
  const idSubmit = idForm?.querySelector('.submit-btn');
  idSubmit?.addEventListener('click', () => {
    const name = idForm.querySelector('#name').value.trim();
    const email = idForm.querySelector('#email').value.trim();
    if (!name || !email) { alert('둘 다 써라.'); return; }
    const users = getUsers();
    const hit = users.find(u => u.username === name && u.email === email);
    if (!hit) { alert('일치하는 계정 없다.'); return; }
    alert(`아이디(이메일) 확인됐다: ${hit.email}`);
  });

  // 비밀번호 재설정
  const pwSubmit = pwForm?.querySelector('.submit-btn');
  pwSubmit?.addEventListener('click', () => {
    const id = pwForm.querySelector('#userid').value.trim();
    const email = pwForm.querySelector('#email2').value.trim();
    if (!id || !email) { alert('아이디/이메일 입력해.'); return; }

    const users = getUsers();
    const idx = users.findIndex(u => u.username === id || u.email === email);
    if (idx < 0) { alert('해당 계정 없다.'); return; }

    const newPw = Math.random().toString(36).slice(2, 10);
    users[idx].password = newPw;
    window.App.setUsers(users);
    alert(`임시 비번 발급(라고 치자): ${newPw}  로그인 후 꼭 바꿔라.`);
    location.href = 'login.html';
  });
});