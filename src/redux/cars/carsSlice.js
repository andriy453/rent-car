import { createSlice } from '@reduxjs/toolkit';
import { fetchCar, fetchCarAll } from './operations';

const initialState = {
  status: null,
  cars: [],
  carsFilter: null,
  carsFilterFavorite: null,
  carsAll: [],
  favorites: [],
  limit:11,
};

export const carsSlice = createSlice({
  name: 'car',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCar.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCar.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cars = action.payload;
      })
      .addCase(fetchCar.rejected, (state, action) => {
        state.status = 'failed';
        state.cars = [];
        state.error = action.error;
      })
      .addCase(fetchCarAll.fulfilled, (state, action) => {
        state.carsAll = action.payload;
      });
  },
  reducers: {
    addFavorites(state, action) {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    },
    deleteFavorites(state, action) {
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
    filterCars(state, action) {
      return {
        ...state,
        carsFilter: action.payload,
      };
    },
    carsFilterFavorite(state, action) {
      return {
        ...state,
        carsFilterFavorite: action.payload,
      };
    },
    filterReset(state) {
      return {
        ...state,
        carsFilter: null,
      };
    },
    filterResetFavorites(state) {
      return {
        ...state,
        carsFilterFavorite: null,
      };
    },
      setLimit(state) {
      return {
        ...state,
        limit: state.limit + 12,
      };
    },
  },
});
export const {
  addFavorites,
  deleteFavorites,
  filterCars,
  filterReset,
  carsFilterFavorite,
  filterResetFavorites,
  setLimit,
} = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
