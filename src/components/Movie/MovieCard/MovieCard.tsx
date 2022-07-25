/**
 * File: MovieCard.tsx
 * Created by: sai @ 7/18/22
 */

import {FC, useMemo} from 'react';
import styled from 'styled-components';
import {Movie} from '../../../interfaces/movieInterface';
import {DefaultContainer} from '../../shared/DefaultContainer/DefaultContainer';
import {Heading1, Paragraph} from '../../shared/Typography/Typography';
import {useSelector} from 'react-redux';
import {RootState} from '../../../services/store';
import {MoviePoster} from '../MoviePoster/MoviePoster';
import {LikeButton} from '../../shared/LIkeButton/LikeButton';
import {MovieStats} from '../MovieStats/MovieStats';

const IMAGE_URL_BASE = import.meta.env.VITE_MOVIE_POSTER_BASE_URI;

interface MovieCardProps {
  movie: Movie;
  toggleLikeAction?: () => void;
}

const MovieCardContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MovieCard: FC<MovieCardProps> = ({movie, toggleLikeAction}) => {
  const likedStore = useSelector((state: RootState) => state.likedMovies);

  const isLiked = useMemo(() => {
    return !!likedStore.likedMovies.find(movieId => movieId === movie.id);
  }, [likedStore.likedMovies]);

  return (
    <MovieCardContainer>
      <MoviePoster
        backdropUrl={`${IMAGE_URL_BASE}${movie.backdrop_path}`}
        posterImage={`${IMAGE_URL_BASE}${movie.poster_path}`}
      />
      <DefaultContainer>
        <Heading1>{movie.title}</Heading1>
        <Paragraph>{movie.overview}</Paragraph>
      </DefaultContainer>
      <DefaultContainer>
        <MovieStats averageRating={movie.vote_average} totalRatings={movie.vote_count} languageCode={movie.original_language} />
      </DefaultContainer>
      <DefaultContainer>
        <LikeButton liked={isLiked} onClick={toggleLikeAction} />
      </DefaultContainer>
    </MovieCardContainer>
  );
};
