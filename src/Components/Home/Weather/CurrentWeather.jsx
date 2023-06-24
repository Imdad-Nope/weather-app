import { useState } from "react";

const CurrentWeather = () => {
  const [searchCity, setSearchCity] = useState('Dhaka')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  // Change input field's text

  const handleOnChange = e =>{ 
  setSearchCity(e.target.value)
}

  // Search Data

  const handleSearch = () =>{
    const url = `https://api.weatherbit.io/v2.0/current?&city=${searchCity}&key=768ac710a8f04d7a9156dd48019977b5`
    fetch(url)
    .then(res=> res.json())
    .then(data=>{
      setData(data.data[0]);
    })
  }
  console.log(data);
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
                <h2>{data.city_name}</h2>
                <p>{data.app_temp} <span>&deg;</span></p>
                <p>Clouds: {data.weather?.description}</p>
    </div>
     </div>

    );
};

export default CurrentWeather;