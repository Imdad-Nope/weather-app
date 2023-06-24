import Forecast from "../Forecast/Forecast";
import CurrentWeather from "../Weather/CurrentWeather";

const Home = () => {
    return (
        <div>
            <CurrentWeather/>
            <Forecast/>
        </div>
    );
};

export default Home;