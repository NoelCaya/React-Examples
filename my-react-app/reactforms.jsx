import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("John");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form>
      <label>Enter your name:
        <input
          type="text"
          value={name}
          onChange={handleChange}
        />
      </label>
      <p>Current value: {name}</p>
    </form>
  );
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);