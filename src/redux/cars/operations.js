import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://657047b009586eff66410b54.mockapi.io/advert/cars';

export const fetchCar = createAsyncThunk('/', async (limit,{ rejectWithValue }) => {
      try {
      const res = await axios.get(`/?page=1&limit=${limit}`);
      return res.data;  
    } catch (error) {
      return rejectWithValue(error.message);
    }
});
export const fetchCarAll = createAsyncThunk('/all', async (rejectWithValue ) => {
  try {
    const res = await axios.get(`/`);
    return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
});
