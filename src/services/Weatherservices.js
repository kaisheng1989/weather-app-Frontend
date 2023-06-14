// Added luxon.
import { DateTime } from "luxon";

const API_KEY = "c23baa98634849d26b581a51bdde4abd";
const BASE_URL = "https://api.openweathermap.org/data/2.5";


// Get the weather through URL and API key generated. 
const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  //console.log(url);
  return fetch(url).then((res) => res.json());
  //.then((data) => data);
};

// Format the weather data taken from open weather. 
// What data we need. dt is a UTC time stamp
// get the first element in the weather array.
// dt is a time stamp in UTC. 
const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;
  // In weather, only details and icons are needed. 
  // Icon is given in a numbering format.
  const { main: details, icon } = weather[0];
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    speed,
    icon,
  };
};

// The data retrieved from open weather API. For hourly data it is in an array. To get data from the poiint of query and hourly slice the array bewteen ( 1 to 6) data for the next 5 hours. 
// In daily, the info will be reformatted to ccc so that instead of a string of digits, it will be converted to the respective day. 

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });
  hourly = hourly.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp,
      icon: d.weather[0].icon,
    };
  });
  return { timezone, daily, hourly };
};

// Getting the weather data from the open weather and pass it through the formatted weather data to be formatted / Constructed into a manner readable. Use that it can be pluck and use directly. 
const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  // format weather with one call api
 //ONe call API provides the hourly and daily info. 
 // The API for one call will exclude minutes data, current weather and alerts as they are not needed. 
 // The response will go into format forcast weather. 
  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return {...formattedCurrentWeather, ...formattedForecastWeather};
};

// Formatting the time from Luxon API
const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time:'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);


// Function for ICON
// Icon is change from or retreive from a certain code type. 
const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;


// Will export not only the formatted weather data but also the time zone format and Icon from URL 

export default getFormattedWeatherData;
export{formatToLocalTime, iconUrlFromCode};
