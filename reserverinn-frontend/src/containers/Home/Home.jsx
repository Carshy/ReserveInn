import React from 'react';
import HomeSlider from './HomeSlider';
import Hotels from '../Hotels/Hotels';
import './Home.scss';

function Home() {
  return (
    <div>
      {/* <h1>Welcome to ReserveInn</h1> */}
      <HomeSlider />
      <Hotels />
    </div>
  );
}

export default Home;
