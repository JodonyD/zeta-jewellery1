import React from 'react';
import './FooterStars.css'; // we'll create this file for animations

function Footer() {
  return (
    <footer className="footer-with-stars text-center text-white py-4 mt-5" style={{ backgroundColor: '#a8a1ad', position: 'relative', overflow: 'hidden' }}>
      {/* Stars animation */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      {/* Footer content */}
      <div className="mb-2" style={{ position: 'relative', zIndex: 2 }}>
        <a href="https://www.instagram.com/zeta_jewellery" target="_blank" rel="noreferrer" className="text-white me-3 fs-4">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.tiktok.com/@zeta_jewellery" target="_blank" rel="noreferrer" className="text-white fs-4">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>

      <p className="mb-0" style={{ position: 'relative', zIndex: 2 }}>
        &copy; {new Date().getFullYear()} Zeta Jewellery. All rights reserved.
      </p>
      <small style={{ position: 'relative', zIndex: 2 }}>Handmade with love & elegance.</small>
    </footer>
  );
}

export default Footer;
