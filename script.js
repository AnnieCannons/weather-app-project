let search = document.getElementById("searchButton")
search.addEventListener("click", function() {
    fetch("https://api.weatherapi.com/v1/current.json?key=8b78ddff94f24e8087b182603232609&q=London")
.then(response => response.json())
.then(data => {
    console.log(data)
})
})

