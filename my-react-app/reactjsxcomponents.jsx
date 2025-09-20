import React from 'react';
import { createRoot } from 'react-dom/client';

function Car() {
  return (
    <h2>Hi, I am a Car!</h2>
  );
}

function CarWithColor(props) {
  return (
    <h2>I am a {props.color} Car!</h2>
  );
}

function CarWithBrand(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
      <CarWithColor color="red" />
      <CarWithBrand brand="Ford" />
      <CarWithBrand brand="BMW" />
    </>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<Garage />);    