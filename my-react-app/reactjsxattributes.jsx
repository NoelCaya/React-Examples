import React from 'react';
import { createRoot } from 'react-dom/client';

function Car() {
  const x = "myclass";
  
  const myfunc = () => {
    alert('Hello World');
  };

  const mystyles = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "lightyellow",
  };

  return (
    <>
      <h1 className="myclass">Hello World</h1>
      <h1 className={x}>Hello World</h1>
      <h1 style={mystyles}>My car</h1>
      
      <button onClick={myfunc}>Click me</button>
      <button onClick={myfunc} disabled>Click me</button>
      <button onClick={myfunc} disabled={true}>Click me</button>
      <button onClick={myfunc} disabled={false}>Click me</button>
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Car />);
