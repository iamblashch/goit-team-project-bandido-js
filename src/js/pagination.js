// const pagList = document.querySelector(`.pagination-list`)

// const paginationList = document.querySelector(`.pagination`);
// const nextPage = document.querySelector(`.pagination-next`);
// const previous = document.querySelector(`.pagination-previous`);
// const firstBtn = document.querySelector(`.first-btn`);
// const secondBtn = document.querySelector(`.second-btn`);
// const thirdBtn = document.querySelector(`.third-btn`);
// const fourBtn = document.querySelector(`.four-btn`);
// const lastBtn = document.querySelector(`.last-btn`);
// const ellipsis = document.querySelector(`.pagination-ellipsis_item1`)
// const ellipsisSecond = document.querySelector(`.pagination-ellipsis_item2`)

// let btn1;
// let numberAllPage = 20;
// let numberPagePagination = 1;
// let murkupPagination
// function creatElmNumber() {
//   for (let index = 0; index < numberAllPage; index++) {
//     if (numberAllPage <= 4) {
//       murkupPagination = `<li><a class="pagination-link btn${numberPagePagination}" data${numberPagePagination}>${numberPagePagination}</a></li>`
//       numberPagePagination += 1
//       pagList.innerHTML += murkupPagination;
//     } 
//   }
//   if (numberAllPage > 4) {
//     murkupPagination = `
//     <li><a class="pagination-link btn1" data1>1</a></li>
//      <li><a class="pagination-link btn2" data2>2</a></li>
//      <li><a class="pagination-link btn3" data3>3</a></li>
//      <li><a class="pagination-link btn4" data4>4</a></li>
//      <li><a class="pagination-link btn5" data5>5</a></li>
//      <div class="pagination-ellipsis_item2"><span class="pagination-ellipsis_last">&hellip;</span></div>
//      <div>
//      <li><a class="pagination-link btn" data5>${numberAllPage}</a></li>`
//     pagList.innerHTML = murkupPagination;
//   } 
//   btn1 = document.querySelector(`.btn1`)
//   btn1.classList.add(`is-current`)
// }
// creatElmNumber()


// let currentElem;
// let numberAtribute = 1;
// nextPage.addEventListener(`click`, () => {
//   previous.disabled = false

//   numberAtribute += 1;
//   currentElem = document.querySelector(`.is-current`)
//   let currentAtribute = document.querySelector(`[data${numberAtribute}]`)
//   currentElem.classList.remove(`is-current`)
//   currentAtribute.classList.add(`is-current`)

//   currentElem = document.querySelector(`.is-current`)

  
// })
// previous.addEventListener(`click`, () => {
//   numberAtribute -= 1;

//   currentElem = document.querySelector(`.is-current`)
//   let currentAtribute = document.querySelector(`[data${numberAtribute}]`)
//   currentElem.classList.remove(`is-current`)
//   currentAtribute.classList.add(`is-current`)

//   currentElem = document.querySelector(`.is-current`)
//   if (currentElem.textContent === `1`) {
//     previous.disabled = true
//   }

// })










