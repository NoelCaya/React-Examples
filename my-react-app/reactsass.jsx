import React from 'react';
import { createRoot } from 'react-dom/client';
import './MyStyle.scss';

function MyHeader() {
  return (
    <div>
      <h1>My Header 1</h1>
      <h2>My Header 2</h2>
      <h3>My Header 3</h3>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <MyHeader />
);

// MyStyle.scss
// @use 'sass:color';
//
// $myColor: red;
//
// h1 {
//   color: $myColor;
// }
//
// h2 {
//   color: color.adjust($myColor, $lightness: -20%);
// }
//
// h3 {
//   color: color.adjust($myColor, $lightness: 20%);
// }