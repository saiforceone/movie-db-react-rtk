/**
 * File: movieApi.ts
 * Created by: sai @ 7/14/22
 */

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Movie} from '../../interfaces/movieInterface';

const API_BASE_URL = import.meta.env.VITE_MOVIE_DB_API_BASE_URI;
const MOVIE_ENDPOINT = import.meta.env.VITE_MOVIE_DB_API_POPULAR_MOVIES;
const API_KEY = import.meta.env.VITE_MOVIE_DB_API_KEY;

const baseUrl = `${API_BASE_URL}${MOVIE_ENDPOINT}?api_key=${API_KEY}`;

export const movieApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<Movie, void>({
      query: () => ({
        url: ''
      })
    })
  }),
  reducerPath: 'movies',
});

export const {useGetMoviesQuery, useLazyGetMoviesQuery} = movieApi;
