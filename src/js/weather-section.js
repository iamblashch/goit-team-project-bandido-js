import Ipbase from '@everapi/ipbase-js';
const IPBASE_API_KEY = 'tvuotlcHnFvF9MD9zu0FUQlxPoQjJZ6ndNHm3sZZ';  //https://ipbase.com/
const ipBase = new Ipbase(IPBASE_API_KEY);

const OPENWEATHERMAP_API_KEY = '5019a2f2565a9e30731ac468ed123013'  //https://openweathermap.org/

const degrees = document.querySelector('.degrees');
const sky = document.querySelector('.sky');
const currentCity = document.querySelector('.current-city');
const weathehImage = document.querySelector('.weatheh-image');
const weatherForWeek = document.querySelector('.weather-for-week')
const currentData = document.querySelector('.current-data');

const date = new Date();
currentData.innerHTML = date.toDateString();
console.log('currentData :>> ', currentData);


ipBase.info().then(response => {
    const cityName = response.data.location.city.name;
    console.log(response);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${OPENWEATHERMAP_API_KEY}`).then(response => {
            if (!response.ok) {
            throw new Error(response.status);
            }
            return response.json()
            }).then(data => {
                console.log(data);
                degrees.innerHTML = Math.round(data.main.temp - 273) + '&deg;';
                sky.innerHTML = data.weather[0].main
                currentCity.innerHTML = data.name
                weathehImage.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="">`
                weatherForWeek.setAttribute('href', `https://openweathermap.org/city/${data.id}`)
            });
});

