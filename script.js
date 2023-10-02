let apiKey = "8b78ddff94f24e8087b182603232609";
let callLibrary = [];
let cityFromUser = " ";
let cityLink = "";
let dayCall = "";
let today = "";
let today_message = "";
let futureLibrary = "";
let maxlist = [];
let maxDate = [];
let future1 = document.getElementById("1");
let future2 = document.getElementById("2");
let future3 = document.getElementById("3");
futureResults = [1, 2, 3];
let celsiusButton = document.querySelector("button.c");
let fahrenheitButton = document.querySelector("button.f");
let todaySummary = ''






today = [
        "date",
        "located",
        "currentTemp",
        "feelslike",
        "maxtemp",
        "mintemp",
        "chance_of_rain",
];

let future = ["date", "avgtemp", "maxtemp", "mintemp", "chance_of_rain"];

document.getElementById("searchButton").addEventListener(
        "click",

        function onChange() {
                cityFromUser = document.getElementById("searchInput").value;
                console.log(cityFromUser);

                if (cityFromUser.includes(" ")) {
                        cityFromUser = cityFromUser.replace(/ /g, "-");
                }

                cityLink = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityFromUser}&days=${4}&aqi=no&alerts=no`;

                fetch(cityLink)
                        .then((response) => response.json())
                        .then((data) => {
                                function getDayOfWeek(date) {
                                        const dayOfWeek = new Date(date).getDay();
                                        return isNaN(dayOfWeek)
                                                ? null
                                                : [
                                                        "Sunday",
                                                        "Monday",
                                                        "Tuesday",
                                                        "Wednesday",
                                                        "Thursday",
                                                        "Friday",
                                                        "Saturday",
                                                ][dayOfWeek];
                                }

                                dayCall = data.forecast.forecastday;


                                todayList = [
                                        (document.querySelector(
                                                `#todaysResults .date`
                                        ).textContent = `Today`),
                                        (document.querySelector(
                                                `#todaysResults .located`
                                        ).textContent = `${data.location.name}, ${data.location.region}`),
                                        (document.querySelector(
                                                `#todaysResults .currentTemp`
                                        ).textContent = `Currently: ${data.current.temp_f}°F`),
                                        (document.querySelector(
                                                `#todaysResults .maxtemp`
                                        ).textContent = `Today's High: ${dayCall[0].day.maxtemp_f}°F`),
                                        (document.querySelector(
                                                `#todaysResults .mintemp`
                                        ).textContent = `Todays Low: ${dayCall[0].day.mintemp_f}°F`),
                                        (document.querySelector(
                                                `#todaysResults .feelslike`
                                        ).textContent = `Feels Like: ${data.current.feelslike_f}°F`),
                                        (document.querySelector(
                                                `#todaysResults .chance_of_rain`
                                        ).textContent = `Chance of Rain: ${dayCall[0].day.daily_chance_of_rain}%`),
                                ];



                                for (let i = 1; i < 4; i++) {
                                        maxlist[i] = dayCall[i].day.maxtemp_f;
                                        maxDate[i] = getDayOfWeek(dayCall[i].date);
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


                                let highestTemp = `The highest temperature this week is ${maxlist[0]} on ${maxDate[0]}!`;
                                for (let i = 0; i < maxlist.length; i++) {
                                       
                                        if (maxlist[i] > highestTemp) {
                                                highestTemp = `The highest temperature this week is ${maxlist[i]} on ${maxDate[i]}!`;
                                                document.querySelector(`#highestTemp .highestTemp`).textContent =
                                                        highestTemp;
                                        } else {
                                                highestTemp = `The highest temperature this week is ${maxlist[0]} on ${maxDate[0]}!`;
                                                document.querySelector(`#highestTemp .highestTemp`).textContent =
                                                        highestTemp;
                                        }
                                }


                                if (data.current.temp_f > 75) {
                                        todaySummary = document.querySelector(`#today_message .todaySummary`).textContent = `Its Hot Today!`;
                                } else if (data.current.temp_f > 45 || data.current.temp_f < 75) { todaySummary = document.querySelector(`#today_message .todaySummary`).textContent = `Its Moderate Today!`; } else if (data.current.temp_f < 45) {
                                        todaySummary = document.querySelector(`#today_message .todaySummary`).textContent = `Its Cold Today!`;
                                }

                        
                                })
                        })


                                celsiusButton.addEventListener("click", function celsius() {

                                        cityFromUser = document.getElementById("searchInput").value;
                                        console.log(cityFromUser);

                                        if (cityFromUser.includes(" ")) {
                                                cityFromUser = cityFromUser.replace(/ /g, "-");
                                        }

                                        cityLink = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityFromUser}&days=${4}&aqi=no&alerts=no`;

                                        fetch(cityLink)
                                                .then((response) => response.json())
                                                .then((data) => {
                                                        function getDayOfWeek(date) {
                                                                const dayOfWeek = new Date(date).getDay();
                                                                return isNaN(dayOfWeek)
                                                                        ? null
                                                                        : [
                                                                                "Sunday",
                                                                                "Monday",
                                                                                "Tuesday",
                                                                                "Wednesday",
                                                                                "Thursday",
                                                                                "Friday",
                                                                                "Saturday",
                                                                        ][dayOfWeek];
                                                        }

                                                        dayCall = data.forecast.forecastday;


                                                        todayList = [
                                                                (document.querySelector(
                                                                        `#todaysResults .date`
                                                                ).textContent = `Today`),
                                                                (document.querySelector(
                                                                        `#todaysResults .located`
                                                                ).textContent = `${data.location.name}, ${data.location.region}`),
                                                                (document.querySelector(
                                                                        `#todaysResults .currentTemp`
                                                                ).textContent = `Currently: ${data.current.temp_c}°C`),
                                                                (document.querySelector(
                                                                        `#todaysResults .maxtemp`
                                                                ).textContent = `Today's High: ${dayCall[0].day.maxtemp_c}°C`),
                                                                (document.querySelector(
                                                                        `#todaysResults .mintemp`
                                                                ).textContent = `Todays Low: ${dayCall[0].day.mintemp_c}°C`),
                                                                (document.querySelector(
                                                                        `#todaysResults .feelslike`
                                                                ).textContent = `Feels Like: ${data.current.feelslike_c}°C`),
                                                                (document.querySelector(
                                                                        `#todaysResults .chance_of_rain`
                                                                ).textContent = `Chance of Rain: ${dayCall[0].day.daily_chance_of_rain}`),
                                                        ];



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

                                                        

                                                        let highestTemp = `The highest temperature this week is ${maxlist[0]} on ${maxDate[0]}!`;
                                                     
                                                        for (let i = 0; i < maxlist.length; i++) {
                                                          ;
                                                                if (maxlist[i] > highestTemp) {
                                                                        highestTemp = `The highest temperature this week is ${maxlist[i]} on ${maxDate[i]}!`;
                                                                        document.querySelector(`#highestTemp .highestTemp`).textContent =
                                                                                highestTemp;
                                                                } else {
                                                                        highestTemp = `The highest temperature this week is ${maxlist[0]} on ${maxDate[0]}!`;
                                                                        document.querySelector(`#highestTemp .highestTemp`).textContent =
                                                                                highestTemp;
                                                                }
                                                        }


                                                        if (data.current.temp_f > 23) {
                                                                todaySummary = document.querySelector(`#today_message .todaySummary`).textContent = `Its Hot Today!`;
                                                        } else if (data.current.temp_c > 7 || data.current.temp_c < 23) { todaySummary = document.querySelector(`#today_message .todaySummary`).textContent = `Its Moderate Today!`; } else if (data.current.temp_c < 7) {
                                                                todaySummary = document.querySelector(`#today_message .todaySummary`).textContent = `Its Cold Today!`;
                                                        }


                                                })
                                        })
                        
                        
                
                                                
                                        