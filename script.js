// location variables 
let cityElement = document.querySelector('#city')
let stateElement = document.querySelector('#state')
let countryElement = document.querySelector('#country')

// temp variables
let current_tempElement = document.querySelector('#current-temp')
let high_tempElement = document.querySelector('#high-temp')
let low_tempElement = document.querySelector('#low-temp')
let chanceOf_rainElement = document.querySelector('#chanceOf-rain')

// this is my button
let enter = document.querySelector('#enter')
let userInput = document.querySelector('#city-input')

let fourDayForecastTemps = [];
let highestTemp = 0;
let hottestDay = "";
let hottestElement = document.querySelector('.hottestDay')
let parentElement = document.querySelector('.parent')
let forecastElement = document.querySelector('.Forecast-1')
// three-day varible 
let threeDayParent = document.querySelector(".three-day-container");

let currentObj = {
    currentTemp: "",
    currentCity: "",
    currentCountry: "",
    currentState: "",
    highTemp: "",
    lowTemp: "",
    chanceOfRain: "",

}
let forecast = []
let arrayOfThree = [];

enter.addEventListener('click', function () {
    document.querySelector(".three-day-container").innerHTML = ""
    arrayOfThree = []
    let cityFromUser = userInput.value
    console.log(cityFromUser)
    // api call 
    fetch(`http://api.weatherapi.com/v1/forecast.json?key= 9e9df1bd73584262a66182601232609&q=${cityFromUser}&days=4&aqi=no&alerts=no`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            //creating current object
            currentObj.currentTemp = data.current.temp_f
            currentObj.currentCity = data.location.name
            currentObj.currentCountry = data.location.country
            currentObj.currentState = data.location.region
            currentObj.highTemp = data.forecast.forecastday[0].day.maxtemp_f
            currentObj.lowTemp = data.forecast.forecastday[0].day.mintemp_f
            currentObj.chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain
            //create future array
            forecast = data.forecast.forecastday
            console.log(forecast)
            // forecast = forecast.slice(1,4)

            forecast.map(day => {
                let obj = {
                    averageTemp: day.day.avgtemp_f,
                    maxTemperature: day.day.maxtemp_f,
                    minimumTemperature: day.day.mintemp_f,
                    perspiration: day.day.totalprecip_mm,
                    dayOfWeek: getDayOfWeekInCalifornia(day.date),

                };
                arrayOfThree.push(obj);
                console.log(arrayOfThree, 'ARRAYOFTHREE')
            });

            for (let i = 0; i < data.forecast.forecastday.length; i++) {
                let dayTempObj = {
                    dayOfWeek: getDayOfWeekInCalifornia(data.forecast.forecastday[i].date),
                    temp: data.forecast.forecastday[i].day.maxtemp_f,
                }
                fourDayForecastTemps.push(dayTempObj);
            }
            for (let i = 0; i < fourDayForecastTemps.length; i++) {
                if (fourDayForecastTemps[i].temp > hottestDay) {
                    hottestDay = fourDayForecastTemps[i].dayOfWeek;
                }
            }
            // console.log(hottestDay)

            userInput.value = ""
            // console.log(forecast, "FORECAST");
            updateUI()
        })
        parentElement.classList.remove('hidden')
        hottestElement.classList.remove('hidden')
        forecastElement.classList.remove('hidden')
})

function updateUI() {
    cityElement.textContent = `${currentObj.currentCity}, ${currentObj.currentState}, ${currentObj.currentCountry}`
    // stateElement.textContent = currentObj.currentState
    // countryElement.textContent = currentObj.currentCountry
    current_tempElement.textContent = `${currentObj.currentTemp}°`
    high_tempElement.textContent = `Today'sHigh: ${currentObj.highTemp}°`
    low_tempElement.textContent = `Todays'sLow: ${currentObj.lowTemp}°`
    chanceOf_rainElement.textContent = `Chance of precipitation:${currentObj.chanceOfRain}%`
    console.log(arrayOfThree, "ARRAY FROM UPDATE UI")
    createThreeDayDivs()

    // console.log("updateUI has been called")


}
// console.log("arrayOfThree", arrayOfThree)

function createThreeDayDivs() {
    arrayOfThree.forEach((item) => {
        let newDiv = document.createElement("div")
        newDiv.innerHTML = `
            <h2>${item.dayOfWeek}</h2>
            <h1>${item.averageTemp}°</h1>
            <p><strong>Today'sHigh:</strong>${item.maxTemperature}°</p>
            <p><strong>Today'sLow:</strong>${item.minimumTemperature}°</p>
            <p><strong>Chance of Precipitation:</strong>${item.perspiration}%</p>`

        // threeDayParent.appendChild(newDiv)
        newDiv.classList.add("single-day-div")
        document.querySelector(".three-day-container").appendChild(newDiv);
        hottestElement.textContent = `${hottestDay} will be the hottest day `
    })
    arrayOfThree = [];
    // for(let i = 0; i<arrayOfThree.length; i++){
    //         let newDiv = document.createElement("div")
    //         newDiv.innerHTML = `
    //         <h2>${arrayOfThree[i].dayOfWeek}</h2>
    //         <h1>${arrayOfThree[i].averageTemp}°</h1>
    //         <p><strong>Today'sHigh:</strong>${arrayOfThree[i].maxTemperature}°</p>
    //         <p><strong>Today'sLow:</strong>${arrayOfThree[i].minimumTemperature}°</p>
    //         <p><strong>Chance of Precipitation:</strong>${arrayOfThree[i].perspiration}%</p>

    //         `
    //         // threeDayParent.appendChild(newDiv)
    //         newDiv.classList.add("single-day-div")
    //         document.querySelector(".three-day-container").appendChild(newDiv);
    //         hottestElement.textContent = `${hottestDay} will be the hottest day `
    // }
}
function getDayOfWeekInCalifornia(dateString) {
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




