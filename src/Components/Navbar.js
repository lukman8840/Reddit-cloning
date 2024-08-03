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
                <img src='assets/icon.jpg' />
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
                <FaUserCircle className="navbar-icon user" />
            </div>
        </nav>
    );
};

export default Navbar;
