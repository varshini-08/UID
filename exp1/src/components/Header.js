import React, { useState } from 'react';

const Header = ({ setCurrentPage, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header style={{
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div className="logo">
          <button 
            onClick={() => handleNavigation('home')}
            style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: '#2c5530',
              textDecoration: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            FitHealth
          </button>
        </div>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <button 
            onClick={() => handleNavigation('home')}
            style={{
              color: currentPage === 'home' ? '#4caf50' : '#333',
              textDecoration: 'none',
              fontWeight: '500',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavigation('services')}
            style={{
              color: currentPage === 'services' ? '#4caf50' : '#333',
              textDecoration: 'none',
              fontWeight: '500',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Services
          </button>
          <button 
            onClick={() => handleNavigation('contact')}
            style={{
              color: currentPage === 'contact' ? '#4caf50' : '#333',
              textDecoration: 'none',
              fontWeight: '500',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Contact
          </button>
          <button style={{
            background: '#4caf50',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;