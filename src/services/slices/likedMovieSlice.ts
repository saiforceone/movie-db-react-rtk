/**
 * File: likedMovieSlice.ts
 * Created by: sai @ 7/14/22
 */

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LikedMovieSliceState, Movie} from '../../interfaces/movieInterface';

const initialState: LikedMovieSliceState = {
  likedMovies: []
}

export const likedMovieSlice = createSlice({
  name: 'likedMovies',
  initialState,
  reducers: {
    toggleLikedMovie: (state, action: PayloadAction<Movie>) => {
      const movieIndex = state.likedMovies.findIndex(movie => movie.id === action.payload.id);
      if (movieIndex > -1) {
        state.likedMovies.splice(movieIndex, 1);
        return;
      }
      state.likedMovies.push(action.payload);
    },
    setLikedMovies: (state, action: PayloadAction<Movie[]>) => {
      state.likedMovies = action.payload;
    }
  }
});

export const {toggleLikedMovie} = likedMovieSlice.actions;

export default likedMovieSlice.reducer;
