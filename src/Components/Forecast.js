import React from 'react'
import { iconUrlFromCode } from "../services/Weatherservices";

function Forecast({ title, items }) {
  console.log("Forecast of next 5 hours and days",items);
  return (
    <div>
      {/*mt -6 margin top by 6 px */}
      <div className="flex intems-start justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      {/*my-2 Top and Bottom margin 2 */}
      <hr className="my-2" />

      <div className="flex flex-wrap items-start justify-between text-white">
        {items.map((item) => (
          <div className="flex flex-col items-center justify center">
            <p className="font-light text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
