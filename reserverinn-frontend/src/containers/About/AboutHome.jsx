import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RiArrowDownDoubleFill } from 'react-icons/ri';
import { images } from '../../constants/';
import './AboutHome.scss';

const AboutHomeSlider = () => {
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
    <div className="app__slider">
      <Slider {...settings} className="slider">
        <div className="slide">
          <h1>About Us</h1>
          <p>Experience luxury and comfort at our hotel</p>
          <img src={images.abouthom} alt="About Us" />
        </div>
        <div className="slide">
          <p>We offer you unforgettable, unparalleled luxury experience</p>
          <img src={images.abouthom1} alt="About Us" />
        </div>
      </Slider>
      <a
        className="app__wave"
        href="#hotels"
      >
        <RiArrowDownDoubleFill className="blinking-arrow" />
      </a>
    </div>
  );
};

export default AboutHomeSlider;
