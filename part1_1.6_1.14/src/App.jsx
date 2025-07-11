import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const votes = new Array(anecdotes.length).fill(0); // solo sirve como estado inicial , no podemos usarlo dsps pq se reenderiza siempre con el mismo valor

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(votes);

  const handleNext = () => {
    const numberRnd = parseInt(Math.random() * anecdotes.length);
    console.log(numberRnd);
    setSelected(numberRnd);
  };

  const handleVote = () => {
    setVote((prev) => {
      const copyarray = [...prev];
      copyarray[selected]++;
      return copyarray;
    });
  };

  const mostVote = () => {
    let valor_mayor = vote[0];
    vote.forEach((item) => {
      if (item > valor_mayor) valor_mayor = item;
    });

    return vote.findIndex((item) => item === valor_mayor);
  };

  return (
    <>
      <h1>Anecdote of day</h1>
      <div>{anecdotes[selected]}</div>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>
      <h1>Anecdote most vote</h1>
      <p>{anecdotes[mostVote()]}</p>
    </>
  );
};

export default App;
