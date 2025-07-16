import { useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setPhone] = useState("");
  const [exist, setExist] = useState(false);
  const [textFilter, setFilter] = useState("");
  const [showArray, setShowArray] = useState([...persons]);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((Response) => {
      setPersons(Response.data);
      setShowArray(Response.data);
    });
  }, []);

  const handleAddPerson = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, phone: newPhone };

    const hayduplicado = persons.find(
      (element) => element.name === newPerson.name
    );

    if (!hayduplicado) {
      const newcopy = [...persons, newPerson];
      setPersons(newcopy);
      setShowArray([...newcopy]);
      setExist(false);
    } else {
      alert(`${newName} is already added to phonebook`);
      setExist(true);
    }
  };

  const handleInput = (event) => {
    setNewName(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleFilter = (event) => {
    const term = event.target.value?.toLowerCase().trim();
    setFilter(event.target.value);

    let showArraycopy = persons.filter((element) =>
      element.name?.toLowerCase().trim().includes(term)
    );
    showArraycopy = term === "" ? [...persons] : showArraycopy;
    setShowArray(showArraycopy);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <h1>add new</h1>
      <PersonForm
        handleAddPerson={handleAddPerson}
        handlePhone={handlePhone}
        handleInput={handleInput}
      />
      <h2>Numbers</h2>
      <Persons showArray={showArray} />
    </div>
  );
};

export default App;
