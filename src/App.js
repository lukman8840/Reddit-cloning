import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Components/MainSection';
import { MyProvider } from './Context/MyContext';
import { AppLayout } from './app-layout';
import { Popular } from './Components/Popular';
import { All } from './Components/All';
import { Explore } from './Components/Explore';

function App() {
  return (
    <MyProvider>
      <Router>
          <Routes>
           <Route path="/" element={<AppLayout />}> 
           <Route index element={<Main />} />
           <Route path="popular" element={<Popular />} />
           <Route path="explore" element={<Explore />} />
           <Route path="all" element={<All />} />
           </Route>
          </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;
