import { useState } from "react";
import Forecast from "../Forecast/Forecast";

const CurrentWeather = () => {
  const [searchCity, setSearchCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)


  const API_KEY = '768ac710a8f04d7a9156dd48019977b5'

  // Change input field's text

  const handleOnChange = e =>{ 
  setSearchCity(e.target.value)
}

  // Search Data

  const handleSearch = () =>{
    if(searchCity.trim() !==''){

    
    setIsLoading(true)

    // const url = `https://api.weatherbit.io/v2.0/current?&city=${searchCity}&key=768ac710a8f04d7a9156dd48019977b5`

    const url= `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchCity}&key=${API_KEY}`
    console.log(searchCity);
    fetch(url)
    .then(res=> res.json())
    .then(data=>{
      setWeatherData(data.data);
      setIsLoading(false)
      console.log(data);
    })
    .catch(error => {
      console.error(error);
      setIsLoading(false); 
    });
  }
}
  console.log(weatherData);


    return (
  <div>
           <form className="mt-4 w-25 mx-auto d-flex justify-content-center align-items-center mt-5" >
                <input onChange={handleOnChange} value={searchCity} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Search your city.." />
              <div>
              <button onClick={handleSearch} type="button" className="btn btn-info">Search</button>
              </div>
            </form>
            <div className="text-center mt-4">
              <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="" />
            </div>

         <div>
         {
         isLoading ? (
        <div className="text-center mt-3">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : weatherData ? (
        <div className="text-center">

        <h3>{searchCity}</h3>
        <p>Temperaure: {weatherData[0]?.temp}</p>
        <p>cloud: {weatherData[0].weather?.description}</p>

        {/* Forecast */}

        <h2>Next Few days Forecase</h2>

        {
          weatherData.slice(1, 6).map((day)=>(
           <Forecast key={day.ts} day={day}>
          
           </Forecast>
          ))}
        </div>
      )
      : (
        <p>Enter a location to show data</p>
      )
      
      }
           
</div>
        
    </div>

    );
};

export default CurrentWeather;

