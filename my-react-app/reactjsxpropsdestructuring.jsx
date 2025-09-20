import React from 'react';
import { createRoot } from 'react-dom/client';

function Car({ brand, model, color = "blue", ...rest }) {
  const carDescription = `My ${color} ${brand} ${model}!`;
  const otherProps = Object.entries(rest).map(([key, value]) => (
    <p key={key}>{key}: {value}</p>
  ));

  return (
    <>
      <h2>{carDescription}</h2>
      {otherProps.length > 0 && (
        <div>
          <h3>Additional Details:</h3>
          {otherProps}
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <>
    <Car brand="Ford" model="Mustang" color="red" year={1969} />
    <Car brand="Ford" />
    <Car brand="Tesla" model="Model 3" />
  </>
);