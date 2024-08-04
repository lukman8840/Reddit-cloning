import React, { useState } from 'react';
import './SideNav.css';
import CustomFeed from './CustomFeed'
import { TiHome, TiStar, TiCompass, TiThList } from 'react-icons/ti';
import { IoIosArrowDown, IoIosArrowUp, IoIosMenu } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { FaAward, FaBlogger, FaBriefcase, FaBullhorn, FaFileAlt, FaLock, FaFileContract, FaUsers, FaInfoCircle, FaNewspaper, FaQuestionCircle, FaRegStar, FaTags } from 'react-icons/fa';

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

    const buttonStyle = {
        maxWidth: '200px',
        fontSize: '12px',
        padding: '13px 0px',
        marginRight: '20px',
        cursor: 'pointer',
        color: '#fff',
        display: 'flex',
        textTransform: 'capitalize',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
        transition: 'background-color 0.3s, transform 0.3s',
    };

    const iconStyle = {
        fontSize: '18px',
    };

    return (
        <div style={{ backgroundColor: 'red' }}>
            <button className='menu-toggle-btn' onClick={toggleSideNav}>
                <IoIosMenu style={{ fontSize: '30px', color: 'white' }} />
            </button>
            <div className={`side-nav ${isSideNavVisible ? 'visible' : ''}`}>
                <div className='sidenav-btn'>
                    <button><TiHome /> Home</button>
                    <button><TiStar /> Popular</button>
                    <button><TiCompass /> Explore</button>
                    <button><TiThList /> All</button>
                </div>
                <hr />
                <div className='drop-btn'>
                    <div className='dropdown'>
                        <button onClick={handleClick('customFeed')}>
                            Custom Feed {activeButton === 'customFeed' ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </button>
                        {activeButton === 'customFeed' && (
                            <ul className='dropdown-content'>
                                <button style={buttonStyle} onClick={handleCreateFeedClick}>
                                    <GoPlus style={{ marginRight: '5px', fontSize: '22px' }} />
                                    Create a Custom Feed
                                </button>
                            </ul>
                        )}
                        <hr />
                       
                        <button onClick={handleClick('communities')}>
                            Communities {activeButton === 'communities' ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </button>
                        {activeButton === 'communities' && (
                            <ul className='dropdown-content'>
                                <button style={buttonStyle}>
                                    <GoPlus style={{ marginRight: '5px', fontSize: '22px' }} />
                                    Create a Community
                                </button>
                                <button style={{ ...buttonStyle, textTransform: 'lowercase' }}>
                                    r/CFB
                                    <FaRegStar style={{ marginLeft: 'auto', fontSize: '16px' }} />
                                </button>
                            </ul>
                        )}
                        <hr />
                        <button onClick={handleClick('resources')}>
                            Resources {activeButton === 'resources' ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </button>
                        {activeButton === 'resources' && (
                            <ul className='dropdown-content'>
                                <button style={buttonStyle}>
                                    <div className='resources'>
                                        <FaInfoCircle style={iconStyle} />
                                        About Reddit
                                    </div>
                                </button>
                                <button style={buttonStyle}>
                                    <div className='resources'>
                                        <FaBullhorn style={iconStyle} />
                                        Advertise
                                    </div>
                                </button>
                                <button style={buttonStyle}>
                                    <div className='resources'>
                                        <FaQuestionCircle style={iconStyle} />
                                        Help
                                    </div>
                                </button>
                                <button style={buttonStyle}>
                                    <div className='resources'>
                                        <FaBlogger style={iconStyle} />
                                        Blog
                                    </div>
                                </button>
                                <button style={buttonStyle}>
                                    <div className='resources'>
                                        <FaBriefcase style={iconStyle} />
                                        Careers
                                    </div>
                                </button>
                                <button style={buttonStyle}>
                                    <div className='resources'>
                                        <FaNewspaper style={iconStyle} />
                                        Press
                                    </div>
                                </button>
                                <hr />
                                <button style={buttonStyle}>
                                    <div className='resources'>
                                        <FaUsers style={iconStyle} />
                                        Communities
                                    </div>
                                </button>
                                <button style={buttonStyle}>
                                    <div className='resources'>
                                        <FaAward style={iconStyle} />
                                        Best of Reddit
                                    </div>
                                </button>
                                <button style={buttonStyle}>
                                    <div className='resources'>
                                        <FaTags style={iconStyle} />
                                        Topics
                                    </div>
                                </button>
                                <hr />
                                <button style={buttonStyle}>
                                    <div className='resources'>
                                        <FaFileAlt style={iconStyle} />
                                        Content Policy
                                    </div>
                                </button>
                                <button style={buttonStyle}>
                                    <div className='resources'>
                                        <FaLock style={iconStyle} />
                                        Privacy Policy
                                    </div>
                                </button>
                                <button style={buttonStyle}>
                                    <div className='resources'>
                                        <FaFileContract style={iconStyle} />
                                        User Agreement
                                    </div>
                                </button>
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
