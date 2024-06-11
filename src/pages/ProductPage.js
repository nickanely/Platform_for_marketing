import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useLanguage } from '../contexts/LanguageContext';
import './ProductPage.css';

const products = [
  { id: 1, name: 'Product 1', price: 100, onSale: true, image: '/images/product1.jpg', description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: 200, onSale: false, image: '/images/product2.jpg', description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', price: 150, onSale: true, image: '/images/product3.jpg', description: 'Description for Product 3' },
  { id: 4, name: 'Product 4', price: 452, onSale: true, image: '/images/product3.jpg', description: 'Description for Product 4' },
  { id: 5, name: 'Product 5', price: 32, onSale: false, image: '/images/product3.jpg', description: 'Description for Product 5' },
  { id: 6, name: 'Product 6', price: 768, onSale: true, image: '/images/product3.jpg', description: 'Description for Product 6' },
];

function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { translations } = useLanguage();

  return (
    <div className="product-page">
      <Navbar />
      <div className="product-details">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price} USD</p>
        {product.onSale && <span>{translations.sale}</span>}
      </div>
    </div>
  );
}

export default ProductPage;
