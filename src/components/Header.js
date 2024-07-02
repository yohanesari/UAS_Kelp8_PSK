import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../image/logo.png';

const Header = () => {
    const [activeLink, setActiveLink] = useState('home');
    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-white bg-white">
                <div className="container">
                    <Link to="/">
                        <img src={logoImage} alt="" height="75" width="75" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <Link to="/" className={`nav-item nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleLinkClick('home')}>Home</Link>
                            <Link to="/laporan" className={`nav-item nav-link ${activeLink === 'laporan' ? 'active' : ''}`} onClick={() => handleLinkClick('laporan')}>Laporan</Link>
                            <Link to="/about" className={`nav-item nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={() => handleLinkClick('about')}>About Us</Link>
                            <Link to="/laporan" className='btn btn-success py-2 px-4 mx-2'>Create New Report</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
