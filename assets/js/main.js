const header = document.querySelector('header');
window.onscroll = () => {
  if (window.scrollY > 350) {
    header.classList.add('header-active');
  } else {
    header.classList.remove('header-active');
  }
};

var typed = new Typed('.typed', {
  strings: ['Composite Decking', 'Timber Wood'],
  stringsElement: null,
  typeSpeed: 80,
  startDelay: 500,
  backSpeed: 80,
  smartBackspace: true,
  shuffle: false,
  backDelay: 200,
  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,
  loop: true,
  loopCount: Infinity,
});



AOS.init({
  duration: 1200,
});


const burger = document.querySelector("header .burger-menu");
burger.addEventListener('click', () => {
  const nav_links = document.querySelector("header nav .nav__links");
  nav_links.classList.toggle("show-menu");
});

const closeMenu = document.querySelector("header .close-menu");
closeMenu.addEventListener('click', () => {
  const nav_links = document.querySelector("header nav .nav__links");
  nav_links.classList.toggle("show-menu");
})

var swiper = new Swiper(".projects", {
  loop: true,
  speed: 500,
  spaceBetween: 30,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
