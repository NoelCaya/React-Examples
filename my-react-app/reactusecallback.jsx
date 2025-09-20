import React, { useState, useCallback, memo } from 'react';
import { createRoot } from 'react-dom/client';

// Child component that receives a function prop.
// React.memo prevents it from re-rendering unless its props change.
const Button = memo(({ onClick, text }) => {
  console.log(`Child "${text}" button rendered`);
  return <button onClick={onClick}>{text}</button>;
});

// Parent component without useCallback.
// The handler functions are recreated on every render.
function WithoutCallbackExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = () => {
    setCount1(count1 + 1);
  };

  const handleClick2 = () => {
    setCount2(count2 + 1);
  };

  console.log("Parent rendered (Without useCallback)");
  return (
    <div>
      <h2>Without useCallback:</h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  );
}

// Parent component with useCallback.
// The handler functions are memoized and only change when dependencies change.
function WithCallbackExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = useCallback(() => {
    setCount1(c => c + 1);
  }, []);

  const handleClick2 = useCallback(() => {
    setCount2(c => c + 1);
  }, []);

  console.log("Parent rendered (With useCallback)");
  return (
    <div>
      <h2>With useCallback:</h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  );
}

const App = () => (
  <>
    <WithoutCallbackExample />
    <hr />
    <WithCallbackExample />
  </>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);