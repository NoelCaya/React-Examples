import React, { useState, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

function Fruits() {
  return <div>Here are some delicious fruits!</div>;
}

function Cars() {
  return <div>Here are some cool cars!</div>;
}

function Header() {
  return <h2>Header Component</h2>;
}

function Sidebar() {
  return <div style={{ width: '200px', borderRight: '1px solid #ccc' }}>Sidebar Content</div>;
}

function Content() {
  return <div style={{ flex: 1, padding: '20px' }}>Main Content Area</div>;
}

const LazyFruits = lazy(() => Promise.resolve({ default: Fruits }));
const LazyCars = lazy(() => Promise.resolve({ default: Cars }));
const LazyHeader = lazy(() => Promise.resolve({ default: Header }));
const LazySidebar = lazy(() => Promise.resolve({ default: Sidebar }));
const LazyContent = lazy(() => Promise.resolve({ default: Content }));

function App() {
  const [componentToLoad, setComponentToLoad] = useState('cars');

  return (
    <div>
      <div style={{ padding: '10px', marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
        <button onClick={() => setComponentToLoad('cars')}>Load Cars</button>
        <button onClick={() => setComponentToLoad('fruits')}>Load Fruits</button>
        <button onClick={() => setComponentToLoad('layout')}>Load Layout</button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {componentToLoad === 'cars' && <LazyCars />}
        {componentToLoad === 'fruits' && <LazyFruits />}
        {componentToLoad === 'layout' && (
          <div>
            <LazyHeader />
            <div style={{ display: 'flex' }}>
              <LazySidebar />
              <LazyContent />
            </div>
          </div>
        )}
      </Suspense>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);