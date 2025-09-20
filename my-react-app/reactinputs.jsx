import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({
    firstname: 'John',
    lastname: 'Doe'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(values => ({ ...values, [name]: value }));
  };

  return (
    <form>
      <label>First name:
        <input
          type="text"
          name="firstname"
          value={inputs.firstname}
          onChange={handleChange}
        />
      </label>
      <label>Last name:
        <input
          type="text"
          name="lastname"
          value={inputs.lastname}
          onChange={handleChange}
        />
      </label>
      <p>Current values: {inputs.firstname} {inputs.lastname}</p>
    </form>
  );
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);