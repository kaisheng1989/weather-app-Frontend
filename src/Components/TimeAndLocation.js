import React from "react";
import { formatToLocalTime } from '../services/Weatherservices';


// This control the item, name location, timezone. Plus dt. As data retreive from the API is in UTC, it needs to be reformat through the luxon api to show the formatted data. 
function TimeandLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
          {`${name},${country}`}
        </p>
      </div>
    </div>
  );
}

export default TimeandLocation;