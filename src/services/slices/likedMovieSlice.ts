/**
 * File: likedMovieSlice.ts
 * Created by: sai @ 7/14/22
 */

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LikedMovieSliceState} from '../../interfaces/movieInterface';

const initialState: LikedMovieSliceState = {
  likedMovies: []
}

export const likedMovieSlice = createSlice({
  name: 'likedMovies',
  initialState,
  reducers: {
    toggleLikedMovie: (state, action: PayloadAction<number>) => {
      const movieIndex = state.likedMovies.findIndex(movId => movId === action.payload);
      if (movieIndex > -1) {
        state.likedMovies.splice(movieIndex, 1);
        return;
      }
      state.likedMovies.push(action.payload);
    },
    setLikedMovies: (state, action: PayloadAction<number[]>) => {
      state.likedMovies = action.payload;
    }
  }
});

export const {toggleLikedMovie} = likedMovieSlice.actions;

export default likedMovieSlice.reducer;
