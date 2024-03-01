let apiKey = "6eecea7626cdf4f4d025750897990bee";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather";
//https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=6eecea7626cdf4f4d025750897990bee&units=metric


// for week
//https://api.openweathermap.org/data/2.5/forecast?q=Moscow&appid=2a5e17dce8914cc1122f1e89e7fd69af

async function getWeatherByCityName() {
    let cityName = document.forms.myForm.city.value;
    let response = await fetch(`${apiUrl}?q=${cityName}&appid=${apiKey}&units=metric`);
    let data = await  response.json();
    console.log(data);
console.log(data.weather[0].icon);
document.querySelector('.cards').innerHTML=
`
<div class="card">
<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${data.name}  :  ${Math.round(data.main.temp)} ℃</h5>
  <p class="card-text">Min temperature : ${Math.round(data.main.temp_min)} ℃</p>  
  <p class="card-text">Max temperature : ${Math.round(data.main.temp_max)} ℃</p>  
  <p class="card-text">Pressure : ${Math.round(data.main.pressure)}</p>  
  <p class="card-text">Humidity : ${Math.round(data.main.humidity)}</p>  
</div>
</div>`


}

document.forms.myForm.addEventListener('submit',function () {
  event.preventDefault();

    getWeatherByCityName();
})