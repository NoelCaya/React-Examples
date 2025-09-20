import React from 'react';
import { createRoot } from 'react-dom/client';
import styles from './Button.module.css';

// This is the combined CSS Module file (Button.module.css)
// .mybutton {
//   padding: 10px 20px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// }
//
// .primary {
//   composes: mybutton;
//   background-color: #007bff;
//   color: white;
// }
//
// .secondary {
//   composes: mybutton;
//   background-color: #6c757d;
//   color: white;
// }
//
// :global(.myheader) {
//   padding: 10px 20px;
//   font-size: 50px;
//   color: white;
//   background-color: dodgerblue;
// }
//
// .myparagraph {
//   font-size: 20px;
//   color: white;
//   background-color: purple;
// }

function App() {
  return (
    <div>
      <h1 className="myheader">
        Global Header
      </h1>
      <p className={styles.myparagraph}>
        Local Paragraph
      </p>
      <button className={`${styles.mybutton} ${styles.primary}`}>
        Primary (Template Literal)
      </button>
      <button className={styles.secondary}>
        Secondary (Composes)
      </button>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);