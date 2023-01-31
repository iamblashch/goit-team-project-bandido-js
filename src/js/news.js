import axios from 'axios';
import svg from '../img/symbol-defs.svg';

let nameSearchAPI = `books`;
let dateSearchAPI = ``;

const API_KEY = `4EuZ2Hj9i1pqPAZzcwt4BhqZhGGltjTa`;


const sectionCard = document.querySelector(`.news-list`);
const ListenerNumberPage = document.querySelector(`.pagination`);
const nextPageNews = document.querySelector(`.pagination-next`);
const previousNews = document.querySelector(`.pagination-previous`);
const filterBTN = document.querySelector(`.filter-section__container`)


let allPageNumber = 1;
// const API_KEY = 'f51f6849c635478e87bd30b1e8556022';
// const API_KEY = `95e98d9273f444ce9e18ab841a2d5917`
// const API_KEY = `06f0deb6172640a49513727c765522c5`
// const API_KEY = `ef883f39deda4d31b974aca841c64d64`
// const API_KEY = `95e98d9273f444ce9e18ab841a2d5917`;
const lastBtn = document.querySelector(`.last-btn`);
const sectionCard = document.querySelector(`.news-list`);
const ListenerNumberPage = document.querySelector(`.pagination`);
const filterButton = document.querySelector(`.filter__list`);

const fourBtnx2 = document
  .querySelector(`.four-btn`)
  .classList.add(`hidden-elm`);
const lastBtnx2 = document
  .querySelector(`.last-btn`)
  .classList.add(`hidden-elm`);
const ellipsisSecondx2 = document
  .querySelector(`.pagination-ellipsis_item2`)
  .classList.add(`hidden-elm`);
const nextPagex2 = document.querySelector(`.pagination-next`);
let page = 0;

// const numberPageApi = (lastBtn.textContent = 12);

// // function newsAPI() {
// //   return new Promise((resolve, reject) => {
// //     axios.get(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${API_KEY}`)
// //       .then(response => {
// //         resolve(response.data.results);
// //       })
// //       .catch(error => {
// //         reject(error);
// //       });
// //   });
// // }
function newsAPI() {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=${API_KEY}`
      )
      .then(response => {
        resolve(response.data.results);
      })
      .catch(error => {
        reject(error);
      });
  });
}


filterBTN.addEventListener(`click`, (e) => {
if (e.target.nodeName !== `BUTTON`) {
  return 
  }
  

})


let newsCounter = 0;
newsAPI()
  .then(news => {
    CreatCardNews(news);

  })
  .catch(err => {
    console.log(err);
  });


let order = 1;
function CreatCardNews(news) {
  order = 1;
  allPageNumber = Math.ceil(news.length / 8)
  const markupArray = news.slice(newsCounter, newsCounter + 8).map(news => {
    order += 1
    let mediaURL = "https://amsrus.ru/wp-content/uploads/2016/02/Mercedes-Benz-C63-AMG-Black-Series-1.jpg";
    if (news.media && news.media[0] && news.media[0]["media-metadata"] && news.media[0]["media-metadata"][2]) {
      mediaURL = news.media[0]["media-metadata"][2].url;
    }
    let fromatedSubTitle = news.abstract.slice(0,120)+`...`
    let formatedTitle = news.title.slice(0,60)+`...`
    let formattedDate = news.published_date.toString().slice(0,10);
    let mediaURL =
      'https://amsrus.ru/wp-content/uploads/2016/02/Mercedes-Benz-C63-AMG-Black-Series-1.jpg';
    if (
      news.media &&
      news.media[0] &&
      news.media[0]['media-metadata'] &&
      news.media[0]['media-metadata'][2]
    ) {
      mediaURL = news.media[0]['media-metadata'][2].url;
    }
    let formattedDate = news.published_date.toString().slice(0, 10);
    let replaceDat = formattedDate.replace(`-`, '/').replace(`-`, '/');
    return `<li class="news-item" style="order: ${order}">
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
        ${formatedTitle}
      </h2>
      <p class="subtitle">
        ${fromatedSubTitle}
      </p>
      <div class="other-line">
        <p class="date">${replaceDat}</p>
        <p class="hyperlink"><a href="${news.url}">Read more</a></p>
      </div>
    </div>
  </li>`;
  });
  sectionCard.innerHTML = markupArray.join('');
  setTimeout(() => {
    sectionCard.insertAdjacentHTML('afterbegin', weather());
  }, 10);
  sectionCard.insertAdjacentHTML('beforeend', markupArray.join(''));
  sectionCard.insertAdjacentHTML('afterbegin', weather());
}
setTimeout(() => {
  creatElmNumber()
}, 1000);



function clearCard() {
  sectionCard.innerHTML = ``;
}



const paginationList = document.querySelector(`.pagination`);
const nextPage = document.querySelector(`.pagination-next`);
const previous = document.querySelector(`.pagination-previous`);
const firstBtn = document.querySelector(`.first-btn`);
const pagList = document.querySelector(`.pagination-list`)

let btn1;
let numberPagePagination = 1;
let murkupPagination
function creatElmNumber() {
  let numberAllPage = allPageNumber;
  for (let index = 0; index < numberAllPage; index++) {
    if (numberAllPage <= 4) {
      murkupPagination = `<li><a class="pagination-link btn${numberPagePagination}" data${numberPagePagination}>${numberPagePagination}</a></li>`
      numberPagePagination += 1
      pagList.innerHTML += murkupPagination;
    } 
  }
  if (numberAllPage > 4) {
    murkupPagination = `
    <li><a class="pagination-link btn1" data1>1</a></li>
     <li><a class="pagination-link btn2" data2>2</a></li>
     <li><a class="pagination-link btn3" data3>3</a></li>
     <li><a class="pagination-link btn4" data4>4</a></li>
     <li><a class="pagination-link btn5" data5>5</a></li>
     <div class="pagination-ellipsis_item2"><span class="pagination-ellipsis_last">&hellip;</span></div>
   
     <li><a class="pagination-link btn" data5>20</a></li>`
    pagList.innerHTML = murkupPagination;
  } 
  btn1 = document.querySelector(`.btn1`)
  btn1.classList.add(`is-current`)
}


let indicator = false;
let currentElem;
let numberAtribute = 1;
nextPage.addEventListener(`click`, () => {

  previous.disabled = false

  numberAtribute += 1;
  currentElem = document.querySelector(`.is-current`)
  let currentAtribute = document.querySelector(`[data${numberAtribute}]`)
  currentElem.classList.remove(`is-current`)
  currentAtribute.classList.add(`is-current`)
  currentElem = document.querySelector(`.is-current`)

  if (!indicator) {
    newsCounter += 8
    newsAPI()
      .then(news => {
        CreatCardNews(news);
      })
  }
  if (indicator) {
    numberPageAPI += 1
     makeFetchByCategory(categorySearch)
    .then(news => {
      CreatCardNewsCategory(news)
      console.log(news)
 
      }) }

    
    window.scrollTo({
  top: 0,
  behavior: "smooth",
  duration: 2000
});
  setTimeout(() => {
    if (pagList.lastChild.firstElementChild.classList.contains(`is-current`)) {
    nextPage.disabled = true
  }
  }, 1000);

})

previous.addEventListener(`click`, () => {

numberAtribute -= 1;
nextPage.disabled = false
  currentElem = document.querySelector(`.is-current`)
  let currentAtribute = document.querySelector(`[data${numberAtribute}]`)
  currentElem.classList.remove(`is-current`)
  currentAtribute.classList.add(`is-current`)

  currentElem = document.querySelector(`.is-current`)
  if (currentElem.textContent === `1`) {
    previous.disabled = true
  }
  if (!indicator) {
    newsCounter -= 8
    newsAPI()
      .then(news => {
        CreatCardNews(news);
      });
  }
  if (indicator) {
    numberPageAPI -= 1
    makeFetchByCategory(news)
      .then(news => {
      CreatCardNewsCategory(news);
      }) }
 
window.scrollTo({
      top: 0,
      behavior: "smooth",
      duration: 2000
 });
})



function weather() {
  return `<div class="weather">
  <div class="weather-container">
    <div class="weather-and-location">
      <div class="degrees">20&deg;</div>
      <div class="location-box">
        <p class="sky">Sunny</p>
        <p class="current-city">
          <svg class="current-city__icon-location">
            <use href="./img/symbol-defs.svg#location"></use></svg
          >Jakarta
        </p>
      </div>
    </div>
    <div>
      <img
        class="weatheh-image"
        src="https://openweathermap.org/img/wn/04n@4x.png"
        alt=""
      />
    </div>
    <p class="current-data"></p>
    <a
      class="weather-for-week"
      target="_blank"
      href="https://openweathermap.org/city/689487"
      >weather for week</a
    >
  </div>
</div>`;
}

let numberPageAPI = 0;
function makeFetchByCategory(categorySearch) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${categorySearch}&page=${numberPageAPI}&api-key=${API_KEY}`
      )
      .then(response => {
        resolve(response.data.response.docs);
      })
      .catch(error => {
        reject(error);
      });
  });
}
let categorySearch;
filterBTN.addEventListener(`click`, (e) => {
  numberAtribute = 1;
  numberPageAPI = 0
if (e.target.nodeName !== `A`) {
  return 
  }
  stopPaginationRender = false
  newsCounter = 0
  categorySearch = e.target.textContent;

  indicator = true
  sectionCard.innerHTML = ``
  pagList.innerHTML = ``
  numberPagePagination = 1;

  makeFetchByCategory(categorySearch)
    .then(news => {
      CreatCardNewsCategory(news)
      console.log(news)
    })
})
let stopPaginationRender = false;
let newsCounterFilter = 0;

function CreatCardNewsCategory(news) {
  console.log(news)
  order = 1;
  allPageNumber = 5

  const markupArray = news.map(news => {
    try {
      order += 1
      let fromatedSubTitle = news.abstract.slice(0, 120) + `...`
      let formatedTitle = news.headline.main.slice(0, 60) + `...`
      let formattedDate = news.pub_date.toString().slice(0, 10);
      let replaceDat = formattedDate.replace(`-`, '/').replace(`-`, '/');
      return `<li class="news-item" style="order: ${order}">
    <div class="news-thumb">
      <img
        class="img-news"
        src="https://static01.nyt.com/${news.multimedia[0].url}"
        alt="${news.multimedia[0].crop_name}"
        width="395"
        height="395"
      />
      <p class="filter-descr">${news.section_name}</p>
      <a href="#" class="link-add"
        >Add to favorite
        <svg class="add-icon" width="16" heigth="16">
          <use href="${svg}#heart-filled"></use>
        </svg>
      </a>
    </div>
    <div class="desr">
      <h2 class="title">
        ${formatedTitle}
      </h2>
      <p class="subtitle">
        ${fromatedSubTitle}
      </p>
      <div class="other-line">
        <p class="date">${replaceDat}</p>
        <p class="hyperlink"><a href="${news.url}">Read more</a></p>
      </div>
    </div>
  </li>`} catch (err) { console.log(err) }
  })
;

  
  sectionCard.innerHTML = markupArray.join('');
  setTimeout(() => {
    sectionCard.insertAdjacentHTML('afterbegin', weather());
  }, 10);
=======
// ListenerNumberPage.addEventListener(`click`, e => {
//   let currentElemNumber = document.querySelector(`.is-current`);

//   if (currentElemNumber.textContent === `1`) {
//     const ellipsisSecondx2 = document
//       .querySelector(`.pagination-ellipsis_item2`)
//       .classList.add(`hidden-elm`);
//     newsCounter = 0;
//     newsAPI().then(news => {
//       CreatCardNews(news);
//     });
//   } else if (currentElemNumber.textContent === `2`) {
//     const ellipsisSecondx2 = document
//       .querySelector(`.pagination-ellipsis_item2`)
//       .classList.add(`hidden-elm`);
//     newsCounter = 8;
//     newsAPI().then(news => {
//       CreatCardNews(news);
//     });
//   } else if (currentElemNumber.textContent === `3`) {
//     const ellipsisSecondx2 = document.querySelector(`.pagination-ellipsis_item2`).classList.add(`hidden-elm`);
//     nextPagex2.disabled = true
//   newsCounter = 16;
//      newsAPI()
//     .then(news => {
//     CreatCardNews(news);
//   })
//   }
// });

// // function CreatCardNews(news) {
// //   const markupArray = news.map(news => {
// //     let words = news.content.split(' ');
// //     if (words.length > 30) {
// //       let shordDesc = words.slice(0, 30).join(' ') + '...';

// //       let formattedDate = news.publishedAt.toString().slice(0, 10);
// //       let replaceDat = formattedDate.replace(`-`, '/').replace(`-`, '/');
// //       return `<li class="news-item">
// //           <div class="news-thumb">
// //             <img
// //               class="img-news"
// //               src="${news.urlToImage}"
// //               alt="${news.description}"
// //               width="395"
// //               height="395"
// //             />
// //             <p class="filter-descr">${nameSearchAPI}</p>
// //             <a href="#" class="link-add"
// //               >Add to favorite
// //               <svg class="add-icon" width="16" heigth="16">
// //                 <use href="${svg}#heart-filled"></use>
// //               </svg>
// //             </a>
// //           </div>
// //           <div class="desr">
// //             <h2 class="title">
// //               ${news.title}
// //             </h2>
// //             <p class="subtitle">
// //               ${shordDesc}
// //             </p>
// //             <div class="other-line">
// //               <p class="date">${replaceDat}</p>
// //               <p class="hyperlink"><a href="${news.url}">Read more</a></p>
// //             </div>
// //           </div>
// //         </li>`;
// //     }
// //   });
// //   sectionCard.insertAdjacentHTML('beforeend', markupArray.join(''));
// //   sectionCard.insertAdjacentHTML('afterbegin', weather());

// // }

// // currentTurgetPage;
// // ListenerNumberPage.addEventListener(`click`, e => {
// //   console.log(numberPage);
// //   if (currentTurgetPage.textContent === e.target.textContent) {
// //     return;
// //   }
//   // if (e.target.nodeName !== `A` || e.target.nodeName !== `BUTTON`) {
//   //     return
//   // }

// //   newsAPI()
// //     .then(news => {
// //       CreatCardNews(news.data.articles);
// //       console.log(news);
// //     })
// //     .catch(err => console.log(err));
// // });

  if (stopPaginationRender === false) {
    setTimeout(() => {
      creatElmNumber()
    }, 500);
    stopPaginationRender = true
  }

}


  nameSearchAPI = e.target.textContent.trim();
  console.log(nameSearchAPI);

  clearCard();
  newsAPI()
    .then(news => {
      CreatCardNews(news.data.articles);
      console.log(news);
    })
    .catch(err => console.log(err));
});

// // filterButton.addEventListener(`click`, e => {
// //   if (e.target.nodeName !== `A`) {
// //     return;
// //   }
// //   nameSearchAPI = e.target.textContent.trim();
// //   console.log(nameSearchAPI);

//   // clearCard()
//   //     newsAPI()
//   // .then(news => {
//   //   CreatCardNews(news.data.articles);
//   //   console.log(news);
//   // })
//   // .catch(err => console.log(err))
// // });

// function clearCard() {
//   sectionCard.innerHTML = ``;
// }


// sectionCard.insertAdjacentHTML('beforeend', markupArray.join(''));
// sectionCard.insertAdjacentHTML('afterbegin', weather());
