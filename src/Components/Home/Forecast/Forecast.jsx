
const Forecast = ({day}) => {
    const {valid_date, temp, app_max_temp
    } = day;
    return (
        <div className="container mx-auto mt-2">
         <table className="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Temperature</th>
      <th scope="col">Cloud</th>
      <th scope="col">Highest Temp.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{valid_date}</th>
      <td>{temp}</td>
      <td>{day.weather.description}</td>
      <td>{app_max_temp}</td>
    </tr>
  </tbody>
</table>

        </div>
    );
};

export default Forecast;