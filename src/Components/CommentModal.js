import React, { useEffect, useState } from 'react';
import './CommentModal.css';

const CommentModal = ({ postId, isVisible, onClose, onSubmit, position }) => {
  const [userComment, setUserComment] = useState('');

  const handleCommentChange = (event) => {
    setUserComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    onSubmit(userComment);
    setUserComment('');  // Clear the comment input after submission
  };

  useEffect(() => {
    if (isVisible) {
      const modal = document.getElementById(`modal-${postId}`);
      if (modal) {
        modal.style.top = `${position.top + 30}px`;
        modal.style.left = `${position.left}px`;
      }
    }
  }, [isVisible, position, postId]);

  return isVisible ? (
    <div className="modal-overlay">
      <div className="modal-content">
        <p
          onClick={onClose} 
          className="close-button"
        >
          &times;
        </p>
        <h3>Leave a Comment</h3>
        <form onSubmit={handleCommentSubmit}>
          <textarea
            value={userComment}
            onChange={handleCommentChange}
            placeholder="Enter your comment"
            style={{
                 width: '100%', 
                 height: '100px', 
                 padding: '10px', 
                 borderRadius: '5px', 
                 margin: '10px'
                }}
          />
          <button type="submit" 
                    style={{ 
                        marginTop: '10px', 
                        padding: '8px 10px', 
                        borderRadius: '5px', 
                        backgroundColor: '#007bff', 
                        color: '#fff' ,
                        width: '120px'
                    }}>
            Post Comment
          </button>
        </form>
      </div>
    </div>
  ) : null;
};

export default CommentModal;
