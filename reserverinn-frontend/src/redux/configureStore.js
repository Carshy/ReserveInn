import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './reducers/userSlice';
// import bookingReducer from './reducers/bookingSlice';
import hotelReducer from './reducers/hotelSlice';
import roomReducer from './reducers/roomSlice';
import aboutReducer from './reducers/aboutSlice'

const store = configureStore({
  reducer: {
    hotel: hotelReducer,
    room: roomReducer,
    about: aboutReducer,
  },
});

export default store;
