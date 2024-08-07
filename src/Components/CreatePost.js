import React, { useState } from 'react';
import './CreatePost.css';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { FaLink } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { MdPoll } from 'react-icons/md';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const CreatePost = ({ setIsModalOpen, addPost }) => {
  const [postType, setPostType] = useState('text');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');

  const handlePostTypeChange = (type) => {
    setPostType(type);
    setContent(''); // Clear content when changing post type
    setUrl(''); // Clear URL when changing post type
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('addPost function', addPost);

    const newPost = {
      id: new Date().getTime().toString(),
      title: title,
      selftext: postType === 'text' ? content : url,
      created_utc: Math.floor(Date.now() / 1000),
      num_comments: 0,
      thumbnail: postType === 'image' ? url : ''
    };

    if (typeof addPost === 'function'){
      addPost(newPost);
    } else {
      console.log('addPost is not a function')
    }
    setIsModalOpen(false);

    // Clear form fields
    setTitle('');
    setContent('');
    setUrl('');
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
