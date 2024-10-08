import React, { useState, useContext } from 'react';
import './Navbar.css';
import { FaReddit, FaSearch, FaBell, FaUserCircle, FaPlus } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { MdAdsClick } from "react-icons/md";
import { IoShirtOutline } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import { PiBag } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbPremiumRights } from "react-icons/tb";
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { MyContext } from '../Context/MyContext';
import { useTheme } from '../Context/ThemeContext'; 

const Navbar = ({ addPost }) => {
    const [isCartVisible, setIsCartVisible] = useState(false);
    const { isLightMode, toggleLightMode } = useTheme(); 
    const { toggleModal } = useContext(MyContext);

    const handleProfileClick = () => {
        setIsCartVisible(!isCartVisible);
    };

    return (
        <nav className={`navbar ${isLightMode ? 'light-mode' : ''}`}>
            <div className="navbar-left">
                <img src='assets/icon.jpg' alt="Logo" />
                <div className='navbar-title-container'>
                    <span className="navbar-title">reddit</span>
                    <div className='tooltip'>Go back to reddit Home</div>
                </div>
            </div>
            <div className="navbar-center">
                <button className='use'>Use App</button>
                <div className="navbar-search">
                    <CiSearch className="navbar-search-icon" />
                    <input type="text" placeholder="Search Reddit" className="navbar-search-input" />
                </div>
            </div>
            <div className="navbar-right">
                <MdAdsClick className='navbar-icon'/>
                <AiOutlineMessage className='navbar-icon message'/>
                <p className='navbar-icon' onClick={toggleModal}>
                    <FaPlus />
                    <span style={{ fontSize: 'small', margin: '5px' }}> Create</span>
                </p>
                <FaRegBell className='navbar-icon'/>
                <FaUserCircle className="navbar-icon user" onClick={handleProfileClick} />
               
                {isCartVisible && (
                    <div className='cart-dropdown'>
                        <ul>
                            <li>
                                <FaUserCircle className='cart-icon' />
                                <div className='cart-text'>
                                    View Profile
                                    <span>u/Low-Tangelo-4110</span>
                                </div>
                            </li>
                            <li>
                                <IoShirtOutline className='cart-icon' />
                                <div className='cart-text'>Edit Avatar</div>
                            </li>
                            <li>
                                <PiBag className='cart-icon' />
                                <div className='cart-text'>
                                    Contributor Program
                                    <span>0 gold earned</span>
                                </div>
                            </li>
                            <li> <FontAwesomeIcon
                                    className={`navbar-icon dark-mode-icon ${isLightMode ? 'flipped' : ''}`}
                                    icon={faMoon}
                                    onClick={toggleLightMode} 
                                 />
                                <div className='cart-text'>Light Mode</div>
                            </li>
                            <li>
                                <IoLogInOutline className='cart-icon' />
                                <div className='cart-text'>Logout</div>
                            </li>
                            <hr />
                            <li>
                                <MdAdsClick className='cart-icon' />
                                <div className='cart-text'>Advertise on Reddit</div>
                            </li>
                            <hr />
                            <li>
                                <IoSettingsOutline className='cart-icon' />
                                <div className='cart-text'>Settings</div>
                            </li>
                            <hr />
                            <li>
                                <TbPremiumRights className='cart-icon' />
                                <div className='cart-text'>Premium</div>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
