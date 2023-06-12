import React,{useState} from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  // Units to Handle C or F.
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };
  return (
    <div className="flex flex-row justify-center my-6">
      {/*This div control the search panel, search icon and location */}
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4 ">
        {/*Focus: outline none remove the border outline. capitalize ensure the first letter is capitalise.  */}
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          className="text-xl font-light p-2 w-full shadow-xl  focus:outline-none capitalize placeholder:lowercase rounded-full"
          placeholder="Search for city...."
        />

        <UilSearch
          size={30}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={30}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center ">
        <button
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1"> |</p>
        <button
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
