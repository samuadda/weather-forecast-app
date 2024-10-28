let valueSearch = document.getElementById("valueSearch");
let city = document.getElementById("city");
let temperature = document.getElementById("temperature");
let description = document.getElementById("description");
let clouds = document.getElementById("Clouds");
let humidty = document.getElementById("Humidty");
let hpa = document.getElementById("hPa");
let form = document.querySelector("form");
let main = document.querySelector("main");
let errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", e => {
    e.preventDefault();
    if (valueSearch.value != "") {
        searchWeather();
    }
});

let apiKey = "890c0f590091fc8954d66bff2bcbddb2";
let url = `http://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}`;
const searchWeather = () => {
    fetch(url + "&q=" + valueSearch.value)
        .then(respond => respond.json())
        .then(data => {
            console.log(data);
            if (data.cod == 200) {
                city.querySelector("figcaption").innerText = data.name;
                city.querySelector("img").src = "https://flagsapi.com/" + data.sys.country + "/shiny/32.png";
                temperature.querySelector("img").src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@4x.png";
                temperature.querySelector("figcaption span").innerHTML = data.main.temp;
                description.innerText = data.weather[0].description;
                clouds.innerText = data.clouds.all + "%";
                humidty.innerText = data.main.humidity + "%";
                hpa.innerText = data.main.pressure + "hPa";
            } else {
                showErrorMessage("City not found");
            }

            valueSearch.value = "";
        })
        .catch(() => showErrorMessage("Network error"));
};

const showErrorMessage = message => {
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");

    main.classList.add("error");

    setTimeout(() => {
        main.classList.remove("error");
        errorMessage.classList.add("hidden");
    }, 1000);
};

const initApp = () => {
    valueSearch.value = "Taif";
    searchWeather();
};

initApp();
