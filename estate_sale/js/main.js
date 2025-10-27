$(document).ready(function(){

    // 검색 기능
    function runSearch() {
        const query = $(".search_slogan input").val().trim();
        if(query.length > 0){
            alert("검색어: " + query + " (API 붙이면 실제 검색 가능)");
            // location.href = "./product.html?search=" + encodeURIComponent(query);
        }
    }
    $(".search_slogan button").on("click", runSearch);
    $(".search_slogan input").on("keypress", function(e){
        if(e.which === 13) runSearch();
    });

    // 헤더 스크롤 이벤트
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 50){
            $("#navbar").addClass("scrolled");
        } else {
            $("#navbar").removeClass("scrolled");
        }
    });

    // 매물 hover 효과
    $(".property_list").hover(
        function(){ $(this).find(".property_price").css({"color":"#e74c3c","transform":"scale(1)"}); },
        function(){ $(this).find(".property_price").css({"color":"#1abc9c","transform":"scale(1)"}); }
    );

    // 부드러운 스크롤
    $("a[href^='#']").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500);
    });

    // 모바일 메뉴
    $("<div class='hamburger'>☰</div>").prependTo(".nav_menu");
    $(".hamburger").on("click", function(){
        $(".nav_menu ul").slideToggle();
    });

});