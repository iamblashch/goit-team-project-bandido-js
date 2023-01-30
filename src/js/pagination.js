

const paginationList = document.querySelector(`.pagination`);
const nextPage = document.querySelector(`.pagination-next`);
const previous = document.querySelector(`.pagination-previous`);
const firstBtn = document.querySelector(`.first-btn`);
const secondBtn = document.querySelector(`.second-btn`);
const thirdBtn = document.querySelector(`.third-btn`);
const fourBtn = document.querySelector(`.four-btn`);
const lastBtn = document.querySelector(`.last-btn`);
const ellipsis = document.querySelector(`.pagination-ellipsis_item1`)
const ellipsisSecond = document.querySelector(`.pagination-ellipsis_item2`)




paginationList.addEventListener(`click`, switchPage);
let currentTurgetPage = document.querySelector(`.is-current`);
function switchPage(e) {
  
  currentTurgetPage = document.querySelector(`.is-current`);
  // nextPage.disabled = false;
  // previous.disabled = false;
  if (e.target.nodeName !== `A` && e.target.nodeName !== `BUTTON`) {
    return;
  }

  // BTN previous---------
  if (e.target.dataset.prev) {
    if (lastBtn.classList.contains(`is-current`)) {
      lastBtn.classList.remove(`is-current`);
      fourBtn.classList.add(`is-current`);
    } else if (fourBtn.classList.contains(`is-current`)) {
      fourBtn.classList.remove(`is-current`);
      thirdBtn.classList.add(`is-current`);
    } else if (thirdBtn.classList.contains(`is-current`)) {
      thirdBtn.classList.remove(`is-current`);
      secondBtn.classList.add(`is-current`);
    } else if (
      secondBtn.textContent !== `2` &&
      thirdBtn.textContent !== `3` &&
      fourBtn.textContent !== `4`
    ) {
      secondBtn.textContent--;
      thirdBtn.textContent--;
      fourBtn.textContent--;
    } else if (secondBtn.classList.contains(`is-current`)) {
      secondBtn.classList.remove(`is-current`);
      firstBtn.classList.add(`is-current`);
      previous.disabled = true;
    } else {
      return;
    }
  }

      
  // BTN NEXT ---------
    if (e.target.dataset.next) {
    if (firstBtn.classList.contains(`is-current`)) {
      firstBtn.classList.remove(`is-current`);
      secondBtn.classList.add(`is-current`);
    } else if (secondBtn.classList.contains(`is-current`)) {
      secondBtn.classList.remove(`is-current`);
      thirdBtn.classList.add(`is-current`);
    } else if (thirdBtn.classList.contains(`is-current`)) {
      thirdBtn.classList.remove(`is-current`);
      fourBtn.classList.add(`is-current`);
    } else if (fourBtn.textContent !== String(lastBtn.textContent - 1)) {
      secondBtn.textContent++;
      thirdBtn.textContent++;
      fourBtn.textContent++;
    } else if (fourBtn.textContent === String(lastBtn.textContent - 1)) {
      fourBtn.classList.remove(`is-current`);
        lastBtn.classList.add(`is-current`);
        nextPage.disabled = true;
      }
  }

  // BTN NUMBER PAGE --------

    if (e.target.nodeName === `A`) {
    currentTurgetPage.classList.remove(`is-current`);
    let targetCurrent = e.target;
    targetCurrent.classList.add(`is-current`);
    if (e.target.dataset.last) {
      fourBtn.textContent = lastBtn.textContent - 1;
      thirdBtn.textContent = lastBtn.textContent - 2;
        secondBtn.textContent = lastBtn.textContent - 3;
        nextPage.disabled = true;
    }else if (e.target.dataset.first) {
        secondBtn.textContent = Number(firstBtn.textContent) + 1;
        thirdBtn.textContent = Number(firstBtn.textContent) + 2;
        fourBtn.textContent = Number(firstBtn.textContent) + 3;
        previous.disabled = true;
    }
  }
  // -------remove/Add dots -----
    if (Number(fourBtn.textContent) >= 5) {
        ellipsis.classList.remove(`hidden-elm`)
  } else { ellipsis.classList.add(`hidden-elm`) }
  if (Number(fourBtn.textContent) === (Number(lastBtn.textContent) - 1)) {
        ellipsisSecond.classList.add(`hidden-elm`)
        } else { ellipsisSecond.classList.remove(`hidden-elm`) }

  numberPage = document.querySelector(`.is-current`).textContent
  if (currentTurgetPage.textContent !== e.target.textContent) {
    window.scrollTo({
    top: 0,
    behavior: "smooth",
    duration: 2000
 });
  }
  
}
let numberPage = 1;
// <-----Номер Сторінки------
export { numberPage, currentTurgetPage};
