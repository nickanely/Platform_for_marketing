import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductGallery from '../components/ProductGallery';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="home-page">
      <Navbar onSearch={handleSearch} />
      <div className="home-actions">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
      <ProductGallery searchQuery={searchQuery} />
    </div>
  );
}

export default HomePage;