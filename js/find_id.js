function verifyUsername() {
    const username = document.getElementById('username').value;
    
    alert('사용자 이름 확인이 완료되었습니다.');
}
function submitUsername() {
    const username = document.getElementById('email').value;
    
    alert('아이디를 찾았습니다.');
}

$(function () {
  window.submitUsername = function () { /* noop */ };

  function showError(msg) {
    alert(msg);
  }

  $('.submit-btn').on('click', function (e) {
    e.preventDefault(); // 폼 제출(리로드) 막음

    var username = $('#username').val() ? $('#username').val().trim() : '';
    var email = $('#email').val() ? $('#email').val().trim() : '';

    if (!username) {
      showError('사용자 이름 입력하세요.');
      $('#username').focus();
      return;
    }

    if (!email) {
      showError('이메일 입력하세요.');
      $('#email').focus();
      return;
    }

    // 간단한 이메일 유효성 검사
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      showError('유효한 이메일 주소 입력하세요.');
      $('#email').focus();
      return;
    }

    window.location.href = 'find_pw.html';
  });
});