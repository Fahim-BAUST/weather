

// document.getElementById('show-weather')


const searchCity = () => {
    const city = document.getElementById('city-name').value;

    const apiKey = '17fa2269dbac031ee3edc52439f9f9a5';

    const url = `https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(res => res.json())
        .then(data => loadWeather(data.list[0]));
}

const loadWeather = data => {
    const section = document.getElementById('show-weather');
    section.innerHTML = `
     <h1 class="text-danger">${data.name}, ${data.sys.country} <i class="fas fa-map-marker-alt"></i></h1>
            <div class="d-flex align-items-center">
                <p class="fs-1 fw-bold">${data.main.temp}°C </p>
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">

            </div>

            <p class="fs-5"><span>${data.main.temp_max}° /</span> <span>${data.main.temp_min}°</span></p>
            <p class="fs-5 fw-normal opacity-50">${data.weather[0].main}</p>
            <p class="fw-bold fs-5">Feels like ${data.main.feels_like}. ${data.weather[0].description}. ${data.weather[0].main}</p>

            <div class="fs-6 fw-bold pressure p-4 mx-1 d-flex flex-column align-items-center rounded-pill">
                <p>Pressure: ${data.main.pressure} | Humidity: ${data.main.humidity}</p>
                <p>Wind Degree : ${data.wind.deg} | Wind Speed : ${data.wind.speed}</p>

            </div>
     `

}