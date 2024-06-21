import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {bannerInit} from './modules/banner';
import {headerInit} from './modules/header';
import {galleryInit} from './modules/gallery';
import {productsInit} from './modules/products';
import {initTabs} from './modules/tabs/init-tabs';
import {upInit} from './modules/up';
import {CustomSelect} from './modules/select/custom-select';
import {Form} from './modules/form-validate/form';
import {publicationInit} from './modules/publication';
import {cookieInit} from './modules/cookie';
import {yearsInit} from './modules/years';
import {geographyInit} from './modules/geography';
import {factsInit} from './modules/facts';
import {employmentInit} from './modules/employment';
import {inputFileInit} from './modules/input-file';
import {privilegeInit} from './modules/privilege';
import {animationsInit} from './modules/animations';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  animationsInit();
  iosVhFix();
  bannerInit();
  headerInit();
  galleryInit();
  productsInit();
  publicationInit();
  cookieInit();
  geographyInit();
  factsInit();
  inputFileInit();

  const calcScrollWidth = () => {
    let scrollWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scroll-width', `${scrollWidth}px`);
  }

  calcScrollWidth()

  window.addEventListener('resize', () => {
    calcScrollWidth()
  })

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initTabs();
    upInit();
    yearsInit();
    employmentInit();
    privilegeInit();

    const select = new CustomSelect();
    select.init();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
