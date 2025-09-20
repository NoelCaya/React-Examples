import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

function App() {
  return (
    <>
      <Timer />
      <hr />
      <Counter />
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);