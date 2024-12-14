import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" 
      style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', padding: '15px' }}>
      <div className="container-fluid">
        {/* Brand Logo or Name */}
        <a className="navbar-brand" href="#" 
          style={{ color: '#fff', fontWeight: 'bold', fontSize: '24px' }}>
          Hari Raval
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{ color: '#fff' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"
                style={{ color: '#e6fffa', fontSize: '18px', marginRight: '15px' }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about"
                style={{ color: '#e6fffa', fontSize: '18px', marginRight: '15px' }}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills"
                style={{ color: '#e6fffa', fontSize: '18px', marginRight: '15px' }}>Skills</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#projects"
                style={{ color: '#e6fffa', fontSize: '18px', marginRight: '15px' }}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact"
                style={{ color: '#e6fffa', fontSize: '18px', marginRight: '15px' }}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
