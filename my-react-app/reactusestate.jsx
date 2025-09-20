import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>Blue</button>
      <button type="button" onClick={() => setColor("red")}>Red</button>
      <button type="button" onClick={() => setColor("pink")}>Pink</button>
      <button type="button" onClick={() => setColor("green")}>Green</button>
    </>
  );
}

function MyCar() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" };
    });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model} from {car.year}.</p>
      <button type="button" onClick={updateColor}>Change Color</button>
    </>
  );
}

function App() {
  return (
    <div>
      <FavoriteColor />
      <hr />
      <MyCar />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);