import { numberPage, currentTurgetPage } from './pagination';
import axios from 'axios';

let nameSearchAPI = `books`;
let dateSearchAPI = ``

// const API_KEY = 'f51f6849c635478e87bd30b1e8556022';
// const API_KEY = `95e98d9273f444ce9e18ab841a2d5917`
// const API_KEY = `06f0deb6172640a49513727c765522c5`
// const API_KEY = `ef883f39deda4d31b974aca841c64d64`
const API_KEY = `52d268786081454ea8f67dd976d67718`;
const lastBtn = document.querySelector(`.last-btn`);
const sectionCard = document.querySelector(`.news-list`);
const ListenerNumberPage = document.querySelector(`.pagination`);
const filterButton = document.querySelector(`.filter__list`)


const numberPageApi = (lastBtn.textContent = 12);

function newsAPI() {
      return new Promise((resolve, reject) => {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${nameSearchAPI}&from=${dateSearchAPI}&to=${dateSearchAPI}&sortBy=popularity&pageSize=8&page=${numberPage}&apiKey=${API_KEY}`
        )
        .then(response => {
          resolve(response);
          reject(new Error('err'));
        });
    });
  }

  newsAPI()
    .then(news => {
      CreatCardNews(news.data.articles);
    })
      .catch(err => {
          console.log(err)
      });

  function CreatCardNews(news) {
    const markupArray = news.map(news => {
      let words = news.content.split(' ');
      if (words.length > 30) {
          let shordDesc = words.slice(0, 30).join(' ') + '...';

          let formattedDate = news.publishedAt.toString().slice(0,10);
          let replaceDat = formattedDate.replace(`-`, '/').replace(`-`, '/');
          return `<li class="news-item">
          <div class="news-thumb">
            <img
              class="img-news"
              src="${news.urlToImage}"
              alt="${news.description}"
              width="395"
              height="395"
            />
            <p class="filter-descr">${nameSearchAPI}</p>
            <a href="#" class="link-add"
              >Add to favorite
              <svg class="add-icon" width="16" heigth="16">
                <use href="./img/symbol-defs.svg#heart-filled"></use>
              </svg>
            </a>
          </div>
          <div class="desr">
            <h2 class="title">
              ${news.title}
            </h2>
            <p class="subtitle">
              ${shordDesc}
            </p>
            <div class="other-line">
              <p class="date">${replaceDat}</p>
              <p class="hyperlink"><a href="${news.url}">Read more</a></p>
            </div>
          </div>
        </li>`;
      }
    });
    sectionCard.innerHTML = markupArray.join('');
  }

currentTurgetPage
ListenerNumberPage.addEventListener(`click`, (e) => {
      console.log(numberPage)
    if (currentTurgetPage.textContent === e.target.textContent) {
      return
    }
    // if (e.target.nodeName !== `A` || e.target.nodeName !== `BUTTON`) {
    //     return
    // }

    newsAPI()
    .then(news => {
      CreatCardNews(news.data.articles);
      console.log(news);
    })
    .catch(err => console.log(err))  

    }); 




filterButton.addEventListener(`click`, (e) => {
    if (e.target.nodeName !== `A`) {
        return 
    }
    nameSearchAPI = e.target.textContent.trim()
    console.log(nameSearchAPI)

    clearCard()
        newsAPI()
    .then(news => {
      CreatCardNews(news.data.articles);
      console.log(news);
    })
    .catch(err => console.log(err))
})


function clearCard() {
    sectionCard.innerHTML = ``
}