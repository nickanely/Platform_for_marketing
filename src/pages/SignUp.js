// src/pages/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './SignUp.css';

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { translations } = useLanguage();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/login');
  };

  return (
    <div className="signup-page">
      <h2>{translations.signup}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={translations.email}
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder={translations.password}
          required
        />
        <button type="submit">{translations.signup}</button>
      </form>
    </div>
  );
}

export default SignUp;
