let apiKey = "8b78ddff94f24e8087b182603232609";
let callLibrary = [];
let maxlist = [];
let maxDate = [];
let searched = [];
let searchHistory = []
let dayValue = []
let cityLink;
let today;
// let future;
let todayClass;
let todayValue;
let futureValue;
let today_message;
let futureLibrary;
let todaySummary;
let max;
let searchInput;
let dates;
let dayCall;
let highestTemp;
let future1 = document.getElementById("1");
let future2 = document.getElementById("2");
let future3 = document.getElementById("3");
futureResults = [1, 2, 3];
let celsiusButton = document.querySelector("button.c");
let historyList = document.querySelector(".history-button")
let hiddenConverter = document.querySelector(".hidden-converter");
let hiddenMaincontent = document.querySelector(".hidden-maincontent");
let initialHead = document.querySelector(".initial-header");
let initialBody = document.querySelector(".initial-body");
let searchlist = document.querySelector('.searchlist');





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

// for(let i = 0; i<=5; i++) {
//     futureBox = document.createElement('div');
//     futureBox.classList.add("content", "secondary", i);
//     futureBox.setAttribute('id', `day${i}`);
//      future.appendChild(futureBox);
//     for (let i = 0; i < futureChildClass.length; i++) {
//         futureChild = document.createElement('p');
//         futureChild.setAttribute('id', futureChildClass[i])    
//         futureBox.appendChild(futureChild);
//     }
//     }









let future = document.getElementById('future');
let futureBox = [];
let futureField;
let futureClass;
let futureId;
let futureChild = []
let futureChildClass;
let futureValues;



futureChildClass = 
[
    'date', 
    'avetemp', 
    'maxtemp', 
    'mintemp', 
    'chance_of_rain'
]


for(let i = 0; i<=5; i++) {
futureBox = document.createElement('div');
futureBox.classList.add("content", "secondary", i);
futureBox.setAttribute('id', `day${i}`);
 future.appendChild(futureBox);
for (let i = 0; i < futureChildClass.length; i++) {
    futureChild = document.createElement('p');
    futureChild.setAttribute('id', futureChildClass[i])    
    futureBox.appendChild(futureChild);
}
}




// futureValues = {
//     date: (document.querySelector(`#day${[i]} .date`).textContent =
//     getDayOfWeek(dayCall[i].date)),

//     avgtemp: (document.querySelector(
//             `#day${[i]} .avetemp`
//     ).textContent = `Average  Temp: ${dayCall[i].day.avgtemp_f}°F`),

//     maxtemp: (document.querySelector(
//             `#day${[i]} .maxtemp`
//     ).textContent = `Today's High: ${dayCall[i].day.maxtemp_f}°F`),

//     mintemp:  (document.querySelector(
//             `#day${[i]} .mintemp`
//     ).textContent = `Todays Low: ${dayCall[i].day.mintemp_f}°F`),

//     chance_of_rain: (document.querySelector(
//             `#day${[i]} .chance_of_rain`
//     ).textContent = `Chance of Rain: ${dayCall[i].day.daily_chance_of_rain}%`)
// };


console.log(future)


