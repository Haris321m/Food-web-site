import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './components/cart/CartContext';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Deals from './components/Deals/deals';
import Contact from './components/components/Contact';
import Cart from './components/cart/Cart';
import Login from './components/components/Login';
import SignUp from './components/components/Singup';
import Admin from './components/Admin/Admin';
import About from './components/components2/About';
import FeedBack from './components/components2/FeedBack';
import Terms from './components/components2/Terms';
import Privacy from './components/components2/Privacy';
import { loadStripe } from '@stripe/stripe-js';

// Replace with your Stripe publishable key
const stripePromise = loadStripe('pk_test_51PJHbSP62DFjvAs8sPkoIaGVnqDsE6JuLe4eU4d2cYNV9oxo6kqgqluj1QrDyZMGpuxYY0oOZCzfrLTMZq3NPIZR00uZpuALeD');

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const isAdminAuthenticated = () => {
    // Logic to check if the admin is authenticated
    return true; // Change this to your actual authentication check
  };

  return (
    <CartProvider>
      <Router>
        <div className="scrollbar-thin scrollbar-track-greenyellow scrollbar-thumb-green-900 overflow-y-scroll h-screen">
          <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/feedback" element={<FeedBack />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />

            {isAdminAuthenticated() ? (
              <Route path="/admin" element={<Admin />} />
            ) : (
              <Route path="/admin" element={<Navigate to="/login" />} />
            )}
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
