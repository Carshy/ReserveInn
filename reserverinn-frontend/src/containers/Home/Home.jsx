import React from 'react';
import HomeSlider from './HomeSlider';
import Hotels from '../Hotels/Hotels';
import Rooms from '../Rooms/Rooms';
import './Home.scss';

function Home() {
  return (
    <div className="app__home">
      {/* <h1>Welcome to ReserveInn</h1> */}
      <HomeSlider />
      <Hotels />
      <Rooms />
    </div>
  );
}

export default Home;
