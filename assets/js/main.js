const header = document.querySelector('header');
const sections = document.querySelectorAll("section");
const nav_links = document.querySelectorAll("header nav ul li:nth-child(n+2)");
window.onscroll = () => {
  if (window.scrollY > 350) {
    header.classList.add('header-active');
  } else {
    header.classList.remove('header-active');
  }
  var current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
    nav_links.forEach((link) => {
      link.classList.remove("active");
      if (link.children[0].href.includes(current)) {
        link.classList.add("active");
        const nav_links = document.querySelector("header nav .nav__links");
        nav_links.classList.remove("show-menu");
      }
    });
  });
};

var typed = new Typed('.typed', {
  strings: ['Composite Decking', 'Timber Decking', 'Wood Flooring'],
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
  nav_links.classList.add("show-menu");
});

const closeMenu = document.querySelector("header .close-menu");
closeMenu.addEventListener('click', () => {
  const nav_links = document.querySelector("header nav .nav__links");
  nav_links.classList.remove("show-menu");
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
    el: ".pagination_project",
    clickable: true,
  },
});

var swiper_testimonial = new Swiper(".testimonials", {
  loop: true,
  speed: 500,
  spaceBetween: 20,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".pagination_testimonial",
    clickable: true,
  },
});
