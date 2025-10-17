$(function () {
  window.submitUsername = function () { /* noop */ };

  function showError(msg) {
    alert(msg);
  }

  $('.submit-btn').on('click', function (e) {
    e.preventDefault(); // 폼 제출(리로드) 막음

    var username = $('#password').val() ? $('#password').val().trim() : '';
    var email = $('#confirm-password').val() ? $('#confirm-password').val().trim() : '';

    if (!username) {
      showError('비밀번호를 재설정하세요.');
      $('#password').focus();
      return;
    }

    if (!email) {
      showError('재설정되었는 지 확인하십시오.');
      $('#confirm-password').focus();
      return;
    }

    window.location.href = 'index.html';
  });
});