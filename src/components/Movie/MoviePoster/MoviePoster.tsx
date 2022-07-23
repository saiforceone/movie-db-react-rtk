/**
 * File: MoviePoster.tsx
 * Created by: sai @ 7/23/22
 */

import {FC} from 'react';
import styled from 'styled-components';

interface MoviePosterProps {
  backdropUrl?: string;
  posterImage: string;
}

const PosterImage = styled.img`
  align-self: center;
  height: 100%;
  justify-self: center;
  object-fit: contain;
`;

interface PosterContainerProps {
  backdropUrl?: string;
}

const PosterContainer = styled.div<PosterContainerProps>`
  align-items: center;
  align-self: center;
  background-image: url("${props => props.backdropUrl}");
  background-repeat: no-repeat;
  display: flex;
  height: 250px;
  justify-content: center;
  justify-self: center;
`;

export const MoviePoster: FC<MoviePosterProps> = ({backdropUrl, posterImage}) => {
  return (
    <PosterContainer backdropUrl={backdropUrl}>
      <PosterImage src={posterImage} />
    </PosterContainer>
  );
};
