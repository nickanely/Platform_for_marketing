import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { switchLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button onClick={() => switchLanguage('en')}>EN</button>
      <button onClick={() => switchLanguage('ge')}>GE</button>
    </div>
  );
};

export default LanguageSwitcher;
