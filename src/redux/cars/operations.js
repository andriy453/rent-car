import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://657047b009586eff66410b54.mockapi.io/advert/cars';

export const fetchCar = createAsyncThunk('/', async (limit) => {
  const res = await axios.get(`/?page=1&limit=${limit}`);
  return res.data;
});
export const fetchCarAll = createAsyncThunk('/all', async () => {
  const res = await axios.get(`/`);
  return res.data;
});
