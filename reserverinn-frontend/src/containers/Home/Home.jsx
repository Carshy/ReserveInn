import React from 'react';
import HomeSlider from './HomeSlider';
import Hotels from '../Hotels/Hotels';
import './Home.scss';

function Home() {
  return (
    <div className="app__home">
      {/* <h1>Welcome to ReserveInn</h1> */}
      <HomeSlider />
      <Hotels />
    </div>
  );
}

export default Home;
