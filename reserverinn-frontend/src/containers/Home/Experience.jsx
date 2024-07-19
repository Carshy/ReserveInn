import React from 'react';
import { images } from '../../constants';
import './Experience.scss';

const Experience = () => {
  return (
    <div className="app__experience">
      <div className="app__experience-details">
        <h2>Shop Reserve Inn</h2>
        <p>Experience the joy of Reserve Inn at home and share the delight with your loved ones with our collection of exclusive suites and luxury</p>
        <p>Luxuriate with sumptuous duvets and linens, indulge with divine bath and body products, or opt for a gift voucher so the special people in your life can savour Reserve Inn for themselves.</p>
      </div>
      <div className="app__experience-image">
        <img src={images.kempi} alt="Experience"/>
      </div>
    </div>
  )
}

export default Experience;
