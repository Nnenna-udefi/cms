import React from 'react';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from './components/Feed/blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
    </Router>

  );
}

export default App;
