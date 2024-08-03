import React, { useState, useEffect } from 'react';
import './Main.css';
import { TiArrowDownOutline, TiArrowUpOutline } from "react-icons/ti";
import { MdOutlineViewWeek } from "react-icons/md";
import { LoremIpsum } from 'lorem-ipsum';
import { FaRegMessage } from "react-icons/fa6";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiCreditCard } from "react-icons/fi";
import { FaRegRectangleList } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoIosLink } from "react-icons/io";
import { TbArrowsSplit } from "react-icons/tb";
import { IoIosCheckboxOutline } from "react-icons/io";

const lorem = new LoremIpsum();

const MainSection = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [text, setText] = useState('');
  const [activeButton, setActiveButton] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Best');
  const [voteCount, setVoteCount] = useState(0);
  const [lastClickedArrow, setLastClickedArrow] = useState(null);

  useEffect(() => {
    const generatedText = lorem.generateParagraphs(2);
    setText(generatedText);
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

  const incrementVote = () => {
    setVoteCount(voteCount + 1);
    setLastClickedArrow('up');
  };

  const decrementVote = (event) => {
    event.stopPropagation();
    setVoteCount(voteCount - 1);
    setLastClickedArrow('down');
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
        <div className='content-header'>
          <img src='assets/header.jpeg' alt='Header' />
          <p className='paragraph'>Header Paragraph &bull;</p>
          <span className='time'>14 hr ago</span>
          <HiOutlineDotsHorizontal style={{ 
            color: '#fff',
            cursor: 'pointer',
            marginLeft: '450px'
          }}/>
        </div>
        
        <div className='content-main'>
          <h1>This is a Header of the Text</h1>
          <p className='text'>{text}</p>
        </div>
      </div>
      <div className='footer-btn'>
        <button
          style={buttonStyle('vote')}
          onMouseEnter={() => handleMouseEnter('vote')}
          onMouseLeave={handleMouseLeave}
          onClick={incrementVote}
        >
          <TiArrowUpOutline style= {{ 
            fontSize: '20px',
            
          }} 
        />
          <span style={{ 
            marginLeft: '5px', 
            marginRight: '5px' 
            }}>{voteCount}</span>
          <TiArrowDownOutline style={{ 
            fontSize: '20px' }}
            onClick={decrementVote}
        />
        </button>
        <button
          className='comments'
          style={buttonStyle('comments')}
          onMouseEnter={() => handleMouseEnter('comments')}
          onMouseLeave={handleMouseLeave}
        >
          <FaRegMessage style={{ 
            fontSize: '16px', 
            margin: '5px' 
            }} 
        /> 10 
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
          <RiShareForwardLine style={{ 
            fontSize: '20px', 
            margin: '5px' 
        }} 
        /> 
          share
        </button>
      </div>
        <hr style={{
          margin: '10px',
        }}/>
        {activeButton === 'share' && (
          <div className='dropdown-header-3'>
            <h4>Share this Post on</h4>
              <p onClick={() => setActiveButton('copy link')}> <IoIosLink /> Copy link</p>
              <p onClick={() => setActiveButton('crosspost')}> <TbArrowsSplit /> Crosspost</p>
              <p onClick={() => setActiveButton('embed')}> <IoIosCheckboxOutline /> Embed</p>
          </div>
        )}
      <div className='main-content'>
        <div className='content-header'>
          <img src='assets/header.jpeg' alt='Header' />
          <p className='paragraph'>Header Paragraph &bull;</p>
          <span className='time'>14 hr ago</span>
          <HiOutlineDotsHorizontal style={{ 
            color: '#fff',
            cursor: 'pointer',
            marginLeft: '450px'
          }}/>
        </div>
        
        <div className='content-main'>
          <h1>This is a Header of the Text</h1>
          <img src='assets/bg.jpeg' style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover', 
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }} />
        </div>
      </div>
      <div className='footer-btn'>
        <button
          style={buttonStyle('vote')}
          onMouseEnter={() => handleMouseEnter('vote')}
          onMouseLeave={handleMouseLeave}
        >
          <TiArrowUpOutline style={{ 
            fontSize: '20px' 
          }} 
          onClick={incrementVote}
        />
          <span style={{ 
            marginLeft: '5px', 
            marginRight: '5px' 
            }}>{voteCount}</span>
          <TiArrowDownOutline style={{ 
            fontSize: '20px' }}
            onClick={decrementVote}
        />
        </button>
        <button
          className='comments'
          style={buttonStyle('comments')}
          onMouseEnter={() => handleMouseEnter('comments')}
          onMouseLeave={handleMouseLeave}
        >
          <FaRegMessage style={{ 
            fontSize: '16px', 
            margin: '5px' 
            }} 
        /> 100 
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
          <RiShareForwardLine style={{ 
            fontSize: '20px', 
            margin: '5px' 
        }} 
        /> 
          share
        </button>
      </div>
      <hr style={{
          margin: '10px',
        }}/>
        {activeButton === 'share' && (
          <div className='dropdown-header-3'>
            <h4>Share this Post on</h4>
              <p onClick={() => setActiveButton('copy link')}> <IoIosLink /> Copy link</p>
              <p onClick={() => setActiveButton('crosspost')}> <TbArrowsSplit /> Crosspost</p>
              <p onClick={() => setActiveButton('embed')}> <IoIosCheckboxOutline /> Embed</p>
          </div>
        )}
    </div>
  );
};

export default MainSection;
