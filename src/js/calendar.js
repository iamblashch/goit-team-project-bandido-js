import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dateInputEl = document.querySelector('#datetime-picker');
const API_KEY = 'ef883f39deda4d31b974aca841c64d64';

function makeFetchByDate(selectedDate) {
    return fetch(`https://newsapi.org/v2/everything?q=cat&from=${selectedDate}&to=${selectedDate}&apiKey=${API_KEY}`)
        .then(response => {
            if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json()})
}

const options = {
    altFormat: 'd/m/Y',
    ariaDateFormat: 'd/m/Y',
    dateFormat: 'd/m/Y',
    maxDate: new Date(),
    defaultDate: new Date(),

    onChange(selectedDates) {
        let ourDate = new Date(selectedDates);
        ourDate = ourDate.toLocaleString().split(',')[0];
        ourDate = ourDate.replace(/\//g, '-');
        ourDateArr = Array.from(ourDate);
        ourDateArr = ourDateArr[6] + ourDateArr[7] + ourDateArr[8] + ourDateArr[9] + ourDateArr[5] + ourDateArr[3] + ourDateArr[4] + ourDateArr[2] + ourDateArr[0] + ourDateArr[1];

        // ourDate = ourDate.toISOString().split('T')[0];

        const fetch = makeFetchByDate(ourDateArr)
            .then(data => console.log(data))
            .catch(error => console.log(error))
        return fetch
    }
}

const fp = flatpickr(dateInputEl, options);
const fpDivEl = document.querySelector('.flatpickr-calendar');
const fpPrevMonthArrowEl = document.querySelector('.flatpickr-prev-month');
const fpNextMonthArrowEl = document.querySelector('.flatpickr-next-month');

fpDivEl.style.cssText = 'background-color:#F8F8F8; color:#000000; box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.1);border-radius: 20px';
fpPrevMonthArrowEl.style.cssText = 'fill:#4440F6';
fpNextMonthArrowEl.style.cssText = 'fill:#4440F6';
