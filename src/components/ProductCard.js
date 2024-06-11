// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './ProductCard.css';

function ProductCard({ product, addToCart }) {
  const { translations } = useLanguage();

  return (
    <div className="product-card">
        {product.onSale && <span>Sale</span>}
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price} USD</p>
      
      <Link to={`/product/${product.id}`}>{translations.viewDetails}</Link>
      <button onClick={() => addToCart(product)}>{translations.addToCart}</button>
    </div>
  );
}

export default ProductCard;
