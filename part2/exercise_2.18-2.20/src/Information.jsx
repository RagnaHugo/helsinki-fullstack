const Information = ({ title, restCountries }) => {
  const filterCountrie = restCountries.find(
    (element) => element.name.common.toLowerCase() === title.toLowerCase()
  );

  const lenguages = Object.entries(filterCountrie.languages);

  return (
    <>
      <h1>{filterCountrie.name.common}</h1>
      <p>Capital : {filterCountrie.capital}</p>
      <p>Area : {filterCountrie.area}</p>
      <h1>Languages</h1>
      <ul>
        {lenguages.map(([key, value]) => (
          <li>{value}</li>
        ))}
      </ul>

      <img src={filterCountrie.flags.png} />
    </>
  );
};

export default Information;
