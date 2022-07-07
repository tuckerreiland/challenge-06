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
var keyAPI = "78da9619deaae6c16508c6bc8c8fb03f"
var cityName = ""
var cityFormatted = cityName.replace(' ', '+');
var searchHistory = []

//Element Variables
var searchInput = document.querySelector("#search-bar")
var displayCityName = document.querySelector("#city-name")

//arrays
var todayWeather = []
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
   console.log (openWeatherAPI)
}
//TODO: Dropdown of search history from array

//populate Today forecast

//populate next five days
    //display date


//uv index function
    //if uv-index moderate => change bg to bg-warning
    //if uv-index severe => change bg to bg-danger
    //else bg-success
