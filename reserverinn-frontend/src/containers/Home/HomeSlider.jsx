import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { images } from '../../constants';
import './HomeSlider.scss';

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <Slider {...settings} className="slider">
      <div className="slide">
        <video autoPlay loop muted className="full-viewport">
          <source src={images.kemp5} type="video/mp4" />
        </video>
      </div>
      <div className="slide">
        <video autoPlay loop muted className="full-viewport">
          <source src={images.kemp4} type="video/mp4" />
        </video>
      </div>
      <div className="slide">
        <video autoPlay loop muted className="full-viewport">
          <source src={images.kemp2} type="video/mp4" />
        </video>
      </div>
      {/* <div className="slide">
        <img src={images.kemp} alt="kempinski" />
      </div> */}
      <div className="slide">
        <img src={images.kemp1} alt="kempinski" />
      </div>
    </Slider>
  );
};

export default HomeSlider;
