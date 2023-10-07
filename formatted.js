
fetch(testLink)

    .then((response) => response.json())

    .then((data) => {

        dayCall = data.forecast.forecastday

        function todaysElements() {

            today = document.createElement('div');
            today.classList.add('main', 'grid-item');
            today.setAttribute('id', 'today')
            mainContent.appendChild(today);

            todaysBox = document.createElement('div');
            todaysBox.classList.add("content", "primary");
            todaysBox.setAttribute('id', 'day0');
            today.appendChild(todaysBox);


            for (let i = 0; i < key.todaysContent.length; i++) {
                todaysContent = document.createElement('p');
                todaysContent.setAttribute('id', key.todaysContent[i])
                todaysContent.innerHTML = key.todaysValues[i];
                todaysBox.append(todaysContent);
            }


            summary = document.createElement('div');
            summary.classList.add('main', 'grid-item');
            summary.setAttribute('id', 'todays-summary');
            mainContent.appendChild(summary);

            summaryBox = document.createElement('div');
            summaryBox.classList.add('content', 'primary');
            summaryBox.setAttribute('id', 'day0');
            summary.appendChild(summaryBox);

            icon = document.createElement('img');
            icon.src = dayCall[0].day.condition.icon;
            summaryBox.append(icon)

            for (let i = 0; i < key.todaysSummaryContent.length; i++) {
                summaryContent = document.createElement('p');
                summaryContent.setAttribute('id', key.todaysSummaryContent[i]);
                summaryContent.textContent = key.todaysSummaryValues[i];
                summaryBox.appendChild(summaryContent);
            }
        }



        function futureElements() {

            future = document.createElement('div');
            future.classList.add('main', 'grid-item');
            future.setAttribute('id', 'future');
            mainContent.appendChild(future);

            for (let i = 1, b = 0; i < 5, b < key.futureContent.length; i++, b++) {
                futureBox = document.createElement('div');
                futureBox.classList.add("content", "secondary", i);
                futureBox.setAttribute('id', `day${i}`);
                future.appendChild(futureBox);

                keys =
                date = `${getDayOfWeek(dayCall[i].date)}`,
                avg = `Average Temp: ${dayCall[i].day.avgtemp_f}°F`,
                max = `Today's High: ${dayCall[i].day.maxtemp_f}°F`,
                min = `Todays Low: ${dayCall[i].day.mintemp_f}°F`,
                rain = `Chance of Rain: ${dayCall[i].day.daily_chance_of_rain}%`


                key.futureContent[i] = document.createElement('p')
                key.futureContent[i].setAttribute('id', key.futureContent[b])
                key.futureContent[i].innerHTML = 

                // futuredate = document.createElement('p')
                // futureavg = document.createElement('p')
                // futuremax = document.createElement('p')
                // futuremin = document.createElement('p')
                // futurerain = document.createElement('p')
             
                // futuredate.setAttribute('id', 'date')
                // futureavg.setAttribute('id', 'avg')
                // futuremax.setAttribute('id', 'max')
                // futuremin.setAttribute('id', 'min')
                // futurerain.setAttribute('id', 'rain')
              
                // futuredate.innerHTML = `${getDayOfWeek(dayCall[i].date)}`
                // futureavg.innerHTML =  `Average Temp: ${dayCall[i].day.avgtemp_f}°F`
                // futuremax.innerHTML =  `Today's High: ${dayCall[i].day.maxtemp_f}°F`
                // futuremin.innerHTML =  `Todays Low: ${dayCall[i].day.mintemp_f}°F`
                // futurerain.innerHTML = `Chance of Rain: ${dayCall[i].day.daily_chance_of_rain}%`

                // futureBox.appendChild(futuredate)
                // futureBox.appendChild(futureavg)
                // futureBox.appendChild(futuremax)
                // futureBox.appendChild(futuremin)
                // futureBox.appendChild(futurerain)
            }




            overview = document.createElement('div');
            overview.classList.add('main', 'grid-item');
            overview.setAttribute('id', 'overview');
            footer.appendChild(overview);

            overviewBox = document.createElement('div');
            overviewBox.classList.add('content')
            overviewBox.setAttribute('id', 'content');
            overview.appendChild(overviewBox);


            for (let i = 0; i < key.overViewContent.length; i++) {
                overViewContent = document.createElement('p');
                overViewContent.textContent = key.overViewContent;
                overviewBox.appendChild(overViewContent);

            }
        }


        key = {


            newElements:
                [
                    'today',
                    'todaysBox',
                    'summary',
                    'summaryBox',
                    'future',
                    'futureBox',
                    'overview',
                    'overviewBox',
                ],

            classes:
                [
                    'grid-item',
                    'content',
                    'grid-item',
                    'content',
                    'grid-item',
                    'content',
                    'grid-item',
                    'content',
                ],

            todaysContent:
                [
                    "date",
                    "located",
                    "currentTemp",
                    "feelslike",
                    "maxtemp",
                    "mintemp",
                    "chance_of_rain",
                ],

            todaysValues:
                [
                    ' today',
                    `${data.location.name}, ${data.location.region}`,
                    `Currently: ${data.current.temp_f}°F`,
                    `Today's High: ${dayCall[0].day.maxtemp_f}°F`,
                    `Todays Low: ${dayCall[0].day.mintemp_f}°F`,
                    `Feels Like: ${data.current.feelslike_f}°F`,
                    `Chance of Rain: ${dayCall[0].day.daily_chance_of_rain}%`
                ],

            todaysSummaryContent:
                ["todaySummary"
                ],

            todaysSummaryValues:
                [
                    'message',
                ],

            futureContent:
                [
                    'futuredate',
                    'futureavg',
                    'futuremax',
                    'futuremin',
                    'futurerain',
                ],

        
            overViewContent:
                ["highestTemp"],




        };



        todaysElements();
        futureElements();



    });




let mainContent = document.querySelector(".main-content");
let footer = document.querySelector('.footer')
console.log(mainContent)
console.log(footer)