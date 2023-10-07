
let apiKey = "8b78ddff94f24e8087b182603232609";
let searched = [];
let searchHistory = [];
let searchButton = document.querySelector(".history-button");
let searchLink = [];
let searchList = document.querySelector('.searchlist');
let dayCount = document.getElementById("dayCount").value
let results;
let dayCall;
let cityFromUser = document.getElementById("search-input").value;
let testLink;
let icon;


// Search History Recall with Link

testLink = 'http://api.weatherapi.com/v1/forecast.json?key=8b78ddff94f24e8087b182603232609&q=manchester&days=5&aqi=no&alerts=no'


if (cityFromUser.includes(" ")) {
  cityFromUser = cityFromUser.replace(/ /g, "-");
}

function onChange() {
  cityFromUser = document.getElementById("search-input").value;
  dayCount = document.getElementById("dayCount").value
  searched.unshift(cityFromUser);
  searchLink.unshift(cityLink);


  cityLink = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityFromUser}&days=${dayCount}&aqi=no&alerts=no`;
  
console.log(searchLink, cityFromUser, dayCount)
  for (let i = 0; i < searched.length; i++) {
    cityFromUser = document.getElementById("search-input").value;
    dayCount = document.getElementById("dayCount").value
    searched.unshift(cityFromUser);
    searchLink.unshift(cityLink);
      let link = document.createElement('a');
      let txt = document.createTextNode(` ${document.getElementById("search-input").value}`)
      link.appendChild(txt);
      link.title = document.getElementById("search-input").value;
      link.href = searchLink;
      link.setAttribute('class', 'fa-solid fa-clock-rotate-left')
      searchList.append(link)
    
  }
  console.log(searchLink, cityFromUser, dayCount, searched)
  cityLink = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityFromUser}&days=${dayCount}&aqi=no&alerts=no`;

fetch(testLink)
.then((response) => response.json())
.then((data) => {
dayCall = data.forecast.forecastday



//Todays Summary results 
if (data.current.temp_f > 75) {
  let message = `Its Hot Today!`;
} else if (data.current.temp_f > 45 || data.current.temp_f < 75) {
 message =  `Its Moderate Today!`;
} else if (data.current.temp_f < 45) {
  message = `Its Cold Today!`;
}

})



}

cityLink = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityFromUser}&days=${dayCount}&aqi=no&alerts=no`;

testLink = 'http://api.weatherapi.com/v1/forecast.json?key=8b78ddff94f24e8087b182603232609&q=manchester&days=5&aqi=no&alerts=no'

      // Return day of the week
      function getDayOfWeek(date) {
        let daysOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        let dayOfWeek = new Date(date).getDay();

        if (
            isNaN(dayOfWeek) ||
            dayOfWeek < 0 ||
            dayOfWeek >= daysOfWeek.length
        ) {
            return null;
        }

        return daysOfWeek[dayOfWeek];
    }

    getDayOfWeek();
