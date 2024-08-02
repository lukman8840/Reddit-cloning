import React from 'react';
import './Navbar.css';
import { FaReddit, FaSearch, FaBell, FaUserCircle, FaPlus } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { MdAdsClick } from "react-icons/md";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                {/* <FaReddit className="navbar-logo" /> */}
                <img src='assets/icon.jpg' />
                <span className="navbar-title">reddit</span>
            </div>
            <div className="navbar-center">
                <div className="navbar-search">
                    <CiSearch className="navbar-search-icon" />
                    <input type="text" placeholder="Search Reddit" className="navbar-search-input" />
                </div>
            </div>
            <div className="navbar-right">
                <MdAdsClick className='navbar-icon'/>
                <AiOutlineMessage className='navbar-icon message'/>
                <button className='btn'> <FaPlus className="navbar-icon plus" /> Create</button>
                <FaRegBell className='navbar-icon'/>
                <FaUserCircle className="navbar-icon" />
            </div>
        </nav>
    );
};

export default Navbar;
