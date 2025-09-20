import React from 'react';
import { createRoot } from 'react-dom/client';
import './MyStylesheet.css';
import styles from './my-style.module.css';

const Header = () => {
  // Inline styling with an object
  const inlineStyle = {
    color: "DodgerBlue",
    backgroundColor: "lightblue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };

  // Inline styling directly
  return (
    <div>
      <h1 style={{color: "red"}}>Inline Style (Direct)</h1>
      <h1 style={inlineStyle}>Inline Style (Object)</h1>
      <h1 className="bigred">From External CSS</h1>
      <h1 className={styles.bigred}>From CSS Module</h1>
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <Header />
);