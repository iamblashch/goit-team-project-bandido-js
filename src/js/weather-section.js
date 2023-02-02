import Ipbase from '@everapi/ipbase-js';
const IPBASE_API_KEY = '7FsVgF0qt6nHgGtKoFY9gv6ZIili0IROFb9EmFFu';  //https://ipbase.com/
const ipBase = new Ipbase(IPBASE_API_KEY);

const OPENWEATHERMAP_API_KEY = '5019a2f2565a9e30731ac468ed123013'  //https://openweathermap.org/

const degrees = document.querySelector('.degrees');
const sky = document.querySelector('.sky');
const currentCity = document.querySelector('.city-name');
const weathehImage = document.querySelector('.weatheh-image-box');
const weatherForWeek = document.querySelector('.weather-for-week')
const currentData = document.querySelector('.current-data');

const date = new Date();
currentData.innerHTML = date.toDateString();

ipBase.info().then(response => {
    const cityName = response.data.location.city.name;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${OPENWEATHERMAP_API_KEY}`).then(response => {
            if (!response.ok) {
            throw new Error(response.status);
            }
            return response.json()
            }).then(data => {
                degrees.innerHTML = Math.round(data.main.temp - 273) + '&deg;';
                sky.innerHTML = data.weather[0].main
                currentCity.textContent = data.name
                weathehImage.innerHTML = `<img class="weatheh-image" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="">`
                weatherForWeek.setAttribute('href', `https://openweathermap.org/city/${data.id}`)
            });
});

