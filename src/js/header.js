const searchFormEl = document.querySelector('.search-form');
const searchInputEl = document.querySelector('.search-input');
const searchBtnEl = document.querySelector('.search-button');

function hendleInput() {
    searchFormEl.style.cssText = 'position: relative;'
    searchInputEl.classList.toggle('visible')
    searchBtnEl.classList.toggle('btn-transform')
}

searchBtnEl.addEventListener('click', hendleInput)


// function showInput() {
//     searchInputEl.style.opacity = 1;
//     searchBtnEl.style.left = 0;
// }

// searchBtnEl.addEventListener('click', showInput);