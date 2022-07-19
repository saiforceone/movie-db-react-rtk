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
      <DefaultContainer>
        <Heading1>{movie.title}</Heading1>
        <Paragraph>{movie.overview}</Paragraph>
      </DefaultContainer>
    </div>
  );
};
