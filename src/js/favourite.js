const listFavEl = document.querySelector('.news-list-fav');
const favBtnEl = document.querySelector('.link-add')

createFavCardsMarkup();

function createFavCardsMarkup() {
    
    const loc = localStorage.getItem('markup-news-card')
    let pars = JSON.parse(loc)
    console.log(typeof loc)
    console.log(pars)

    pars.map(item => {
        listFavEl.insertAdjacentHTML('beforeend', item.data)
    })
}

function clearFavCardsMarkup() {
        listFavEl.innerHTML = ''
}


function handleDelete(e) {
    if (e.target.nodeName !== `BUTTON`) {
        return;
    }
    const btnfav__fav = e.target;
    const hrefVal = { href: e.target.parentNode.children[0].src }
    const loc = localStorage.getItem('markup-news-card')
    let pars = JSON.parse(loc)
 
    const index = pars.findIndex(item => {
        return  item.hrefVal.href === hrefVal.href
    })

    console.log(index)
        if (index > -1) {
            pars.splice(index, 1)
            console.log(pars)
            localStorage.setItem('markup-news-card', JSON.stringify(pars))
        }
    clearFavCardsMarkup()
    createFavCardsMarkup()

}

listFavEl.addEventListener('click', handleDelete)