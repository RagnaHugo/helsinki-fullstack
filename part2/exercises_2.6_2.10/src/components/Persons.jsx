export const Persons = ({ showArray }) => {
  return (
    <>
      {" "}
      {showArray.map((person) => (
        <div key={person.name}>
          {person.name} {person.phone}
        </div>
      ))}
    </>
  );
};
