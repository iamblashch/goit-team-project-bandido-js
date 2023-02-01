const favoritBtnEl = document.querySelector('.link-add');
const listNewsEl = document.querySelector('.news-list');

const arrNewMarkup = [];

function getCardNews(e) {
    const target = e.target.closest(".news-item");
    const targetBtn = e.target.closest('.link-add');
    
    if (e.target.nodeName !== `BUTTON`) {
        return;
    }
    console.log(target)
    targetBtn.classList.toggle('add-to-fav');

    if (targetBtn.classList.contains('add-to-fav')) {
        arrNewMarkup.push(target.innerHTML)

        const getCard = localStorage.getItem("markup-news-card")
      
        

        arrNewMarkup.push(getCard)

        localStorage.setItem("markup-news-card", arrNewMarkup)
    } 
    }

document.addEventListener("click", getCardNews);


