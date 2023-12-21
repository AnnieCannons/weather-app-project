//Variables
let currentTempHeader =document.getElementById("current-temp-header");
let citySearchButton = document.getElementById("city-search-button");
let userInput = document.getElementById("enter-city-name");
let cityParagraph = document.getElementById("city");
let stateParagraph = document.getElementById("state");
let countryParagraph = document.getElementById("country");
let currentTempParagraph = document.getElementById("current-temp");
let currentHighParagraph = document.getElementById("current-high");
let currentLowParagraph = document.getElementById("current-low");
let currentPrecipitationParagraph = document.getElementById("current-precipitation");
let dayTwoTemp = document.getElementById("day-two-temp");
let dayTwoHigh = document.getElementById("day-two-high");
let dayTwoLow = document.getElementById("day-two-low");
let dayTwoPrecipitation = document.getElementById("day-two-precipitation");
let forecastDiv = document.querySelector(".forecast-div");
let dayOfWeek2 = document.getElementById("day-of-week-2");

let dayThreeTemp = document.getElementById("day-three-temp");
let dayThreeHigh = document.getElementById("day-three-high");
let dayThreeLow = document.getElementById("day-three-low");
let dayThreePrecipitation = document.getElementById("day-three-precipitation");
let dayOfWeek3 = document.getElementById("day-of-week-3");

let dayFourTemp = document.getElementById("day-four-temp");
let dayFourHigh = document.getElementById("day-four-high");
let dayFourLow = document.getElementById("day-four-low");
let dayFourPrecipitation = document.getElementById("day-four-precipitation");
let dayOfWeek4 = document.getElementById("day-of-week-4");

let hottestDayParagraph = document.getElementById("hottest-day");

let temperatureTypeDiv = document.getElementById("temp-type");

let currentContainer = document.querySelector(".current-temp-container");
let tempTypeContainer = document.querySelector(".temp-type-container");
let dayTwoContainer = document.querySelector(".day-two-container");
let dayThreeContainer = document.querySelector(".day-three-container");
let dayFourContainer = document.querySelector(".day-four-container");
let hottestDayContainer = document.querySelector(".hottest-day-container");

let displayedCitiesContainer = document.querySelector(".display-cities-container");
let displayedCitiesText = document.getElementById("displayed-city");




let weatherToday = {
    header: "",
    cityName: "",
    stateName: "",
    countryName: "",
    currentTemp: "",
    todaysHigh: "",
    todaysLow: "",
    precipitation: "",
};

let threeDayForecast = [];
let fourDayForecastTemps = [];
let hottestDay = 0;


const getAllCities =  async () => {
    let cities = await fetch('http://localhost:3000/get-cities');
    let citiesParsed = await cities.json();
    console.log(citiesParsed);
    return citiesParsed;
  }
 // This function is called when app first loads, you will call this function in your JavaScript file. You might call it inside of another function.
 
 const displayAllCities = async() => {
    let getAllCitiesCall = await getAllCities();
    console.log(getAllCitiesCall[1].id);
    displayedCitiesText.innerHTML = getAllCitiesCall.map(function(cities) {
        return '<li>' + cities.city_name + '</li>';
        
    });
    }
    displayAllCities()



  const createCity =  async (cityFromUser) => {
    let city = await fetch('http://localhost:3000/create-city',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    body:{cityName: cityFromUser } 
    });
    let cityParsed = await city.json();
    console.log(cityParsed);
    return cityParsed;
  }



//Buttons

citySearchButton.addEventListener("click", function(){
  
    let cityFromUser = userInput.value;
    console.log(cityFromUser);
    createCity(cityFromUser);
    threeDayForecast = [];
  fetch(`http://api.weatherapi.com/v1/forecast.json?key=696546d3da0e4fff847182411232609&q=${cityFromUser}&days=4`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
       weatherToday.cityName = data.location.name;
       weatherToday.stateName = data.location.region;
       weatherToday.countryName = data.location.country;
        weatherToday.currentTemp = Math.round(data.current.temp_f);
        weatherToday.todaysHigh = Math.round(data.forecast.forecastday[0].day.maxtemp_f);
        weatherToday.todaysLow = Math.round(data.forecast.forecastday[0].day.mintemp_f);
        weatherToday.precipitation = data.forecast.forecastday[0].day.daily_chance_of_rain;
        console.log(data.forecast.forecastday[0].day, "weatherToday.precipitation"); 

       for (let i = 1; i <data.forecast.forecastday.length; i++) {
        let forecast = {
        date: data.forecast.forecastday[i].date,
        temp: Math.round(data.forecast.forecastday[i].day.avgtemp_f),
        high: Math.round(data.forecast.forecastday[i].day.maxtemp_f),
        low: Math.round(data.forecast.forecastday[i].day.mintemp_f),
        precipitation: data.forecast.forecastday[i].day.daily_chance_of_rain,
        day: getDayOfWeek(data.forecast.forecastday[i].date)
       }
       threeDayForecast.push(forecast);
       console.log(threeDayForecast, "THREEDAYFORECAST")
       }
       
       for (let i = 0; i <data.forecast.forecastday.length; i++) {
        let dayTempObj = {
            dayOfWeek: getDayOfWeek(data.forecast.forecastday[i].date),
            temp:data.forecast.forecastday[i].day.maxtemp_f,
        }
        
        
        
        fourDayForecastTemps.push(dayTempObj);
      

       }
       for (let i = 0; i<fourDayForecastTemps.length; i++) {
       if (fourDayForecastTemps[i].temp > hottestDay) {
        hottestDay = fourDayForecastTemps[i].dayOfWeek;
       }
       }
       console.log(hottestDay)


       updateUI();
    }).catch(error => console.log(error));

    
});

//Functions


function getDayOfWeek(dateString) {
    // Parse the input date as UTC to avoid time discrepancies
    const date = new Date(`${dateString}T00:00:00Z`);
    
    // Get the UTC time offset in minutes for the target timezone (America/Los_Angeles)
    const utcOffsetMinutes = date.getTimezoneOffset();
    
    // Calculate the target time by adding the UTC offset for America/Los_Angeles in minutes
    const californiaTime = new Date(date.getTime() + utcOffsetMinutes * 60000);
    
    // Format the date according to the target timezone
    const options = { weekday: 'long' };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    
    return formatter.format(californiaTime);
  }
  

function updateUI() {
    currentContainer.classList.remove("hidden");
    tempTypeContainer.classList.remove("hidden");
    dayTwoContainer.classList.remove("hidden");
    dayThreeContainer.classList.remove("hidden");
    dayFourContainer.classList.remove("hidden");
    hottestDayContainer.classList.remove("hidden");
   currentTempHeader.textContent = "Current Temp";
    cityParagraph.textContent = weatherToday.cityName += ", ";
    stateParagraph.textContent = weatherToday.stateName += ", ";
    countryParagraph.textContent = weatherToday.countryName;
    currentTempParagraph.textContent = weatherToday.currentTemp + "°F";
    currentHighParagraph.textContent = "Today's High: " + weatherToday.todaysHigh + "°F";
    currentLowParagraph.textContent = "Today's Low: " + weatherToday.todaysLow + "°F";
    currentPrecipitationParagraph.textContent = "Chance of Precipitation: " + weatherToday.precipitation + "%";
    
    
   
    
      
    //For three day forecast
    // for(){
    //     forecastDiv.innerHTML(
    //         `
            
    //         <p>High: ${threeDayForecast[i].high }</p>
    //         <p>Wednesday</p>
    //         `
    //         )
    // }
   
    //inside of the loop, create a div element for each item
    
    //day 2
    dayOfWeek2.textContent = threeDayForecast[0].day
    dayTwoTemp.textContent = threeDayForecast[0].temp + "°F";
    dayTwoHigh.textContent = "High: " + threeDayForecast[0].high + "°F";
    dayTwoLow.textContent = "Low: " + threeDayForecast[0].low + "°F";
    dayTwoPrecipitation.textContent = "Chance of Precipitation: " + threeDayForecast[0].precipitation + "%";
   
   
    //day 3
    dayOfWeek3.textContent = threeDayForecast[1].day
    dayThreeTemp.textContent = threeDayForecast[1].temp + "°F";
    dayThreeHigh.textContent = "High: " + threeDayForecast[1].high + "°F";
    dayThreeLow.textContent = "Low: " + threeDayForecast[1].low + "°F";
    dayThreePrecipitation.textContent = "Chance of Precipitation: " + threeDayForecast[1].precipitation + "%";

    //day 4
    dayOfWeek4.textContent = threeDayForecast[2].day
    dayFourTemp.textContent = threeDayForecast[2].temp + "°F";
    dayFourHigh.textContent = "High: " + threeDayForecast[2].high + "°F";
    dayFourLow.textContent = "Low: " + threeDayForecast[2].low + "°F";
    dayFourPrecipitation.textContent = "Chance of Precipitation: " + threeDayForecast[2].precipitation + "%";

    hottestDayParagraph.textContent = "The hottest day will be: " + hottestDay;



    if (weatherToday.currentTemp > 75) {
        temperatureTypeDiv.textContent = "It's Hot Today!";
        let image = document.createElement("img");
        image.src = "gallery/gallery/snoop.jpg";
        temperatureTypeDiv.appendChild(image);
    } else if (weatherToday.currentTemp < 50) {
     temperatureTypeDiv.textContent = "It's Cold Today!" 
     image = document.createElement("img");
     image.src = "gallery/gallery/mariah.jpeg";
     temperatureTypeDiv.appendChild(image);
    } else {
     temperatureTypeDiv.textContent = "The Weather is Perfect!"
     image = document.createElement("img");
     image.src = "gallery/gallery/gallery/dolly.jpg";
     temperatureTypeDiv.appendChild(image);
    };

}



function makeDivs() {
    for(let i = 1; i<forecast.length; i++){
        //createEkement for a new div
        //add innerhtml to that div
    }
}
