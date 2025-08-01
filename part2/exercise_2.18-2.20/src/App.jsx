import { useState } from "react";
import "./App.css";
import Information from "./Information";
import { useEffect } from "react";
import axios from "axios";
import List from "./List";

function App() {
  const [restCountries, setRestCountries] = useState(null);
  const [valueText, setValueText] = useState("");
  const [countriesNames, setCountriesNames] = useState([]);
  const [filter, setFilter] = useState([]);
  const handleText = (event) => {
    console.log(event.target.value);
    setValueText(event.target.value);
  };

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all/")
      .then((response) => {
        setRestCountries(response.data);
        setCountriesNames(response.data.map((element) => element.name.common));
      });
  }, []);

  return (
    <>
      <label htmlFor="text">
        Find Countries{" "}
        <input id="text" value={valueText} type="text" onChange={handleText} />
      </label>

      <List
        valueText={valueText}
        countriesNames={countriesNames}
        restCountries={restCountries}
      />
    </>
  );
}

export default App;
