//Current date
function displayTime() {
    var time2 = moment().format('MMMM Do YYYY, h:mm:ss a')
    $('#currentDay').html(time2);
    setTimeout(displayTime, 1000); 
}

$(document).ready(function() {
    displayTime();
});

//search/API variables
var keyAPI = "6f5d6ea7995a611e122338bfc8dad861"
var cityName = ""
var cityFormatted = cityName.replace(' ', '+');
var searchHistory = []

//Element Variables
var searchInput = document.querySelector("#search-bar")
var displayCityName = document.querySelector("#city-name")
var todayTemp = document.querySelector("#today-temp")
var todayHumidity = document.querySelector("#today-humidity")
var todayUV = document.querySelector("#today-uv")
var todayWind = document.querySelector("#today-wind")
var todayImg = document.querySelector("#today-img")


//arrays
var todayWeather = []
var fiveDayForecastArray = []
var todayPlusOneWeather = []
var todayPlusTwoWeather = []
var todayPlusThreeWeather = []
var todayPlusFourWeather = []
var todayPlusFiveWeather = []


//fetch weather data

//search function
function searchInputStore(){
    window.localStorage.setItem("#search-bar", searchInput.value);
   }
function displayCity(){
searchInputStore();
    cityName = window.localStorage.getItem("#search-bar");
    displayCityName.textContent = cityName
    searchHistory.push(cityName)
    var cityFormatted = cityName.replace(' ', '+');
    var openWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cityFormatted}&appid=${keyAPI}`
    fetch(openWeatherAPI)
    .then(function(response){
        return response.json();   
    })
    .then( function(data){
        todayWeather=data;
        return todayWeather;
    })
    .then( function(){
        console.log(todayWeather);
        todayTemp.textContent = `Temperature (K): ${todayWeather.main.temp}`
        todayHumidity.textContent = `Humidity: ${todayWeather.main.humidity}`
        // todayUV.textContent = `UV: ${todayWeather.current.uvi}`
        todayWind.textContent = `Wind Speed: ${todayWeather.wind.speed}`
        todayImg.src = `./images/${todayWeather.weather[0].icon}.png`
    })
    .then( function(){
        fiveDayForecast()
})
}

function fiveDayForecast(){
    cityName = window.localStorage.getItem("#search-bar");
    displayCityName.textContent = cityName
    searchHistory.push(cityName)
    var cityFormatted = cityName.replace(' ', '+');
    var openWeatherForecastAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${cityFormatted}&appid=${keyAPI}`;
    fetch(openWeatherForecastAPI)
    .then(function(response){
        return response.json();   
    })
    .then( function(data){
        fiveDayForecastArray=data;
        return fiveDayForecastArray
    })
    .then( function(){
        todayPlusOneWeather = fiveDayForecastArray.list[8]
        todayPlusTwoWeather = fiveDayForecastArray.list[16]
        todayPlusThreeWeather = fiveDayForecastArray.list[24]
        todayPlusFourWeather = fiveDayForecastArray.list[32]
        todayPlusFiveWeather = fiveDayForecastArray.list[39]
    })
    .then( function(){
        dayOne()
        dayTwo()
        dayThree()
        dayFour()
        dayFive();
})
    }


dayOne = function(){
    document.querySelector("#one-temp").textContent = `Temperature (K): ${todayPlusOneWeather.main.temp}`
    document.querySelector("#one-humidity").textContent = `Humidity: : ${todayPlusOneWeather.main.humidity}`
    // document.querySelector("#one-temp").textContent = `UV Index: ${todayPlusOneWeather.main.temp}`
    document.querySelector("#one-wind").textContent = `Wind Speed: ${todayPlusOneWeather.wind.speed}`
    document.querySelector("#one-img").src = `./images/${todayPlusOneWeather.weather[0].icon}.png`
}

dayTwo = function(){
    document.querySelector("#two-temp").textContent = `Temperature (K): ${todayPlusTwoWeather.main.temp}`
    document.querySelector("#two-humidity").textContent = `Humidity: : ${todayPlusTwoWeather.main.humidity}`
    // document.querySelector("#one-temp").textContent = `UV Index: ${todayPlusOneWeather.main.temp}`
    document.querySelector("#two-wind").textContent = `Wind Speed: ${todayPlusTwoWeather.wind.speed}`
    document.querySelector("#two-img").src = `./images/${todayPlusTwoWeather.weather[0].icon}.png`
}

dayThree = function(){
    document.querySelector("#three-temp").textContent = `Temperature (K): ${todayPlusThreeWeather.main.temp}`
    document.querySelector("#three-humidity").textContent = `Humidity: : ${todayPlusThreeWeather.main.humidity}`
    // document.querySelector("#one-temp").textContent = `UV Index: ${todayPlusOneWeather.main.temp}`
    document.querySelector("#three-wind").textContent = `Wind Speed: ${todayPlusThreeWeather.wind.speed}`
    document.querySelector("#three-img").src = `./images/${todayPlusThreeWeather.weather[0].icon}.png`
}

dayFour = function(){
    document.querySelector("#four-temp").textContent = `Temperature (K): ${todayPlusFourWeather.main.temp}`
    document.querySelector("#four-humidity").textContent = `Humidity: : ${todayPlusFourWeather.main.humidity}`
    // document.querySelector("#one-temp").textContent = `UV Index: ${todayPlusOneWeather.main.temp}`
    document.querySelector("#four-wind").textContent = `Wind Speed: ${todayPlusFourWeather.wind.speed}`
    document.querySelector("#four-img").src = `./images/${todayPlusFourWeather.weather[0].icon}.png`
}

dayFive = function(){
    document.querySelector("#five-temp").textContent = `Temperature (K): ${todayPlusFiveWeather.main.temp}`
    document.querySelector("#five-humidity").textContent = `Humidity: : ${todayPlusFiveWeather.main.humidity}`
    // document.querySelector("#one-temp").textContent = `UV Index: ${todayPlusOneWeather.main.temp}`
    document.querySelector("#five-wind").textContent = `Wind Speed: ${todayPlusFiveWeather.wind.speed}`
    document.querySelector("#five-img").src = `./images/${todayPlusFiveWeather.weather[0].icon}.png`
}

    
//TODO: Dropdown of search history from array

//populate Today forecast

//populate next five days
    //display date


//uv index function
    //if uv-index moderate => change bg to bg-warning
    //if uv-index severe => change bg to bg-danger
    //else bg-success
