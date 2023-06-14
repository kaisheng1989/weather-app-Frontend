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
  //Setting the state for the respective elements. 
  const [query, setQuery] = useState({ q: "singapore" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

//(1) By use useState Hook, it prevent the need for using the.setState. ABle to make chnages to the state without having to convert to a class. Instead having to write setState, it can be made clearer by coding by show what is the state of element we are setting.

// IT allow the inital query of singapore to be change when a certain country is being search. Allowing setQuery to pull the new city that is being search and rerender into the DOM. 

//(2) UseEffect hook: Instead of using lifecycle method which need to be written twice. UseEffect allows a function to be callled after rendering is complete.  It allows the weather to be query after rendering is complete. 

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

  // ... query allows a copy of an object using spread operator. Instead of using the old method with the need to use Object.assign.

  const formatBackground = () => {
    if (!weather) return "from-blue-400 to-purple-800";
    const threshold = units === "metric" ? 10 : 70;
    if (weather.temp <= threshold) return "from-blue-400 to-purple-800";

    return "from-yellow-700 to-orange-700";
  };

  return (
    // Background of the main page - Top banner.
    // Layout of the weather and process in which how it is going to be render. 

    <div >
      <div
        className={`mx:auto 2xl:mx-auto py-10 px-32 h-full bg-gradient-to-br from-blue-400 to-purple-800 shadow-xl shadow-gray-400 ${formatBackground()}`}
      >
        <TopButton setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {/*Only when weather is there, the below few componenets will be loaded.  */}
        {weather && <TimeAndLocation weather={weather} />}

        {weather && <TemperatureAndDetails weather={weather} />}

        {weather && <Forecast title="hourly forecast" items={weather.hourly} />}
        {weather && <Forecast title="daily forecast" items={weather.daily} />}
      </div>
      
    </div>
  );
}

export default Weather;