import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({
    firstname: 'John',
    tomato: true,
    onion: false
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let fillings = [];
    if (inputs.tomato) {
      fillings.push('tomato');
    }
    if (inputs.onion) {
      fillings.push('onion');
    }
    const fillingsString = fillings.length > 0 ? fillings.join(' and ') : 'no fillings';
    alert(`${inputs.firstname} wants a burger with ${fillingsString}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>My name is:
        <input
          type="text"
          name="firstname"
          value={inputs.firstname}
          onChange={handleChange}
        />
      </label>

      <p>I want a burger with:</p>
      <label>Tomato:
        <input
          type="checkbox"
          name="tomato"
          checked={inputs.tomato}
          onChange={handleChange}
        />
      </label>
      <label>Onion:
        <input
          type="checkbox"
          name="onion"
          checked={inputs.onion}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<MyForm />);