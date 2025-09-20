import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [selectedFruit, setSelectedFruit] = useState('banana');

  const handleChange = (event) => {
    setSelectedFruit(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your favorite fruit is: ${selectedFruit}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Select your favorite fruit:</p>
      <label>
        <input
          type="radio"
          name="fruit"
          value="apple"
          checked={selectedFruit === 'apple'}
          onChange={handleChange}
        />{' '}
        Apple
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="fruit"
          value="banana"
          checked={selectedFruit === 'banana'}
          onChange={handleChange}
        />{' '}
        Banana
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="fruit"
          value="cherry"
          checked={selectedFruit === 'cherry'}
          onChange={handleChange}
        />{' '}
        Cherry
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<MyForm />);