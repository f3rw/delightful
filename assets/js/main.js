window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
     header.classList.remove('scrolled');
  }
});

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 16,
  
  // Navigation arrows
  navigation: {
    prevEl: '.prev-btn',
    nextEl: '.next-btn',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    620: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 2
    },
  }

});

