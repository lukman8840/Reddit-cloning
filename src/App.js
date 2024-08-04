import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './Components/SideNav';
import Main from './Components/MainSection';
import Navbar from './Components/Navbar';
import { MyProvider } from './Context/MyContext';
import './App.css';
import CreatePost from './Components/CreatePost';

function App() {
  const [showCreatePost, setShowCreatePost] = useState(false);

  const handleCreatePostClick = () => {
    setShowCreatePost(true);
  };

  const handleCloseCreatePost = () => {
    setShowCreatePost(false);
  };

  return (
    <MyProvider>
      <Router>
        <div className="App">
          <Navbar onCreatePostClick={handleCreatePostClick} />
          <hr />
          <div className="layout">
            <SideNav />
            <div className="divider"></div>
            <Routes>
              <Route path="/" element={<Main />} />
            </Routes>
          </div>
          {showCreatePost && <CreatePost onClose={handleCloseCreatePost} />}
        </div>
      </Router>
    </MyProvider>
  );
}

export default App;
