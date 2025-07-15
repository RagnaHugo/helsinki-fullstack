import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [exist, setExist] = useState(false);

  const addPerson = function (newPerson) {
    const hayduplicado = persons.find(
      (element) => element.name === newPerson.name
    );

    if (!hayduplicado) {
      const newcopy = [...persons, newPerson];
      setPersons(newcopy);
      setExist(false);
    } else {
      setExist(true);
    }
  };

  const handleAddPerson = (event) => {
    event.preventDefault();
    const personNew = { name: newName };
    addPerson(personNew);
  };

  const handleInput = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleInput} />
        </div>
        <div>
          <button type="submit" onClick={handleAddPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map((person) => (
        <div key={person.name}>{person.name}</div>
      ))}
      {!exist ? (
        <p></p>
      ) : (
        <p>{alert(`${newName} is already added to phonebook`)}</p>
      )}
    </div>
  );
};

export default App;
