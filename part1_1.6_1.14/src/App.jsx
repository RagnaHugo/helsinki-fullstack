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

const Statistics = ({ good, neutral, bad }) => {
  const calcAverage = () => {
    if (good + neutral + bad === 0) return 0;
    return good / (good + neutral + bad);
  };

  const calcPositive = () => {
    let positive =
      good + neutral + bad == 0 ? 0 : (good / (good + neutral + bad)) * 100;
    return positive;
  };
  return (
    <div>
      <h2>good {good}</h2>
      <h2>neutral {neutral}</h2>
      <h2>bad {bad}</h2>
      <h3>All {good + neutral + bad}</h3>
      <h2>Average {calcAverage()}</h2>
      <h2>Positive {calcPositive()} %</h2>
    </div>
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
