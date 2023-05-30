import React from 'react'

function BottomCard(props) {
  return (
    <div>
        <div className="row" id="weather-display-row-2">
      <div className="col" id="temperature-display-sm" >
        <p id="today-day">{props.BottomData.days[0]}</p>
        <img src={props.BottomData.Images[0]} alt="weather sunny" className="temperature-image-sm" id="temperature-image-sm"/>
        <p  id="temperature-sm"><span id="today-day-min-temperature-span-sm">{props.BottomData.temperatures[0][0]}</span><span id="superscript-sm">°C</span>
          <span id="today-day-max-temperature-span-sm">{props.BottomData.temperatures[0][1]}</span><span id="superscript-sm">°C</span></p>
      </div>
      <div className="col" id="temperature-display-sm">
        <p id="today-day-1">{props.BottomData.days[1]}</p>
        <img src={props.BottomData.Images[1]} alt="weather sunny" className="temperature-image-sm"  id="temperature-image-sm-1"/>
        <p  id="temperature-sm"><span id="today-day-1-min-temperature-span-sm">{props.BottomData.temperatures[1][0]}</span><span id="superscript-sm">°C</span>
          <span id="today-day-1-max-temperature-span-sm">{props.BottomData.temperatures[1][1]}</span><span id="superscript-sm">°C</span></p>
      </div>
      <div className="col" id="temperature-display-sm">
        <p id="today-day-2">{props.BottomData.days[2]}</p>
        <img src={props.BottomData.Images[2]} alt="weather sunny" className="temperature-image-sm"  id="temperature-image-sm-2"/>
        <p  id="temperature-sm"><span id="today-day-2-min-temperature-span-sm">{props.BottomData.temperatures[2][0]}</span><span id="superscript-sm">°C</span>
          <span id="today-day-2-max-temperature-span-sm">{props.BottomData.temperatures[2][1]}</span><span id="superscript-sm">°C</span></p>
      </div>
      <div className="col" id="temperature-display-sm"> 
        <p id="today-day-3">{props.BottomData.days[3]}</p>
        <img src={props.BottomData.Images[3]} alt="weather sunny" className="temperature-image-sm"  id="temperature-image-sm-3"/>
        <p  id="temperature-sm"><span id="today-day-3-min-temperature-span-sm">{props.BottomData.temperatures[3][0]}</span><span id="superscript-sm">°C</span>
          <span id="today-day-3-max-temperature-span-sm">{props.BottomData.temperatures[3][1]}</span><span id="superscript-sm">°C</span></p>
      </div>
      <div className="col"  id="temperature-display-sm">
        <p id="today-day-4">{props.BottomData.days[4]}</p>
        <img src={props.BottomData.Images[4]} alt="weather sunny" className="temperature-image-sm"  id="temperature-image-sm-4"/>
        <p  id="temperature-sm"><span id="today-day-4-min-temperature-span-sm">{props.BottomData.temperatures[4][0]}</span><span id="superscript-sm">°C</span>
          <span id="today-day-4-max-temperature-span-sm">{props.BottomData.temperatures[4][1]}</span><span id="superscript-sm">°C</span></p>
      </div>
      <div className="col"  id="temperature-display-sm">
        <p id="today-day-5">{props.BottomData.days[5]}</p>
        <img src={props.BottomData.Images[5]} alt="weather sunny" className="temperature-image-sm"  id="temperature-image-sm-5"/>
        <p  id="temperature-sm"><span id="today-day-5-min-temperature-span-sm">{props.BottomData.temperatures[5][0]}</span><span id="superscript-sm">°C</span>
          <span id="today-day-5-max-temperature-span-sm">{props.BottomData.temperatures[5][1]}</span><span id="superscript-sm">°C</span></p>
      </div>  
    </div>
    </div>
  )
}

export default BottomCard