import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// Composant pour les informations de contact
const ContactInfo = () => (
  <ul className="header-top-1-contact-info d-flex align-items-center">
    <li><a href="mailto:info@example.com">info@example.com</a></li>
    <li><a href="tel:+91-213-666-0027">+91-213-666-0027</a></li>
  </ul>
);

// Composant pour le sélecteur de langue
const LanguageSwitcher = () => (
  <div className="language-switcher">
    <select>
      <option data-display="EN">EN</option>
      <option value="BN">BN</option>
      <option value="FR">FR</option>
      <option value="CH">CH</option>
    </select>
  </div>
);

// Composant pour les icônes sociales
const SocialIcons = () => (
  <ul className="header-top-1-social-icon d-flex align-items-center">
    <li><a href="javascript:void(0);"><i className="fab fa-facebook-f"></i></a></li>
    <li><a href="javascript:void(0);"><i className="fab fa-twitter"></i></a></li>
    <li><a href="javascript:void(0);"><i className="fab fa-linkedin-in"></i></a></li>
  </ul>
);

// Composant pour le menu de navigation
const NavigationMenu = () => (
  <nav className="main-menu navbar-expand-md navbar-light">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navigation">
        <li><Link to={'/'}>Home</Link></li>
        <li className="dropdown"><a href="index.html">Rooms</a>
          <ul>
            <li><a href="index.html">Rooms standard</a></li>
            <li><Link to={'room-1'}>Rooms Luxury</Link></li>
            <li><a href="index-3.html">Rooms Royal</a></li>
          </ul>
        </li>
        <li className="dropdown"><a href="index.html">Blog</a>
          <ul>
            <li><a href="index.html">Blog Page 1</a></li>
            <li><a href="index-2.html">Blog Page 2</a></li>
            <li><a href="index-3.html">Blog Page 3</a></li>
          </ul>
        </li>
        <li><a href="index.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
  </nav>
);

// Composant principal de l'en-tête
const Header = () => {
  const [user, setUser] = useState(null); // État pour l'utilisateur


  return (
    <header className="main-header header-style-one">
      <div className="header-top-1">
        <div className="auto-container">
          <div className="header-top-1-row d-flex align-items-center justify-content-between">
            <div className="header-top-1-left-column">
              <ContactInfo />
            </div>
            <div className="header-top-1-right-column d-flex align-items-center">
              <LanguageSwitcher />
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
      <div className="header-upper">
        <div className="auto-container">
          <div className="inner-container d-flex align-items-center justify-content-between">
            <div className="logo-box">
              <div className="logo" style={{ width: '240px' }}>
                <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
              </div>
            </div>
            <div className="middle-column">
              <div className="nav-outer">
                <div className="mobile-nav-toggler"><img src="assets/images/icons/icon-bar-2.png" alt="" /></div>
                <NavigationMenu />
              </div>
            </div>
            <div className="right-column d-flex gap-4 align-items-center">
              <div className="header-link-btn"><a href="javascript:void(0);" className="btn-1 btn-small btn-alt">Book Your Stay <span></span></a></div>
              <div className="header-link-btn">
                {user ? (
                  <span>{user}</span>
                ) : (
                  <div className='d-flex gap-2 justify-content-center align-items-center'>
  <a href="/login" className="text-decoration-none">Connexion</a>
  <p className="m-0">|</p>
  <a href="/create-account" className="text-decoration-none">S'enregistrer</a>
</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-overlay">
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
    </header>
  );
};

export default Header;