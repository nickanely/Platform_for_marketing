import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

function Navbar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const { translations } = useLanguage();

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <nav className="navbar">
      <Link to="/">{translations.home}</Link>
      <Link to="/profile">{translations.profile}</Link>
      <Link to="/contact">{translations.contact}</Link>
      <input
        type="text"
        placeholder={translations.search}
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <LanguageSwitcher />
    </nav>
  );
}

export default Navbar;