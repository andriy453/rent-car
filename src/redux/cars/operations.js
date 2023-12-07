import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// export async function fetchImages(inputData, page) {
//   const searchParams = new URLSearchParams({page, });
//   const images = await axios.get(`https://657047b009586eff66410b54.mockapi.io/advert/cars?${searchParams}`);

//   return images.data;
// }
axios.defaults.baseURL = 'https://657047b009586eff66410b54.mockapi.io/advert/cars';

export const fetchCar = createAsyncThunk('/', async (limit) => {
  const res = await axios.get(`/?page=1&limit=${limit}`)
  return res.data
})