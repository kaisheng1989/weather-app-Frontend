import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { iconUrlFromCode } from "../services/Weatherservices";
import { formatToLocalTime } from "../services/Weatherservices";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center p-10 text-xl text-cyan-300">
        <p> {details} </p>
      </div>

      <div className="flex flex-row items-center justify-evenly text-white p-8">
        <img src={iconUrlFromCode(icon)} alt="" className="w-30" />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-base items-center justify-center">
            {/*mr - Margin to the right of element */}
            {/*First Column */}
            <UilTemperature size={25} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>

          <div className="flex font-light text-base items-center justify-center">
            {/*mr - Margin to the right of element */}
            {/*Second Column */}
            <UilTear size={25} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>

          <div className="flex font-light text-base items-center justify-center">
            {/*mr - Margin to the right of element */}
            {/*Third Column */}
            <UilWind size={25} className="mr-1" />
            Wind Speed:
            <span className="font-medium ml-1">{`${speed.toFixed()}km/h`}</span>
          </div>
        </div>
      </div>
      {/*New Section */}
      {/* The time data for sun rise is taken from the open weather API. Then it will pass into Luxon to be reformatted to HH,MM a */}
      <div className="flex flex-row items-start justify-center space-x-2 text-white py-8 text-base">
        {/*Column 1 */}
        <UilSun />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {" "}
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        {/*Column 2 */}
        <UilSunset />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        {/*Column 3 */}
        <UilArrowUp />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1"> {`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>
        {/*Column 4 */}
        <UilArrowDown />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
