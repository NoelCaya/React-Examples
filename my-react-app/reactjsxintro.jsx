import React from 'react';
import { createRoot } from 'react-dom/client';

function ReactExamples() {
  const jsxElement = <h1>I Love JSX!</h1>;
  const createElement = React.createElement('h1', {}, 'I do not use JSX!');
  const expressionElement = <h1>React is {5 + 5} times better with JSX!</h1>;
  
  function Car() {
    const brand = "Ford";
    const model = "Mustang";
    return (
      <>
        <h2>My Car</h2>
        <p>It is a {brand} {model}.</p>
      </>
    );
  }
  
  return (
    <>
      {jsxElement}
      {createElement}
      {expressionElement}
      <Car />
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<ReactExamples />);