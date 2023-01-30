import { numberPage, currentTurgetPage } from './pagination';
import axios from 'axios';
import svg from '../img/symbol-defs.svg';

let nameSearchAPI = `books`;
let dateSearchAPI = ``;

const API_KEY = `4EuZ2Hj9i1pqPAZzcwt4BhqZhGGltjTa`;

const lastBtn = document.querySelector(`.last-btn`);
const sectionCard = document.querySelector(`.news-list`);
const ListenerNumberPage = document.querySelector(`.pagination`);
const filterButton = document.querySelector(`.filter__list`);

const fourBtnx2 = document.querySelector(`.four-btn`).classList.add(`hidden-elm`);
const lastBtnx2 = document.querySelector(`.last-btn`).classList.add(`hidden-elm`);
const ellipsisSecondx2 = document.querySelector(`.pagination-ellipsis_item2`).classList.add(`hidden-elm`);
const nextPagex2 = document.querySelector(`.pagination-next`);
let page = 0;

const numberPageApi = (lastBtn.textContent = 12);

// function newsAPI() {
//   return new Promise((resolve, reject) => {
//     axios.get(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${API_KEY}`)
//       .then(response => {
//         resolve(response.data.results);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// }
function newsAPI() {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=${API_KEY}`
      )
      .then(response => {
        resolve(response.data.results);
        console.log(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}
let newsCounter = 0;
newsAPI()
  .then(news => {

    CreatCardNews(news);
  })
  .catch(err => {
    console.log(err);
  });



function CreatCardNews(news) {
  const markupArray = news.slice(newsCounter, newsCounter + 8).map(news => {
    let mediaURL = "https://amsrus.ru/wp-content/uploads/2016/02/Mercedes-Benz-C63-AMG-Black-Series-1.jpg";
    if (news.media && news.media[0] && news.media[0]["media-metadata"] && news.media[0]["media-metadata"][2]) {
      mediaURL = news.media[0]["media-metadata"][2].url;
    }
    let formattedDate = news.published_date.toString().slice(0,10);
    let replaceDat = formattedDate.replace(`-`, '/').replace(`-`, '/');
    return `<li class="news-item">
    <div class="news-thumb">
      <img
        class="img-news"
        src="${mediaURL}"
        alt="${news.byline}"
        width="395"
        height="395"
      />
      <p class="filter-descr">${news.section}</p>
      <a href="#" class="link-add"
        >Add to favorite
        <svg class="add-icon" width="16" heigth="16">
          <use href="${svg}#heart-filled"></use>
        </svg>
      </a>
    </div>
    <div class="desr">
      <h2 class="title">
        ${news.title}
      </h2>
      <p class="subtitle">
        ${news.abstract}
      </p>
      <div class="other-line">
        <p class="date">${replaceDat}</p>
        <p class="hyperlink"><a href="${news.url}">Read more</a></p>
      </div>
    </div>
  </li>`;
  });
  sectionCard.innerHTML = markupArray.join('');
}



ListenerNumberPage.addEventListener(`click`, e => {
  let currentElemNumber = document.querySelector(`.is-current`)
  
  if (currentElemNumber.textContent === `1`) {
    const ellipsisSecondx2 = document.querySelector(`.pagination-ellipsis_item2`).classList.add(`hidden-elm`);
    newsCounter = 0;
  newsAPI()
    .then(news => {
    CreatCardNews(news);
  })
  } else if (currentElemNumber.textContent === `2`) {
    const ellipsisSecondx2 = document.querySelector(`.pagination-ellipsis_item2`).classList.add(`hidden-elm`);
    newsCounter = 8;
     newsAPI()
    .then(news => {
    CreatCardNews(news);
  })
  } else if (currentElemNumber.textContent === `3`) {
    const ellipsisSecondx2 = document.querySelector(`.pagination-ellipsis_item2`).classList.add(`hidden-elm`);
    nextPagex2.disabled = true
  newsCounter = 16;
     newsAPI()
    .then(news => {
    CreatCardNews(news);
  })
  }
});


filterButton.addEventListener(`click`, e => {
  if (e.target.nodeName !== `A`) {
    return;
  }
  nameSearchAPI = e.target.textContent.trim();
  console.log(nameSearchAPI);

  // clearCard()
  //     newsAPI()
  // .then(news => {
  //   CreatCardNews(news.data.articles);
  //   console.log(news);
  // })
  // .catch(err => console.log(err))
});

function clearCard() {
  sectionCard.innerHTML = ``;
}
