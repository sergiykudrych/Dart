
const headerElement = document.querySelector('.header');

const callback = function (entries, observer) {
  if (entries[0].isIntersecting) {
    headerElement.classList.remove('_scroll');
  } else {
    headerElement.classList.add('_scroll');
  }
};
const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(headerElement);

// меню бургер
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu){
  const menuBody = document.querySelector('.menu__body');
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');

  });
}
$(document).ready(function() {
  $('.services__spoller-title').click(function(event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');
  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordion__control');
      const content = self.querySelector('.accordion__content');

      self.classList.toggle('open');

      if(self.classList.contains('open')) {
        control.setAttribute('aria-expended', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expended', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    })
  })
});

const slider = document.querySelector('.swiper-container');
let mySwiper = new Swiper(slider, {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  direction: 'vertical',
  breakpoints: {
    425: {
      slidesPerView: 2,
      spaceBetween: 40,
    }
  }
}); 

let myImagesSlider = new Swiper('.img__slider',{
  slidesPerView: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: '.team-button-next',
    prevEl: '.team-button-prev'
  },
  loop: true,
})
let myTextSlider = new Swiper('.text__slider',{
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
})

myImagesSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImagesSlider;