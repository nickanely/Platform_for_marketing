// src/pages/Profile.js
import React from 'react';
import Navbar from '../components/Navbar';
import { useLanguage } from '../contexts/LanguageContext';
import './Profile.css';

const userProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  profilePicture: '/images/profile.jpg',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};

function Profile() {
  const { translations } = useLanguage();

  return (
    <div className="profile-page">
      <Navbar />
      <div className="profile-card">
        <img src={userProfile.profilePicture} alt="Profile" className="profile-picture" />
        <h2>{userProfile.name}</h2>
        <p>{translations.email}: {userProfile.email}</p>
        <h3>{translations.address}:</h3>
        <p>{userProfile.address.street}</p>
        <p>{userProfile.address.city}, {userProfile.address.state} {userProfile.address.zip}</p>
      </div>
    </div>
  );
}

export default Profile;
