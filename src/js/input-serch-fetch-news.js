import imgOps from '../img/main/img-ds.png';

const searchFormEl = document.querySelector('.search-form');
const searchBtnEl = document.querySelector('.search-button')
const sectionNewsEl = document.querySelector('.section-news');
const sectionPaginationEl = document.querySelector('.pagination');

const API_KEY = 'B0nM5YVwVGPOQpaqXoXzd3AxL5Kpg75H';
let keyword = '';

function createMarkup() {
    const markup = `<h2 class="section-news__title">We haven’t found news from this category</h2><img src="${imgOps}" alt="Ooooops" class="news-section__img-if-empty"/>`
    sectionNewsEl.innerHTML = markup;
    sectionPaginationEl.innerHTML = '';
}

function makeFetch(keyword) {
    return fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=${API_KEY}`)
        .then(response => {
            if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json()})
}

function handleSearchInput(event) {
    event.preventDefault();
    keyword = event.currentTarget.elements.searchQuery.value;
}

function makeFetchBySearchValue() {
    makeFetch(keyword)
        .then(data => {
            if (data.response.docs.length === 0 || keyword.trim().length === 0) {
                createMarkup()
            }
            // ТУТ НУЖНО ВСТАВИТЬ ФУНКЦИЮ КОТОРАЯ БУДЕТ ОТРИСОВИВАТЬ РАЗМЕТКУ ПРИ ПОЗИТИВНОЙ ОТРАБОТКЕ ЗАПРОСА
            console.log(data)
        })
        .catch(error => console.log(error))
}

searchFormEl.addEventListener('click', handleSearchInput)

searchBtnEl.addEventListener('click', makeFetchBySearchValue)