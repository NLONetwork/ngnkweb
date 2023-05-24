document.addEventListener('DOMContentLoaded', function() {
    // carousel settings
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    document.querySelectorAll(".p-home-carousel-item")[0].classList.add('is-active');
    var total = document.querySelectorAll('.p-home-carousel-item').length;
    var current = 0;
    document.getElementById('moveRight').addEventListener('click', function () {
        var next = current;
        current = current + 1;
        setSlide(next, current);
    });
    document.getElementById('moveLeft').addEventListener('click', function () {
        console.log("aa")
        var prev = current;
        current = current - 1;
        setSlide(prev, current);
    });
    setTimeout(function () {

    }, 800);
    const autoSlide = () => {
        var next = current;
        current = current + 1;
        setSlide(next, current);
    }
    function setSlide(prev, next) {
        var slide = current;
        if (next > total - 1) {
            slide = 0;
            current = 0;
        }
        if (next < 0) {
            slide = total - 1;
            current = total - 1;
        }
        document.querySelectorAll('.p-home-carousel-item')[prev].classList.remove('is-active');
        sleep(5000)
        document.querySelectorAll('.p-home-carousel-item')[slide].classList.add('is-active');

    }
    setInterval(autoSlide, 5000);


    // news hover
    const newsListItems = document.querySelectorAll(".p-home-news__list");
    newsListItems.forEach((item) => {
        item.addEventListener("mouseenter", function () {
            const id = this.getAttribute("id");
            document.querySelector(`.p-home-news__list[id='${id}'] svg`).classList.add("is-active");
        });
        item.addEventListener("mouseleave", function () {
            const id = this.getAttribute("id");
            document.querySelector(`.p-home-news__list[id='${id}'] svg`).classList.remove("is-active");
        });
    });


    // feature image change
    window.addEventListener("scroll", function () {
        feature_top_1 = document.querySelector('.p-home-feature_box-describe-1').getBoundingClientRect().top + 300;
        feature_top_2 = document.querySelector('.p-home-feature_box-describe-2').getBoundingClientRect().top + 300;
        feature_top_3 = document.querySelector('.p-home-feature_box-describe-3').getBoundingClientRect().top + 300;
        feature_bottom_1 = document.querySelector('.p-home-feature_box-describe-1').getBoundingClientRect().bottom + 300;
        feature_bottom_2 = document.querySelector('.p-home-feature_box-describe-2').getBoundingClientRect().bottom + 300;
        feature_bottom_3 = document.querySelector('.p-home-feature_box-describe-3').getBoundingClientRect().bottom + 300;

        if (feature_top_1 <= window.innerHeight && window.innerHeight <= feature_bottom_1){
            document.querySelector(".p-home-feature_box-img-1").classList.add('is-active');
            document.querySelector(".p-home-feature_box-img-2").classList.remove('is-active');
            document.querySelector(".p-home-feature_box-img-3").classList.remove('is-active');
        }
        if (feature_top_2 <= window.innerHeight && window.innerHeight <= feature_bottom_2){
            document.querySelector(".p-home-feature_box-img-2").classList.add('is-active');
            document.querySelector(".p-home-feature_box-img-1").classList.remove('is-active');
            document.querySelector(".p-home-feature_box-img-3").classList.remove('is-active');
        }
        if (feature_top_3 <= window.innerHeight && window.innerHeight <= feature_bottom_3){
            document.querySelector(".p-home-feature_box-img-3").classList.add('is-active');
            document.querySelector(".p-home-feature_box-img-1").classList.remove('is-active');
            document.querySelector(".p-home-feature_box-img-2").classList.remove('is-active');
        }
    });
});