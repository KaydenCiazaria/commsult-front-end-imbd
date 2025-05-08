import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <h1 className="logo">imbd2</h1>
        </Link>
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;