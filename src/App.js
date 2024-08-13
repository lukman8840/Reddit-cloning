import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Components/MainSection';
import { MyProvider } from './Context/MyContext';
import { ThemeProvider } from './Context/ThemeContext'; 
import { AppLayout } from './app-layout';
import { Explore } from './Components/Explore';
import './App.css'

function App() {
  return (
    <ThemeProvider> 
      <MyProvider> 
        <Router>
          <Routes>
             <Route path="/" element={<AppLayout />}> 
              <Route index element={<Main />} />
              <Route path="popular" element={<Explore />} />
              <Route path="explore" element={<Explore />} />
              <Route path="all" element={<Main />} />
            </Route>
          </Routes>
        </Router>
      </MyProvider>
    </ThemeProvider>
  );
}

export default App;
