import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </>
  );
}

function Contact() {
  return (
    <>
      <h1>Contact Page</h1>
      <p>Get in touch with us.</p>
    </>
  );
}

function Car() {
  const { carId } = useParams();
  return (
    <>
      <h1>Car Page</h1>
      <p>This is the page for car ID: {carId}</p>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
        <Link to="/contact" style={{ marginRight: '15px' }}>Contact</Link>
        <Link to="/car/123">View Car 123</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/car/:carId" element={<Car />} />
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

