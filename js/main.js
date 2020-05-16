$(document).ready(function () {



  var mySwiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var mySwiper = new Swiper('.instagram__swiper-container', {
    containerModifierClass: 'instagram__swiper-container',
    slidesPerView: 6,
    spaceBetween: 1,
    keyboard: true,
    loop: true,
    autoplay: {
      delay: 3000,
    },
  });


});
