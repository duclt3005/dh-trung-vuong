import "/node_modules/jquery/dist/jquery.min.js";

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
