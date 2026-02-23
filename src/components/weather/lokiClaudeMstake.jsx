import { useState, useEffect } from "react";

// ============================================
// PRACTICE GUIDE - READ THIS FIRST!
// ============================================
// This app uses OpenWeatherMap API (free)
// Sign up at: https://openweathermap.org/api
// Get your free API key and replace "YOUR_API_KEY" below
//
// FUNCTIONS YOU NEED TO BUILD:
// 1. fetchWeather()         - fetch weather for searched city
// 2. fetchByLocation()      - fetch weather using user's GPS location
// 3. convertTemp()          - toggle between Celsius and Fahrenheit
// 4. saveToRecent()         - save searched cities to localStorage
// 5. loadRecent()           - load recent cities on page open (useEffect)
// 6. handleFavorite()       - save/remove a city from favorites
//
// CONCEPTS YOU WILL PRACTICE:
// - fetch() inside useEffect
// - useState for loading, error, data states
// - localStorage for recent searches
// - conditional rendering (loading, error, data)
// - navigator.geolocation (browser GPS API)
// ============================================

const API_KEY = "YOUR_API_KEY";

const Weather = () => {
  // ---- STATES (you will use all of these) ----
  const [city, setCity] = useState("");                  // input value
  const [weather, setWeather] = useState(null);          // API response
  const [loading, setLoading] = useState(false);         // show spinner
  const [error, setError] = useState("");                // show error
  const [isCelsius, setIsCelsius] = useState(true);      // temp unit toggle
  const [recentCities, setRecentCities] = useState([]);  // recent searches
  const [favorites, setFavorites] = useState([]);        // favorite cities

  // ---- PRACTICE ZONE - BUILD YOUR FUNCTIONS HERE ----

  // 1. FETCH WEATHER BY CITY NAME
  // hint: use fetch() with this URL:
  // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  // set loading to true before fetch, false after
  // save result to setWeather
  // if error set setError message
  function fetchWeather() {
    // your code here
  }

  // 2. FETCH BY GPS LOCATION
  // hint: use navigator.geolocation.getCurrentPosition()
  // it gives you coords.latitude and coords.longitude
  // URL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  function fetchByLocation() {
    // your code here
  }

  // 3. CONVERT TEMPERATURE
  // hint: if isCelsius is true, convert to Fahrenheit: (temp * 9/5) + 32
  // if isCelsius is false, just show the temp as is
  // toggle isCelsius state on button click
  function convertTemp(temp) {
    // your code here
  }

  // 4. SAVE TO RECENT SEARCHES
  // hint: save city name to recentCities array
  // also save to localStorage so it persists
  // avoid duplicates!
  function saveToRecent(cityName) {
    // your code here
  }

  // 5. LOAD RECENT ON PAGE OPEN
  // hint: use useEffect with [] dependency
  // read from localStorage and setRecentCities
  useEffect(() => {
    // your code here
  }, []);

  // 6. HANDLE FAVORITES
  // hint: if city is already in favorites, remove it
  // if not, add it
  // save to localStorage
  function handleFavorite(cityName) {
    // your code here
  }

  // ---- UI ----
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 via-blue-800 to-indigo-900 flex flex-col items-center px-4 py-10">

      {/* TITLE */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white tracking-tight">Weather App</h1>
        <p className="text-blue-300 mt-2 text-sm">Search any city in the world</p>
      </div>

      {/* SEARCH BAR */}
      <div className="flex gap-2 w-full max-w-lg mb-4">
        <input
          className="flex-1 bg-white/10 backdrop-blur text-white outline-none rounded-2xl p-4 placeholder-blue-300 border border-white/20"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
        />
        <button
          onClick={fetchWeather}
          className="bg-sky-500 hover:bg-sky-400 transition-colors text-white font-semibold rounded-2xl px-6"
        >
          Search
        </button>
      </div>

      {/* USE MY LOCATION BUTTON */}
      <button
        onClick={fetchByLocation}
        className="text-blue-300 hover:text-white text-sm mb-6 underline transition-colors"
      >
        Use my current location
      </button>

      {/* RECENT SEARCHES */}
      {recentCities.length > 0 && (
        <div className="flex gap-2 flex-wrap justify-center mb-6">
          {recentCities.map((c, index) => (
            <button
              key={index}
              onClick={() => { setCity(c); fetchWeather(); }}
              className="bg-white/10 hover:bg-white/20 text-white text-sm rounded-xl px-3 py-1.5 transition-colors border border-white/20"
            >
              {c}
            </button>
          ))}
        </div>
      )}

      {/* LOADING STATE */}
      {loading && (
        <div className="text-white text-lg mt-10 animate-pulse">
          Fetching weather...
        </div>
      )}

      {/* ERROR STATE */}
      {error && (
        <div className="bg-red-500/20 border border-red-400 text-red-300 rounded-2xl px-6 py-4 mt-4">
          {error}
        </div>
      )}

      {/* WEATHER CARD - shows after fetch */}
      {weather && !loading && (
        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 w-full max-w-lg mt-4 text-white">

          {/* CITY NAME + FAVORITE BUTTON */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-4xl font-bold">{weather.name}</h2>
              <p className="text-blue-300 text-sm">{weather.sys?.country}</p>
            </div>
            <button
              onClick={() => handleFavorite(weather.name)}
              className="text-2xl"
            >
              {favorites.includes(weather.name) ? "⭐" : "☆"}
            </button>
          </div>

          {/* TEMPERATURE */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-7xl font-bold">
                {/* practice: call convertTemp() here with weather.main?.temp */}
                {weather.main?.temp}°{isCelsius ? "C" : "F"}
              </p>
              <p className="text-blue-200 capitalize mt-1">{weather.weather?.[0]?.description}</p>
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather?.[0]?.icon}@2x.png`}
              alt="weather icon"
              className="w-20 h-20"
            />
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
              <p className="text-2xl font-bold">{weather.main?.humidity}%</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="text-blue-300 text-xs mb-1">Wind Speed</p>
              <p className="text-2xl font-bold">{weather.wind?.speed} m/s</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="text-blue-300 text-xs mb-1">Feels Like</p>
              <p className="text-2xl font-bold">{weather.main?.feels_like}°</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="text-blue-300 text-xs mb-1">Visibility</p>
              <p className="text-2xl font-bold">{(weather.visibility / 1000).toFixed(1)} km</p>
            </div>
          </div>

        </div>
      )}

      {/* FAVORITES SECTION */}
      {favorites.length > 0 && (
        <div className="w-full max-w-lg mt-6">
          <h3 className="text-white font-semibold mb-3">⭐ Favorites</h3>
          <div className="flex gap-2 flex-wrap">
            {favorites.map((fav, index) => (
              <button
                key={index}
                onClick={() => { setCity(fav); fetchWeather(); }}
                className="bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-200 text-sm rounded-xl px-3 py-1.5 transition-colors border border-yellow-400/30"
              >
                {fav}
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default Weather;