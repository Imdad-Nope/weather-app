import { useState } from "react";
import Forecast from "../Forecast/Forecast";

const CurrentWeather = () => {
  const [searchCity, setSearchCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Api Key
  const API_KEY = '768ac710a8f04d7a9156dd48019977b5'

  // Change input field's text

  const handleOnChange = e =>{ 
  setSearchCity(e.target.value)
}

  // Search Data

  const handleSearch = () =>{ 

    setIsLoading(true)
    setError(null)

    const url= `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchCity}&key=${API_KEY}`
    fetch(url)
    .then(res=> res.json())
    .then(data=>{
      if(data.data && data.data?.length > 0){
        setWeatherData(data.data);
        setIsLoading(false)
      }
      else{
        setError('City not found')
        setIsLoading(false)
      }
      console.log(data);
    })
    .catch(error => {
      console.error('Error', error);
      setError('Something went wrong. Please Enter a correct city name')
      setIsLoading(false); 
    });
  };

  // Enter Button
  const handleEnterBtn = e =>{
    if(e.key === 'Enter'){
      e.preventDefault();
      handleSearch();
    }
  }

  console.log(weatherData);


    return (
  <div>
           <form className="mt-4 w-25 mx-auto d-flex justify-content-center align-items-center mt-5" >
                <input onChange={handleOnChange} value={searchCity} onKeyDown={handleEnterBtn} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Search your city.." />
              <div>
              <button onClick={handleSearch} type="button" className="btn btn-info">Search</button>
              </div>
            </form>
            <div className="text-center mt-3">
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
      ) : error ?(
        <div className="alert alert-danger container text-center"><p>{error}</p></div>
      )
      
      : weatherData ? (
        <div className="text-center">

        <h3 className="text-white">{searchCity}</h3>
        <h5 className="text-white my-3">Temperature: <span className="text-info-emphasis">{weatherData[0]?.temp}</span><span className="text-warning-emphasis">&deg;C</span></h5>
        <h6 className="text-light">Cloud: <span className="text-danger-emphasis">{weatherData[0].weather?.description}</span></h6>

          {/* Forecast */}

        <h2 className="text-white mt-5">Next Few days <span className="text-warning">Forecast</span></h2>
        <div className="text-warning container">
        <hr />
        </div>
        {
          weatherData.slice(0, 5).map((day)=>(
           <Forecast key={day.ts} day={day} />
          ))}
        </div>)
      : (
       <div className="text-center text-warning">
         <h3>Enter your City Name to show your forecast...</h3>
       </div>
      )
      
      }
           
      </div>
        
    </div>

);
};

export default CurrentWeather;

