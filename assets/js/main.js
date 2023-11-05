const swiper1 = new Swiper(".swiper1", {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: ".swiper1 .swiper-button-next",
    prevEl: ".swiper1 .swiper-button-prev",
  },
  on: {
    slideChange: function () {
      $(".swiper1 .current-page").text(this.realIndex + 1);
      $(".swiper1 .total-pages").text(this.slides.length);
    },
  },
});

const swiper2 = new Swiper(".swiper2", {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: ".swiper2 .swiper-button-next",
    prevEl: ".swiper2 .swiper-button-prev",
  },
  on: {
    slideChange: function () {
      $(".swiper2 .current-page").text(this.realIndex + 1);
      $(".swiper2 .total-pages").text(this.slides.length);
    },
  },
});

$(".swiper1 .swiper-button-start").click(function () {
  swiper1.autoplay.start();
  $(this).hide();
  $(".swiper1 .swiper-button-stop").show();
});

$(".swiper1 .swiper-button-stop").click(function () {
  swiper1.autoplay.stop();
  $(this).hide();
  $(".swiper1 .swiper-button-start").show();
});

$(".swiper2 .swiper-button-start").click(function () {
  swiper2.autoplay.start();
  $(this).hide();
  $(".swiper2 .swiper-button-stop").show();
});

$(".swiper2 .swiper-button-stop").click(function () {
  swiper2.autoplay.stop();
  $(this).hide();
  $(".swiper2 .swiper-button-start").show();
});

$(".swiper1-wrapper h3 a").click(function () {
  $(this).addClass("on");
  $(".swiper2-wrapper h3 a").removeClass("on");
  $(".swiper2-wrapper .swiper2").hide();
  $(".swiper1-wrapper .swiper1").show();
  swiper2.autoplay.stop();
  swiper1.update();
  swiper1.autoplay.start();
  $(".swiper1 .swiper-button-start").hide();
  $(".swiper1 .swiper-button-stop").show();
});

$(".swiper2-wrapper h3 a").click(function () {
  $(this).addClass("on");
  $(".swiper1-wrapper h3 a").removeClass("on");
  $(".swiper1-wrapper .swiper1").hide();
  $(".swiper2-wrapper .swiper2").show();
  swiper1.autoplay.stop();
  swiper2.update();
  swiper2.autoplay.start();
  $(".swiper2 .swiper-button-start").hide();
  $(".swiper2 .swiper-button-stop").show();
});

const swiper3 = new Swiper(".slide2-group .swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  effect: "slide",
  speed: 800,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: ".slide2-group .swiper-button-next",
    prevEl: ".slide2-group .swiper-button-prev",
  },
  on: {
    slideChange: function () {
      $(".slide2-group .current-page").text(this.realIndex + 1);
      $(".slide2-group .total-pages").text(this.slides.length);
    },
  },
});

$(".slide2-group .swiper-button-start").click(function () {
  swiper3.autoplay.start();
  $(this).hide();
  $(".slide2-group .swiper-button-stop").show();
});

$(".slide2-group .swiper-button-stop").click(function () {
  swiper3.autoplay.stop();
  $(this).hide();
  $(".slide2-group .swiper-button-start").show();
});

$(".related-item .btn").click(function () {
  item = $(this).parent();
  subMenu = item.find(".related-site-list");

  if (item.hasClass("on")) {
    item.removeClass("on");
    return;
  }

  $(".related-item.on").removeClass("on");
  item.addClass("on");
});

$(".related-item .link").click(function () {
  item = $(this).parent();

  if (item.hasClass("on")) {
    item.removeClass("on");
    return;
  }

  $(".related-item.on").removeClass("on");
  item.addClass("on");
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $(".btn-top").addClass("show");
  } else {
    $(".btn-top").removeClass("show");
  }
});

$(".btn-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 300);
});
