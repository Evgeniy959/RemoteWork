//https://api.openweathermap.org/data/2.5/forecast/&appid={API key}
//2a5e17dce8914cc1122f1e89e7fd69af

//https://api.openweathermap.org/data/2.5/forecast?q=Baku&appid=2a5e17dce8914cc1122f1e89e7fd69af

let url = 'https://api.openweathermap.org/data/2.5/forecast';
let key = '2a5e17dce8914cc1122f1e89e7fd69af';

$('#myForm').submit(async function(){
   event.preventDefault();

   let cityName = $("#cityName").val();
   console.log(cityName);

   let data = await $.get(`${url}?q=${cityName}&appid=${key}&units=metric`);

   if (data) {
    $('h3').text(data.city.name);
    $('#temp').text('Temperatura : ' + Math.ceil(data.list[0].main.temp) + ' ℃');
    $('#minTemp').text('Min temp : ' + Math.ceil(data.list[0].main.temp_min) + ' ℃');
    $('#maxTemp').text('Max temp : ' + Math.ceil(data.list[0].main.temp_max) + ' ℃');
    
    $('#humidty').text('Humidity : ' + data.list[0].main.humidity);
    $('strong').text(`Date : ${data.list[0].dt_txt.split(' ')[0]}`);
    $('#speed').text('Speed : ' + data.list[0].wind.speed + ' km/h');
    $('#description').text(data.list[0].weather[0].description);
    $('img').attr('src',`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`);


     let weekDate = []; // 7 разных дат
     

    for (let i = 1; i < 7; i++) { 
           let followingDay = new Date(Date.now() + (86400000 *i));
          // console.log(followingDay.toISOString().slice(0,10));
           weekDate.push(followingDay.toISOString().slice(0,10));
    }

    let itemsArr = [];
    let count = 1;
//let time = 0;
    for (const item of data.list) {
       // console.log(item.dt_txt.slice(0,10));
       
       if (weekDate.includes(item.dt_txt.slice(0,10)) ) {
    //     time++;
    //     if (time !=4) {
    //         continue;
    //     }else{
    //         time = 0;
    //     }
        console.log(item.dt_txt);
        count++;
        itemsArr.push(item);
        weekDate = weekDate.filter(data=>data!=item.dt_txt.slice(0,10));
       }
    }
    console.log(count);
    $('.body').text(' ')
    for (const day of itemsArr) {
        $('.body').append(`
        <div class="card">
  <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${day.dt_txt.slice(0,10)}</h5>
    <p class="card-text">${day.weather[0].main}  :  ${day.weather[0].description}</p>
    <p class="card-text">${day.main.temp} ℃</p>
 
  </div>
</div>`);
    }


   }
});

