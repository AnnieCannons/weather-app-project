let apiKey = "8b78ddff94f24e8087b182603232609";


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




for(let i = 0; i<key.gridItems.length; i++) {
key.gridItems[i] = document.createElement('div');
key.boxes[i] = document.createElement('div');
}


for(let i = 0; i<key.gridItems.length; i++) {
key.gridItems[i].classList.add('main', 'grid-item');
key.boxes[i].classList.add(`content`);
}




function todaysElements() {
    today = document.createElement('div');
    today.classList.add('main', 'grid-item');
    today.setAttribute('id', 'today')
    todaysBox = document.createElement('div');
    todaysBox.classList.add("content", "primary");
    todaysBox.setAttribute('id', 'day0');
    today.appendChild(todaysBox);
    mainContent.appendChild(today);

    for (let i = 0; i < key.todaysContentClass.length; i++) {
        todaysContent = document.createElement('p');
        todaysContent.setAttribute('id', key.todaysContentClass[i])    
        todaysBox.appendChild(todaysContent)
        todaysValue = document.createElement('p');
        todaysValue.textContent = key.todaysContentClass[i];
        todaysContent.appendChild(todaysValue);
}

    summary = document.createElement('div');
    summary.classList.add('main', 'grid-item');
    summary.setAttribute('id', 'todays-summary');
    summaryBox = document.createElement('div');
    summaryBox.classList.add('content', 'primary');
    summaryBox.setAttribute('id', 'day0');
    summary.appendChild(summaryBox);
    mainContent.appendChild(summary);

    for(let i = 0; i<key.todaysSummaryClass.length; i++) {
        summaryContent = document.createElement('p');
        summaryContent.setAttribute('id', key.todaysSummaryClass[i]);
        summaryBox.appendChild(summaryContent);
        hello = document.createElement('p');
        hello.textContent = key.todaysSummaryClass[i];
        summaryContent.appendChild(hello);
    }
}


function futureElements() {

future = document.createElement('div');
future.classList.add('main', 'grid-item');
future.setAttribute('id', 'future');
mainContent.appendChild(future);

for(let i = 1; i<=5; i++) {
futureBox = document.createElement('div');
futureBox.classList.add("content", "secondary", i);
futureBox.setAttribute('id', `day${i}`);
future.appendChild(futureBox);


for (let i = 0; i < key.futureContentClass.length; i++) {
    futureContent = document.createElement('p');
    futureContent.setAttribute('id', key.futureContentClass[i])    
    futureBox.appendChild(futureContent);
    hello = document.createElement('p');
    hello.textContent = key.futureContentClass[i];
    futureContent.appendChild(hello);
}
}
}





todaysElements();
futureElements();
// console.log(future)

// console.log(today);
// console.log(mainContent)
