import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("")
    let [error, setError] = useState(false)
    let API_KEY = "" //your api key 
    const Url = `https://api.openweathermap.org/data/2.5/weather`

    let getWeather = async() => {
        try{
            let response = await fetch(`${Url}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonresponse = await response.json();
            console.log(jsonresponse);
            let result = {
                city: city,
                temp : jsonresponse.main.temp,
                min: jsonresponse.main.temp_min,
                max: jsonresponse.main.temp_max,
                humidity: jsonresponse.main.humidity,
                feelsLike: jsonresponse.main.feels_like,    
                weather: jsonresponse.weather[0].description
            };
            console.log(result);
            return result;
        } catch (err){
            throw err;
        }
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeather();
            updateInfo(newInfo);
            setError(false)
        } catch (err){
            setError(true);
        }
    }

    return(
        <div className='SearchBox'> 
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City" variant="outlined" onChange={handleChange}/>
                <br /><br />
                <Button variant="contained" type='Submit'>Search</Button>
                {error && <h3 style={{color: "red"}}>No such place exists!!</h3> }
            </form>
        </div>
    )
}