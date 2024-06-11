// src/components/Cart.js
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Cart.css';

function Cart({ cartItems, removeFromCart }) {
  const { translations } = useLanguage();
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>{translations.cart}</h2>
      {cartItems.length === 0 ? (
        <p>{translations.emptyCart}</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>{translations.remove}</button>
            </li>
          ))}
        </ul>
      )}
      <h3>{translations.total}: ${totalPrice}</h3>
      <button>{translations.checkout}</button>
    </div>
  );
}

export default Cart;
