import './App.css';
import './assets/css/style.css'
import { useState, useEffect, useRef } from "react";
// import './assets/js/script.js'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Dropdown from 'react-bootstrap/Dropdown';
import axios, {isCancel, AxiosError} from 'axios';
import TopCard from './TopCard';
import BottomCard from './BottomCard';
var APIkey='2af789c41b934be69f4777295e83362d'; 
function App() {
  const[city,setCity]=useState('Chennai');
  const[tempToday,setTempToday]=useState(36);
  const bottomCardData={
    temperatures:[[36,36],[36,36],[36,36],[36,36],[36,36],[36,36]],
    Images:["./assets/images/sunny.png",
    "./assets/images/sunny.png",
    "./assets/images/sunny.png",
    "./assets/images/sunny.png",
    "./assets/images/sunny.png",
    "./assets/images/sunny.png",
      ],
      days:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  }
  const[BottomData,setBottomData]=useState(bottomCardData);
  
  const[weatherImage,setWeatherImage]=useState("./assets/images/sunny.png");
  const[pressure,setPressure]=useState(0);
  const[humidity,setHumidity]=useState(0);
  const[wind,setWind]=useState(0);
  const[typeWeather,setTypeWeather]=useState('Sunny');
  const Coordinates={
    'Chennai':{
      latt:13.04768,
      longt:80.221989
    },
    'Bangalore':{
      latt:12.91547,
      longt:77.61278
    },
  'Pune':{
    latt: '18.52847',
    longt: '73.85416'
  },
  'Kerala':{
    latt: '9.98875',
    longt: '76.33316'
  },
  'Mumbai':{
    latt: '19.08807',
    longt: '72.86569',
  }
}
 

  
  const getWeatherDaily=(cityVal)=>{
      setCity(cityVal);
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${Coordinates[city].latt}&lon=${Coordinates[city].longt}&appid=${APIkey}&units=metric`)
      .then((response)=>{
        setTempToday(parseInt(response.data.list[0].main.temp));
        setWeatherImage(`https://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`);
        setPressure(response.data.list[0].main.pressure);
        setHumidity(response.data.list[0].main.humidity);
        setWind(response.data.list[0].wind.speed);
        setTypeWeather(response.data.list[0].weather[0].description);
        let bottomCardData={
          temperatures:[],
          Images:[
            ],
            days:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        }
        for(let i=0;i<6;i++)
        {
          bottomCardData.temperatures.push([parseInt(response.data.list[i].main.temp_min),parseInt(response.data.list[i].main.temp_max)]);
          bottomCardData.Images.push(`https://openweathermap.org/img/wn/${response.data.list[i].weather[0].icon}@2x.png`);
        }
        setBottomData(bottomCardData);
        console.log(response.data); 
      });
      
  }
  useEffect(()=>{getWeatherDaily('Chennai');},[])
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark" style={{backgroundColor: 'rgb(12, 19, 79)'}} >
      <div className="container-fluid" id="nav-container">
        <a className="navbar-brand" href="#"><h2>Weather <span style={{color: 'rgb(212, 173, 252)'}}>Forecast</span></h2></a>
       
        <Dropdown>
      <Dropdown.Toggle variant="plain bg-white" id="dropdown-basic">
        Cities
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item href="#" onClick={()=>{getWeatherDaily('Chennai')}}>Chennai</Dropdown.Item>
        <Dropdown.Item href="#" onClick={()=>{getWeatherDaily('Bangalore')}}>Bangalore</Dropdown.Item>
        <Dropdown.Item href="#" onClick={()=>{getWeatherDaily('Kerala')}}>Kerala</Dropdown.Item>
        <Dropdown.Item href="#" onClick={()=>{getWeatherDaily('Mumbai')}}>Mumbai</Dropdown.Item>
        <Dropdown.Item href="#" onClick={()=>{getWeatherDaily('Pune')}}>Pune</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
  </nav>
  <div className="container-fluid bg-light" id="weather-display" >
        <TopCard 
        weatherImage={weatherImage} 
        pressure={pressure}
        wind={wind}
        humidity={humidity}
        typeWeather={typeWeather}
        temperature={tempToday} 
        city={city}
        />
    <BottomCard
      BottomData={BottomData}
      weatherImage={weatherImage} 
    />
    </div>
</div>
  );
}

export default App;
