/**
 * File: MovieCard.tsx
 * Created by: sai @ 7/18/22
 */

import {FC, useMemo} from 'react';
import {Movie} from '../../../interfaces/movieInterface';
import {DefaultContainer} from '../../shared/DefaultContainer/DefaultContainer';
import {Heading1, Paragraph} from '../../shared/Typography/Typography';
import {useSelector} from 'react-redux';
import {RootState} from '../../../services/store';
import {MoviePoster} from '../MoviePoster/MoviePoster';
import {LikeButton} from '../../shared/LIkeButton/LikeButton';

const IMAGE_URL_BASE = import.meta.env.VITE_MOVIE_POSTER_BASE_URI;

interface MovieCardProps {
  movie: Movie;
  liked?: boolean;
  toggleLikeAction?: () => void;
}

export const MovieCard: FC<MovieCardProps> = ({movie, liked, toggleLikeAction}) => {
  const likedStore = useSelector((state: RootState) => state.likedMovies);
  const isLiked = useMemo(() => {
    return !!likedStore.likedMovies.find(movieId => movieId === movie.id);
  }, [likedStore]);
  console.log(`isLiked for id: ${movie.id}: `, isLiked)
  return (
    <div>
      <MoviePoster
        backdropUrl={`${IMAGE_URL_BASE}${movie.backdrop_path}`}
        posterImage={`${IMAGE_URL_BASE}${movie.poster_path}`}
      />
      <DefaultContainer>
        <Heading1>{movie.title}</Heading1>
        <Paragraph>{movie.overview}</Paragraph>
      </DefaultContainer>
      <DefaultContainer>
        <LikeButton liked={isLiked} />
      </DefaultContainer>
    </div>
  );
};
