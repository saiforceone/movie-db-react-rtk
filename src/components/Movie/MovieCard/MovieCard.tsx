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
  background-color: #f4f4f4;
  border-radius: 0.25rem;
  color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const MovieCard: FC<MovieCardProps> = ({movie, toggleLikeAction}) => {
  const likedStore = useSelector((state: RootState) => state.likedMovies);

  const isLiked = useMemo(() => {
    return !!likedStore.likedMovies.find(likedMovie => likedMovie.id === movie.id);
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
