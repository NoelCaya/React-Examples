import React from 'react';
import { createRoot } from 'react-dom/client';

// This is our HOC - it adds a border to any component
function withBorder(WrappedComponent) {
  return function NewComponent(props) {
    return (
      <div style={{ border: '2px solid blue', padding: '10px' }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

// Simple component without border
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Create a new component with border
const GreetingWithBorder = withBorder(Greeting);

function App() {
  return (
    <div>
      <Greeting name="John" />
      <GreetingWithBorder name="Jane" />
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);