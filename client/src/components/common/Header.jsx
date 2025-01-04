import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import authService from '../../services/authService';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  // Vérifier la validité du token au chargement et périodiquement
  useEffect(() => {
    const checkToken = () => {
      const currentUser = authService.getCurrentUser();
      if (currentUser?.token) {
        try {
          const tokenData = JSON.parse(atob(currentUser.token.split('.')[1]));
          if (tokenData.exp * 1000 < Date.now()) {
            authService.logout();
            setUser(null);
          }
        } catch (error) {
          console.error('Erreur lors de la vérification du token:', error);
          authService.logout();
          setUser(null);
        }
      }
    };

    checkToken();
    const interval = setInterval(checkToken, 60000);
    return () => clearInterval(interval);
  }, [setUser]);

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate('/');
  };

  const getInitials = (username) => {
    if (!username) return '?';
    return username.charAt(0).toUpperCase();
  };

  return (
    <>
      <header className="main-header header-style-one">
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container d-flex align-items-center justify-content-between">
              <div className="logo-box">
                <div className="logo" style={{ width: '240px' }}>
                  <Link to="/">
                    <img src="assets/images/logo.png" alt="Royal King Hotel" />
                  </Link>
                </div>
              </div>
              
              <div className="middle-column">
                <div className="nav-outer">
                  <div className="mobile-nav-toggler" onClick={() => setIsMobileMenuOpen(true)}>
                    <img src="assets/images/icons/icon-bar-2.png" alt="" />
                  </div>
                  
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div className="collapse navbar-collapse show clearfix">
                      <ul className="navigation">
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/rooms">Chambres</Link></li>
                        <li><Link to="/about">À propos</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>

              <div className="right-column d-flex align-items-center">
                <button 
                  type="button" 
                  className="theme-btn search-toggler me-3"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <i className="icon-1"></i>
                </button>

                {user && user.username ? (
                  <div className="d-flex align-items-center">
                    <Link to="/profile" className="d-flex align-items-center me-3 text-decoration-none">
                      <div className="avatar-circle me-2">
                        {getInitials(user.username)}
                      </div>
                      <span className="username">{user.username}</span>
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="btn-1 btn-small"
                    >
                      Déconnexion <span></span>
                    </button>
                  </div>
                ) : (
                  <div className="d-flex align-items-center">
                    <Link to="/login" className="btn-1 btn-small me-2">
                      Connexion <span></span>
                    </Link>
                    <Link to="/register" className="btn-1 btn-small btn-alt">
                      Inscription <span></span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Popup */}
      {isSearchOpen && (
        <div className="search-popup">
          <div className="close-search theme-btn" onClick={() => setIsSearchOpen(false)}>
            <span className="fal fa-times"></span>
          </div>
          <div className="popup-inner">
            <div className="overlay-layer"></div>
            <div className="search-form">
              <form method="post" action="index.html">
                <div className="form-group">
                  <fieldset>
                    <input 
                      type="search" 
                      className="form-control" 
                      name="search-input" 
                      placeholder="Search Here" 
                      required 
                    />
                    <input type="submit" value="Search Now!" className="theme-btn" />
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="fal fa-times"></span>
          </div>
          <nav className="menu-box">
            <div className="nav-logo">
              <Link to="/">
                <img src="assets/images/logo-light.png" alt="" />
              </Link>
            </div>
            <div className="menu-outer">
              <ul className="navigation">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/rooms">Chambres</Link></li>
                <li><Link to="/about">À propos</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header; 