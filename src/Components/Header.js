import React from 'react';
import './Header.css';
import { TiHome } from "react-icons/ti";
import { FaSearch, FaUser, FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <img src="/Reddit-Logo.png" alt="Reddit Logo" className='header-logo' />
        <button className='header-home-btn'><TiHome /> Home</button>
      </div>
      <div className='header-center'>
        <input type='text' placeholder='Search' className='header-search' />
        <button className='header-search-btn'><FaSearch /></button>
      </div>
      <div className='header-right'>
        <button className='header-icon-btn'><FaBell /></button>
        <button className='header-icon-btn'><FaUser /></button>
      </div>
    </div>
  );
};

export default Header;
