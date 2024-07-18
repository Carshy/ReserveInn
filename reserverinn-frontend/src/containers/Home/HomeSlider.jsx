import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RiArrowDownDoubleFill } from 'react-icons/ri';
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
    <div className="app__slider">
      <Slider {...settings} className="slider">
        <div className="slide">
          <h1>ReserveInn Travels</h1>
          <p>Destination to Discover, Journeys to Remember</p>
          <video autoPlay loop muted className="full-viewport">
            <source src={images.kemp5} type="video/mp4" />
          </video>
        </div>
        <div className="slide">
          <h1>Travelling in Style</h1>
          <p>Where will you go Next? Inspire Me!</p>
          <video autoPlay loop muted className="full-viewport">
            <source src={images.kemp4} type="video/mp4" />
          </video>
        </div>
        <div className="slide">
          <h1>ReserveInn Travels</h1>
          <p>Destination to Discover, Journeys to Remember</p>
          <video autoPlay loop muted className="full-viewport">
            <source src={images.kemp2} type="video/mp4" />
          </video>
        </div>
        <div className="slide">
          <h1>Travelling in Style</h1>
          <p>Where will you go Next? Inspire Me!</p>
          <img src={images.kemp1} alt="kempinski" />
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

export default HomeSlider;
