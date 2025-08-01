import { useState } from "react";
import Information from "./Information";

const List = ({ valueText, countriesNames, restCountries }) => {
  const [textShow, setTextShow] = useState("");

  const options10 = () => {
    const arreglo = [];
    for (let index = 0; index < countriesNames.length; index++) {
      const element = countriesNames[index];
      if (
        element.toLowerCase().includes(valueText.toLowerCase().trim()) &&
        arreglo.length <= 10
      ) {
        arreglo.push(element);
      }
    }

    return arreglo;
  };

  const filter = options10();

  const handlerButton = (item) => {
    setTextShow(item);
  };

  return (
    <>
      {filter.length >= 10 && valueText !== "" ? (
        <p>Too many matches, specify another filter</p>
      ) : filter.length <= 10 && valueText !== "" && filter.length > 1 ? (
        filter.map((item) => (
          <li key={item}>
            {item}{" "}
            <button
              onClick={() => {
                handlerButton(item);
              }}
            >
              show
            </button>
          </li>
        ))
      ) : filter.length === 1 ? (
        <Information title={filter[0]} restCountries={restCountries} />
      ) : (
        <p>Countries</p>
      )}

      <div>
        {textShow !== "" &&
        restCountries !== null &&
        filter.length !== 1 &&
        valueText !== "" ? (
          <Information title={textShow} restCountries={restCountries} />
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

export default List;
