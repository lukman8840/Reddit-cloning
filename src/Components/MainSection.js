import React, { useState, useEffect, useContext, useRef } from 'react';
import './Main.css';
import { TiArrowDownOutline, TiArrowUpOutline } from "react-icons/ti";
import { MdOutlineViewWeek, MdOutlineEmojiEmotions } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { RiShareForwardLine } from "react-icons/ri";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiCreditCard } from "react-icons/fi";
import { FaRegRectangleList } from "react-icons/fa6";
import { MdOutlineSaveAlt } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp, IoIosLink, IoIosCheckboxOutline } from "react-icons/io";
import { TbArrowsSplit } from "react-icons/tb";
import { TbArrowBigUp } from "react-icons/tb";
import { TbArrowBigDown } from "react-icons/tb";
import { PiShareFatLight } from "react-icons/pi";
import { VscReport } from "react-icons/vsc";
import { GrHide } from "react-icons/gr";
import CustomFeed from './CustomFeed';
import { MyContext } from '../Context/MyContext';
import CreatePost from './CreatePost'; 
import CommentModal from './CommentModal';


const MainSection = (emoji) => {
  const { data: posts, isModalOpen} = useContext(MyContext)
  const [hoveredButton, setHoveredButton] = useState(null);
  const [activeSharePost, setActiveSharePost] = useState(null);
  const [selectedOption, setSelectedOption] = useState(false);
  const [voteCounts, setVoteCounts] = useState({});
  const [showCustomFeed, setShowCustomFeed] = useState(false);
  const [clickedIconPostId, setClickedIconPostId] = useState(null);
  const [selectedDropdown, setSelectedDropdowm] = useState();
  const [dropdownPosition, setDropdownPosition] = useState({ top: 30, left: 550 });
  const [buttonColor, setButtonColor] = useState('');
  const [commentModal, setCommentModal] = useState(null);
  const [currentPostId, setCurrentPostId] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);

  const iconRef =useRef(null)

  const handleClick = (postId) => (event) => {
    event.stopPropagation();
    setActiveSharePost(postId === activeSharePost ? null : postId);
  };

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  
  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const handleOptionClick = (dropdown) => {
  setSelectedDropdowm(selectedDropdown === dropdown ? null : dropdown)
  };

  const incrementVote = (postId) => {
    setVoteCounts(prevVoteCounts => ({
      ...prevVoteCounts,
      [postId]: (prevVoteCounts[postId] || 0) + 1
    }));
  };

  const decrementVote = (event, postId) => {
    event.stopPropagation();
    setVoteCounts(prevVoteCounts => ({
      ...prevVoteCounts,
      [postId]: (prevVoteCounts[postId] || 0) - 1
    }));
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.post')) {
      setActiveSharePost(null);
      setClickedIconPostId(null);
    }
  };

  const handleCloseFeedClick = () => {
    setShowCustomFeed(false);
  };

  const handleIconClick = (id) => {
    // Check if the same icon is clicked
    if (clickedIconPostId === id) {
      // If the same icon is clicked, toggle the dropdown visibility
      setClickedIconPostId(null);
    } else {
      // If a different icon is clicked, show the dropdown
      if (iconRef.current) {
        const { top, left, height } = iconRef.current.getBoundingClientRect();
        setDropdownPosition({ top: top + height, left: left });
      }
      setClickedIconPostId(id);
    }
  };


  const handleCommentIconClick = (postId, event) => {
    if (event && event.target) {
      const iconRect = event.target.getBoundingClientRect();
      setCommentModal({ top: iconRect.top, left: iconRect.left });
      setCurrentPostId(postId);
      setCommentModal(true);
    } else {
      console.error("Event or event.target is undefined");
    }
  };

  const handleCommentSubmit = (comment) => {
    console.log(`Comment for post ${currentPostId}: ${comment}`)
    setCommentModal(false)
    setCurrentPostId(null)
  };

  const handleCloseModal = () => {
    setCommentModal(false);
    setCurrentPostId(null)
  }

  const handleUpClick = () => {
    setButtonColor('red')
  }
  const handleDownClick = () => {
    setButtonColor('green')
  }
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const timeAgo = (timestamp) => {
    const now = new Date();
    const postDate = new Date(timestamp * 1000);
    const diffInHours = Math.floor((now - postDate) / (1000 * 60 * 60));

    if(diffInHours < 1) {
      return "Just now";
    } else if (diffInHours === 1){
      return "1 hr ago";
    } else {
      return `${diffInHours} hrs ago`
    }
  };

  const buttonStyle = (button) => ({
    width: '100px',
    backgroundColor: '#2A3236',
    border: 'none',
    padding: '0px 8px',
    borderRadius: '10px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: hoveredButton === button ? '#fff' : '#fff',
  });

  return (
    <>
     <div className=''>
      {showCustomFeed && <CustomFeed onClick={handleCloseFeedClick} />}
      <div className='header-btn'>
        <button onClick={() => handleOptionClick('Best')}>
          Best {selectedDropdown === 'Best' ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
        {selectedDropdown === 'Best' && (
          <div className='dropdown-header'>
            <p onClick={() => handleOptionClick('SortBy')}>Sort By</p>
            <p onClick={() => handleOptionClick('Best')}>Best</p>
            <p onClick={() => handleOptionClick('Hot')}>Hot</p>
            <p onClick={() => handleOptionClick('New')}>New</p>
            <p onClick={() => handleOptionClick('Top')}>Top</p>
            <p onClick={() => handleOptionClick('Rising')}>Rising</p>
          </div>
        )}
        <button onClick={() => handleOptionClick('Box')}>
          <MdOutlineViewWeek />
          {selectedDropdown === 'Box' ? <IoIosArrowUp /> : <IoIosArrowDown />}
          {selectedDropdown === 'Box' && (
            <div className='dropdown-header-2'>
              <h4 onClick={() => handleOptionClick('View')}>View</h4>
              <p onClick={() => handleOptionClick('Card')}> <FiCreditCard /> Card</p>
              <p onClick={() => handleOptionClick('Compact')}> <FaRegRectangleList /> Compact</p>
            </div>
          )}
        </button>
      </div>
      <hr className='hr' />
      <div className='main-content'>
        {posts.map((post, index) => (
          <div key={index} className='post'>
            <div className='content-header'>
              <img src={post.thumbnail} alt='Header' />
              <p className='paragraph'>{post.title} &bull;</p>
              <span className='time'>{timeAgo(post.created_utc)}</span>
              <HiOutlineDotsHorizontal
                className='icon-hover'
                onClick={() => handleIconClick(post.id)}
                ref={iconRef}
              />
            </div>
            <div className='content-main'>
              <h1>{post.title}</h1>
              <p className='text'>{post.selftext}</p>
            </div>
            <div className='footer-btn'>
              <button
                style={buttonStyle('vote')}
                onMouseEnter={() => handleMouseEnter('vote')}
                onMouseLeave={handleMouseLeave}
                onClick={() => incrementVote(post.id)}
              >
                <TbArrowBigUp  style={{ fontSize: '20px', backgroundColor: '#2A3236' }} 
                  onClick={handleUpClick}
                />
                <span style={{ marginLeft: '5px', marginRight: '5px' }}>{voteCounts[post.id] || 0}</span>
                <TbArrowBigDown  style={{ fontSize: '20px', backgroundColor: '#2A3236' }} 
                onClick={(event) => decrementVote(event, post.id)} 
                  
                  />
              </button>
              <button
                className='comments'
                style={buttonStyle('comments')}
                onMouseEnter={() => handleMouseEnter('comments')}
                onMouseLeave={handleMouseLeave}
                onClick={(event) => handleCommentIconClick(post.id, event)}
              >
                <FaRegMessage style={{ fontSize: '16px', margin: '5px', backgroundColor: '#2A3236' }} /> {post.num_comments}
              </button>
              <button
                className='comments'
                style={buttonStyle('emojis')}
                onMouseEnter={() => handleMouseEnter('emojis')}
                onMouseLeave={handleMouseLeave}
              >
                <MdOutlineEmojiEmotions style={{ backgroundColor: '#2A3236'}} />
              </button>
            
              )}
              <button
                className='comments'
                style={buttonStyle('share')}
                onMouseEnter={() => handleMouseEnter('share')}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick(post.id)}
              >
                <PiShareFatLight  style={{ fontSize: '20px', margin: '5px', backgroundColor: '#2A3236' }} /> share
              </button>
            </div>
            <hr style={{ margin: '10px', width: '75%', color: '#333' }} />
            {activeSharePost === post.id && (
              <div className='dropdown-header-3'>
                <h4>Share this Post on</h4>
                <p onClick={() => setActiveSharePost(null)}> <IoIosLink /> Copy link</p>
                <p onClick={() => setActiveSharePost(null)}> <TbArrowsSplit /> Crosspost</p>
                <p onClick={() => setActiveSharePost(null)}> <IoIosCheckboxOutline /> Embed</p>
              </div>
            )}
            
      {clickedIconPostId === post.id && (
        <div
          className='icon-dropdown'
          style={{
            top: dropdownPosition.top,
            left: dropdownPosition.left,
            position: 'absolute'
          }}
        >
                <p>
                <MdOutlineSaveAlt />
                  Save</p>
                <p>
                <GrHide />
                  Hide</p>
                <p>
                <VscReport />
                  Report</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>


    {isModalOpen && <CreatePost />} 
    <CommentModal 
      postId={currentPostId}
      isVisible={commentModal}
      onClose={handleCloseModal}
      onSubmit={handleCommentSubmit}
    />

    </>
  );
};

export default MainSection;