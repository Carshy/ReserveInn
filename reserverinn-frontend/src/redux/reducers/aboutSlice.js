import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  abouts: [],
  status: 'idle',
  error: null,
};

export const fetchAbouts = createAsyncThunk('about/fetchAbouts', async () => {
  const response = await axios.get('http://localhost:8000/api/bookings/abouts/');
  return response.data;
});

const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAbouts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAbouts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.abouts = action.payload;
      })
      .addCase(fetchAbouts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default aboutSlice.reducer;
