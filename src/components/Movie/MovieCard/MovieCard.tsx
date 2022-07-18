/**
 * File: MovieCard.tsx
 * Created by: sai @ 7/18/22
 */

import {FC} from 'react';
import styled from 'styled-components';
import {Movie} from '../../../interfaces/movieInterface';
import {DefaultContainer} from '../../shared/DefaultContainer/DefaultContainer';
import {Heading1, Paragraph} from '../../shared/Typography/Typography';

interface MovieCardProps {
  movie: Movie;
  liked?: boolean;
  toggleLikeAction?: () => void;
}

export const MovieCard: FC<MovieCardProps> = ({movie, liked, toggleLikeAction}) => {
  return (
    <div>
      <DefaultContainer>
        <Heading1>{movie.title}</Heading1>
        <Paragraph>{movie.overview}</Paragraph>
      </DefaultContainer>
    </div>
  );
};
