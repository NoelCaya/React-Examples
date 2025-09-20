import React from 'react';
import { createRoot } from 'react-dom/client';

function Football() {
  const shootWithArg = (message) => {
    alert(message);
  };

  const shootWithEvent = (message, event) => {
    alert(`Message: ${message}, Event Type: ${event.type}`);
  };

  return (
    <div>
      <button onClick={() => shootWithArg("Great Shot!")}>Take the Shot! (No args)</button>
      <button onClick={() => shootWithArg("Goal!")}>Take the Shot! (With arg)</button>
      <button onClick={(event) => shootWithEvent("Goal!", event)}>Take the Shot! (With event)</button>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Football />);