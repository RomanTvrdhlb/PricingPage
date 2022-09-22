import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';
import { getHeaderHeight } from '../functions/header-height';
import _vars from '../_vars';

import {addCustomClass, toggleCustomClass, elementHeight, removeCustomClass} from '../functions/customFunctions'

// let overlay = document.querySelector('[data-overlay]');
// let mobileMenu = document.querySelector('.mobile-menu');

const burger = document.querySelector(".header__burger");
const mobileMenu = document.querySelector(".mobile-nav");

// let burger = document.querySelector('.burger');
// let burgerActive = document.querySelector('.burger.active');
// let header = document.querySelector('header');

const mobileMenuHandler = function(mobileMenu, burger) {
  burger.addEventListener('click', function(){
    mobileMenu.classList.toggle('active');
    burger.classList.toggle('active');
    // overlay.classList.toggle('active');
    // addCustomClass(_vars.bodyEl, 'fixed')
    // headerTag.classList.toggle('active');
    // document.body.classList.toggle('dis-scroll')
    getHeaderHeight();
  })
}

const hideMenuHandler = function(mobileMenu, burger) {
    mobileMenu.classList.remove('active');
    burger.classList.remove('active');
    // overlay.classList.remove('active');
    // removeCustomClass(_vars.bodyEl, 'fixed')
    // headerTag.classList.remove('active');
    // document.body.classList.remove('dis-scroll')
}
  mobileMenuHandler(mobileMenu,burger);
  
  








