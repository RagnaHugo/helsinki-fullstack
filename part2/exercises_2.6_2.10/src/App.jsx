import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "035-1256-1234" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setPhone] = useState("");

  const [exist, setExist] = useState(false);

  const handleAddPerson = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, phone: newPhone };

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

  const handleInput = (event) => {
    setNewName(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleInput} />
        </div>
        <br></br>
        <div>
          phone: <input onChange={handlePhone} />
        </div>
        <div>
          <button type="submit" onClick={handleAddPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map((person) => (
        <div key={person.name}>
          {person.name} {person.phone}
        </div>
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
