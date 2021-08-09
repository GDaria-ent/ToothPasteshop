
var swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1, 
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    breakpoints:{
      320: {
        slidesPerView: 1
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1078: {
        spaceBetween: 20,
        slidesPerView: 4
      }
    }
  
});




const videoSectionSwiper = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    speed: 1000,
    autoplay: {
      enabled: true,
      delay: 3000,
  },


    navigation: {
      nextEl: '.swiper-next2',
      prevEl: '.swiper-prev2',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletActiveClass: 'swiper-pagination-bullet-active',
      bulletClass: 'swiper-pagination-bullet',
    }

    
  
  
});