import { deleteNumber } from "../servicePhoneBook";

export const Persons = ({ showArray, setPersons, setShowArray }) => {
  return (
    <>
      {" "}
      {showArray.map((person, index) => (
        <div key={person.id}>
          {person.name} {person.phone}{" "}
          <Button
            key={index}
            idPerson={person.id}
            namePerson={person.name}
            setPersons={setPersons}
            setShowArray={setShowArray}
          />
        </div>
      ))}
    </>
  );
};

const Button = ({ idPerson, namePerson, setPersons, setShowArray }) => {
  const handleDelete = () => {
    if (window.confirm(`Delete ${namePerson} ?`)) {
      deleteNumber(idPerson).then((response) => {
        setPersons((prev) => prev.filter((e) => e.id !== idPerson));
        setShowArray((prev) => prev.filter((e) => e.id !== idPerson));
      });
    }
  };

  return <button onClick={handleDelete}>delete</button>;
};
