import '../scss/style.scss';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  width: 320,
  slidesPerView: 1.3,
  spaceBetween: 20,
  longSwipes: false,
  breakpoints: {
    767: {
      enabled: false,
      swiperOff() {
        swiper.destroy(true, true);
      }
    }
  },
  pagination: {
    el: '.pagination',
    clickable: true,
    type: 'bullets',
    mousewheel: true,
    keyboard: true
  }
})

const body = document.querySelector('body')

const headerBurger = document.querySelector('.header__burger')
const asideMenuBurger = document.querySelector('.aside-menu__burger')
const asideMenu = document.querySelector('.aside-menu')
const asideMenuWrap = document.querySelector('.aside-menu__wrapper')
const asideMenuOver = document.querySelector('.aside-menu__overlay')

const chatFeedback = document.querySelector('.chat__feedback')
const asideFeedback = document.querySelector('.aside-feedback')
const asideFeedbackBurger = document.querySelector('.aside-feedback__burger')
const asideFeedbackWrap = document.querySelector('.aside-feedback__wrapper')
const asideMenuChat = document.querySelector('.aside-menu__chat')
const asideFeedbackOver = document.querySelector('.aside-feedback__overlay')
const asideCallWrap = document.querySelector('.aside-call__wrapper')
const asideCall = document.querySelector('.aside-call')
const asideCallBurger = document.querySelector('.aside-call__burger')
const headerCall = document.querySelector('.header__call')
const asideMenuCall = document.querySelector('.aside-menu__call')
const asideCallOver = document.querySelector('.aside-call__overlay')

const buttonBrands = document.querySelector('.servise-brands__button-more-text');
const buttonAdvantages = document.querySelector('.service-advantages__button-more-text');
const buttonService = document.querySelector('.service__button-more-text');

const cardsOpenBrands = document.querySelector('.servise-brands__swiper-container');
const cardsOpendAdvantages = document.querySelector('.service-advantages__swiper-container');
const serviceMore = document.querySelector('.service__paragraph')

const buttonTextBrands = document.querySelector('.servise-brands__more-text');
const buttonTextAdvantages = document.querySelector('.service-advantages__more-text');
const buttonTextService = document.querySelector('.service__more-text');

const imgBrands = document.querySelector('.servise-brands__more-img');
const imgAdvantages = document.querySelector('.service-advantages__more-img');
const imgService = document.querySelector('.service__more-img');


function handleHeaderBurgerClick() {
  asideMenu.classList.add('aside-menu--show')
  body.classList.add('disable-scroll')
}

headerBurger.addEventListener('click', function (event) {
  handleHeaderBurgerClick();
});

function handleBurgerClick() {
  asideMenu.classList.remove('aside-menu--show')
  body.classList.remove('disable-scroll')
}

asideMenuBurger.addEventListener('click', function (event) {
  handleBurgerClick();
});

function handleAsideOverClick() {
  asideMenu.classList.remove('aside-menu--show')
  body.classList.remove('disable-scroll')
}

asideMenuOver.addEventListener('click', function (event) {
  handleAsideOverClick();
});

function handleChatFeedbackClick() {
  asideFeedbackWrap.classList.add('aside-feedback__wrapper--show')
  asideFeedback.classList.add('aside-feedback--show')
  body.classList.add('disable-scroll')
}

chatFeedback.addEventListener('click', function (event) {
  handleChatFeedbackClick();
});

function handleAsideChatClick() {
  asideFeedbackWrap.classList.add('aside-feedback__wrapper--show')
  asideFeedback.classList.add('aside-feedback--show')
  body.classList.add('disable-scroll')
  asideMenuWrap.classList.remove('aside-menu__wrapper--show')
}

asideMenuChat.addEventListener('click', function (event) {
  handleAsideChatClick();
});

function handleFeedBurgerClick() {
  asideFeedbackWrap.classList.remove('aside-feedback__wrapper--show')
  asideFeedback.classList.remove('aside-feedback--show')
  body.classList.remove('disable-scroll')
}

asideFeedbackBurger.addEventListener('click', function (event) {
  handleFeedBurgerClick();
});

function handleFeedOverClick() {
  asideFeedbackWrap.classList.remove('aside-feedback__wrapper--show')
  asideFeedback.classList.remove('aside-feedback--show')
  body.classList.remove('disable-scroll')
}

asideFeedbackOver.addEventListener('click', function (event) {
  handleFeedOverClick();
});

function handleHeaderCallClick() {
  asideCall.classList.add('aside-call--show')
  asideCallWrap.classList.add('aside-call__wrapper--show')
  body.classList.add('disable-scroll')
}

headerCall.addEventListener('click', function (event) {
  handleHeaderCallClick();
});

function handleAsideCallClick() {
  asideCall.classList.add('aside-call--show')
  asideCallWrap.classList.add('aside-call__wrapper--show')
  body.classList.add('disable-scroll')
  asideMenuWrap.classList.remove('aside-menu__wrapper--show')
}

asideMenuCall.addEventListener('click', function (event) {
  handleAsideCallClick();
});

function handleCallBurgerClick() {
  asideCall.classList.remove('aside-call--show')
  asideCallWrap.classList.remove('aside-call__wrapper--show')
  body.classList.remove('disable-scroll')
}

asideCallBurger.addEventListener('click', function (event) {
  handleCallBurgerClick();
});

function handleCallOverClick() {
  asideCall.classList.remove('aside-call--show')
  asideCallWrap.classList.remove('aside-call__wrapper--show')
  body.classList.remove('disable-scroll')
}

asideCallOver.addEventListener('click', function (event) {
  handleCallOverClick();
});

buttonBrands.addEventListener("click", buttonClickBrands);
buttonAdvantages.addEventListener("click", buttonClickAdvantages);
buttonService.addEventListener("click", buttonClickService);

function buttonClickBrands() {
  cardsOpenBrands.classList.toggle('servise-brands__swiper-container--open');
  if (cardsOpenBrands.classList.contains('servise-brands__swiper-container--open')) {
    buttonTextBrands.textContent = "Скрыть";
    buttonBrands.classList.add('servise-brands__button-more-text', 'button-more-text--opened');
    imgBrands.classList.replace('servise-brands__more-img', 'arrows_rotate');
  } else {
    buttonTextBrands.textContent = "Показать все";
    buttonBrands.classList.remove('button-more-text--opened', 'button-more-text--close');
    imgBrands.classList.replace('arrows_rotate', 'servise-brands__more-img');
  }
}

function buttonClickAdvantages() {
  cardsOpendAdvantages.classList.toggle('service-advantages__swiper-container--open');
  if (cardsOpendAdvantages.classList.contains('service-advantages__swiper-container--open')) {
    buttonTextAdvantages.textContent = "Скрыть";
    buttonAdvantages.classList.add('service-advantages__button-more-text', 'button-more-text--opened');
    imgAdvantages.classList.replace('service-advantages__more-img', 'arrows_rotate');
  } else {
    buttonTextAdvantages.textContent = "Показать все";
    buttonAdvantages.classList.remove('button-more-text--opened', 'button-more-text--close');
    imgAdvantages.classList.replace('arrows_rotate', 'service-advantages__more-img');
  }
}

function buttonClickService() {
  serviceMore.classList.toggle('service__paragraph--open');
  if (serviceMore.classList.contains('service__paragraph--open')) {
    buttonTextService.textContent = "Скрыть";
    buttonService.classList.add('service__button-more-text', 'button-more-text--opened');
    imgService.classList.replace('service__more-img', 'arrows_rotate');
  } else {
    buttonTextService.textContent = "Показать все";
    buttonService.classList.remove('button-more-text--opened', 'button-more-text--close');
    imgService.classList.replace('arrows_rotate', 'service__more-img');
  }
}


