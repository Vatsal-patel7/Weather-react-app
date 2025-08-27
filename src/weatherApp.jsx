import { useState } from "react";
import SearchBox from "./Searchbox";
import InfoBox from "./infoBox";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 25,
        temp: 28,
        min: 26,
        max: 30,
        humidity: 44,
        weather: "Cloudy" 
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h1>Current Weather</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}