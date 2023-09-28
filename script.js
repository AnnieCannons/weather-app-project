// // API Key:8b78ddff94f24e8087b182603232609

//main list of key title and api call line
// {
//     maxtemp_fz: `${dayCall[i].day.maxtemp_f}`,
//     maxtemp_c: `${dayCall[i].day.maxtemp_c}`,
//     mintemp_f: `${dayCall[i].day.mintemp_f}`,
//     mintemp_c: `${dayCall[i].day.mintemp_c}`,
//     avgtemp_c: `${dayCall[i].day.avgtemp_c}`,
//     avgtemp_f: `${dayCall[i].day.avgtemp_f}`,
//     daily_chance_of_rain: `${dayCall[i].day.daily_chance_of_rain}`,
//     condition_icon: `${dayCall[i].day.condition.icon}`,
//     condition_text: `${dayCall[i].day.condition.text}`,
// }


//declared variables for later use within this file
let cityLink = '';
let date = '';
let dayCall = "";

//future forecast object information
let futureTemp = {

}

//todays weather object information
let todayTemp = {
        currentTemp: "",
    };
let today = document.getElementsByClassName("today");


//activate eventlistener on search button
 let search = document.getElementById("searchButton");
        search.addEventListener("click", function () {

//Store the search input value into cityFromUser variable
 let cityFromUser = document.getElementById("searchInput").value;

//remove spaces and replace with - so the link works properly
        if (cityFromUser.includes(" ")) {
            cityFromUser = cityFromUser.replace(/ /g, "-");
            console.log(cityFromUser);
        }

//attach the input value into it's proper location in the API link
        cityLink = `http://api.weatherapi.com/v1/forecast.json?key=8b78ddff94f24e8087b182603232609&q=${cityFromUser}&days=${4}&aqi=no&alerts=no`;
   

 //maybe will make an option for user to adjust the number of days they want to have forecasted. 
//TBD CODE HERE


 //fetch API link
        fetch(cityLink)
        .then((response) => response.json())
        .then((data) => {

//call todays weather information

        todayTemp.currentTemp = data.current.temp_f;
        today.textContent = todayTemp.currentTemp;
            
            

 //make a shorter variable to hold the initial API call line
        dayCall = data.forecast.forecastday;


//create a new date object within the futureTemp object -  contain forecast information for that date and loop it for as many days the api is set up for

        for (let i = 0; i < 4; i++) {
        date = dayCall[i].date;
        
        futureTemp[date] = {
            maxtemp_fz: `${dayCall[i].day.maxtemp_f}`,
            maxtemp_c: `${dayCall[i].day.maxtemp_c}`,
            mintemp_f: `${dayCall[i].day.mintemp_f}`,
            mintemp_c: `${dayCall[i].day.mintemp_c}`,
            avgtemp_c: `${dayCall[i].day.avgtemp_c}`,
            avgtemp_f: `${dayCall[i].day.avgtemp_f}`,
            daily_chance_of_rain: `${dayCall[i].day.daily_chance_of_rain}`,
            condition_icon: `${dayCall[i].day.condition.icon}`,
            condition_text: `${dayCall[i].day.condition.text}`,
}
}
})
})

//testing results
console.log(todayTemp);
console.log(today);
console.log(todayTemp.currentTemp);
console.log(cityLink);
console.log(futureTemp)



