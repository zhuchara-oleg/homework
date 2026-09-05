export const heroSlider = () => {
  new Swiper(".hero__slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: ".swiper-button--prev",
      nextEl: ".swiper-button--next",
    },
  });
};
