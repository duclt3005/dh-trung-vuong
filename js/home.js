import "../libs/slick/slick.js";

$(".js-open-submenu").on("click", function () {
  $(this).parent().parent().find(".header-mb__submenu").slideToggle();
  $(this).parent().toggleClass("active");
});

$(".js-header-mb").on("click", function () {
  $(".header-mb").slideDown();
  $(".header-mb__content").css("left", "0");
});

$(".js-header-mb-close").on("click", function () {
  $(".header-mb").slideUp();
  $(".header-mb__content").css("left", "-360px");
});

$('.slide').slick({
  slidesToShow: 5,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});

$('.lecturers__list').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});
