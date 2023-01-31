import axios from 'axios';

const API_KEY_NYT = 'uWCgMUrBBTLVIAv2yDHwKfGZbI4b2q7L';

const filterList = document.querySelector('.filter-list-js')
const categoriesDropdownList = document.querySelector('.categories-dropdown-list-js')
const othersDropdownList = document.querySelector('.others-dropdown-list-js')


async function getCategoryList() {
    const response = await axios(`https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY_NYT}`);
    
    const markupFilterList = response.data.results.map((arr, index) => {
        if (index < 6) {
            return `<li class="filter__item">
        <button class="filter__btn js-theme-change">
          ${arr.display_name}
        </button>
      </li>`
        }
    }).join('');
    filterList.innerHTML = markupFilterList;

    const markupOthers = response.data.results.map((arr, index) => {
         if (index > 5) {
           return `<li class="dropdown__item">
            <button class="dropdown__category-btn">${arr.display_name}</button>
          </li>`
        }
    }).join('')
    othersDropdownList.innerHTML = markupOthers;

    const markupCategories = response.data.results.map(arr => `<li class="dropdown__item">
                            <button class="dropdown__category-btn">${arr.display_name}</button>
                        </li>`).join('');
    categoriesDropdownList.innerHTML = markupCategories;
}
getCategoryList();

// grtCategoryList()
// https://api.nytimes.com/svc/news/v3/content/section-list.json

// https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json
// console.log(document.documentElement.clientWidth);
// console.log(innerWidth);
// window.addEventListener('resize', changeSizeWindow);

// function changeSizeWindow(e) {
//     console.log(e.currentTarget.innerWidth);
// }