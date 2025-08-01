import { useEffect, useState } from "react";
import axios from "axios";

const Information = ({ title, restCountries }) => {
  const api_key = import.meta.env.VITE_SOME_KEY;

  const [weatherInfo, setWeatherInfo] = useState([]);

  const filterCountrie = restCountries.find(
    (element) => element.name.common.toLowerCase() === title.toLowerCase()
  );

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${filterCountrie.latlng[0]}&lon=${filterCountrie.latlng[1]}&appid=${api_key}`
      )
      .then((response) => {
        const info = [];
        const temp = (parseFloat(response.data.main.temp) - 273.15).toFixed(2);

        info.push(temp);
        info.push(response.data.weather[0].icon);
        info.push(response.data.wind.speed);

        setWeatherInfo(info);
        console.log(info);
      });
  }, [title]);

  const lenguages = Object.entries(filterCountrie.languages);

  return (
    <>
      <h1>{filterCountrie.name.common}</h1>
      <p>Capital : {filterCountrie.capital}</p>
      <p>Area : {filterCountrie.area}</p>
      <h1>Languages</h1>
      <ul>
        {lenguages.map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>

      <img src={filterCountrie.flags.png} />
      <h1>Weather in Helsinki</h1>
      {weatherInfo.length !== 0 ? (
        <>
          <p>Temperature - {weatherInfo[0]} ° celsius </p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherInfo[1]}@2x.png`}
            alt=""
          />
          <p>Wind {weatherInfo[2]} m/s</p>
        </>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Information;
