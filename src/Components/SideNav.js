import React, { useState } from 'react';
import './SideNav.css';
import CustomFeed from './CustomFeed'
import { TiHome, TiStar, TiCompass, TiThList } from 'react-icons/ti';
import { IoIosArrowDown, IoIosArrowUp, IoIosMenu } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { FaAward, FaBlogger, FaBriefcase, FaBullhorn, FaFileAlt, FaLock, FaFileContract, FaUsers, FaInfoCircle, FaNewspaper, FaQuestionCircle, FaRegStar, FaTags } from 'react-icons/fa';
import styled from 'styled-components';
import { PiArrowCircleUpRight } from "react-icons/pi";
import { MdOutlineExplore } from "react-icons/md";
import { PiCircleHalfTiltLight } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

const SideNav = () => {
    const [activeButton, setActiveButton] = useState(null);
    const [isSideNavVisible, setSideNavVisible] = useState(false);
    const [showCustomFeed, setShowCustomFeed] = useState(false)

    const handleClick = (button) => () => {
        setActiveButton(button === activeButton ? null : button);
    };

    const toggleSideNav = () => {
        setSideNavVisible(!isSideNavVisible);
    };

    const handleCreateFeedClick = () => {
        setShowCustomFeed(true);
    }

    const Button = styled.button`
        /* background:coral; */
        padding:10px 5px;
        box-sizing:border-box;
        width:95%;
        border:none;
        margin:6px auto;
        cursor: pointer;
        text-align:left;
        svg{
    margin:0px 5px;
    font-size:medium
        };

        &:hover{
            background-color: '#333';
        }
    `;

    const StyledNavLink = styled(NavLink)`
    display: block;
    padding: 10px 5px;
    box-sizing: border-box;
    width: 95%;
    border: none;
    margin: 6px auto;
    cursor: pointer;
    text-align: left;
    text-decoration: none; // Remove underline for links
    color: inherit; // Use inherited color or set a default color

    svg {
        margin: 0px 5px;
        font-size: medium;
    }

    &.active {
        background-color: #000; 
        color: #fff;
    }

    &:hover {
        background-color: #000; 
    }
`;

    return (
        <div style={{ backgroundColor: 'red' }}>
           <button className='menu-toggle-btn' onClick={toggleSideNav}>
              {isSideNavVisible ? (
                <IoIosArrowUp style={{ fontSize: '30px', color: 'white' }} />
                ) : (
                 <IoIosMenu style={{ fontSize: '30px', color: 'white' }} />
                 )}
                </button>
            <div className={`side-nav ${isSideNavVisible ? 'visible' : ''}`}>
                <div className=''>
                    <StyledNavLink exact to='/'>
                        <TiHome /> Home
                    </StyledNavLink>
                    <StyledNavLink exact to='/popular'>
                    <PiArrowCircleUpRight /> Popular
                    </StyledNavLink>
                    <StyledNavLink exact to='/explore'>
                    <MdOutlineExplore /> Explore
                    </StyledNavLink>
                    <StyledNavLink exact to='/all'>
                        <PiCircleHalfTiltLight /> All
                    </StyledNavLink>
                </div>
                <hr />
                <div className='drop-btn'>
                    <div className='dropdown'>
                        <button onClick={handleClick('customFeed')}>
                            CUSTOM FEED {activeButton === 'customFeed' ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </button>
                        {activeButton === 'customFeed' && (
                            <ul className='dropdown-content'>
                                <Button  onClick={handleCreateFeedClick}>
                                    <GoPlus style={{ 
                                        marginRight: '0px',
                                        fontSize: '20px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center'
                                        }} />
                                    Create a Custom Feed
                                </Button>
                            </ul>
                        )}
                        <hr />
                       
                        <button onClick={handleClick('communities')}>
                            COMMUNITIES {activeButton === 'communities' ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </button>
                        {activeButton === 'communities' && (
                            <ul className='dropdown-content'>
                                <button>
                                    <GoPlus style={{ marginRight: '5px', fontSize: '22px' }} />
                                    Create a Community
                                </button>
                                <Button style={{
                                    width: '200px',
                                    justifyContent: 'center',
                                    alignItems: 'left',
                                    marginLeft: '20px',
                                    textTransform: 'capitalize'
                                }}>
                                    r/CFB
                                    <FaRegStar   />
                                </Button>
                            </ul>
                        )}
                        <hr />
                        <button onClick={handleClick('resources')}>
                            RESOURCES {activeButton === 'resources' ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </button>
                        {activeButton === 'resources' && (
                            <ul className='dropdown-content'>
                                <Button>
                                    <div className='resources'>
                                        <FaInfoCircle />
                                         Reddit
                                    </div>
                                </Button>
                                <Button >
                                    <div className='resources'>
                                        <FaBullhorn />
                                        Advertise
                                    </div>
                                </Button>
                                <Button >
                                    <div className='resources'>
                                        <FaQuestionCircle />
                                        Help
                                    </div>
                                </Button>
                                <Button >
                                    <div className='resources'>
                                        <FaBlogger/>
                                        Blog
                                    </div>
                                </Button>
                                <Button >
                                    <div className='resources'>
                                        <FaBriefcase />
                                        Careers
                                    </div>
                                </Button>
                                <Button>
                                    <div className='resources'>
                                        <FaNewspaper />
                                        Press
                                    </div>
                                </Button>
                                <hr />
                                <Button>
                                    <div className='resources'>
                                        <FaUsers />
                                        Communities
                                    </div>
                                </Button>
                                <Button>
                                    <div className='resources'>
                                        <FaAward />
                                        Best of Reddit
                                    </div>
                                </Button>
                                <Button>
                                    <div className='resources'>
                                        <FaTags/>
                                        Topics
                                    </div>
                                </Button>
                                <hr />
                                <Button>
                                    <div className='resources'>
                                        <FaFileAlt />
                                        Content Policy
                                    </div>
                                </Button>
                                <Button >
                                    <div className='resources'>
                                        <FaLock/>
                                        Privacy Policy
                                    </div>
                                </Button>
                                <Button >
                                    <div className='resources'>
                                        <FaFileContract />
                                        User Agreement
                                    </div>
                                </Button>
                            </ul>
                        )}
                    </div>
                </div>
                <div className='copyright'>
                    Reddit inc &copy; All right reserved
                </div>
            </div>
        </div>
    );
};

export default SideNav;
