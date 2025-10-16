
    $(function () {
      function showError(msg) {
        // 실제 서비스면 toast나 inline error로 바꿔라. 일단 간단히 alert.
        alert(msg);
      }

      $('.submit-btn').on('click', function (e) {
        e.preventDefault();

        var pw = $('#password').val().trim();
        var pw2 = $('#confirm-password').val().trim();

        // 기본 검증: 비어있음, 길이, 영문+숫자 포함, 일치 여부
        if (!pw) {
          showError('비밀번호를 입력해라.');
          $('#password').focus();
          return;
        }

        if (pw.length < 8) {
          showError('비밀번호는 최소 8자 이상이어야 한다.');
          $('#password').focus();
          return;
        }

        // 영문자와 숫자 포함 체크 (필요하면 특수문자 체크도 추가)
        if (!/[A-Za-z]/.test(pw) || !/[0-9]/.test(pw)) {
          showError('비밀번호에 영문자와 숫자를 각각 하나 이상 포함시켜라.');
          $('#password').focus();
          return;
        }

        if (pw !== pw2) {
          showError('비밀번호가 일치하지 않는다. 다시 확인해.');
          $('#confirm-password').focus();
          return;
        }

        // 여기서 실제 운영이면 서버에 비밀번호 변경 요청을 보내야 함.
        // 예시:
        // $.post('/api/reset-password', { password: pw, token: '...'}, function(res){ ... });

        // 일단 니가 원한대로 검증 통과하면 홈페이지로 이동
        window.location.href = 'index.html';
      });
    });