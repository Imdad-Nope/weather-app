
const Forecast = ({day}) => {
    const {valid_date, temp, high_temp, wind_spd} = day;
    return (
        <div className="container mx-auto mt-2">
         <table className="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Temperature</th>
      <th scope="col">Cloud</th>
      <th scope="col">Highest Temp.</th>
      <th scope="col">Wind Speed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{valid_date}</th>
      <td>{temp}&deg;C</td>
      <td>{day.weather.description}</td>
      <td>{high_temp}&deg;C</td>
      <td>{wind_spd} k.m</td>
    </tr>
  </tbody>
</table>

        </div>
    );
};

export default Forecast;