import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/configureStore';
import { Home } from './containers';
import { Navbar } from './Navigations';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/books" element={<SearchList />} /> */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
