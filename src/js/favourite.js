import imgOps from '../img/main/img-ds.png';

const listFavEl = document.querySelector('.news-list-fav');
const favBtnEl = document.querySelector('.link-add');

createFavCardsMarkup();

function createFavCardsMarkup() {
    if (!localStorage.getItem('markup-news-card')) {
    return (listFavEl.innerHTML = `<h2 class="section-news__title">This page is empty yet</h2><img src="${imgOps}" alt="Ooooops" class="news-section__img-if-empty"/>`);
  }
    
    const loc = localStorage.getItem('markup-news-card')
    let pars = JSON.parse(loc)

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

        if (index > -1) {
            pars.splice(index, 1)
            localStorage.setItem('markup-news-card', JSON.stringify(pars))
        }
    clearFavCardsMarkup()
    createFavCardsMarkup()

}

listFavEl.addEventListener('click', handleDelete)