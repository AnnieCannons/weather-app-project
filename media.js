
function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null :
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}
let todaysList = '';
let today_message = '';
let futureList = '';
let maxlist = ''
let maxDate = ''
let callLibrary = ''

todayClass = [
    'date',
    'located',
    'currentTemp',
    'feelslike',
    'maxtemp',
    'mintemp',
    'chance_of_rain'
]

todaysMessageClass = [
    'todaySummary',
]


futureClass = [
    'day',
    'avgtemp',
    'maxtemp',
    'mintemp',
    'chance_of_rain',
    'condition_text'
]



document.getElementById("searchButton").addEventListener("click",

        function onChange() {


                let cityFromUser = document.getElementById("searchInput").value;
                console.log(cityFromUser)
           
                if (cityFromUser.includes(" ")) {
                        cityFromUser = cityFromUser.replace(/ /g, "-");
                }

                cityLink = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityFromUser}&days=${4}&aqi=no&alerts=no`;


           
                fetch(cityLink)
                        .then((response) => response.json())
                        .then((data) => {
                        
                               let dayCall = data.forecast.forecastday;

                                for (let i = 1; i < 4; i++) {
                                    maxlist[i] = dayCall[i].day.maxtemp_f;
                                    maxDate[i] = getDayOfWeek(dayCall[i].date);
                                
                                future[i] = [
                                    getDayOfWeek(dayCall[i].date),
                                    `Average Temp: ${dayCall[i].day.avgtemp_f}`,
                                    `Today's High: ${dayCall[i].day.maxtemp_f}`,
                                    `Todays Low: ${dayCall[i].day.mintemp_f}`,
                                    `Chance of Rain: ${dayCall[i].day.daily_chance_of_rain}%`,
                                    `Condition: ${dayCall[i].day.condition.text}`
                                ]

                                let futureList = document.querySelectorAll(".secondary, p")
                                futureList[i].textContent = future[i]



                                
                         
                                
                                
                                    callLibrary[i] =
                                    {
                                            located: `${data.location.name}, ${data.location.region}`,
                                            todaySummary: data.current.condition.text,
                                            todayIcon: data.current.condition.icon,
                                            day: getDayOfWeek(dayCall[i].date),
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

                                today = [
                                    getDayOfWeek(dayCall[0].date),
                                    `${data.location.name}, ${data.location.region}`,
                                    `Currently: ${data.current.temp_f}°`,
                                    `Average Temp: ${dayCall[0].day.avgtemp_f}`,
                                    `Today's High: ${dayCall[0].day.maxtemp_f}`,
                                    `Todays Low: ${dayCall[0].day.mintemp_f}`,
                                    `Feels Like: ${data.current.feelslike_f}°`,
                                    `Chance of Rain: ${dayCall[0].day.daily_chance_of_rain}`
                                ]

                                let todaysList = document.querySelectorAll(".primary")
                                todaysList.textContent = today
                                
                            
                                let todays_message = document.querySelector("todaySummary")
                                todays_message.textContent = data.current.condition.text;
                            }
                            
                            ) 

                            
                        }

                            )

                            console.log(todaysList)
                            console.log(today)