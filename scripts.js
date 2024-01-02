function fetchData() {
    var location = document.getElementById('location').value;
    // Replace 'https://api.example.com/' with the actual API endpoint
    const apiUrl = 'https://api.weatherapi.com/v1/current.json?key=c3a33fb1f1e04aa293b24333240101&q=' + encodeURIComponent(location);

    // Fetch method with GET request
    fetch(apiUrl)
        .then(response => {
            // Check if the request was successful (status code 200-299)
            if (!response.ok) {
                throw new Error(`${response.status}`);
            }

            // Parse the response as JSON
            return response.json();
        })
        .then(data => {
            // Handle the data from the API
            // const today = data.current.forecastday[0];
            // const highTemp = today.day.maxtemp_f;
            // const lowTemp = today.day.mintemp_f;
            // const precipitation = today.day.totalprecip_in;
            const temperature = data.current.temp_f;
            const region = data.location.region;

            document.getElementById('Current Temp').innerText = `Temperature ${temperature}`
            // document.getElementById('highlow').innerText = `Temperature: ${highTemp} °F (High), ${lowTemp} °F (Low)`;
            // document.getElementById('precipitation').innerText = `Precipitation: ${precipitation} in`;
            document.getElementById('region').innerText = `${region}`

            if (temperature > 70) {
                document.getElementById('weathermsg').innerText = 'It is hot today!';
            } else {
                document.getElementById('weathermsg').innerText = 'It is Cold';
            }
            console.log(data);
        })
        .catch(error => {
            // Handle errors during the fetch
            console.error('Fetch error:', error);
        });





}