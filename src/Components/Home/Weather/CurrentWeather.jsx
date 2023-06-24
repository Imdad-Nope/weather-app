import { useState } from "react";

const CurrentWeather = () => {
  const [searchCity, setSearchCity] = useState('Dhaka')

  // Change input field's text

  const handleOnChange = e =>{ 
  setSearchCity(e.target.value)
}

  // Search Data

  const handleSearch = () =>{
}
    return (
    <div>
           <form className="mt-4 w-25 mx-auto d-flex justify-content-center align-items-center mt-5">
                <input onChange={handleOnChange} value={searchCity} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Search your city.." />
              <div>
              <button onClick={handleSearch} type="button" className="btn btn-info">Search</button>
              </div>
            </form>
            <div className="text-center mt-4">
              <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="" />
            </div>
            <div className="text-center">
                <h2>{searchCity}</h2>
                <p>Temperature <span>&deg;</span></p>
    </div>
     </div>

    );
};

export default CurrentWeather;