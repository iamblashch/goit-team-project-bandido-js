// // HEADER SECTION

// const body = document.querySelector('.body');
// const toggleTextLeft = document.getElementById('toggle-text-left');
// const toggleTextRight = document.getElementById('toggle-text-right');
// const toggle = document.querySelector('.toggle');


// const sunIconSvg = document.querySelector('.sun-icon');
// const moonIconSvg = document.querySelector('.moon-icon');
// const moonIcon = document.querySelector('.tablet-theme-dark');
// const sunIcon = document.querySelector('.tablet-theme-light');
// const navLogo = document.querySelector('.logo');
// const navList = document.querySelector('.nav__list');

// const searchbar = document.querySelector('.input-search');
// const lightToggleSvg = document.querySelector('.theme-toggle-svg-light');
// const darktToggleSvg = document.querySelector('.theme-toggle-svg-dark');
// const searchIcon = document.querySelector('.nav__search-icon');
// const burgerMenu = document.querySelector('.burger-menu');

// // FILTER SECTION
// const filterBtn = document.querySelectorAll('.js-theme-change');

// const filterLink = document.querySelector('.filter__link');
// const filterDesctop = document.querySelector('.filter__link-desktop');
// const filterDropDownBtn = document.querySelector('.dropdown__btn');
// const arrowUp = document.querySelector('.dropdown__btn-icon-arrow-up');
// const arrowDown = document.querySelector('.dropdown__btn-icon-arrow-down ');
// const searchByDate = document.querySelector('.filter-section__text');
// const datetimePicker = document.querySelector('.datetime-picker__input');
// const calendarIcon = document.querySelector(
//   '.datetime-picker__input-icon-calender'
// );
// const dateArrowUp = document.querySelector(
//   '.datetime-picker__input-icon-arrow-up '
// );
// const dateArrowDown = document.querySelector(
//   '.datetime-picker__input-icon-arrow-down'
// );

// // NEWS SECTION
// const newsTitle = document.querySelector('.title ');
// const newsSubtitle = document.querySelector('.subtitle');

// // PAGINATION
// const paginationLink = document.querySelector('.pagination-link ');
// const paginationPrevious = document.querySelector('.pagination-previous');
// const paginationNext = document.querySelector('.pagination-next');
// const aelipsis = document.querySelector('.pagination-ellipsis_last');

// // MOBILE MENU
// const mobMenu = document.getElementById('mobile-menu');
// const mobClose = document.querySelector('js-close-menu');

// let themeStorage = localStorage.getItem('themeStorage');

// document.addEventListener('DOMContentLoaded', event => {
//   if (themeStorage === 'dark') {
//     switchThemeToDark(event);
//   }
// });

// sunIcon.addEventListener('click', switchThemeToLight);
// moonIcon.addEventListener('click', switchThemeToDark);
// toggleTextLeft.addEventListener('click', switchThemeToLight);
// toggleTextRight.addEventListener('click', switchThemeToDark);
// toggle.addEventListener('click', switchThemeToLight);
// toggle.addEventListener('click', switchThemeToDark);

// function switchThemeToDark(e) {
//   if (e.type === 'click') {
//     themeStorage = themeStorage === 'light' ? 'dark' : 'light';

//     localStorage.setItem('themeStorage', themeStorage);
//   }

//   moonIcon.disabled = true;
//   sunIcon.disabled = false;
//   toggleTextRight.disabled = true;
//   toggleTextLeft.disabled = false;
//   toggle.disabled= true;
//   toggle.disabled= false;



//   if (moonIcon.disabled || toggleTextLeft.disabled || toggle.disabled ) {
//     body.style.backgroundColor = '#2E2E2E';
//     darktToggleSvg.classList.toggle('is-hidden');
//     lightToggleSvg.classList.toggle('is-hidden');
//     // HEADER SECTION
//     toggleTextLeft.style.color = '#5F6775';
//     toggleTextRight.style.color = '#4B48DB';
//     sunIconSvg.style.stroke = '#5F6775';
//     moonIconSvg.style.stroke = '#4B48DB';
//     burgerMenu.style.stroke = '#F4F4F4';
//     searchIcon.style.fill = '#F4F4F4';
//     searchbar.style.color = '#F4F4F4';
//     searchbar.style.border = '1px solid #F4F4F4';
//     navLogo.style.color = '#F4F4F4';
//     navList.style.color = '#F4F4F4';

//     // FILTER SECTION
//     // filterBtn[0].style.backgroundColor = '#4440F6'

//     if (filterBtn.length) {
//       filterBtn.forEach(element => {
//         element.style.backgroundColor = '#FFFFFF';
//       });
//       filterLink.style.backgroundColor = '#FFFFFF';
//       filterDesctop.style.backgroundColor = '#FFFFFF';
//       filterDropDownBtn.style.backgroundColor = '#FFFFFF';
//       arrowDown.style.fill = '#4440F6';
//       searchByDate.style.color = '#F4F4F4';
//       datetimePicker.style.border = '1px solid #F4F4F4';
//       dateArrowUp.style.fill = '#F4F4F4';
//       dateArrowDown.style.fill = '#F4F4F4';
//     }

//     // NEWS SECTION
//     if (newsTitle) {
//       newsTitle.style.color = '#F4F4F4';
//       newsSubtitle.style.color = '#F4F4F4';
//     }
//   }
// }

// function switchThemeToLight(e) {
//   if (e.type === 'click') {
//     themeStorage = themeStorage === 'light' ? 'dark' : 'light';

//     localStorage.setItem('themeStorage', themeStorage);
//   }
//   moonIcon.disabled = false;
//   sunIcon.disabled = true;

//   toggleTextRight.disabled = false;
//   toggleTextLeft.disabled = true;

//   if (sunIcon.disabled || toggleTextLeft.disabled || toggle.disabled) {
//     body.style.backgroundColor = '#F4F4F4';
//     darktToggleSvg.classList.toggle('is-hidden');
//     lightToggleSvg.classList.toggle('is-hidden');
//     // HEADER SECTION
//     toggleTextLeft.style.color = '#4B48DB';
//     toggleTextRight.style.color = '#5F6775';
//     sunIconSvg.style.stroke = '#4B48DB';
//     moonIconSvg.style.stroke = '#5F6775';
//     burgerMenu.style.stroke = '#111321';
//     searchIcon.style.fill = '#111321';
//     searchbar.style.color = '#111321';
//     searchbar.style.border = '1px solid #111321';
//     navLogo.style.color = '#111321';
//     navList.style.color = '#111321';

//     // FILTER SECTION
//     if (filterBtn.length){
//       filterBtn.forEach(element => {
//         element.style.backgroundColor = 'transparent';
//       });
//       //   filterDesctop.style.backgroundColor ='transparent'
//       filterDropDownBtn.style.backgroundColor = 'transparent';
//       arrowDown.style.fill = '#4B48DB';
//       searchByDate.style.color = '#111321';
//       datetimePicker.style.border = '1px solid #111321';
//       dateArrowUp.style.fill = '#A2A2A2';
//       dateArrowDown.style.fill = '#A2A2A2';
//     }
   

//     // NEWS SECTION
//     if (newsTitle){
//       newsTitle.style.color = '#111321';
//       newsSubtitle.style.color = '#111321';
//     }
//   }
// }


// HEADER SECTION
const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const navItems = document.querySelectorAll('.nav__item');
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.icon-search');
const textInput = document.getElementById('placeholder').placeholder;
// const searchIconMob = document.querySelector('.nav__search');
const burgerMenu = document.querySelector('.nav__svg');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');
const lightText = document.getElementById('toggle-text-left');
const darkText = document.getElementById('toggle-text-right');
const toggle = document.querySelector('.toggle');
const headerBorder = document.querySelector('.header');

// FILTER SECTION
const filterBtns = document.querySelectorAll('.js-theme-change');
const dropdownBtn  = document.querySelector('.js-dropdown-btn');
const arrowDown = document.querySelector('.dropdown__btn-icon-arrow-down')
const arrowUp= document.querySelector('.dropdown__btn-icon-arrow-up')
const filterText = document.querySelector('.js-filter-text');
const datePicker = document.querySelector('.datetime-picker__input');

 // NEWS SECTION
const newsTitles = document.querySelectorAll('.title')
const newsSubtitles = document.querySelectorAll('.subtitle')

let themeStorage = localStorage.getItem('themeStorage');

document.addEventListener('DOMContentLoaded', event => {
  if (themeStorage === 'dark') {
    themeChange(event);
  }
});
// toggle.addEventListener('click',colorTheme)
//   if(themeKey === 'dark'){
//     toggle.checked=true;}
//     else{toggle.checked=false;}

toggle.addEventListener('click', themeChange);
if(themeStorage === 'dark'){
      toggle.checked=true;}
      else{toggle.checked=false;}


function themeChange(e) {
  if (e.type === 'click') {
    themeStorage = themeStorage === 'light' ? 'dark' : 'light';

    localStorage.setItem('themeStorage', themeStorage);
  }

  body.style.backgroundColor = '#2E2E2E';

  // HEADER SECTION
  logo.style.color = '#F4F4F4';
  navItems.forEach(element => {
    element.style.color = '#F4F4F4';
  });
  searchInput.style.border = '1px solid #F4F4F4'
  searchInput.style.color = '#F4F4F4'
  searchIcon.style.fill ='#F4F4F4'
  // textInput.style.color ='#F4F4F4'
  burgerMenu.style.stroke = '#F4F4F4'
  sunIcon.style.stroke ='#5F6775'
  moonIcon.style.stroke ='#4B48DB'
  lightText.style.color = '#5F6775'
  darkText.style.color = '#4B48DB'
  headerBorder.style.border = '1px solid rgba(244, 244, 244, 0.2)'

// FILTER SECTION
filterBtns.forEach(element => {
    element.style.backgroundColor = '#F4F4F4';
  });
  dropdownBtn.style.backgroundColor = '#F4F4F4';
  // btns hover+focus
  datePicker.style.border = '1px solid #F4F4F4'
  filterText.style.color = '#F4F4F4'
  // arrowDown.style.stroke ='#F4F4F4'
  arrowUp.style.stroke ='#F4F4F4'


  // NEWS SECTION
  newsTitles.forEach(element => {
    element.style.color = '#F4F4F4';
  });
  newsSubtitles.forEach(element => {
    element.style.color = '#F4F4F4';
  });

}
