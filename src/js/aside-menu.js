
//menu-btn

/*
    Сохранить состояние кнопки (menuOpen)

    Получить кнопку menu-btn из html, добавить листенер собыития клик
    Получить блок меню (.aside) и отобразить его или скрыть исходя из состояния

*/
//Состояние


const menuBtn =  document.querySelector('.menu-btn');
const menuBlock = document.querySelector('.aside');
const modalBackground = document.querySelector('.modal');

menuBtn.addEventListener('click', function(event) {
    //вызвать функцию сделать хорошо
    openMenuFunc();
});

//if(window.innerWidth < '768') {

function openMenuFunc() {
    if(menuOpenState) {
        //меню уже открыто - скрыть меню
        //menuBlock.style.display = 'none';
        menuBtn.classList.remove('menu-btn--state-close');
        menuBtn.classList.add('menu-btn--state-open');
        menuBlock.classList.remove('aside--open');
        modalBackground.classList.remove('modal-active');

    } else {
        //меню закрыто - отобразить меню
        //menuBlock.style.display = 'block';
        menuBtn.classList.add('menu-btn--state-close');
        menuBtn.classList.remove('menu-btn--state-open');
        menuBlock.classList.add('aside--open');
        modalBackground.classList.add('modal-active');
    }
    //изменить состояние
    menuOpenState = !menuOpenState;
}


const headerBurger = document.querySelector('.header__burger')
const asideMenuBurger = document.querySelector('.aside-menu__burger')
const asideMenuWrap = document.querySelector('.aside-menu__wrapper')
const asideMenu = document.querySelector('.aside-menu')
const asideMenuOver = document.querySelector('.aside-menu__overlay')

//нажал на бургер - меню открылось

function handleHeaderBurgerClick() {
  asideMenuWrap.classList.add('aside-menu__wrapper--show')
  asideMenu.classList.add('aside-menu--show')
  body.classList.add('disable-scroll')
}

headerBurger.addEventListener('click', function(event) {
  //вызвать функцию сделать хорошо
  handleHeaderBurgerClick();
});
//нажал на бургер - меню открылось
//нажал на бугрег - меню закрылось
const handleBurgerClick = (event) => {
  asideMenuWrap.classList.remove('aside-menu__wrapper--show')
  asideMenu.classList.remove('aside-menu--show')
  body.classList.remove('disable-scroll')
}
asideMenuBurger.addEventListener('click', handleBurgerClick)
//нажал на бугрег - меню закрылось
//нажал на молоко - меню закрылось
const handleAsideOverClick = (event) => {
  asideMenuWrap.classList.remove('aside-menu__wrapper--show')
  asideMenu.classList.remove('aside-menu--show')
  body.classList.remove('disable-scroll')
}
asideMenuOver.addEventListener('click', handleAsideOverClick)
//нажал на молоко - меню закрылось