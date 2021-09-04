

// document.getElementById('show-weather')


const searchCity = () => {
    const city = document.getElementById('city-name').value;

    const apiKey = '17fa2269dbac031ee3edc52439f9f9a5';

    const url = `https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(res => res.json())
        .then(data => loadWeather(data));

    toggleTpinner('block');
    document.getElementById('city-name').value = '';
}

const loadWeather = data => {
    const section = document.getElementById('show-weather');
    console.log(data);


    if (data.count == 0) {
        section.innerHTML = `
        <h1 class="text-white bg-danger"
        >No results found</h1>
        `;
    }
    else {

        section.innerHTML = `
     <h1 class="text-danger">${data.list[0].name}, ${data.list[0].sys.country} <i class="fas fa-map-marker-alt"></i></h1>
            <div class="d-flex  justify-content-center align-items-center">
                <p class="fs-1 fw-bold">${data.list[0].main.temp}°C </p>
                <img src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="">

            </div>

            <p class="fs-5"><span>${data.list[0].main.temp_max}° /</span> <span>${data.list[0].main.temp_min}°</span></p>
            <p class="fs-5 fw-normal opacity-50">${data.list[0].weather[0].main}</p>
            <p class="fw-bold fs-5">Feels like ${data.list[0].main.feels_like}. ${data.list[0].weather[0].description}. ${data.list[0].weather[0].main}</p>

            <div class="fs-6 fw-bold pressure p-4 mx-1 d-flex flex-column  align-items-center rounded-pill">
                <p>Pressure: ${data.list[0].main.pressure} | Humidity: ${data.list[0].main.humidity}</p>
                <p>Wind Degree : ${data.list[0].wind.deg} | Wind Speed : ${data.list[0].wind.speed}</p>

            </div>
     `
    }


    toggleTpinner('none');

}

// spinner toggle 
const toggleTpinner = (data) => {
    document.getElementById('spin').style.display = data;

};


const toggleStyle = (id, contentStyle) => {
    document.getElementById(id).style.display = contentStyle;

}