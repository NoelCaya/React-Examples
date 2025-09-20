import React from 'react';
import { createRoot } from 'react-dom/client';

function MadeGoal() {
  return <h1>Goal!</h1>;
}

function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
      {isGoal ? <MadeGoal /> : <MissedGoal />}
    </>
  );
}

function Car(props) {
  return (
    <>
      {props.brand && <h1>My car is a {props.brand}!</h1>}
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <Goal isGoal={false} />
    <Goal isGoal={true} />
    <Car brand="Ford" />
    <Car />
  </>
);