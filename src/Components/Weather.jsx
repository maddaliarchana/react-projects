import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

const Weather = () => {
  const [city, setCity]=useState("")
  const [result, setResult]=useState("")
  const changehandeler=e=>{
    setCity(e.target.value);

  }
  const submitHandeler= e=>{
    e.preventDefault();
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
    .then(response=> response.json())
      .then(data =>
      {
        const kelvin = data.main.temp;
        const celcius = kelvin - 273.15;
        setResult("Temperature at "+city+"\n"+Math.round(celcius)+"°C");
      }
      ).catch(error=>console.log(error))
      
      setCity("");
         
      
  }
  return (
    <>
    <Navbar/>
    <div className='weather'>
        <div className="weater-body">
          <div className="weather-tilte">
            Weather App
          </div>
            <form onSubmit={submitHandeler}>
                <input type="text" name="city"
                onChange={changehandeler}/>
                <input type="submit" value="get temperature"/>
            </form>
            <div className="weather-result">
            <h1>{result}</h1>

            </div>
            
        </div>

     
    </div>
    </>
  )
}

export default Weather
