import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './Components/SideNav';
import Main from './Components/MainSection';
import Navbar from './Components/Navbar';
import { MyProvider, MyContext } from './Context/MyContext';


function App() {
  
  
  return (
    <MyProvider>
      <Router>
        <div className="App">
          <Navbar  />
          <hr />
          <div className="layout">
            <SideNav />
            <div className="divider"></div>
            <Routes>
              <Route
                path="/"
                element={
                  <Main />
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </MyProvider>
  );
}

export default App;
