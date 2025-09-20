import React from 'react';
import { createRoot } from 'react-dom/client';

function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

const myCar = {
  brand: "Ford"
};

createRoot(document.getElementById('root')).render(
  <Car brand={myCar.brand} />
);