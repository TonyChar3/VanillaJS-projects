// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3cd419d228msh1a2d380eac97426p15eedfjsnab98b282a52c',
// 		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
// 	}
// };

// fetch('https://open-weather13.p.rapidapi.com/city/chicago', options)
// 	.then(response => response.json())
// 	.then(data => console.log(data.weather[0].main))
// 	.catch(err => console.error(err));

let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb"

const CityInp = document.getElementById('city-name')
const WeatherInp = document.getElementById('weather-type')
const TempInp = document.getElementById('temp')
const MaxTemp = document.getElementById('max-temp')
const MinTemp = document.getElementById('min-temp')

const getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather"
    fetch(`${URL}?q=${city}&appid=${API_KEY}&units=imperial`)
    .then(response => response.json())
    .then(json => 
        showWeatherData(json)
    ).catch((error) => {
        console.log(error)
        console.log('something went wrong')
    })
}

const searchCity = () => {
    const city = document.getElementById('city-input').value
    getWeatherData(city)
}

const showWeatherData = (weatherData) => {
    CityInp.innerText = `${weatherData.name}`
    WeatherInp.innerText = `${weatherData.weather[0].main}`
    TempInp.innerText = `${weatherData.main.temp}`
    MaxTemp.innerText = `${weatherData.main.temp_max}`
    MinTemp.innerText= `${weatherData.main.temp_min}`
}
