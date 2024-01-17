var swiper = new Swiper(".mySwiper", {
  loop: false, // Desativa o loop
  slidesPerView: 4,
  pagination: {
    el: ".swiper-pagination",
    // type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper-sec", {
  loop: false, // Desativa o loop
  slidesPerView: "auto",
  spaceBetween: 24,
  // pagination: {
  //   el: ".swiper-pagination",
  //   // type: "fraction",
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper-xp", {
  loop: false, // Desativa o loop
  slidesPerView: "auto",
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
