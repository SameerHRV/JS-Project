const apiKey = "450605e90ffc2bfaf0f691ffab243588";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unites=metric&q=bangalore";

const checkWeather = async () => {
    const res = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await res.json();

    console.log(data);
}

checkWeather();