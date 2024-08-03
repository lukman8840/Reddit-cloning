import React, { useState } from 'react';
import './Navbar.css';
import { FaReddit, FaSearch, FaBell, FaUserCircle, FaPlus } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { MdAdsClick } from "react-icons/md";
import { IoShirtOutline } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import { PiBag } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbPremiumRights } from "react-icons/tb";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleProfileClick = () => {
        setIsCartVisible(!isCartVisible);
    };

    const handleDarkModeClick = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src='assets/icon.jpg' alt="Logo" />
                <div className='navbar-title-container'>
                    <span className="navbar-title">reddit</span>
                    <div className='tooltip'>Go back to reddit Home</div>
                </div>
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
                <p className='navbar-icon'>
                    <FaPlus style={{ fontSize: '15px'}} />
                    Create
                </p>
                <FaRegBell className='navbar-icon'/>
                <FaUserCircle className="navbar-icon user" onClick={handleProfileClick} />
                <FontAwesomeIcon 
                    icon={isDarkMode ? faSun : faMoon} 
                    className={`navbar-icon dark-mode-icon ${isDarkMode ? 'flipped' : ''}`} 
                    onClick={handleDarkModeClick} 
                />
                {isCartVisible && (
                    <div className='cart-dropdown'>
                        <ul>
                            <li>
                                <FaUserCircle />
                                View Profile
                                <span>u/Low-Tangelo-4110</span>
                            </li>
                            <li>
                                <IoShirtOutline />
                                Edit Avatar
                            </li>
                            <li>
                                <PiBag />
                                Contributor Program
                                <span>0 gold earned</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faMoon} />
                                Dark Mode
                            </li>
                            <li>
                                <IoLogInOutline />
                                Logout
                            </li>
                            <hr />
                            <li>
                                <MdAdsClick />
                                Advertise on Reddit
                            </li>
                            <hr />
                            <li>
                                <IoSettingsOutline />
                                Settings
                            </li>
                            <hr />
                            <li>
                                <TbPremiumRights />
                                Premium
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
