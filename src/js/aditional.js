const newsList = document.querySelector('.news__list');

let favoriteArticles = [];

if (localStorage.getItem('savedNews')) {
  JSON.parse(localStorage.getItem('savedNews')).map(item => {
    favoriteArticles.push(item);
  });
}

newsList.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  if (
    e.target.classList.contains('favorite-true') ||
    e.target.classList.contains('favorite-false')
  ) {
    e.target.classList.toggle('favorite-true');
    e.target.classList.toggle('favorite-false');
  } else {
    return;
  }
  if (e.target.classList.contains('favorite-true')) {
    e.target.style.width = '168px';
    e.target.textContent = 'Remove from favorite';

    favoriteArticles.push({
      img: e.target.parentNode.children[0].src,
      // href: e.target.parentNode.lastElementChild.lastElementChild.href, //1
      href: e.target.parentNode.children[5].lastElementChild.href,
      h2: e.target.parentNode.children[3].textContent,
      description: e.target.parentNode.children[4].textContent,
      date: e.target.parentNode.children[5].children[0].textContent,
      // date: e.target.parentNode.lastElementChild.children[0].textContent, //1  не працює на рід через p have read???
      uri: e.target.dataset.id,
      category: e.target.parentNode.children[1].textContent,
    });
    
    localStorage.setItem('savedNews', JSON.stringify(favoriteArticles));
  }

  if (e.target.classList.contains('favorite-false')) {
    e.target.style.width = '126px';
    e.target.textContent = 'Add to favorite';
    const superNewObj = JSON.parse(localStorage.getItem('savedNews')).filter(
      item => item.uri !== e.target.dataset.id
    );

    localStorage.removeItem('savedNews');
    localStorage.setItem('savedNews', JSON.stringify(superNewObj));
    favoriteArticles = superNewObj;
    if (JSON.parse(localStorage.getItem(`savedNews`)).length < 1) {
      localStorage.removeItem('savedNews');
    }
  }
});