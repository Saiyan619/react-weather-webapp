import React from 'react'



export default function WeatherDisplay(props) {
    let sunny = './sunnynew.png';
    let rain = './rainnew.png';
    let snow = './snownew.png'
    let partlysunny = './partlysunny.png';
    let clear = './clear.png';
    let mist = './icons8-dashing-away-94.png';
    let haze = './Breeze-128x128(1).png'
    
    
  return (
      <div className='all-display-con'>
          <div className='main-weather-container'>
      <div>
        <img src= {props.description === 'Clear' ? clear : props.description === 'Rain' ? rain : props.description === 'Snow' ? snow : props.description === 'Mist' ? mist :  props.description === 'Haze' ? haze : sunny} alt='sunny img' className='weather-logo'/>
      </div>
          <div className='degreee-and-comment-container'>
                  <span className='degree'>{props.temp}<span className='degree-sign'>&deg;C</span></span>
              <span className='degree-comment'>          {props.description},{props.comment}</span>
              </div>

              </div>
          
          <div className='city-name-con'>
              <span className='city-name'>{props.name}</span>
          </div>

          <div className='other-details-container'>
              <div>
                  <p>humidity</p>
                  <span>{props.humidity}</span>
              </div>
              <div>
                  <p>Max Temp.</p>
                  <span>{props.tempMax}&deg;C</span>
              </div>
              <div>
                  <p>Wind Speed</p>
                  <span>{props.windSpeed}</span>
              </div>
          </div>

    </div>
  )
}
