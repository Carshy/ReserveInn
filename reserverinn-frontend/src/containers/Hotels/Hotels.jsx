import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotels } from '../../redux/reducers/hotelSlice';
import './Hotel.scss';

const Hotels = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotel.hotels);
  const hotelStatus = useSelector((state) => state.hotel.status);
  const hotelError = useSelector((state) => state.hotel.error);

  useEffect(() => {
    if (hotelStatus === 'idle') {
      dispatch(fetchHotels());
    }
  }, [hotelStatus, dispatch]);

  return (
    <div className="app__hotels">
      <h2 className="app__hotels-title">Destinations</h2>
      <p>Explore the World with Reserve Inn. Where are you Travelling Next?</p>
      {hotelStatus === 'loading' && <p>Loading...</p>}
      {hotelError && <p>Error: {hotelError}</p>}
      <div className="app__hotels-card">
        {hotels.map((hotel) => (
          <ul key={hotel.id}>
            <li className="app__hotels-details">
              <img src={hotel.photo} alt="Hotel Photo" />
              <h2>{hotel.name}</h2>
              <p>{hotel.location}</p>
              <p>{hotel.description}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
