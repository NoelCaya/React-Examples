import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nameInput">Enter your name:</label>
      <input
        id="nameInput"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<MyForm />);