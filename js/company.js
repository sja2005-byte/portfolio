const btn = document.getElementById("toggleBtn");
    const extra = document.getElementById("extraMsg");

    btn.addEventListener("click", () => {
      if (extra.style.display === "none") {
        extra.style.display = "block";
        btn.textContent = "CEO 메시지 접기";
      } else {
        extra.style.display = "none";
        btn.textContent = "CEO 메시지 더 보기";
      }
    });