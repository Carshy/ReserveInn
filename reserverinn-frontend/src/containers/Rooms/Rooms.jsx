import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { fetchRooms } from '../../redux/reducers/roomSlice';
import './Rooms.scss';

const Rooms = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.room.rooms);
  const roomStatus = useSelector((state) => state.room.status);
  const roomError = useSelector((state) => state.room.error);

  useEffect(() => {
    if (roomStatus === 'idle') {
      dispatch(fetchRooms());
    }
  }, [roomStatus, dispatch]);

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
    <div className="app__rooms">
      <h2 className="app__rooms-title">Sensational Suites</h2>
      <p>Elevate your travel experience when you step into one of our show-stopping suites</p>
      {roomStatus === 'loading' && <p>Loading...</p>}
      {roomError && <p>Error: {roomError}</p>}
      <motion.div
        className="app__slider"
        initial={{ width: '94%' }}
        whileHover={{ width: '100' }}
        transition={{ duration: 0.5 }}
        // whileInView={{ opacity:[0.4, 1], scale:[0, 1] }}
      >
        <Slider {...settings} className="slider">
          {rooms.map((room) => (
            <div key={room.id} className="slide">
              <img src={room.photo} alt={room.name} />
              <h2>{room.room_type}</h2>
              <p>{room.hotel.name}</p>
              <p>{room.description}</p>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Rooms;
