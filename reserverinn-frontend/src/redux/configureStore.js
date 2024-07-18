import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './reducers/userSlice';
// import bookingReducer from './reducers/bookingSlice';
import hotelReducer from './reducers/hotelSlice';

const store = configureStore({
  reducer: {
    hotel: hotelReducer,
  },
});

export default store;
