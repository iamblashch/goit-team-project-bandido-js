import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dateInputEl = document.querySelector('#datetime-picker');
const API_KEY = 'ef883f39deda4d31b974aca841c64d64';

const options = {
    altFormat: 'd/m/Y',
    ariaDateFormat: 'd/m/Y',
    dateFormat: 'd/m/Y',
    defaultDate: new Date(),

    onChange(selectedDates, dateStr, instance) {
        let ourDate = new Date(selectedDates);
        ourDate = ourDate.toISOString().split('T')[0];

        const fetch = makeFetchByDate(ourDate)
            .then(data => console.log(data))
            .catch(error => console.log(error))
        console.log(fetch)

        console.log(selectedDates)
        console.log(ourDate)
        console.log(dateStr)
        console.log(instance.onMouseOver)
        console.log(dateInputEl.value)
    }
}

const fp = flatpickr(dateInputEl, options);
const fpDivEl = document.querySelector('.flatpickr-calendar');
// const fpDivDaysEl = document.querySelector('.flatpickr-day')
fpDivEl.style.cssText = 'background-color:#F8F8F8; box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.1);border-radius: 20px';
// fpDivDaysEl.style.cssText = 'color:red';
console.log(fp)

function makeFetchByDate(selectedDate) {
    return fetch(`https://newsapi.org/v2/everything?q=cat&from=${selectedDate}&to=${selectedDate}&apiKey=${API_KEY}`)
        .then(response => {
            // console.log(se)
            if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json()})
}
