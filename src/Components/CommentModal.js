import React, { useState } from 'react';
import CommentModal from './CommentModal';
import './CommentModal.css';

const Post = ({ postId, postContent }) => {
  const [isCommentVisible, setIsCommentVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const handleOpenComment = (event) => {
    const rect = event.target.getBoundingClientRect();
    setModalPosition({ top: rect.top, left: rect.left });
    setIsCommentVisible(true);
  };

  const handleCloseComment = () => {
    setIsCommentVisible(false);
  };

  const handleCommentSubmit = (comment) => {
    console.log(`Comment on Post ${postId}:`, comment);
    setIsCommentVisible(false);
  };

  return (
    <div className="post-container">
      <div className="post-content">
        {postContent}
      </div>
      <button onClick={handleOpenComment} className="comment-button">
        Comment
      </button>

      <CommentModal
        postId={postId}
        isVisible={isCommentVisible}
        onClose={handleCloseComment}
        onSubmit={handleCommentSubmit}
        position={modalPosition}
      />
    </div>
  );
};

export default Post;
