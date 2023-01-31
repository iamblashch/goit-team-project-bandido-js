import imgOps from '../img/main/img-ds.png';
import svg from '../img/symbol-defs.svg';

const searchFormEl = document.querySelector('.search-form');
const searchBtnEl = document.querySelector('.search-button')
const sectionNewsEl = document.querySelector('.section-news');
const sectionPaginationEl = document.querySelector('.pagination');

const API_KEY = 'B0nM5YVwVGPOQpaqXoXzd3AxL5Kpg75H';
let keyword = '';

function createMarkupIfEmpty() {
    const markup = `<h2 class="section-news__title">We haven’t found news from this category</h2><img src="${imgOps}" alt="Ooooops" class="news-section__img-if-empty"/>`
    sectionNewsEl.innerHTML = markup;
    sectionPaginationEl.innerHTML = '';
}

function catchResult() {
    try {
        if (data.multimedia.length === 0) {
            imageBase = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
        }
    } catch (error) {
        console.log(error)
    } finally {
        createMarkupByInput(data)
    }
}

function createMarkupByInput(array) {

    
    
    return array.map((data) => {
        let fromatedSubTitle = data.abstract.slice(0, 120) + `...`
      let formatedTitle = data.headline.main.slice(0, 60) + `...`
      let formattedDate = data.pub_date.toString().slice(0, 10);
        let replaceDat = formattedDate.replace(`-`, '/').replace(`-`, '/');

        let imageStart;
        let imageBase;

        if (data.multimedia.length > 0) {
            imageStart = 'https://static01.nyt.com/'
            imageBase = imageStart + data.multimedia[0].url;
        } else if (data.multimedia.length === 0) {
            imageBase = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
        }

        return `<li class="news-item">
    <div class="news-thumb">
      <img
        class="img-news"
        src="${imageBase}"
        alt="${data.byline}"
        width="395"
        height="395"
      />
      <p class="filter-descr">${data.section_name}</p>
      <a href="#" class="link-add"
        >Add to favorite
        <svg class="add-icon" width="16" heigth="16">
          <use href="${svg}#heart-filled"></use>
        </svg>
      </a>
    </div>
    <div class="desr">
      <h2 class="title">
        ${data.headline.main}
      </h2>
      <p class="subtitle">
        ${data.abstract}
      </p>
      <div class="other-line">
        <p class="date">${replaceDat}</p>
        <p target="_blank" rel="noopener noreferrer" class="hyperlink"><a href="${data.web_url}">Read more</a></p>
      </div>
    </div>
  </li>`
    }).join('')


    
}

function appendMarkup(array) {
    const markUp = createMarkupByInput(array)

    sectionNewsEl.innerHTML = markUp;
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
    console.log(keyword)

    makeFetch(keyword)
        .then(data => {
            console.log(data)
            if (keyword === '') {
                return
            }
            else if (data.response.docs.length === 0) {
                return createMarkupIfEmpty()
            }
            appendMarkup(data.response.docs);
        })
        .catch(error => {
            createMarkupIfEmpty()
            console.log(error)
        })
}

searchFormEl.addEventListener('submit', handleSearchInput)