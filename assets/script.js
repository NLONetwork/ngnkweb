function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
document.addEventListener('DOMContentLoaded', function() {

    // スクロール時のヘッダーの動き
    window.addEventListener("scroll", function () {
        if (this.pageYOffset > 110) {
            document.querySelector(".l-global-header").classList.add("is-inview");
        }
        if (this.pageYOffset < 109) {
            document.querySelector(".l-global-header").classList.remove("is-inview");
        }
    });

// ボタンが押されたとき
    document.querySelector(".l-humb__icon").addEventListener("click", function () {
        this.classList.toggle("is-active");
        const nav = document.querySelector(".l-nav__sp");
        if (nav.style.display === "none") {
            nav.style.display = "flex";
            document
                .querySelector(".l-nav__sp")
                .animate([{ opacity: "0" }, { opacity: "1" }], 500);
        } else {
            document
                .querySelector(".l-nav__sp")
                .animate([{ opacity: "1" }, { opacity: "0" }], 500);
            setTimeout(function(){
                nav.style.display = "none";
            }, 500);
        }
    });

// ナビゲーションがクリックされたとき
    const navLinks = document.querySelectorAll(".l-nav__sp-link");
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            document.querySelector(".l-humb__icon").classList.toggle("is-active");
            document
                .querySelector(".l-nav__sp")
                .animate([{ opacity: "1" }, { opacity: "0" }], 500);
            setTimeout(function(){
                document.querySelector(".l-nav__sp").style.display = "none";
            }, 500);
        });
    });


});

$(function(){
    $(".wrapper").removeClass('loading');

    $('a:not([href^="https://www.ngnkmc.net/#"]):not([target])').on('click', function(e){
        e.preventDefault();
        link = $(this).attr('href');
        if (link !== '') {
            //bodyにフェードアウトさせるためのクラスを付与
            $('.wrapper').addClass('loading');
            document.querySelector(".l-global-header").classList.remove("is-inview");
            setTimeout(function(){
                window.location = link;
            }, 400);
        }
        return false;
    });
});
