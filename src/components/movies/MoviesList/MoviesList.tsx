/**
 * File: MoviesList.tsx
 * Created by: sai @ 7/25/22
 */

import {FC} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import {Movie} from '../../../interfaces/movieInterface';
import {MovieCard} from '../../Movie/MovieCard/MovieCard';
import {toggleLikedMovie} from '../../../services/slices/likedMovieSlice';

interface MoviesListProps {
  movies: Movie[];
  isLoading?: boolean;
}

const EmptyMoviesCard = () => {}

export const MoviesList: FC<MoviesListProps> = ({movies, isLoading}) => {
  const dispatch = useDispatch();
  return (
    <div>
      {movies.length
        ? movies.map(movie => <MovieCard key={`movie-${movie.id}`} movie={movie} toggleLikeAction={() => dispatch(toggleLikedMovie(movie))} />)
        : <div></div>
      }
    </div>
  );
};
