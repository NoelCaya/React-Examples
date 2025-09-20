import React, { useRef, forwardRef } from 'react';
import { createRoot } from 'react-dom/client';

const MyInput = forwardRef((props, ref) => (
  <input ref={ref} {...props} style={{ marginRight: '10px' }} />
));

function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <MyInput ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);