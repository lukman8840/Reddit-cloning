import React from 'react';
import { FaTimes } from 'react-icons/fa'; // Assuming you meant FaTimes for cancel icon
import './CustomFeed.css';

const CustomFeed = () => {
  return (
    <div className='main-container'>
        <div className='main'>
            <div className='header'>
                <h2>Create custom feed</h2>
                <FaTimes className='cancel-icon' />
            </div>
            <div className='inputs'>
                <div className='input-group'>
                    <input type='text' placeholder='Name' />
                    <span>0</span>
                </div>
                <div className='input-group'>
                    <input type='text' placeholder='Description' />
                    <span>0</span>
                </div>
            </div>
            <div className='footer'>
                <button type='button' className='cancel-button'>Cancel</button>
                <button type='submit' className='submit-button'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default CustomFeed;
