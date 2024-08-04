import React, { useState } from 'react';
import './CreatePost.css';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { FaLink } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { MdPoll } from 'react-icons/md';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const CreatePost = ({ onClose }) => {
  const [postType, setPostType] = useState('text');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');

  const handlePostTypeChange = (type) => {
    setPostType(type);
  };

  const handleClose = () => {
    console.log("Back to the Main Page");
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, content, url });
    setTitle('');
    setContent('');
    setUrl('');
    handleClose(); // Close the form after submission
  };

  return (
    <div className="create-post-wrapper">
      <div className="create-post">
        <button className="close-btn" onClick={handleClose}>
          <AiOutlineArrowLeft />
        </button>
        <div className="post-type-selector">
          <button
            className={postType === 'text' ? 'active' : ''}
            onClick={() => handlePostTypeChange('text')}
            aria-label="Text Post"
          >
            <IoDocumentTextOutline /> Post
          </button>
          <button
            className={postType === 'image' ? 'active' : ''}
            onClick={() => handlePostTypeChange('image')}
            aria-label="Image Post"
          >
            <MdOutlineAddPhotoAlternate /> Image
          </button>
          <button
            className={postType === 'link' ? 'active' : ''}
            onClick={() => handlePostTypeChange('link')}
            aria-label="Link Post"
          >
            <FaLink /> Link
          </button>
          <button
            className={postType === 'poll' ? 'active' : ''}
            onClick={() => handlePostTypeChange('poll')}
            aria-label="Poll Post"
          >
            <MdPoll /> Poll
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          {postType === 'text' && (
            <textarea
              placeholder="Text (optional)"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          )}
          {postType === 'image' && (
            <input
              type="url"
              placeholder="Image URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          )}
          {postType === 'link' && (
            <input
              type="url"
              placeholder="Link URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          )}
          {postType === 'poll' && (
            <div>
              <p>Poll creation is not implemented yet</p>
            </div>
          )}
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
