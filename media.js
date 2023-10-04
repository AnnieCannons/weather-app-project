let apiKey = "8b78ddff94f24e8087b182603232609";
let callLibrary = [];
let maxlist = [];
let maxDate = [];
let searched = [];
let searchHistory = []
let dayValue = []
let cityLink;
let today;
let future;
let todayClass;
let todayValue;
let futureClass;
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
let searchList = document.querySelector(".history-button")
let hiddenConverter = document.querySelector(".hidden-converter");
let hiddenMaincontent = document.querySelector(".hidden-maincontent");
let initialHead = document.querySelector(".initial-header");
let initialBody = document.querySelector(".initial-body");
let searchlist = document.querySelector('.searchlist');














// let futureBox;
// let futureField;
// let futureClass;
// let futureId;
// let futureChild;
// let futureChildClass;
// let childValue = [];
// let childClass = [];


// let futureChildValue = 
// {
//     date: `${getDayOfWeek(dayCall[i].date)}`, 
//     avetemp: `Average  Temp: ${dayCall[i].day.avgtemp_f}°F`, 
//     maxtemp: `Today's High: ${dayCall[i].day.maxtemp_f}°F`, 
//     mintemp: `Todays Low: ${dayCall[i].day.mintemp_f}°F`, 
//     chance_of_rain: `Chance of Rain: ${dayCall[i].day.daily_chance_of_rain}%`
// }




// futureBox = [
//     (futureField = document.createElement('div')),
//     (futureClass = futureField.classList.add("content, secondary, ")),
//     (futureId = futureField.setAttribute('id', `${dayValue.length}`)),
// ]



// futureBox = {

//     futureField: document.createElement('div'),

//     futureClass: futureField.classList.add("content, secondary, "),

//     futureId: futureField.setAttribute('id', `future-value`),

//     futureChild: document.createElement('p'),

//     childClass: Object.keys(futureChildValue),

//     childValue: Object.values(futureChildValue),

    
// }

// for(let i = 0; i<5; i++) {
//     futureBox.futureChild
//     futureChild[i].setAttribute(childClass[i]);
//     futureChild[i].innerHTML = childValue[i];
// }