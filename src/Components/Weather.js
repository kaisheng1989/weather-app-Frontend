import  { useState, useEffect } from "react";
import TopButton from "./TopButton";
import Inputs from "./Inputs";
import TimeAndLocation from "./TimeAndLocation";
import TemperatureAndDetails from "./TemperatureAndDetails";
import Forecast from "./Forecast";
//import getWeatherData from "../services/Weatherservices";
import getFormattedWeatherData from "../services/Weatherservices";
//import UilReact from "@iconscout/react-unicons/icons/uil-react";

function Weather() {
  const [query, setQuery] = useState({ q: "singapore" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  // each time a chnage in units or query of country fetch new data.
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
        //console.log("Data", data);
      });
    };
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-blue-400 to-purple-800";
    const threshold = units === "metric" ? 10 : 30;
    if (weather.temp <= threshold) return "from-blue-400 to-purple-800";

    return "from-yellow-700 to-orange-700";
  };

  return (
    // Background of the main page - Top banner.
    <div>
      <div></div>
    <div
      className={`mx-auto max-w-screen-xl xl:max-xl:flex sm:min-sm:flex mt-4 py-5 px-32 bg-gradient-to-br from-blue-400 to-purple-800 h-fit shadow-xl shadow-gray-400 rounded-lg ${formatBackground()}`}
    >
      <TopButton setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && <TimeAndLocation weather={weather} />}

      {weather && <TemperatureAndDetails weather={weather} />}

      {weather && <Forecast title="hourly forecast" items={weather.hourly} />}
      {weather && <Forecast title="daily forecast" items={weather.daily} />}
    </div>
    </div>
  );
}

export default Weather;