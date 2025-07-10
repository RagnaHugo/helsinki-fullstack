import { useState } from "react";

const Button = ({ onIncrement, name }) => {
  return (
    <button
      onClick={() => {
        onIncrement((prev) => prev + 1);
      }}
    >
      {name}
    </button>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onIncrement={setGood} name="Good" />
      <Button onIncrement={setNeutral} name="Neutral" />
      <Button onIncrement={setBad} name="Bad" />
      <div>
        <h2>good {good}</h2>
        <h2>neutral {neutral}</h2>
        <h2>bad {bad}</h2>
      </div>
    </div>
  );
};

export default App;
