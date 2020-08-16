import $ from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
import "slick-carousel";
import validate from "jquery-validation";
import "jquery-validation/dist/localization/messages_ru"
import aos from "aos";

$(function() {
    // AOS animate
    aos.init();
    // Slider
    $('.about__list').slick({
        dots: true,
        dotsClass: "slick__dots",
        arrows: false,
        infinite: true,
        speed: 600,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    // Form validation
    $('.hire__form').validate({
        lang: 'ru',
        ignore: ".ignore",
        rules: {
          email: {
            required: true,
            email: true
          },
        },
    });
});
