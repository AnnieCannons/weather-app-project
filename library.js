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










