import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox";
import { useState } from "react";
import './WeatherApp.css'

export default function WeatherApp() { 
    // Hum Input Me Kuch Search Kare And Info Box Me Bhi Temper UPDATE Ho

    const [weatherInfo, setWeatherInfo] = useState ({
        city: "Wonderland",
        feelslike: 34.06,
        temp: 26.67,
        tempMin: 26.67,
        tempMax: 26.67,
        humidity: 62,
        weather: "clear sky",
    }); //this Weatherinfo pass as a propmt to "INFOBOX" ko

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }

    return(
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by <i>ClimaSphere </i> </h2>
            <SearchBox updateInfo={updateInfo }/> 
            <InfoBox info={weatherInfo}/>
        </div>
    );
};