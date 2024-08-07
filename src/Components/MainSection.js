import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import { VscReport } from "react-icons/vsc";
import { GrHide } from "react-icons/gr";
import CustomFeed from './CustomFeed';
import CreatePost from './CreatePost';

const MainSection = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [posts, setPosts] = useState([]);
  const [activeSharePost, setActiveSharePost] = useState(null);
  const [selectedOption, setSelectedOption] = useState(false);
  const [voteCounts, setVoteCounts] = useState({});
  const [showCustomFeed, setShowCustomFeed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedIconPostId, setClickedIconPostId] = useState(null);

  useEffect(() => {
    // Fetch posts from Reddit API
    axios.get('https://www.reddit.com/r/reactjs/hot.json')
      .then(response => {
        const fetchedPosts = response.data.data.children.map(child => child.data);
        const initialVoteCounts = {};
        fetchedPosts.forEach(post => {
          initialVoteCounts[post.id] = 0; // Initialize vote count for each post
        });
        setPosts(fetchedPosts);
        setVoteCounts(initialVoteCounts);
      })
      .catch(error => {
        console.error("Error fetching data from Reddit API:", error);
      });
  }, []);

  const addPost = (newPost) => {
    setPosts(prevPosts => [newPost, ...prevPosts]);
  };

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

  const handleOptionClick = () => {
    setSelectedOption(!selectedOption);
    setActiveSharePost(null);
  };

  const incrementVote = (postId) => {
    setVoteCounts(prevVoteCounts => ({
      ...prevVoteCounts,
      [postId]: prevVoteCounts[postId] + 1
    }));
  };

  const decrementVote = (event, postId) => {
    event.stopPropagation();
    setVoteCounts(prevVoteCounts => ({
      ...prevVoteCounts,
      [postId]: prevVoteCounts[postId] - 1
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

  const handleIconClick = (postId) => {
    setClickedIconPostId(clickedIconPostId === postId ? null : postId);
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const buttonStyle = (button) => ({
    width: '100px',
    backgroundColor: hoveredButton === button ? '#333' : '#333',
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
    <div className='main'>
      {showCustomFeed && <CustomFeed onClick={handleCloseFeedClick} />}
      {isModalOpen && <CreatePost setIsModalOpen={setIsModalOpen} addPost={addPost} />}
      <div className='header-btn'>
        <button onClick={handleOptionClick}>
          Best {selectedOption === true ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
        {selectedOption === true && (
          <div className='dropdown-header'>
            <p onClick={() => handleOptionClick('Best')}>Sort By</p>
            <p onClick={() => handleOptionClick('Best')}>Best</p>
            <p onClick={() => handleOptionClick('Hot')}>Hot</p>
            <p onClick={() => handleOptionClick('New')}>New</p>
            <p onClick={() => handleOptionClick('Top')}>Top</p>
            <p onClick={() => handleOptionClick('Rising')}>Rising</p>
          </div>
        )}
        <button onClick={() => handleOptionClick('Box')}>
          <MdOutlineViewWeek />
          {selectedOption === 'Box' ? <IoIosArrowUp /> : <IoIosArrowDown />}
          {selectedOption === 'Box' && (
            <div className='dropdown-header-2'>
              <h4 onClick={() => handleOptionClick('view')}>View</h4>
              <p onClick={() => handleOptionClick('card')}> <FiCreditCard /> Card</p>
              <p onClick={() => handleOptionClick('compact')}> <FaRegRectangleList /> Compact</p>
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
              <span className='time'>{new Date(post.created_utc * 1000).toLocaleTimeString()}</span>
              <HiOutlineDotsHorizontal
                className='icon-hover'
                onClick={() => handleIconClick(post.id)}
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
                <TiArrowUpOutline style={{ fontSize: '20px' }} />
                <span style={{ marginLeft: '5px', marginRight: '5px' }}>{voteCounts[post.id]}</span>
                <TiArrowDownOutline style={{ fontSize: '20px' }} onClick={(event) => decrementVote(event, post.id)} />
              </button>
              <button
                className='comments'
                style={buttonStyle('comments')}
                onMouseEnter={() => handleMouseEnter('comments')}
                onMouseLeave={handleMouseLeave}
              >
                <FaRegMessage style={{ fontSize: '16px', margin: '5px' }} /> {post.num_comments}
              </button>
              <button
                className='comments'
                style={buttonStyle('emojis')}
                onMouseEnter={() => handleMouseEnter('emojis')}
                onMouseLeave={handleMouseLeave}
              >
                <MdOutlineEmojiEmotions />
              </button>
              <button
                className='comments'
                style={buttonStyle('share')}
                onMouseEnter={() => handleMouseEnter('share')}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick(post.id)}
              >
                <RiShareForwardLine style={{ fontSize: '20px', margin: '5px' }} /> share
              </button>
            </div>
            <hr style={{ margin: '10px' }} />
            {activeSharePost === post.id && (
              <div className='dropdown-header-3'>
                <h4>Share this Post on</h4>
                <p onClick={() => setActiveSharePost(null)}> <IoIosLink /> Copy link</p>
                <p onClick={() => setActiveSharePost(null)}> <TbArrowsSplit /> Crosspost</p>
                <p onClick={() => setActiveSharePost(null)}> <IoIosCheckboxOutline /> Embed</p>
              </div>
            )}
            {clickedIconPostId === post.id && (
              <div className='icon-dropdown'>
                <p>
                <MdOutlineSaveAlt style={{
                 
                }}/>
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
  );
};

export default MainSection;
