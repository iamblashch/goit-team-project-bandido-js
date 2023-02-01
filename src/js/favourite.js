const listFavEl = document.querySelector('.news-list-fav');
console.log(listFavEl)


function createFavCardsMarkup() {
    
    const loc = localStorage.getItem('markup-news-card')
        console.log(loc)
    
    listFavEl.innerHTML = loc

}

// function clearFavCardsMarkup() {
//     listFavEl.insertAdjacentHTML('afterbegin', )
// }

createFavCardsMarkup();

function handleDelete(e) {
    if (e.target.nodeName !== `BUTTON`) {
        return;
    }
    const btnfav__fav = e.target;
    console.log(btnfav__fav)

    if (btnfav__fav.classList.contains('add-to-fav')) {

        localStorage.removeItem("markup-news-card")
        // clearFavCardsMarkup()

    } 

}

listFavEl.addEventListener('click', handleDelete)