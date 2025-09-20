import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px'
      }}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}

function PortalButton({ onClick, children }) {
  return createPortal(
    <button
      onClick={onClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px',
        background: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
      {children}
    </button>,
    document.body
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [divClickCount, setDivClickCount] = useState(0);
  const [buttonClickCount, setButtonClickCount] = useState(0);

  return (
    <div
      style={{
        padding: '20px',
        border: '2px solid black',
        margin: '20px'
      }}
      onClick={() => {
        setDivClickCount(c => c + 1);
      }}>
      <h1>My App</h1>
      <h2>Div Clicks: {divClickCount}</h2>
      <h2>Button Clicks: {buttonClickCount}</h2>
      
      <p>
        The floating button is rendered outside this box using a portal,
        but its clicks still bubble up to this parent div.
      </p>

      <button onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Modal Content</h2>
        <p>This content is rendered outside the App component!</p>
      </Modal>

      <PortalButton
        onClick={() => {
          setButtonClickCount(c => c + 1);
        }}>
        Floating Button
      </PortalButton>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);