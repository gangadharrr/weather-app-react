import axios, {isCancel, AxiosError} from 'axios';
var APIkey='2af789c41b934be69f4777295e83362d';   
async function getWeatherDaily(lat,lon){                              
  var response= await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`)
  var data=   response.json(); 
  console.log(data);
  return await data;
}

async function mainFun(city){
var geoData= await axios.get(`https://geocode.xyz/${city}?json=1`);
console.log(geoData.data); 
document.getElementById('city-details').innerHTML=city;

// result= getWeather(geoData.latt,geoData.longt);
var resultDaily=await getWeatherDaily(geoData.latt,geoData.longt);
var resultDaily=resultDaily.list
var result=resultDaily[0]
// for (const result of resultDaily) {

// }
document.getElementById('temperature-span').innerHTML=parseInt(result?.main?.temp);
document.getElementById('pressure').innerHTML=parseInt(result?.main?.pressure);
document.getElementById('humidity').innerHTML=parseInt(result?.main?.humidity);
document.getElementById('wind').innerHTML=parseInt(result?.wind?.speed);
document.getElementById('today-day-min-temperature-span-sm').innerHTML=parseInt(result?.main?.temp_min);
document.getElementById('today-day-max-temperature-span-sm').innerHTML=parseInt(result?.main?.temp_max);
document.getElementById('type-weather-today').innerHTML=result?.weather[0].description;
var imgDiv = document.getElementById("temperature-image");
imgDiv.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
var imgDiv = document.getElementById("temperature-image-sm");
imgDiv.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
for(var i=1;i<6;i++)
{
  var result=resultDaily[i]
  document.getElementById(`today-day-${i}-min-temperature-span-sm`).innerHTML=parseInt(result?.main?.temp_min);
  document.getElementById(`today-day-${i}-max-temperature-span-sm`).innerHTML=parseInt(result?.main?.temp_max);
  var imgDiv = document.getElementById(`temperature-image-sm-${i}`);
  imgDiv.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
}

}
var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const date = new Date();
document.getElementById('today-date').innerHTML=days[date.getDay()]+","+String(date.getHours()).padStart(2, '0')+':'+String(date.getMinutes()).padStart(2, '0');    
document.getElementById('today-day').innerHTML=days[date.getDay()];                         
document.getElementById('today-day-1').innerHTML=days[(date.getDay()+1)%6];                         
document.getElementById('today-day-2').innerHTML=days[(date.getDay()+2)%6];                         
document.getElementById('today-day-3').innerHTML=days[(date.getDay()+3)%6];                         
document.getElementById('today-day-4').innerHTML=days[(date.getDay()+4)%6];                         
document.getElementById('today-day-5').innerHTML=days[(date.getDay()+5)%6];   
function throttle(cb, delay) {
  let wait = false;
  let storedArgs = null;

  function checkStoredArgs () {
    if (storedArgs == null) {
      wait = false;
    } else {
      cb(...storedArgs);
      storedArgs = null;
      setTimeout(checkStoredArgs, delay);
    }
  }

  return (...args) => {
    if (wait) {
      storedArgs = args;
      return;
    }

    cb(...args);
    wait = true;
    setTimeout(checkStoredArgs, delay);
  }
}
var exec=throttle(mainFun,3000);
exec('Chennai');