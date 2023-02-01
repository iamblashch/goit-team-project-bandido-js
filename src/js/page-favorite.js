const favoritBtnEl = document.querySelector('.link-add');
const listNewsEl = document.querySelector('.news-list');

const arrNewMarkup = [];

if (localStorage.getItem('markup-news-card')) {
  JSON.parse(localStorage.getItem('markup-news-card')).map(item => {
    arrNewMarkup.push(item);
  });
}

// checkFav()

function getCardNews(e) {
    const target = e.target.closest(".news-item");
    const targetBtn = e.target.closest('.link-add');
    console.log(target)
    const hrefVal = { href: e.target.parentNode.children[0].src }

    
    if (e.target.nodeName !== `BUTTON`) {
        return;
    }
    
    targetBtn.classList.toggle('add-to-fav');
    console.log(targetBtn)

    if (targetBtn.classList.contains('add-to-fav')) {
        targetBtn.textContent = 'Remove from favorite';

        arrNewMarkup.push({
            data: target.innerHTML,
            hrefVal,
        })

        targetBtn.disabled = true
        let arrJson = JSON.stringify(arrNewMarkup);


        localStorage.setItem("markup-news-card", arrJson)
    }
            
     if (!targetBtn.classList.contains('add-to-fav')) {
         targetBtn.textContent = 'Add to favorite';

        localStorage.removeItem('markup-news-card')

     }
}

// function checkFav(e) {
//     const section = e.target.closest(".section-news");
//     const newsList = section.firstElementChild.firstElementChild
//     // const hrefValue = document.images
//     // const loc = localStorage.getItem('markup-news-card')
//     // let pars = JSON.parse(loc)
//      console.log(newsList)
//     // hrefValue.map(i => {
//     //     console.log(i)
//     //     const index = pars.findIndex(item => {
//     //     return  item.hrefVal.href === hrefValue.href
//     //     })
//     // })

//     // console.log(index)
//     //     if (index > -1) {
//     //         targetBtn.classList.toggle('add-to-fav');
//     //     }
// }

listNewsEl.addEventListener("click", getCardNews);
//window.addEventListener('mousedown', checkFav)


