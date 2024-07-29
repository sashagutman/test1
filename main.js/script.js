const menuBurger = document.querySelector('.menu__burger');
const menuItem = document.querySelector('.header__menu');
const menuClose = document.querySelector('.menu__close');

menuBurger.addEventListener('click', ()=>{
       menuItem.classList.toggle('menu__item-open');
       menuBurger.classList.toggle('active');
    });

menuClose.addEventListener('click', ()=>{
   menuItem.classList.remove('menu__item-open');
})
