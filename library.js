





let apiKey = "8b78ddff94f24e8087b182603232609";
let searched = [];
let searchHistory = [];
let searchButton = document.querySelector(".history-button");
let searchLink = [];
let searchList = document.querySelector('.searchlist');
let results;
let dayCall;
let cityFromUser = document.getElementById("search-input").value;
let testLink;
let icon;
let cityLink;
let maxlist = [];
let maxDate = [];
let highestTemp;
let celsius;
let f = document.querySelector('.f')
let c = document.querySelector('.c')



function onChange() {

  

  let cityFromUser = document.getElementById("search-input").value;
  let dayCount = document.getElementById("dayCount").value;

  cityFromUser.trim();

  if (cityFromUser.includes(" ")) {
    cityFromUser = cityFromUser.replace(/ /g, "-");
  }

  cityLink = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityFromUser}&days=${dayCount}&aqi=no&alerts=no`;
  searched.unshift(cityFromUser);
  searchHistory.unshift(cityLink);

  let link = document.createElement("a");
  let txt = document.createTextNode(
    ` ${document.getElementById("search-input").value}`
  );
  link.appendChild(txt);
  link.title = document.getElementById("search-input").value;
  link.href = cityLink;
  link.setAttribute("class", "fa-solid fa-clock-rotate-left");
  searchList.append(link);

  console.log(cityLink, cityFromUser, dayCount, searched, searchHistory);
  cityLink = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityFromUser}&days=${dayCount}&aqi=no&alerts=no`;
  fetch(cityLink)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Failed to load weather data`);
      }
    })

    .then((data) => {


      dayCall = data.forecast.forecastday;

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

      
      //Todays Summary results
      if (data.current.temp_f > 75) {
        message = `<i class="fa-solid fa-umbrella-beach"></i> Its Hot Today!`;
      } else if (data.current.temp_f > 45 || data.current.temp_f < 75) {
        message = `<i class="fa-solid fa-wind"></i>  Its Moderate Today!`;
      } else if (data.current.temp_f < 45) {
        message = `<i class="fa-regular fa-snowflake"></i>  Its Cold Today!`;
      }

      // Highest temp results

      for (let i = 0; i < dayCount; i++) {
        maxlist[i] = dayCall[i].day.maxtemp_f;
        maxDate[i] = getDayOfWeek(dayCall[i].date);
      }

      // Use the reduce method to return the highest value in the array

      max = maxlist.reduce((a, b) => Math.max(a, b), -Infinity);

      //set the value of the highestTemp display message with custom responses based on the results

      for (let i = 0; i < maxlist.length; i++) {
        //if the highest temp falls on the same day, return this message otherwise return future notice message

        if (maxlist[i] === dayCall[0].day.maxtemp_f) {
          highestTemp = `<i class="fa-solid fa-temperature-high"></i> Today is  the hottest day of the week with a high of ${maxlist[i]}°F!`;
        } else if (maxlist[i] === max) {
          highestTemp = `<i class="fa-solid fa-temperature-high"></i> The highest temperature this week is ${maxlist[i]}°F on ${maxDate[i]}!`;
        }
      }
 


      key = {

        todaysContent: [
          "todaysdate",
          "located",
          "currentTemp",
          "feelslike",
          "maxtemp",
          "mintemp",
          "chance-of-rain",
        ],

        todaysValues: [
          `<i class="fa-solid fa-calendar-day"></i>  Today`,
          `<i class="fa-solid fa-location-dot"></i>  ${data.location.name}, ${data.location.region}`,
          `<i class="fa-regular fa-clock"></i> Currently: ${data.current.temp_f}°F`,
          `<i class="fa-solid fa-clock"></i>  Today's High: ${dayCall[0].day.maxtemp_f}°F`,
          `<i class="fa-regular fa-sun"></i> Todays Low: ${dayCall[0].day.mintemp_f}°F`,
          `<i class="fa-solid fa-temperature-half"></i> Feels Like: ${data.current.feelslike_f}°F`,
          `<i class="fa-solid fa-umbrella"></i> Chance of Rain: ${dayCall[0].day.daily_chance_of_rain}%`,
        ],

        todaysSummaryContent: ["todaySummary"],

        todaysSummaryValues: [message],

        overViewContent: [highestTemp],
      };
      

      today = document.createElement("div");
      today.classList.add("main", "t");
      today.setAttribute("id", "today");
      mainContent.appendChild(today);

      todaysBox = document.createElement("div");
      todaysBox.classList.add("content", "primary");
      todaysBox.setAttribute("id", "day0");
      today.appendChild(todaysBox);

      for (let i = 0; i < key.todaysContent.length; i++) {
        todaysContent = document.createElement("p");
        todaysContent.setAttribute("id", key.todaysContent[i]);
        todaysContent.innerHTML = key.todaysValues[i];
        todaysBox.append(todaysContent);
      }

      summary = document.createElement("div");
      summary.classList.add("main", "f");
      summary.setAttribute("id", "todays-summary");
      mainContent.appendChild(summary);

      summaryBox = document.createElement("div");
      summaryBox.classList.add("content", "primary");
      summaryBox.setAttribute("id", "day0");
      summary.appendChild(summaryBox);

      icon = document.createElement("img");
      icon.src = dayCall[0].day.condition.icon;
      summaryBox.append(icon);

      for (let i = 0; i < key.todaysSummaryContent.length; i++) {
        summaryContent = document.createElement("p");
        summaryContent.setAttribute("id", key.todaysSummaryContent[i]);
        summaryContent.innerHTML = key.todaysSummaryValues[i];
        summaryBox.appendChild(summaryContent);
      }

      future = document.createElement("div");
      future.classList.add("main", "f");
      future.setAttribute("id", "future");
      mainContent.appendChild(future);

      for (let i = 1; i < dayCount; i++) {
        futureBox = document.createElement("div");
        futureBox.classList.add("content", "secondary", i);
        futureBox.setAttribute("id", `day${i}`);
        future.appendChild(futureBox);

        futuredate = document.createElement("p");
        futureavg = document.createElement("p");
        futuremax = document.createElement("p");
        futuremin = document.createElement("p");
        futurerain = document.createElement("p");

        futuredate.setAttribute("id", "date");
        futureavg.setAttribute("id", "avg");
        futuremax.setAttribute("id", "max");
        futuremin.setAttribute("id", "min");
        futurerain.setAttribute("id", "rain");

        (futuredate.innerHTML = `<i class="fa-solid fa-calendar-day"></i> ${getDayOfWeek(dayCall[i].date)}`),
          (futureavg.innerHTML = `<i class="fa-solid fa-gauge"></i> Average Temp: ${dayCall[i].day.avgtemp_f}°F`);
        futuremax.innerHTML = `<i class="fa-solid fa-sun"></i> Today's High: ${dayCall[i].day.maxtemp_f}°F`;
        futuremin.innerHTML = `<i class="fa-regular fa-sun"></i>  Todays Low: ${dayCall[i].day.mintemp_f}°F`;
        futurerain.innerHTML = `<i class="fa-solid fa-umbrella"></i> Chance of Rain: ${dayCall[i].day.daily_chance_of_rain}%`;

        futureBox.appendChild(futuredate);
        futureBox.appendChild(futureavg);
        futureBox.appendChild(futuremax);
        futureBox.appendChild(futuremin);
        futureBox.appendChild(futurerain);
      }

      overview = document.createElement("div");
      overview.classList.add("main", "f");
      overview.setAttribute("id", "overview");
      footer.appendChild(overview);

      overviewBox = document.createElement("div");
      overviewBox.classList.add("content");
      overviewBox.setAttribute("id", "content");
      overview.appendChild(overviewBox);

      for (let i = 0; i < key.overViewContent.length; i++) {
        overViewContent = document.createElement("p");
        overviewBox.setAttribute("id", "overviewValue");
        overViewContent.innerHTML = key.overViewContent[i];
        overviewBox.appendChild(overViewContent);
      }
    
    })
    .catch(error => {
        // Handle errors, including API failure
        alert('Failed to load weather data. Please try again later.');
        console.error('Error:', error);
});


}





   celsius = document.querySelector('.c').addEventListener('click', 
    function celsius() {

      

        let cityFromUser = document.getElementById("search-input").value;
  let dayCount = document.getElementById("dayCount").value;

  cityFromUser.trim();

  if (cityFromUser.includes(" ")) {
    cityFromUser = cityFromUser.replace(/ /g, "-");
  }

  cityLink = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityFromUser}&days=${dayCount}&aqi=no&alerts=no`;
  searched.unshift(cityFromUser);
  searchHistory.unshift(cityLink);

  let link = document.createElement("a");
  let txt = document.createTextNode(
    ` ${document.getElementById("search-input").value}`
  );
  link.appendChild(txt);
  link.title = document.getElementById("search-input").value;
  link.href = cityLink;
  link.setAttribute("class", "fa-solid fa-clock-rotate-left");
  searchList.append(link);

  console.log(cityLink, cityFromUser, dayCount, searched, searchHistory);



        fetch(cityLink)
        .then((response) => response.json())
        .then((data) => {
          

    dayCall = data.forecast.forecastday;

  

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

    
      
         // Highest temp results

         for (let i = 0; i < dayCount; i++) {
            maxlist[i] = dayCall[i].day.maxtemp_c;
            maxDate[i] = getDayOfWeek(dayCall[i].date);
          }
    
          // Use the reduce method to return the highest value in the array
    
          max = maxlist.reduce((a, b) => Math.max(a, b), -Infinity);
    
          //set the value of the highestTemp display message with custom responses based on the results
    
          for (let i = 0; i < maxlist.length; i++) {
            //if the highest temp falls on the same day, return this message otherwise return future notice message
    
            if (maxlist[i] === dayCall[0].day.maxtemp_c) {
              highestTemp = `Today is  the hottest day of the week with a high of ${maxlist[i]}°C!`;
            } else if (maxlist[i] === max) {
              highestTemp = `The highest temperature this week is ${maxlist[i]}°C on ${maxDate[i]}!`;
            }
          }




          key = {

            todaysContent: [
              "todaysdate",
              "located",
              "currentTemp",
              "feelslike",
              "maxtemp",
              "mintemp",
              "chance-of-rain",
            ],
    
            todaysValues: [
                " Today",
                `${data.location.name}, ${data.location.region}`,
                `Currently: ${data.current.temp_c}°C`,
                `Today's High: ${dayCall[0].day.maxtemp_c}°C`,
                `Todays Low: ${dayCall[0].day.mintemp_c}°C`,
                `Feels Like: ${data.current.feelslike_c}°C`,
                `Chance of Rain: ${dayCall[0].day.daily_chance_of_rain}%`,
              ],
    
            todaysSummaryContent: ["todaySummary"],
    
            todaysSummaryValues: [message],
    
            overViewContent: [highestTemp],
          };
          
    
          for (let i = 0; i < key.todaysContent.length; i++) {
            todaysContent.innerHTML = key.todaysValues[i]
            todaysBox.append(todaysContent);
          }
    
        
    
          for (let i = 0; i < key.todaysSummaryContent.length; i++) {
    
            summaryContent.innerHTML = key.todaysSummaryValues[i];
            summaryBox.appendChild(summaryContent);
          }
    
   
          for (let i = 1; i < dayCount; i++) {
        
            (futuredate.innerHTML = getDayOfWeek(dayCall[i].date)),
              (futureavg.innerHTML = `Average Temp: ${dayCall[i].day.avgtemp_c}°C`);
            futuremax.innerHTML = `Today's High: ${dayCall[i].day.maxtemp_c}°C`;
            futuremin.innerHTML = `Todays Low: ${dayCall[i].day.mintemp_c}°C`;
            futurerain.innerHTML = `Chance of Rain: ${dayCall[i].day.daily_chance_of_rain}%`;
    
            futureBox.appendChild(futuredate);
            futureBox.appendChild(futureavg);
            futureBox.appendChild(futuremax);
            futureBox.appendChild(futuremin);
            futureBox.appendChild(futurerain);
          }
    
    
    
          for (let i = 0; i < key.overViewContent.length; i++) {
        
            overViewContent.innerHTML = key.overViewContent[i];
            overviewBox.appendChild(overViewContent);
          }
        
        })
        .catch(error => {
            // Handle errors, including API failure
            alert('Failed to load weather data. Please try again later.');
            console.error('Error:', error);
    });
    
    console.log(mainContent)
    })
    


let mainContent = document.querySelector(".main-content");
let footer = document.querySelector(".footer");

