import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './Components/SideNav';
import Main from './Components/MainSection';
import Navbar from './Components/Navbar'; // Make sure to import the Navbar component
import { MyProvider } from './Context/MyContext';
import './App.css'; // Import a global stylesheet for layout

function App() {
  return (
    <MyProvider>
      <Router>
        <div className="App">
          <Navbar /> 
          <hr />
          <div className="layout">
            <SideNav />
            <div className="divider"></div>
            <Main />
          </div>
        </div>
      </Router>
    </MyProvider>
  );
}

export default App;
