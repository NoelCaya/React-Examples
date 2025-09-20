import React from 'react';
import { createRoot } from 'react-dom/client';

function kwToHp(kw) {
  return kw * 1.36;
}

function Car() {
  const hp = 218 * 1.36;
  const myCar = {
    name: "Fiat",
    model: "500",
    color: "white",
    kilowatts: 218,
  };

  return (
    <>
      <h1>My car</h1>
      <p>It has {218 * 1.36} horsepower</p>
      <p>It has {hp} horsepower</p>
      <p>It has {kwToHp(myCar.kilowatts)} horsepower</p>
      <h2>My car is a {myCar.color} {myCar.name} {myCar.model}.</h2>
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Car />);