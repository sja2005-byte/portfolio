// let study = prompt("공부할 내용을 입력하시오","이름을 입력하시오");
//         console.log(find-container);

function verifyUsername() {
    const username = document.getElementById('username').value;
    
    alert('사용자 이름 확인이 완료되었습니다.');
}
function submitUsername() {
    const username = document.getElementById('email').value;
    
    alert('아이디를 찾았습니다.');
}

// ./js/find_id2.js
// jQuery 필요 (find_id.html에 jQuery 포함되어 있음)
$(function () {
  // 기존 HTML 버튼에 onclick="submitUsername()" 같은 속성이 남아있어도
  // ReferenceError 발생 안 하게 빈 함수로 정의해 둠.
  // (무한루프 방지 위해 여기선 아무 동작도 안 함)
  window.submitUsername = function () { /* noop */ };

  function showError(msg) {
    // 개발용 간단한 오류 표시. 실제 운영이면 인라인 에러 UI로 바꿔라.
    alert(msg);
  }

  $('.submit-btn').on('click', function (e) {
    e.preventDefault(); // 폼 제출(리로드) 막음

    var username = $('#username').val() ? $('#username').val().trim() : '';
    var email = $('#email').val() ? $('#email').val().trim() : '';

    if (!username) {
      showError('사용자 이름 입력해라.');
      $('#username').focus();
      return;
    }

    if (!email) {
      showError('이메일 입력해라.');
      $('#email').focus();
      return;
    }

    // 간단한 이메일 유효성 검사
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      showError('유효한 이메일 주소 입력해라.');
      $('#email').focus();
      return;
    }

    // 실제 서비스라면 여기서 서버에 아이디 찾기 요청을 보내고,
    // 성공/실패에 따라 처리해야 함.
    // 그러나 니가 원한 대로 검증 통과하면 바로 홈페이지로 이동.
    window.location.href = 'find_pw.html';
  });
});