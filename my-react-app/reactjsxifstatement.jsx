import React from 'react';
import { createRoot } from 'react-dom/client';

function Fruit() {
  const x = 5;
  let y = "Apple";

  if (x < 10) {
    y = "Banana";
  }

  return (
    <>
      <h1>{y}</h1>
      <h1>{(x < 10) ? "Banana" : "Apple"}</h1>
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Fruit />);