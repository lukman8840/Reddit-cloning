import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const EmojiDropdown = ({ position, onSelect, onClose }) => {
  const handleEmojiClick = (event, emojiObject) => {
    onSelect(emojiObject);
    onClose();
  };

  return (
    <div
      className="emoji-dropdown"
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        zIndex: 1000,
      }}
    >
      <EmojiPicker onEmojiClick={handleEmojiClick} />
      <button
        onClick={onClose}
        style={{
          marginTop: '10px',
          padding: '8px 12px',
          borderRadius: '5px',
          backgroundColor: '#ccc',
          color: '#000',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="Close emoji picker"
      >
        Close
      </button>
    </div>
  );
};

export default EmojiDropdown;
