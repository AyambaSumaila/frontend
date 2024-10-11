import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import OrderList from './components/OrderList';
import Navigation from './components/Navigation'; // Import Navbar

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/orders" element={<OrderList />} />
      </Routes>
    </Router>
  );
}

export default App;
