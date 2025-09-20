import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, NavLink, Link, Outlet, useParams } from 'react-router-dom';

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

function Home() {
  return <h1>Home Page</h1>;
}

function Products() {
  return (
    <div>
      <h1>Products Page</h1>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="car">Cars</Link> |{' '}
        <Link to="bike">Bikes</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function CarProducts() {
  return (
    <div>
      <h2>Cars</h2>
      <ul>
        <li>Audi</li>
        <li>BMW</li>
        <li>Volvo</li>
      </ul>
    </div>
  );
}

function BikeProducts() {
  return (
    <div>
      <h2>Bikes</h2>
      <ul>
        <li>Yamaha</li>
        <li>Suzuki</li>
        <li>Honda</li>
      </ul>
    </div>
  );
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function Customer() {
  const { firstname } = useParams();
  return <h1>Hello, {firstname}!</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: '20px' }}>
        <NavLink to="/" style={navLinkStyles}>Home</NavLink> |{' '}
        <NavLink to="/products" style={navLinkStyles}>Products</NavLink> |{' '}
        <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
        <div style={{ marginTop: '10px' }}>
          <Link to="/customer/Emil" style={{ marginRight: '10px' }}>View Emil's Profile</Link>
          <Link to="/customer/Tobias">View Tobias's Profile</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/customer/:firstname" element={<Customer />} />
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
