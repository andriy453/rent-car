import { createSlice } from '@reduxjs/toolkit'
import {fetchCar} from './operations'

const initialState = {
  status: null,
  cars: [],
  favorites: [],
}



export const carsSlice = createSlice({
  name: 'car',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCar.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCar.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.cars = action.payload
      })
      .addCase(fetchCar.rejected, (state, action) => {
        state.status = 'failed'
        state.cars = []
        state.error = action.error
      })
  },
   reducers: {
    addFavorites(state, action) {
      return {
        ...state,
        favorites: [ ...state.favorites , action.payload],
      };
     },
         deleteFavorites(state, action) {
     return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload.id),
      };
    },
  },
})
export const { addFavorites,deleteFavorites } = carsSlice.actions;

export const carsReducer = carsSlice.reducer