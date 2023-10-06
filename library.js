let mainContent = document.querySelector(".main-content");
let key;


todayKey = {

  todayTitle: 
  ["today", 
  "summary"],

  containers: 
  ["todaysBox", 
  "summaryBox"],

  elements: 
  ["todaysContent", 
  "summaryContent"],

  todayLists: 
  [
    "date",
    "located",
    "currentTemp",
    "feelslike",
    "maxtemp",
    "mintemp",
    "chance_of_rain",
  ],

  summaryClass: 
  ["todaySummary", 
  "todaysIcon", 
  "currentTime"],
};








futureKey = {
  
  futureTitle: 
  ["future", 
  "overview"],

  containers: 
  ["futureBox", 
  "overviewBox"],

  elements: 
  ["futureContent", 
  "overviewContent"],

  futureContentClass: [
    "date",
    "avgtemp",
    "maxtemp",
    "mintemp",
    "chance_of_rain",
  ],

  overViewClass: 
  [
    "highestTemp"
  ],

  futureContentClassF: 
  [
    "date",
    "avgtemp",
    "maxtemp",
    "mintemp",
    "chance_of_rain",
  ],

  futureContentClassC: 
  [
    "date",
    "avgtemp",
    "maxtemp",
    "mintemp",
    "chance_of_rain",
  ],

  futurevalue: 
  [
'getDayOfWeek(dayCall[i].date))',

  ]

};





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

gridItems: 
[
  'today',
  'summary',
  'future',
  'overview',
 
],


boxes: 
[
  'todayBox',
  'summaryBox',
  'futureBox',
  'overviewBox'
],


  content: 
  [
    "todaysContent",
    "summaryContent",
    "futureContent",
    "overviewContent",
  ],

  todayAttributes: 
  [
  ],

  todaysContentClass: 
  [
    "date",
    "located",
    "currentTemp",
    "feelslike",
    "maxtemp",
    "mintemp",
    "chance_of_rain",
  ],

  todaysSummaryClass: 
  ["todaySummary", 
  "todaysIcon", 
  "currentTime"],


  futureContentClass: 
  [
    "date",
    "avgtemp",
    "maxtemp",
    "mintemp",
    "chance_of_rain",
  ],

  overViewClass: 
  ["highestTemp"],
};








// elements();
console.log(mainContent);
let today  = key.newElements[0];
let message  = key.newElements[2];
let future  = key.newElements[4];
let overView  = key.newElements[6];
let todayContainer = key.newElements[1];
let messageContainer = key.newElements[3];
let futureContainer = key.newElements[5];
let overViewContainer = key.newElements[8];

