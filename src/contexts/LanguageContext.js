import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const translations = {
  en: {
    home: 'Home',
    profile: 'Profile',
    contact: 'Contact',
    cart: 'Cart',
    checkout: 'Checkout',
    total: 'Total',
    remove: 'Remove',
    login: 'Log In',
    signup: 'Sign Up',
    filter: 'Filter products...',
    sortBy: 'Sort by',
    priceAsc: 'Price (Ascending)',
    priceDesc: 'Price (Descending)',
    emptyCart: 'Your cart is empty.',
    send: 'Send',
    search: 'Search...',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    password: 'Password',
    address: 'Address',
    sale: 'Sale',
    addToCart: 'Add to Cart',
    viewDetails: 'View Details',
  },
  ge: {
    home: 'სახლი',
    profile: 'პროფილი',
    contact: 'კონტაქტი',
    cart: 'კალათა',
    checkout: 'გადახდა',
    total: 'ჯამში',
    remove: 'წაშლა',
    login: 'შესვლა',
    signup: 'რეგისტრაცია',
    filter: 'ფილტრი',
    sortBy: 'დასორტვა',
    priceAsc: 'ფასი (ზრდადობით)',
    priceDesc: 'ფასი (კლებადობით)',
    emptyCart: 'კალათის დაცარიელება',
    send: 'გაგზავნა',
    search: 'ძებნა...',
    name: 'სახელი',
    email: 'მეილი',
    message: 'მესიჯი',
    password: 'პაროლი',
    sale: 'იყიდება',
    address: 'მისამართი',
    addToCart: 'კალათაში დამატება',
    viewDetails: 'სრულად',
  },

};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
