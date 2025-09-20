import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [textareaContent, setTextareaContent] = useState("");

  const handleChange = (e) => {
    setTextareaContent(e.target.value);
  };

  return (
    <form>
      <label>
        Write here:
        <textarea value={textareaContent} onChange={handleChange} />
      </label>
      <p>Current value: {textareaContent}</p>
    </form>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<MyForm />);