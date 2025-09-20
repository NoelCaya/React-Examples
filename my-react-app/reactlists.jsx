import React from 'react';
import { createRoot } from 'react-dom/client';

function MyCars() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];

  return (
    <>
      <h1>My Cars:</h1>
      <ul>
        {cars.map((car) => <li key={car.id}>I am a {car.brand}</li>)}
      </ul>
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<MyCars />);