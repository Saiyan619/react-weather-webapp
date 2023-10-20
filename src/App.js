import './App.css';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

function App() {

  const [checkWeather, setcheckWeather] = useState([])
  const [searchWeather, setsearchWeather] = useState('')
  const [loader, setloader] = useState(null)
  const API_KEY = '9fcb99868490efe4fb0e3cc527471b4d';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
  const CITY_NAME = searchWeather;
  
        //  https://api.soccersapi.com/v2.2/leagues/?user=arokoyueb11&token=9be453377f0ff292f7bbb48235fdc66e&t=list
  
  function handleSubmit() { 
    setloader(true)
    
    setTimeout(() => {
      fetch(`${API_URL}?q=${CITY_NAME}&appid=${API_KEY}&units=metric`)
    .then((res) => res.json())
    .then((data) => {

      setcheckWeather(data)
      setsearchWeather('')
      setloader(false)
  })
    }, 3000);
    
  }

  function handleOnchange(event) {
    setsearchWeather(event.target.value)
    console.log(event.target.value)

  }
  return (
    <header>
  <div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
  </div>

      <SearchBar
        setsearchWeather={setsearchWeather}
        searchWeather={searchWeather}
        handleOnchange={handleOnchange}
        handleSubmit={handleSubmit} />
      
      <div className={loader ? 'spinner-container' : 'spinner-container_active'}>
        <div class="spinner"></div>
        </div>
      
      {checkWeather && checkWeather.weather && checkWeather.weather[0] && (
  <WeatherDisplay
    temp={Math.floor(checkWeather.main.temp)}
    description={checkWeather.weather[0].main}
    comment={checkWeather.weather[0].description}
          name={checkWeather.name}
          humidity={checkWeather.main.humidity}
          tempMax={checkWeather.main.temp_max}
          windSpeed={checkWeather.wind.speed}
          icon={checkWeather.weather[0].icon}
  />
)}
     
    </header>
  );
}
// 9fcb99868490efe4fb0e3cc527471b4d
export default App;
