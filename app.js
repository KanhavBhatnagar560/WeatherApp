const API_KEY = 'YOUR_API_KEY';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather() {
    const city = document.getElementById('cityInput').value;

    if (!city) {
        alert('Please enter a city name');
        return;
    }

    try {
        const response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        displayWeather(data);

    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temperature').textContent =
        `Temperature: ${Math.round(data.main.temp)}°C`;
    document.getElementById('description').textContent =
        `Weather: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent =
        `Humidity: ${data.main.humidity}%`;

    document.getElementById('weatherDisplay').classList.remove('hidden');
}

// I did this 
