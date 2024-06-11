// src/components/ProductGallery.js
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Filter from './Filter';
import Cart from './Cart';
import { useLanguage } from '../contexts/LanguageContext';
import './ProductGallery.css';

const products = [
  { id: 1, name: 'Product 1', price: 100, onSale: true, image: '/images/product1.jpg', description: 'Description for Product 1', isVisible: true },
  { id: 2, name: 'Product 2', price: 200, onSale: false, image: '/images/product2.jpg', description: 'Description for Product 2', isVisible: true },
  { id: 3, name: 'Product 3', price: 150, onSale: true, image: '/images/product3.jpg', description: 'Description for Product 3', isVisible: true },
  { id: 4, name: 'Product 4', price: 452, onSale: true, image: '/images/product3.jpg', description: 'Description for Product 4', isVisible: true },
  { id: 5, name: 'Product 5', price: 32, onSale: false, image: '/images/product3.jpg', description: 'Description for Product 5', isVisible: true },
  { id: 6, name: 'Product 6', price: 768, onSale: true, image: '/images/product3.jpg', description: 'Description for Product 6', isVisible: true },
];

function ProductGallery({ searchQuery }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const { translations } = useLanguage();

  const handleFilterChange = (e) => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (e.target.value === 'price-asc') return a.price - b.price;
      if (e.target.value === 'price-desc') return b.price - a.price;
      return 0;
    });
    setFilteredProducts(sortedProducts);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const filteredBySearch = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-gallery">
      <Filter products={products} setFilteredProducts={setFilteredProducts} />
      <select value={sortBy} onChange={handleSortByChange} className="sort-select">
        <option value={null}>{translations.sortBy}</option>
        <option value="price-asc">{translations.priceAsc}</option>
        <option value="price-desc">{translations.priceDesc}</option>
      </select>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <div className="gallery">
        {filteredBySearch
          .filter((product) => product.isVisible)
          .map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
      </div>
    </div>
  );
}

export default ProductGallery;
