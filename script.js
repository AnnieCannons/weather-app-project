let apiKey = "8b78ddff94f24e8087b182603232609";
let callLibrary = [];
let cityFromUser;
let cityLink;
let dayCall;
let today;
let future;
let todayClass;
let todayValue;
let futureClass;
let futureValue;
let today_message;
let futureLibrary;
let maxlist = [];
let maxDate = [];
let highestTemp = "";
let future1 = document.getElementById("1");
let future2 = document.getElementById("2");
let future3 = document.getElementById("3");
futureResults = [1, 2, 3];
let celsiusButton = document.querySelector("button.c");
let todaySummary;
let max;
let searchList = document.querySelector(".history-button")
let hiddenConverter = document.querySelector(".hidden-converter");
let hiddenMaincontent = document.querySelector(".hidden-maincontent");
let initialHead = document.querySelector(".initial-header");
let initialBody = document.querySelector(".initial-body");
let recall = document.getElementsByClassName("recall");
let searched = [];
let recentList = document.getElementsByClassName("recent-list");
let searchHistory = ''
let searchInput;




        function onChange() {
                cityFromUser = document.getElementById("search-input").value;
                console.log(cityFromUser);
                cityFromUser.trim();

                if (cityFromUser.includes(" ")) {
                        cityFromUser = cityFromUser.replace(/ /g, "-");
                }


                searched.unshift(cityFromUser);
                console.log(searched)

              
                for(let i = 0; i<searched.length; i++){
                      
                        searchHistory +=  (`
                        <div class="recent-list">
                        <i class="fa-solid fa-clock-rotate-left"></i>
                        <p>${searched[i]}</p>
                        </div>
                        `)
                }
                
      recentList.textContent = searchHistory;


                function addRemove () {
                hiddenConverter.classList.remove("hidden-converter");
                hiddenMaincontent.classList.remove("hidden-maincontent");
                initialHead.classList.remove("initial-header");
                initialHead.classList.add("header");
                initialBody.classList.remove("initial-body");
                initialBody.classList.add("body");
                searchList.classList.add("history-active")
                }
                addRemove();


                cityLink = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityFromUser}&days=${4}&aqi=no&alerts=no`;

                fetch(cityLink)

                        .then((response) => response.json())
                        .then((data) => {

                        
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

                                dayCall = data.forecast.forecastday;

                               

                                today = {
                                        date: (document.querySelector(
                                                `#todays-results .date`
                                        ).textContent = `Today`),

                                        located: (document.querySelector(
                                                `#todays-results .located`
                                        ).textContent = `${data.location.name}, ${data.location.region}`),

                                        currentTemp: (document.querySelector(
                                                `#todays-results .currentTemp`
                                        ).textContent = `Currently: ${data.current.temp_f}°F`),

                                        feelslike: (document.querySelector(
                                                `#todays-results .maxtemp`
                                        ).textContent = `Today's High: ${dayCall[0].day.maxtemp_f}°F`),

                                        maxtemp: (document.querySelector(
                                                `#todays-results .mintemp`
                                        ).textContent = `Todays Low: ${dayCall[0].day.mintemp_f}°F`),

                                        mintemp: (document.querySelector(
                                                `#todays-results .feelslike`
                                        ).textContent = `Feels Like: ${data.current.feelslike_f}°F`),

                                        chanceOfRain: (document.querySelector(
                                                `#todays-results .chance-of-rain`
                                        ).textContent = `Chance of Rain: ${dayCall[0].day.daily_chance_of_rain}%`),
                                };


                                for (let i = 1; i < 4; i++) {
                                        let dates = ["zero", "one", "two", "three"];
                                        (document.querySelector(`#${dates[i]} .date`).textContent =
                                                getDayOfWeek(dayCall[i].date)),
                                                (document.querySelector(
                                                        `#${dates[i]} .avetemp`
                                                ).textContent = `Average  Temp: ${dayCall[i].day.avgtemp_f}°F`),
                                                (document.querySelector(
                                                        `#${dates[i]} .maxtemp`
                                                ).textContent = `Today's High: ${dayCall[i].day.maxtemp_f}°F`),
                                                (document.querySelector(
                                                        `#${dates[i]} .mintemp`
                                                ).textContent = `Todays Low: ${dayCall[i].day.mintemp_f}°F`),
                                                (document.querySelector(
                                                        `#${dates[i]} .chance_of_rain`
                                                ).textContent = `Chance of Rain: ${dayCall[i].day.daily_chance_of_rain}%`);
                                }

                                for (let i = 0; i < 4; i++) {
                                        maxlist[i] = dayCall[i].day.maxtemp_f;
                                        maxDate[i] = getDayOfWeek(dayCall[i].date);
                                }

                                max = maxlist.reduce((a, b) => Math.max(a, b), -Infinity);

                                for (let i = 0; i < maxlist.length; i++) {
                                        if (maxlist[i] === max) {
                                                highestTemp = `The highest temperature this week is ${maxlist[i]}°F on ${maxDate[i]}!`;
                                                document.querySelector(`#highestTemp .highestTemp`).textContent =
                                                        highestTemp;
                                        }
                                }

                                if (data.current.temp_f > 75) {
                                        todaySummary = document.querySelector(
                                                `#today_message .todaySummary`
                                        ).textContent = `Its Hot Today!`;
                                } else if (data.current.temp_f > 45 || data.current.temp_f < 75) {
                                        todaySummary = document.querySelector(
                                                `#today_message .todaySummary`
                                        ).textContent = `Its Moderate Today!`;
                                } else if (data.current.temp_f < 45) {
                                        todaySummary = document.querySelector(
                                                `#today_message .todaySummary`
                                        ).textContent = `Its Cold Today!`;
                                }
                        
                        
                                
                        })
                
                
        }



celsiusButton.addEventListener("click", function celsius() {
        fetch(cityLink)
                        .then((response) => response.json())
                        .then((data) => {
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
                                }

                                today = {
                                        date: (document.querySelector(
                                                `#todays-results .date`
                                        ).textContent = `Today`),

                                        located: (document.querySelector(
                                                `#todays-results .located`
                                        ).textContent = `${data.location.name}, ${data.location.region}`),

                                        currentTemp: (document.querySelector(
                                                `#todays-results .currentTemp`
                                        ).textContent = `Currently: ${data.current.temp_f}°C`),

                                        feelslike: (document.querySelector(
                                                `#todays-results .maxtemp`
                                        ).textContent = `Today's High: ${dayCall[0].day.maxtemp_c}°C`),

                                        maxtemp: (document.querySelector(
                                                `#todays-results .mintemp`
                                        ).textContent = `Todays Low: ${dayCall[0].day.mintemp_c}°C`),

                                        mintemp: (document.querySelector(
                                                `#todays-results .feelslike`
                                        ).textContent = `Feels Like: ${data.current.feelslike_c}°C`),

                                        chanceOfRain: (document.querySelector(
                                                `#todays-results .chance-of-rain`
                                        ).textContent = `Chance of Rain: ${dayCall[0].day.daily_chance_of_rain}%`),
                                };

                        for (let i = 1; i < 4; i++) {
                                let dates = ["zero", "one", "two", "three"];
                                (document.querySelector(`#${dates[i]} .date`).textContent =
                                        getDayOfWeek(dayCall[i].date)),
                                        (document.querySelector(
                                                `#${dates[i]} .avetemp`
                                        ).textContent = `Average  Temp: ${dayCall[i].day.avgtemp_c}°C`),
                                        (document.querySelector(
                                                `#${dates[i]} .maxtemp`
                                        ).textContent = `Today's High: ${dayCall[i].day.maxtemp_c}°C`),
                                        (document.querySelector(
                                                `#${dates[i]} .mintemp`
                                        ).textContent = `Todays Low: ${dayCall[i].day.mintemp_c}°C`),
                                        (document.querySelector(
                                                `#${dates[i]} .chance_of_rain`
                                        ).textContent = `Chance of Rain: ${dayCall[i].day.daily_chance_of_rain}%`);
                        }

                        for (let i = 0; i < 4; i++) {
                                maxlist[i] = dayCall[i].day.maxtemp_c;
                                maxDate[i] = getDayOfWeek(dayCall[i].date);
                        }

                        max = maxlist.reduce((a, b) => Math.max(a, b), -Infinity);

                        for (let i = 0; i < maxlist.length; i++) {
                                if (maxlist[i] === max) {
                                        highestTemp = `The highest temperature this week is ${maxlist[i]}°C on ${maxDate[i]}!`;
                                        document.querySelector(`#highestTemp .highestTemp`).textContent =
                                                highestTemp;
                                }
                        }

                        if (data.current.temp_f > 23) {
                                todaySummary = document.querySelector(
                                        `#today_message .todaySummary`
                                ).textContent = `Its Hot Today!`;
                        } else if (data.current.temp_c > 7 || data.current.temp_c < 23) {
                                todaySummary = document.querySelector(
                                        `#today_message .todaySummary`
                                ).textContent = `Its Moderate Today!`;
                        } else if (data.current.temp_c < 7) {
                                todaySummary = document.querySelector(
                                        `#today_message .todaySummary`
                                ).textContent = `Its Cold Today!`;
                        }
                }) })
        
                console.log(searched);
                