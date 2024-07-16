import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './containers';
import { Navbar } from './Navigations';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/books" element={<SearchList />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
