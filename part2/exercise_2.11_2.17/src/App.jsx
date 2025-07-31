import { useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import { useEffect } from "react";
import { getAllNumbers, addNumber, putNumber } from "./servicePhoneBook";
import Notification from "./components/Notification";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setPhone] = useState("");
  const [exist, setExist] = useState(false);
  const [textFilter, setFilter] = useState("");
  const [showArray, setShowArray] = useState([...persons]);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllNumbers().then((Response) => {
      setPersons(Response);
      setShowArray(Response);
    });
  }, []);

  const handleAddPerson = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, phone: newPhone };

    const hayduplicado = persons.find(
      (element) => element.name === newPerson.name
    );

    if (!hayduplicado) {
      addNumber(newPerson).then((response) => {
        console.log(response.data);
        const newcopy = [...persons, response.data];
        setPersons(newcopy);
        setShowArray([...newcopy]);
        setExist(false);
        setMessage(`Added ${response.data.name}`);
        setError(false);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
    } else {
      if (
        window.confirm(
          `${newName} is already added to phonebook , replace the old number with a new one`
        )
      ) {
        putNumber(hayduplicado.id, {
          ...hayduplicado,
          phone: newPerson.phone,
        })
          .then((response) => {
            console.log("put ", response.data);
            const newCopy = persons.filter((element, index) => {
              return element.name !== response.data.name;
            });

            setPersons([...newCopy, response.data]);
            setShowArray([...newCopy, response.data]);
            setMessage(`Updated ${response.data.name}`);
            setError(false);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          })
          .catch((error) => {
            setMessage(
              `Information of ${newName} has already been removed from server`
            );
            setError(true);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          });
      }

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
      <Notification message={message} error={error} />
      <Filter handleFilter={handleFilter} />
      <h1>add new</h1>
      <PersonForm
        handleAddPerson={handleAddPerson}
        handlePhone={handlePhone}
        handleInput={handleInput}
      />
      <h2>Numbers</h2>
      <Persons
        showArray={showArray}
        setPersons={setPersons}
        setShowArray={setShowArray}
      />
    </div>
  );
};

export default App;
