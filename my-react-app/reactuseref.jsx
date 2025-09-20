import React, { useState, useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const inputElement = useRef(null);
  const previousInputValue = useRef("");

  useEffect(() => {
    count.current = count.current + 1;
  });

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  const focusInput = () => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  };

  return (
    <>
      <p>Type in the input field:</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>

      <hr />

      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>

      <hr />

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);