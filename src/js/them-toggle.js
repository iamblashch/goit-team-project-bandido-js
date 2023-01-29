// HEADER SECTION
const body = document.querySelector('.body');
const toggleTextLeft = document.getElementById('toggle-text-left');
const toggleTextRight = document.getElementById('toggle-text-right');
const sunIconSvg = document.querySelector('.sun-icon');
const moonIconSvg = document.querySelector('.moon-icon');
const moonIcon = document.querySelector('.tablet-theme-dark');
const sunIcon = document.querySelector('.tablet-theme-light');
const navLogo = document.querySelector('.logo');
const navList = document.querySelector('.nav__list');
const searchbar = document.querySelector('.input-search');
const lightToggleSvg = document.querySelector('.theme-toggle-svg-light');
const darktToggleSvg = document.querySelector('.theme-toggle-svg-dark');
const searchIcon = document.querySelector('.nav__search-icon');
const burgerMenu = document.querySelector('.burger-menu');

// FILTER SECTION
const arrowUp = document.querySelector('.dropdown__btn-icon-arrow-up');
const arrowDown = document.querySelector('.dropdown__btn-icon-arrow-down ');
const searchByDate = document.querySelector('.filter-section__text');
const datetimePicker = document.querySelector('.datetime-picker__input');
const calendarIcon = document.querySelector(
  '.datetime-picker__input-icon-calender');
const dateArrowUp = document.querySelector(
  '.datetime-picker__input-icon-arrow-up ');
const dateArrowDown = document.querySelector(
  '.datetime-picker__input-icon-arrow-down');

// NEWS SECTION
  const newsTitle = document.querySelector('.title ');
  const newsSubtitle = document.querySelector('.subtitle');
  
// PAGINATION
const paginationLink = document.querySelector('.pagination-link ');
const paginationPrevious = document.querySelector('.pagination-previous');
const paginationNext = document.querySelector('.pagination-next');
const aelipsis = document.querySelector('pagination-ellipsis ');



// sunIcon.addEventListener("click", onLightBtnClick)
moonIcon.addEventListener('click', switchThemeToDark);


function switchThemeToDark() {
  moonIcon.disabled = true;
  sunIcon.disabled = false;

  if (moonIcon.disabled) {
    body.style.backgroundColor = '#2E2E2E';
    darktToggleSvg.classList.toggle('is-hidden');
    lightToggleSvg.classList.toggle('is-hidden');
    // HEADER SECTION
    toggleTextLeft.style.color = '#5F6775';
    toggleTextRight.style.color = '#4B48DB';
    sunIconSvg.style.stroke = '#5F6775';
    moonIconSvg.style.stroke = '#4B48DB';
    burgerMenu.style.stroke = '#F4F4F4';
    searchIcon.style.fill = '#F4F4F4';
    searchbar.style.color = '#F4F4F4';
    searchbar.style.border = '1px solid #F4F4F4';
    navLogo.style.color = '#F4F4F4';
    navList.style.color = '#F4F4F4';

    // FILTER SECTION
    arrowDown.style.fill = '#4440F6';
    searchByDate.style.color = '#F4F4F4';
    datetimePicker.style.border = '1px solid #F4F4F4';
    dateArrowUp.style.fill = '#F4F4F4';
    dateArrowDown.style.fill = '#F4F4F4';

    // NEWS SECTION
    newsTitle.style.color = '#F4F4F4';
    newsSubtitle.style.color = '#F4F4F4';
   
  }
}




