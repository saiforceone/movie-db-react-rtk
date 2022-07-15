/**
 * File: store.ts
 * Created by: sai @ 7/14/22
 */

import {configureStore} from '@reduxjs/toolkit';
import {movieApi} from './apis/movieApi';
import likedMovieSlice from './slices/likedMovieSlice';

export const store = configureStore({
  reducer: {
    likedMovies: likedMovieSlice,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
