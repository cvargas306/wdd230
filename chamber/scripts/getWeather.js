const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDescription = document.querySelector("figcaption");

const forecastContainer = document.querySelector("#forecast");

const apiKey = "f214752ad2e32fd55a4071f3f8409886";
const lat = 9.90;
const lon = -83.99;
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

//const url = "https://api.openweathermap.org/data/2.5/weather?lat=9.90&lon=-83.99&appid=f214752ad2e32fd55a4071f3f8409886"

async function getWeatherData(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;

        } else {
            throw Error(await response.text());
        }
        
        //const data = await response.json();
        //console.log(data);
        //displayResults(data);
    } catch (error) {
        console.log(error);
    }    
}

function displayResults(data) {
    currentTemp.textContent = data.main.temp.toFixed(2) + ' °C';
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.alt = data.weather[0].description;
    captionDescription.textContent = data.weather[0].description;
}

function displayForecast(data) {
    forecastContainer.innerHTML = ""; // Clear previous forecasts

    // Extract daily forecast data (3-hour steps, 8 steps per day)
    const dailyData = [];
    for (let i = 0; i < data.list.length; i += 8) { // 8 intervals per day (24 hours)
        dailyData.push(data.list[i]);
    }

    dailyData.slice(0, 3).forEach(day => {
        const dayElement = document.createElement("div");
        const date = new Date(day.dt * 1000);
        const temp = day.main.temp.toFixed(2) + ' °C';
        const iconSrc = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
        const description = day.weather[0].description;

        dayElement.innerHTML = `
            <p>${date.toDateString()}</p>
            <img src="${iconSrc}" alt="${description}">
            <p>${temp}</p>
            <p>${description}</p>
        `;

        forecastContainer.appendChild(dayElement);
    });
}

async function init() {
    const currentWeather = await getWeatherData(weatherUrl);
    displayResults(currentWeather);

    const forecastData = await getWeatherData(forecastUrl);
    displayForecast(forecastData);
}

init();