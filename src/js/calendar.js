import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dateInputEl = document.querySelector('#datetime-picker');
const API_KEY = 'ef883f39deda4d31b974aca841c64d64';

function makeFetchByDate(selectedDate, keyword) {
    return fetch(`https://newsapi.org/v2/everything?q=${keyword}&from=${selectedDate}&to=${selectedDate}&apiKey=${API_KEY}`)
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
    shorthand: true,
    locale: {
        firstDayOfWeek: 1,
        // weekdays: {
        //     shorthand: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
        // },
    },

    onChange(selectedDates) {
        let ourDate = new Date(selectedDates);
        ourDate = ourDate.toLocaleString().split(',')[0];
        ourDate = ourDate.replace(/\//g, '-');
        ourDateArr = Array.from(ourDate);
        ourDateArr = ourDateArr[6] + ourDateArr[7] + ourDateArr[8] + ourDateArr[9] + ourDateArr[5] + ourDateArr[3] + ourDateArr[4] + ourDateArr[2] + ourDateArr[0] + ourDateArr[1];

        // ourDate = ourDate.toISOString().split('T')[0];

        const fetch = makeFetchByDate(ourDateArr, 'ukraine')
            .then(data => console.log(data))
            .catch(error => console.log(error))
        return fetch
    }
}

const fp = flatpickr(dateInputEl, options);
