import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './reducers/userSlice';
// import bookingReducer from './reducers/bookingSlice';
import hotelReducer from './reducers/hotelSlice';
import roomReducer from './reducers/roomSlice';

const store = configureStore({
  reducer: {
    hotel: hotelReducer,
    room: roomReducer,
  },
});

export default store;
