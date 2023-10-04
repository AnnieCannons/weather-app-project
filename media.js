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

// (document.querySelector(
// `#${dates[i]} .chance_of_rain`
// ).textContent = `Chance of Rain: ${dayCall[i].day.daily_chance_of_rain}%`);

// let futureBox = [
//     (futureField = document.createElement('div')),
//     (fieldClass = futureField.classList.add("content, secondary, 2")),
//     (fieldId = futureField.setAttribute('id', ${dayValue.length}``))

// ]