import React from 'react'

function TopCard(props) {
  return (
    <div className="row" id="weather-display-row-1">
      <div className="col" id="temperature-display">
        <img src={props.weatherImage} alt="weather sunny" id="temperature-image"/>
        <p className="temperature" id="temperature"><span id="temperature-span">{props.temperature}</span><span id="superscript">°C</span></p>
        
      </div>
      <div className="col" id="temperature-description">
        <p id="city-details">{props.city}</p>
        <p>Pressure: <span id="pressure" >{props.pressure}</span> hPa</p>
        <p>Humidity: <span id="humidity">{props.humidity}</span>%</p>
        <p>Wind: <span id="wind">{props.wind}</span> m/s</p>
      </div>
      <div className="col" id="today-description">
        <p>Weather</p>
        <p id="today-date"></p>
        <p id="type-weather-today">{props.typeWeather}</p>
      </div>
    </div>
  )
}

export default TopCard