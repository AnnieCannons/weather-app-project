
let apiKey = '8b78ddff94f24e8087b182603232609'
let callLibrary = []
let cityFromUser = ' '
let cityLink = ''
let dayCall = ''
let results = ''
let elementList = ''
let current = 'Current'
let today = ''
let today_message = ''
let futureLibrary1 = ''
let futureLibrary2 = ''
let futureLibrary3 = ''
let maxlist = []
let maxDate = []



let maxtemp = ''
let avgtemp = ''
let daily_chance_of_rain = ''
let condition_icon = ''
let condition_text = ''
let sunrise = ''
let sunset = ''
let moonphase = ''
let currentTemp
let country = ''
let region = ''
let todaySummary = ''
let weekday = ''
let weekHighest = ''
let date = ''
let feelslike = ''
let state = ''
let future = ''
let todaysMessage = ''


today = [
        'date',
        'located',
        'currentTemp',
        'feelslike',
        'maxtemp',
        'mintemp',
        'chance_of_rain'
]

todaysMessage = [
        'todaySummary',
        'todayIcon'
]


future = [
        'date',
        'avgtemp',
        'maxtemp',
        'mintemp',
        'chance_of_rain',
        // 'condition_icon',
        'condition_text'
]




                



document.getElementById("searchButton").addEventListener("click",

        function onChange() {


                cityFromUser = document.getElementById("searchInput").value;
                console.log(cityFromUser)
           
                if (cityFromUser.includes(" ")) {
                        cityFromUser = cityFromUser.replace(/ /g, "-");
                }

                cityLink = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityFromUser}&days=${4}&aqi=no&alerts=no`;


           
                fetch(cityLink)
                        .then((response) => response.json())
                        .then((data) => {

                                function getDayOfWeek(date) {
                                        const dayOfWeek = new Date(date).getDay();
                                        return isNaN(dayOfWeek) ? null :
                                                ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
                                }

                                

                                dayCall = data.forecast.forecastday;


                                todayList = [
                                        getDayOfWeek(dayCall[0].date),
                                        `${data.location.name}, ${data.location.region}`,
                                        `Currently: ${data.current.temp_f}°`,
                                        `Average Temp: ${dayCall[0].day.avgtemp_f}`,
                                        `Today's High: ${dayCall[0].day.maxtemp_f}`,
                                        `Todays Low: ${dayCall[0].day.mintemp_f}`,
                                        `Feels Like: ${data.current.feelslike_f}°`,
                                        `Chance of Rain: ${dayCall[0].day.daily_chance_of_rain}`
                                ]

                                todaySummary = [
                                        data.current.condition.text,
                                        // <img href="${data.current.condition.icon}">,
                                ]


                                futureLibrary1 = [
                                        getDayOfWeek(dayCall[1].date),
                                        `Average Temp: ${dayCall[1].day.avgtemp_f}`,
                                        `Today's High: ${dayCall[1].day.maxtemp_f}`,
                                        `Todays Low: ${dayCall[1].day.mintemp_f}`,
                                        `Chance of Rain: ${dayCall[1].day.daily_chance_of_rain}%`,
                                        // `<img href="${dayCall[i].day.condition.icon}">`,
                                        `Condition: ${dayCall[1].day.condition.text}`
                                ]

                                futureLibrary2 = [
                                        getDayOfWeek(dayCall[2].date),
                                        `Average Temp: ${dayCall[2].day.avgtemp_f}`,
                                        `Today's High: ${dayCall[2].day.maxtemp_f}`,
                                        `Todays Low: ${dayCall[2].day.mintemp_f}`,
                                        `Chance of Rain: ${dayCall[2].day.daily_chance_of_rain}%`,
                                        // `<img href="${dayCall[i].day.condition.icon}">`,
                                        `Condition: ${dayCall[2].day.condition.text}`
                                ]

                                futureLibrary3 = [
                                        getDayOfWeek(dayCall[3].date),
                                        `Average Temp: ${dayCall[3].day.avgtemp_f}`,
                                        `Today's High: ${dayCall[3].day.maxtemp_f}`,
                                        `Todays Low: ${dayCall[3].day.mintemp_f}`,
                                        `Chance of Rain: ${dayCall[3].day.daily_chance_of_rain}%`,
                                        // `<img href="${dayCall[i].day.condition.icon}">`,
                                        `Condition: ${dayCall[3].day.condition.text}`
                                ]

                                for (let i = 0; i < 4; i++) {
                                        maxlist[i] = dayCall[i].day.maxtemp_f;
                                        maxDate[i] = getDayOfWeek(dayCall[i].date);

                                        callLibrary[i] =
                                        {
                                                located: `${data.location.name}, ${data.location.region}`,
                                                todaySummary: data.current.condition.text,
                                                todayIcon: data.current.condition.icon,
                                                date: dayCall[i].date,
                                                name: data.location.name,
                                                region: data.location.region,
                                                country: data.location.country,
                                                currentTemp: `Currently: ${data.current.temp_f}°`,
                                                feelslike: `Feels Like: ${data.current.feelslike_f}°`,
                                                maxtemp: `Today's High: ${dayCall[i].day.maxtemp_f}`,
                                                mintemp: `Todays Low: ${dayCall[i].day.mintemp_f}`,
                                                avgtemp: `Average Temp: ${dayCall[i].day.avgtemp_f}`,
                                                chance_of_rain: `Chance of Rain: ${dayCall[i].day.daily_chance_of_rain}%`,
                                                // condition_icon: `${dayCall[i].day.condition.icon}`,
                                                condition_text: `Condition: ${dayCall[i].day.condition.text}`,
                                                sunrise: `Sunrise: ${dayCall[i].astro.sunrise.text}`,
                                                sunset: `Sunset: ${dayCall[i].astro.sunset.text}`,
                                                moonphase: `Moonphase: ${dayCall[i].astro.moon_phase}`,

                                        }

                                }



                                todaysResults = document.getElementById("todaysResults");
                                for (let i = 0; i < today.length; i++) {
                                        p = document.createElement('p');
                                        p.setAttribute('id', today[i]);
                                        p.innerHTML = todayList[i];
                                        todaysResults.appendChild(p)
                                        todaysResults.classList.remove("hidden")

                                }


                                todays_message = document.getElementById("today_message")
                                for (let i = 0; i < todaysMessage.length; i++) {
                                        p = document.createElement('p');
                                        p.setAttribute('id', todaysMessage[i]);
                                        p.textContent = todaySummary[i];
                                        todays_message.appendChild(p)
                                        todays_message.classList.remove("hidden")

                                }

                                futureResults1 = document.getElementById("futureResults1")
                                for (let i = 0; i < future.length; i++) {
                                        p = document.createElement('p');
                                        p.setAttribute('id', future[i]);
                                        p.textContent = futureLibrary1[i];
                                        futureResults1.appendChild(p);
                                        futureResults1.classList.remove("hidden")
                                }

                                futureResults2 = document.getElementById("futureResults2")
                                for (let i = 0; i < future.length; i++) {
                                        p = document.createElement('p');
                                        p.setAttribute('id', future[i]);
                                        p.textContent = futureLibrary2[i];
                                        futureResults2.appendChild(p);
                                        futureResults2.classList.remove("hidden")
                                }

                                futureResults3 = document.getElementById("futureResults3")
                                for (let i = 0; i < future.length; i++) {
                                        p = document.createElement('p');
                                        p.setAttribute('id', future[i]);
                                        p.textContent = futureLibrary3[i];
                                        futureResults3.appendChild(p);
                                        futureResults3.classList.remove("hidden")
                                }
                                console.log(maxDate, maxlist)

                                let highestTemp = `The highest temperature this week is ${maxlist[0]} on ${maxDate[0]}!`
                                console.log(maxlist)
                                for (let i = 0; i < maxlist.length; i++) {
                                        console.log(maxlist[i])
                                        if (maxlist[i] > highestTemp) {

                                                highestTemp = `The highest temperature this week is ${maxlist[i]} on ${maxDate[i]}!`
                                        } else { highestTemp = `The highest temperature this week is ${maxlist[0]} on ${maxDate[0]}!` }
                                }

                                console.log(highestTemp)
                                highTemp = document.getElementById("highestTemp")
                                initial = document.querySelectorAll(".initial")
                                p = document.createElement('p');
                                p.setAttribute('id', 'highestTemp');
                                p.innerHTML = highestTemp;
                                highTemp.appendChild(p)
                                highTemp.classList.remove("hidden")
                        

                        })

                    
                                
        })
        
