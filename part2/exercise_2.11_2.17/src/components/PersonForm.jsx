export const PersonForm = ({ handleInput, handlePhone, handleAddPerson }) => {
  return (
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
  );
};
