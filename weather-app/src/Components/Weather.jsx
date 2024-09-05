import './Weather.css'
import clear from '../Assets/clear.png'
import cloud from '../Assets/cloud.png'
import drizzle from '../Assets/drizzle.png'
import humidty from '../Assets/humidity.png'
import rain from '../Assets/rain.png'
import search from '../Assets/search.png'
import snow from '../Assets/snow.png'
import wind from '../Assets/wind.png'
import {useEffect, useRef, useState} from 'react'
const Weather = () => {
    const apiKey = '37eae724a01d10cd6b6aa6dc48809c52';
    
    const [weatherData, setWeatherData] = useState(false)
    const inputref = useRef()
    const allIcons = {
        "01d": clear,
        "01n": clear,
        "02d": cloud,
        "02n": cloud,
        "03d": cloud,
        "03n": cloud,
        "04d": drizzle,
        "04n": drizzle,
        "09d": rain,
        "09n": rain,
        "10d": rain,
        "10n": rain,
        "13d": snow,
        "13n": snow,
    }

    const search = async (city) =>{

        if(city === ""){
            alert("Enter city name");
            return
        }
        
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

            const response = await fetch(url);
            
            const data = await response.json();
            
            if(!response.ok){
                alert(data.message);
                return
            }

            
            const icon = allIcons[data.weather[0].icon] || clear
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            })
            
        } catch (error) {
            setWeatherData(false)
            console.error("Error in fetching weather data");
            
        }

    }
    return (
        <div className='container' >
            <div className="search-container">

                <input type="text" placeholder='Search' id='search-textbox' ref={inputref} />
                <i className="fa-solid fa-magnifying-glass" onClick={()=>search(inputref.current.value)}  ></i>

            </div>
            {weatherData? 
            <>
                <div className="img-container">
                <img src={weatherData.icon} alt="" />
            </div>
            <p className='c' >{weatherData.temperature}°c</p>
            <p className='city-name' >{weatherData.location}</p>
            <div className="weather-info">
                <div className="col">
                    <img src={humidty} alt="" />
                    <div className="persentage">
                        <p>{weatherData.humidity} %</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div className="col">
                    <img src={wind} alt="" />
                    <div className="km">
                        <p>{weatherData.windSpeed} Km/h</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
                
            </div>
            </>:<></>}
            
        </div>
    )
}

export default Weather
