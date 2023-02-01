
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
const weather = document.querySelector('.weather-box')

let allPageNumber = 1;
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
      <button class="link-add"
        >Add to favorite
        <svg class="add-icon" width="16" heigth="16">
          <use href="${svg}#heart-filled"></use>
        </svg>
      </button>
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
  
  // sectionCard.insertAdjacentHTML('afterbegin', weather());

  sectionCard.insertAdjacentHTML('afterbegin', weather.innerHTML);
  // setTimeout(() => {
  // }, 10);
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
let numberAllPage = allPageNumber

  for (let index = 0; index < numberAllPage; index++) {
    if (numberAllPage <= 5) {
      murkupPagination = `<li><a class="pagination-link btn${numberPagePagination}" data${numberPagePagination}>${numberPagePagination}</a></li>`
      numberPagePagination += 1
      pagList.innerHTML += murkupPagination;
    } 
  }
  if (numberAllPage > 6) {
    murkupPagination = `
     <li><a class="pagination-link btn1" data1>1</a></li>
     <div class="ellipsis"></div>
     <li><a class="pagination-link btn2" data2>2</a></li>
     <li><a class="pagination-link btn3" data3>3</a></li>
     <li><a class="pagination-link btn4" data4>4</a></li>
     <li><a class="pagination-link btn5" data5>5</a></li>
     <div class="pagination-ellipsis_item2"><span class="pagination-ellipsis_last">&hellip;</span></div>
     <li><a class="pagination-link btnLast" data5>${numberAllPage}</a></li>`
    pagList.innerHTML = murkupPagination;
  } 
  btn1 = document.querySelector(`.btn1`)
  btn1.classList.add(`is-current`)


}


let indicator = false;
let currentElem;
let numberAtribute = 1;
let ellipsis;
let ellipsisAdd = `<span class="pagination-ellipsis_last">&hellip;</span>`
nextPage.addEventListener(`click`, () => {


  currentElem = document.querySelector(`.is-current`)

  previous.disabled = false
  numberAtribute += 1;
  if (Number(currentElem.textContent) < 5) {
    let currentAtribute = document.querySelector(`[data${numberAtribute}]`)
    currentElem.classList.remove(`is-current`)
    currentAtribute.classList.add(`is-current`)
    currentElem = document.querySelector(`.is-current`)
  } else {
    let btn2 = document.querySelector(`.btn2`);
    let btn3 = document.querySelector(`.btn3`);
    let btn4 = document.querySelector(`.btn4`);
    let btn5 = document.querySelector(`.btn5`);
    btn2.textContent = (Number(btn2.textContent) + 1)
    btn3.textContent = (Number(btn3.textContent) + 1)
    btn4.textContent = (Number(btn4.textContent) + 1)
    btn5.textContent = (Number(btn5.textContent) + 1)
  }

  if (Number(currentElem.textContent) >= 6) {
    ellipsis = document.querySelector(`.ellipsis`)
    ellipsis.innerHTML = ellipsisAdd
  }


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
 let lastBtn = document.querySelector(`.btnLast`)
  currentElem = document.querySelector(`.is-current`)
  let btn2Prev = document.querySelector(`.btn2`);
  numberAtribute -= 1;
  nextPage.disabled = false
  if (Number(currentElem.textContent) <= 5) {
    let currentAtribute = document.querySelector(`[data${numberAtribute}]`)
    currentElem.classList.remove(`is-current`)
    currentAtribute.classList.add(`is-current`)
    currentElem = document.querySelector(`.is-current`)
  }else {
    let btn1Prev = document.querySelector(`.btn1`);
    let btn2Prev = document.querySelector(`.btn2`);
    let btn3Prev = document.querySelector(`.btn3`);
    let btn4Prev = document.querySelector(`.btn4`);
    let btn5Prev = document.querySelector(`.btn5`);
    btn2Prev.textContent = (Number(btn2Prev.textContent) - 1)
    btn3Prev.textContent = (Number(btn3Prev.textContent) - 1)
    btn4Prev.textContent = (Number(btn4Prev.textContent) - 1)
    btn5Prev.textContent = (Number(btn5Prev.textContent) - 1)
  }
  currentElem = document.querySelector(`.is-current`)
  if (Number(currentElem.textContent) < 6 && ellipsis) {
    ellipsis.innerHTML = ``
  }

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
    makeFetchByCategory(categorySearch)
    .then(news => {
      CreatCardNewsCategory(news)
      console.log(news)
    })
  }
 

window.scrollTo({
      top: 0,
      behavior: "smooth",
      duration: 2000
 });
})


// ***************
pagList.addEventListener(`click`, (e) => {
  let btn1 = document.querySelector(`.btn1`);
  let btn2 = document.querySelector(`.btn2`);
  let btn3 = document.querySelector(`.btn3`);
  let btn4 = document.querySelector(`.btn4`);
  let btn5 = document.querySelector(`.btn5`);
  let lastBtn = document.querySelector(`.btnLast`)


if (e.target.nodeName !== `A`) {
  return 
  }
  if (indicator) {
    numberPageAPI = e.target.textContent
    makeFetchByCategory(categorySearch)
      .then(news => {
        CreatCardNewsCategory(news)
        console.log(news)
      })
  currentElem = document.querySelector(`.is-current`)
  currentElem.classList.remove(`is-current`)
    e.target.classList.add(`is-current`)
    currentElem = document.querySelector(`.is-current`)
    
    if (Number(currentElem.textContent) < 6 && ellipsis) {
      const ellipsisLast = document.querySelector(`.pagination-ellipsis_item2`)
      ellipsisLast.classList.remove(`is-hidden`)
      ellipsis.innerHTML = ``
    } else if (e.target.textContent > 6) {
      ellipsis = document.querySelector(`.ellipsis`)
      ellipsis.innerHTML = ellipsisAdd
      const ellipsisLast = document.querySelector(`.pagination-ellipsis_item2`)
      ellipsisLast.classList.add(`is-hidden`)
    }
    if (e.target.textContent === lastBtn.textContent) {
      console.log(`err`)
      btn2.textContent = (Number(lastBtn.textContent) -4)
      btn3.textContent = (Number(lastBtn.textContent) -3)
      btn4.textContent = (Number(lastBtn.textContent) -2)
      btn5.textContent = (Number(lastBtn.textContent) - 1)
      previous.disabled = false
      nextPage.disabled = true
    }
     if (e.target.textContent === btn1.textContent) {
      btn2.textContent = (Number(btn1.textContent) +1)
      btn3.textContent = (Number(btn1.textContent) +2)
      btn4.textContent = (Number(btn1.textContent) +3)
      btn5.textContent = (Number(btn1.textContent) +4)
       previous.disabled = true
       nextPage.disabled = false
    }
 if (e.target !== lastBtn) {
    nextPage.disabled = false
  }
    
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      duration: 2000
 });
  }
  
})





// function weather() {
//   return `<div class="weather">
//   <div class="weather-container">
//     <div class="weather-and-location">
//       <div class="degrees">20&deg;</div>
//       <div class="location-box">
//         <p class="sky">Sunny</p>
//         <p class="current-city">
//           <svg class="current-city__icon-location">
//             <use href="${svg}#location"></use></svg
//           >Jakarta
//         </p>
//       </div>
//     </div>
//     <div>
//       <img
//         class="weatheh-image"
//         src="https://openweathermap.org/img/wn/04n@4x.png"
//         alt=""
//       />
//     </div>
//     <p class="current-data"></p>
//     <a
//       class="weather-for-week"
//       target="_blank"
//       href="https://openweathermap.org/city/689487"
//       >weather for week</a
//     >
//   </div>
// </div>`;
// }

let numberPageAPI = 0;
function makeFetchByCategory(categorySearch) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${categorySearch}&page=${numberPageAPI}&api-key=${API_KEY}`
      )
      .then(response => {

        if (Math.ceil(response.data.response.meta.hits / 8) < 20) {
          allPageNumber = Math.ceil(response.data.response.meta.hits / 8)
        }else {allPageNumber = 20}
        resolve(response.data.response.docs);
      })
      .catch(error => {
        reject(error);
      });
  });
}
let categorySearch;
filterBTN.addEventListener(`click`, (e) => {
  nextPage.disabled = false
  numberAtribute = 1;
  numberPageAPI = 0
if (e.target.nodeName !== `BUTTON`) {
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


function CreatCardNewsCategory(news) {

  order = 1;


  const markupArray = news.map(news => {
    try {
      if (news.multimedia.length > 0) {
            imageStart = 'https://static01.nyt.com/'
            imageBase = imageStart + news.multimedia[0].url;
        } else if (news.multimedia.length === 0) {
            imageBase = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
      }
      
      order += 1
      let fromatedSubTitle = news.abstract.slice(0, 120) + `...`
      let formatedTitle = news.headline.main.slice(0, 60) + `...`
      let formattedDate = news.pub_date.toString().slice(0, 10);
      let replaceDat = formattedDate.replace(`-`, '/').replace(`-`, '/');
      return `<li class="news-item" style="order: ${order}">
    <div class="news-thumb">
      <img
        class="img-news"
        src="${imageBase}"
        alt="${news.multimedia[0].crop_name}"
        width="395"
        height="395"
      />
      <p class="filter-descr">${news.section_name}</p>
      <button class="link-add"
        >Add to favorite
        <svg class="add-icon" width="16" heigth="16">
          <use href="${svg}#heart-filled"></use>
        </svg>
      </button>
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
  });

  
  sectionCard.innerHTML = markupArray.join('');
  setTimeout(() => {
    sectionCard.insertAdjacentHTML('afterbegin', weather.innerHTML);
  }, 10);

  if (stopPaginationRender === false) {
    setTimeout(() => {
      creatElmNumber()
    }, 500);
    stopPaginationRender = true
  }

}



