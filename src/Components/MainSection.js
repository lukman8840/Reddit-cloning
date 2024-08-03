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
import { IoIosArrowDown, IoIosArrowUp, IoIosLink, IoIosCheckboxOutline } from "react-icons/io";
import { TbArrowsSplit } from "react-icons/tb";

const MainSection = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [posts, setPosts] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Best');
  const [voteCounts, setVoteCounts] = useState({});

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

  const handleClick = (button) => () => {
    setActiveButton(button === activeButton ? null : button);
  };

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setActiveButton(null)
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
      <div className='header-btn'>
        <button onClick={handleClick('Best')}>
          Best {activeButton === 'Best' ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
        {activeButton === 'Best' && (
          <div className='dropdown-header'>
              <p onClick={() => setActiveButton('Best')}>Sort By</p>
              <p onClick={() => setActiveButton('Best')}>Best</p>
              <p onClick={() => setActiveButton('Hot')}>Hot</p>
              <p onClick={() => setActiveButton('New')}>New</p>
              <p onClick={() => setActiveButton('Top')}>Top</p>
              <p onClick={() => setActiveButton('Rising')}>Rising</p>
          </div>
        )}
        <button onClick={handleClick('Box')}>
          <MdOutlineViewWeek />
          {activeButton === 'Box' ? <IoIosArrowUp /> : <IoIosArrowDown />}
          {activeButton === 'Box' && (
            <div className='dropdown-header-2'>
              <h4 onClick={() => setActiveButton('view')} >View</h4>
              <p onClick={() => setActiveButton('card')}> <FiCreditCard /> Card</p>
              <p onClick={() => setActiveButton('compact')}> <FaRegRectangleList /> Compact</p>
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
              <HiOutlineDotsHorizontal style={{ 
                color: '#fff',
                cursor: 'pointer',
                marginLeft: '450px'
              }}/>
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
                onClick={handleClick('share')}
              >
                <RiShareForwardLine style={{ fontSize: '20px', margin: '5px' }} /> share
              </button>
            </div>
            <hr style={{ margin: '10px' }}/>
            {activeButton === 'share' && (
              <div className='dropdown-header-3'>
                <h4>Share this Post on</h4>
                <p onClick={() => setActiveButton('copy link')}> <IoIosLink /> Copy link</p>
                <p onClick={() => setActiveButton('crosspost')}> <TbArrowsSplit /> Crosspost</p>
                <p onClick={() => setActiveButton('embed')}> <IoIosCheckboxOutline /> Embed</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
