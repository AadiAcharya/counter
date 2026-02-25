import { useState } from "react";
// f76c766b5396d90857c84cef321721af

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f76c766b5396d90857c84cef321721af&units=metric`

// fetchwether-useeffect
// fetchbylocation
//converttemp
//savetorecent
// loadreceant
//handelfavorite

const Weather = () => {
  const [isCelsius, setIsCelsius] = useState(true);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  async function loadData(city) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f76c766b5396d90857c84cef321721af&units=metric`,
    );
    const data = await response.json();
    setWeather(data);
    console.log(data)
  }




  return (
    <div className="min-h-screen bg-linear-to-br from-sky-900 via-blue-800 to-indigo-900 flex flex-col items-center px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white tracking-tight">
          Weather App
        </h1>
        <p className="text-blue-300 mt-2 text-sm">
          Search any city in the world
        </p>
      </div>

      {/* SEARCH BAR */}
      <div className="flex gap-2 w-full max-w-lg mb-4">
        <input
          className="flex-1 bg-white/10 backdrop-blur text-white outline-none rounded-2xl p-4 placeholder-blue-300 border border-white/20"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
        />
        <button className="bg-sky-500 hover:bg-sky-400 transition-colors text-white font-semibold rounded-2xl px-6" 
        onClick={()=>loadData(city)}>
          Search
        </button>
      </div>

      {/* USE MY LOCATION BUTTON */}
      <button className="text-blue-300 hover:text-white text-sm mb-6 underline transition-colors">
        Use my current location
      </button>

      {/* RECENT SEARCHES */}
      <div className="flex gap-2 flex-wrap justify-center mb-6">
        <button className="bg-white/10 hover:bg-white/20 text-white text-sm rounded-xl px-3 py-1.5 transition-colors border border-white/20">
          London
        </button>
        <button className="bg-white/10 hover:bg-white/20 text-white text-sm rounded-xl px-3 py-1.5 transition-colors border border-white/20">
          Tokyo
        </button>
        <button className="bg-white/10 hover:bg-white/20 text-white text-sm rounded-xl px-3 py-1.5 transition-colors border border-white/20">
          New York
        </button>
      </div>

      {/* WEATHER CARD */}
   
      { weather && (
        <div key={weather.id} className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 w-full max-w-lg text-white">
          {/* CITY NAME + FAVORITE BUTTON */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-4xl font-bold">{weather.name}</h2>
              <p className="text-blue-300 text-sm">{weather.sys.country}</p>
            </div>
            <button className="text-2xl">☆</button>
          </div>

          {/* TEMPERATURE */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-7xl font-bold">{weather.main.temp}°{isCelsius ? "C" : "F"}</p>
              <p className="text-blue-200 capitalize mt-1">partly cloudy</p>
            </div>
            <div className="text-8xl">⛅</div>
          </div>

          {/* TOGGLE CELSIUS / FAHRENHEIT */}
          <button
            onClick={() => setIsCelsius(!isCelsius)}
            className="bg-white/20 hover:bg-white/30 transition-colors rounded-xl px-4 py-2 text-sm font-medium mb-6"
          >
            Switch to {isCelsius ? "Fahrenheit" : "Celsius"}
          </button>

          {/* WEATHER DETAILS GRID */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="text-blue-300 text-xs mb-1">Humidity</p>
              <p className="text-2xl font-bold">{weather.main.humidity}%</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="text-blue-300 text-xs mb-1">Wind Speed</p>
              <p className="text-2xl font-bold">{weather.wind.speed} m/s</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="text-blue-300 text-xs mb-1">Feels Like</p>
              <p className="text-2xl font-bold">{weather.main.feels_like}°</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="text-blue-300 text-xs mb-1">Visiblity</p>
              <p className="text-2xl font-bold">{(weather.visibility)/1000} km</p>
            </div>
          </div>
        </div>
      )}

      {/* FAVORITES SECTION */}
      <div className="w-full max-w-lg mt-6">
        <h3 className="text-white font-semibold mb-3">⭐ Favorites</h3>
        <div className="flex gap-2 flex-wrap">
          <button className="bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-200 text-sm rounded-xl px-3 py-1.5 transition-colors border border-yellow-400/30"
          onClick={()=>  loadData("Paris")}
          
          >
            Paris
          </button>
          <button className="bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-200 text-sm rounded-xl px-3 py-1.5 transition-colors border border-yellow-400/30">
            Dubai
          </button>
        </div>
      </div>
    </div>
  );
};

export default Weather;
