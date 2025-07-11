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
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={good + neutral + bad} />
      <StatisticLine text="average" value={calcAverage()} />
      <StatisticLine text="positive" value={calcPositive()} />
    </div>
  );
};

function StatisticLine({ text, value }) {
  return (
    <>
      <h2>
        {text} {value}
      </h2>
    </>
  );
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let total = good + neutral + bad;
  return (
    <div>
      <h1>Give feedback</h1>
      <Button onIncrement={setGood} name="Good" />
      <Button onIncrement={setNeutral} name="Neutral" />
      <Button onIncrement={setBad} name="Bad" />
      {total !== 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <h2>No feedback Given</h2>
      )}
    </div>
  );
};

export default App;
