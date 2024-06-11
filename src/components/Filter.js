import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Filter.css';

function Filter({ products, setFilteredProducts }) {
  const [filter, setFilter] = useState('');
  const { translations } = useLanguage();

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleFilterChange}
      placeholder={translations.filter}
      className="filter-input"
    />
  );
}

export default Filter;
