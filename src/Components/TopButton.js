import React from 'react'


function TopButton({setQuery}) {
  const cities = [
    {
      id:1,
      title:"Bangkok"
    },
    {
      id:2,
      title:"Hongkong"
    },
    {
      id:3,
      title:"Kuala lumpur"
    },
    {
      id:4,
      title:"Seoul"
    },
    {
      id:5,
      title:"Tokyo"
    }
  ]

  return (
    <div className="flex flex-wrap justify-around items-start my-6">
      
        {cities.map((city) => (
          <button key={city.id} className="text-white text-lg font-medium" onClick={()=>setQuery({q:city.title})}>
            {city.title}
          </button>
        ))}
      </div>
   
  );
}

export default TopButton