//Variables

let citySearchButton = document.getElementById("city-search-button");
let userInput = document.getElementById("enter-city-name");
let cityParagraph = document.getElementById("city");
let stateParagraph = document.getElementById("state");
let countryParagraph = document.getElementById("country");

let weatherToday = {
    cityName: "",
    stateName: "",
    countryName: "",
    currentTemp: "",
    todaysHigh: "",
    todaysLow: "",
    precipitation: "",
};

let threeDayForecast = [];



//Buttons

citySearchButton.addEventListener("click", function(){
  
    let cityFromUser = userInput.value;
    console.log(cityFromUser);

  fetch(`http://api.weatherapi.com/v1/forecast.json?key=696546d3da0e4fff847182411232609&q=${cityFromUser}&days=4`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
       weatherToday.cityName = data.location.name;
       weatherToday.stateName = data.location.region;
       weatherToday.countryName = data.location.country;
        weatherToday.currentTemp = data.current.temp_f;
        weatherToday.todaysHigh = data.forecast.forecastday[0].day.maxtemp_f;
        weatherToday.todaysLow = data.forecast.forecastday[0].day.mintemp_f;
        weatherToday.precipitation = data.forecast.forecastday[0].day.daily_chance_of_rain;
        console.log(weatherToday, "TEST"); 

       for (let i = 1; i <data.forecast.forecastday.length; i++) {
        let forecast = {
        date: data.forecast.forecastday[i].date,
        temp: data.forecast.forecastday[i].day.avgtemp_f,
        high: data.forecast.forecastday[i].day.maxtemp_f,
        low: data.forecast.forecastday[i].day.mintemp_f,
        precipitation: data.forecast.forecastday[i].day.daily_chance_of_rain
       }
       threeDayForecast.push(forecast);
       console.log(threeDayForecast, "THREEDAYFORECAST")
       }
       updateUI();
    });

    
});

//Functions

function updateUI() {
    cityParagraph.textContent = weatherToday.cityName += ", ";
    stateParagraph.textContent = weatherToday.stateName += ", ";
    countryParagraph.textContent = weatherToday.countryName;
   
}




