import Information from "./Information";

const List = ({ valueText, countriesNames, restCountries }) => {
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

  return (
    <>
      {filter.length >= 10 && valueText !== "" ? (
        <p>Too many matches, specify another filter</p>
      ) : filter.length <= 10 && valueText !== "" && filter.length > 1 ? (
        filter.map((item) => <li>{item}</li>)
      ) : filter.length === 1 ? (
        <Information title={filter[0]} restCountries={restCountries} />
      ) : (
        <p>Countries</p>
      )}
    </>
  );
};

export default List;
