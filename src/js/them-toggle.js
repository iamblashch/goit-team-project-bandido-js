

// HEADER SECTION

const toggle =document.querySelector('.theme-toggle')
console.log(' -->', toggle );

const body = document.querySelector('.body')
const toggleTextLeft= document.getElementById('toggle-text-left')
console.log(' -->',toggleTextLeft );

const toggleTextRight= document.getElementById('toggle-text-right')
console.log(' -->', toggleTextRight );

const navLogo = document.querySelector('.logo')
const navList= document.querySelector('.nav__list')
const searchbar = document.querySelector('.input-search')
// const searchIcon = document.querySelector('.nav__svg')
// const burgerMenu = document.querySelector('.burger-menu')
// const lightToggleSvg = document.querySelector('.theme-toggle-svg-light')
// const darktToggleSvg = document.querySelector('.theme-toggle-svg-dark')
// const sunIcon = document.querySelector('.sun-icon')
// const moonIcon = document.querySelector('.moon-icon')
// const toggleEl = document.querySelector('.theme-toggle__switcher--light')
// const toggleleft = document.querySelector('.theme-toggle-light__text--left')
// const toggleright = document.querySelector('.theme-toggle-light__text--right')



toggleTextLeft.addEventListener("click", switchThemeToLight)

toggleTextRight.addEventListener("click", switchThemeToDark)

function switchThemeToDark(){
      if (toggleTextRight.style.disabled = false) 
      
      {
        toggle.classList.remove('toggle-light')
        toggle.classList.add('toggle-dark')

        darktToggleSvg.classList.toggle('is-hidden')
        lightToggleSvg.classList.toggle('is-hidden')

        toggleTextRight.style.disabled = true

        body.style.backgroundColor = '#2E2E2E';
        navLogo.style.color = 'white';
        navList.style.color = 'white';
        searchbar.style.backgroundColor = 'transparent'
        searchbar.style.color = 'white';
        searchbar.style.borderSolid = 'red';
        searchIcon.style.fill = 'white';
        burgerMenu.style.stroke= 'white';
        sunIcon.style.color = 'white';
        moonIcon.style.color = 'white';
     

        dropDownBtn.style.color ='$theme-svg-on-color';
        dropDownBtn.style.backgroundColor ='$white-color';
        searchByDate.style.color ="white";
       
    //   } else {

    //     toggle.classList.toggle('toggle-light')
    //     toggleTextRight.style.disabled = false
    //     darktToggleSvg.classList.toggle('is-hidden')
    //     lightToggleSvg.classList.toggle('is-hidden')
    //     body.classList.add('body-light');
    //     navLogo.style.color = 'black';
    //     navList.style.color = 'black';
    //     searchbar.style.backgroundColor = 'transparent'
    //     searchbar.style.color = 'black';
    //     searchbar.style.borderSolid = 'red';
    //     searchIcon.style.fill = 'black';
    //     burgerMenu.style.stroke= 'black';
    //     sunIcon.style.color = 'black';
    //     moonIcon.style.color = 'black';
    //     toggleEl.style.borderSolid = 'black';
        
      }
    }


    function switchThemeToLight(){
        if (toggleTextLeft.style.disabled = false) {

            // toggle.classList.toggle('toggle-light')
            // darktToggleSvg.classList.toggle('is-hidden')
            // lightToggleSvg.classList.toggle('is-hidden')

            toggleTextLeft.style.disabled = true

        //     body.style.backgroundColor = 'white';
        //     navLogo.style.color = 'black';
        //     navList.style.color = 'black';
        //     searchbar.style.color = 'black';
        //     searchbar.style.borderSolid = 'black';
        //     searchIcon.style.stroke = 'black';
        //     burgerMenu.style.stroke= 'black';
        //     sunIcon.style.stroke = 'black';
        //     moonIcon.style.stroke = 'black';
        //     // toggleEl.style.borderSolid = '$white-color';

    }
}



// FILTER SECTION
const filterEl = document.querySelector('.dropdown__link')
const filterOther = document.querySelector('.dropdown__others')
const arrowUp = document.querySelector('.dropdown__btn-icon-arrow-up')
const arrowDown = document.querySelector('.dropdown__btn-icon-arrow-down ')
const dropDownBtn = document.querySelector('.dropdown__btn ')
const dropDownContent = document.querySelector('.dropdown__content ')
const dropDownLink = document.querySelector('.dropdown__link')
const filterDesctopEl = document.querySelector('.filter__link-desktop')
const searchByDate = document.querySelector('.filter-section__text')
const datetimePicker = document.querySelector('.datetime-picker__input')
const calendarIcon = document.querySelector('.datetime-picker__input-icon-calender')
const dateArrowUp = document.querySelector('.datetime-picker__input-icon-arrow-up ')
const dateArrowDown = document.querySelector('.datetime-picker__input-icon-arrow-down')



// NEWS SECTION
const newsTitle = document.querySelector('.title ')
const newsSubtitle = document.querySelector('.subtitle')
const newsDate = document.querySelector('.date')
const newsHyperlink = document.querySelector('.hyperlink')
const linkAdd = document.querySelector('.link-add ')
const addIcon = document.querySelector('.add-icon ')
const filteredDecr =document.querySelector('.filter-descr ')


// PAGINATION
const paginationLink = document.querySelector('.pagination-link ')
const paginationPrevious  = document.querySelector('.pagination-previous')
const paginationNext  = document.querySelector('.pagination-next')
const aelipsis = document.querySelector('pagination-ellipsis ')



// MOBILE MENU

// slider.addEventListener('click', changeTheme);
// sliderr.addEventListener('click', changeThemeMain);

// function changeTheme() {
//   if (document.body.classList.toggle('dark')) {
//     bodyMain.style.backgroundColor = 'var(--black-bg-color)';
//     imputHeader.style.backgroundColor = 'var(--black-bg-color)';
//     imputHeader.style.color = 'var(--orange-text-color)';
//     siteNavLink.style.color = 'var(--white-bg-color)';
//     dropBTN.style.color = 'var(--white-bg-color)';
//     dropBTNDesk.style.backgroundColor = 'transparent';
//     dropBTNMob.style.backgroundColor = 'var(--white-bg-color)';
//     dropdownContent.style.color = 'var(--white-bg-color)';
//     favoriteI.style.color = 'var(--white-bg-color)';
//     dropBTNMob.style.borderSolid = 'var(--orange-text-color)';
//     iconMenu.style.color = 'var(--white-bg-color)';
//     backdropMob.style.background = 'var(--black-bg-color)';
//     // btnOrRemove.style.background = 'var(--black-bg-color)';
//     // productTitle.style.color = 'var(--white-bg-color)';
//     // paginatorItem.style.color = 'var(--white-bg-color)';
//     productTiteitle.style.color = 'var(--white-bg-color)';
//     // ligh.style.color = 'var(--white-bg-color)';
  
//     lightt.style.color = 'var(--white-bg-color)';
//     blackk.style.color = 'var(--orange-text-color)';
//     mobMenuItem.style.color = 'var(--white-bg-color)';
//   } else {
//     bodyMain.style.backgroundColor = 'var(--white-bg-color)';
//     imputHeader.style.backgroundColor = 'var(--white-bg-color)';
//     imputHeader.style.color = 'var(--black-bg-color)';
//     siteNavLink.style.color = 'var(--black-bg-color)';
//     dropBTN.style.color = 'var(--black-bg-color)';
//     dropBTNDesk.style.backgroundColor = 'var(--white-bg-color)';
//     dropBTNMob.style.backgroundColor = 'var(--white-bg-color)';
//     dropdownContent.style.color = 'var(--black-bg-color)';
//     favoriteI.style.color = 'var(--black-bg-color)';
//     dropBTNMob.style.borderSolid = 'var(--white-bg-color)';
//     backdropMob.style.background = 'var(--white-bg-color)';
//     iconMenu.style.color = 'var(--black-bg-color)';
//     productTiteitle.style.color = 'var(--black-bg-color)';
//     // btnOrRemove.style.background = 'var(--white-bg-color)';
//     // paginatorItem.style.color = 'var(--black-bg-color)';
//     // favorTiteitle.style.color = 'var(--white-bg-color)';
//     // ligh.style.color = 'var(--orange-text-color)';
//     // blac.style.color = 'var(--black-bg-color)';
//     lightt.style.color = 'var(--orange-text-color)';
//     blackk.style.color = 'var(--black-bg-color)';
//     mobMenuItem.style.color = 'var(--black-bg-color)';
//   }
// }

// function changeThemeMain() {
//   if (document.body.classList.toggle('dark')) {
//     bodyMain.style.background = 'var(--black-bg-color)';
//     imputHeader.style.backgroundColor = 'var(--black-bg-color)';
//     imputHeader.style.color = 'var(--orange-text-color)';
//     siteNavLink.style.color = 'var(--white-bg-color)';
//     dropBTN.style.color = 'var(--white-bg-color)';
//     dropBTNDesk.style.backgroundColor = 'transparent';
//     dropBTNMob.style.backgroundColor = 'var(--white-bg-color)';
//     dropdownContent.style.color = 'var(--white-bg-color)';
//     favoriteI.style.color = 'var(--white-bg-color)';
//     dropBTNMob.style.borderSolid = 'var(--orange-text-color)';
//     iconMenu.style.color = 'var(--white-bg-color)';
//     backdropMob.style.background = 'var(--black-bg-color)';
//     productTiteitle.style.color = 'var(--white-bg-color)';
//     // btnOrRemove.style.background = 'var(--black-bg-color)';
//     // paginatorItem.style.color = 'var(--white-bg-color)';
//     // favorTiteitle.style.color = 'var(--black-bg-color)';
//     // ligh.style.color = 'var(--white-bg-color)';
//     // blac.style.color = 'var(--orange-text-color)';
//     lightt.style.color = 'var(--white-bg-color)';
//     blackk.style.color = 'var(--orange-text-color)';
//     mobMenuItem.style.color = 'var(--white-bg-color)';
//   } else {
//     bodyMain.style.backgroundColor = 'var(--white-bg-color)';
//     imputHeader.style.backgroundColor = 'var(--white-bg-color)';
//     imputHeader.style.color = 'var(--black-bg-color)';
//     siteNavLink.style.color = 'var(--black-bg-color)';
//     dropBTN.style.color = 'var(--black-bg-color)';
//     dropBTNDesk.style.backgroundColor = 'var(--white-bg-color)';
//     dropBTNMob.style.backgroundColor = 'var(--white-bg-color)';
//     dropdownContent.style.color = 'var(--black-bg-color)';
//     favoriteI.style.color = 'var(--black-bg-color)';
//     dropBTNMob.style.borderSolid = 'var(--white-bg-color)';
//     iconMenu.style.color = 'var(--black-bg-color)';
//     backdropMob.style.background = 'var(--white-bg-color)';
//     productTiteitle.style.color = 'var(--black-bg-color)';
//     // btnOrRemove.style.background = 'var(--white-bg-color)';
//     // favorTiteitle.style.color = 'var(--white-bg-color)';
//     // paginatorItem.style.color = 'var(--black-bg-color)';
//     // ligh.style.color = 'var(--orange-text-color)';
//     // blac.style.color = 'var(--black-bg-color)';
//     lightt.style.color = 'var(--orange-text-color)';
//     blackk.style.color = 'var(--black-bg-color)';
//     mobMenuItem.style.color = 'var(--black-bg-color)';

