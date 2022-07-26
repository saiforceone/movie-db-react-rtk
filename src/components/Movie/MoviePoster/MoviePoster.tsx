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
  border-radius: 0.25rem;
  height: 100%;
  justify-self: center;
  object-fit: contain;
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

interface PosterContainerProps {
  backdropUrl?: string;
}

const PosterContainer = styled.div<PosterContainerProps>`
  align-items: center;
  align-self: center;
  background-image: url("${props => props.backdropUrl}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 270px;
  justify-content: center;
  justify-self: center;
  padding: 1rem;
`;

const PosterImageWrapper = styled.div`
  align-items: center;
  backdrop-filter: blur(5%);
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const MoviePoster: FC<MoviePosterProps> = ({backdropUrl, posterImage}) => {
  return (
    <PosterContainer backdropUrl={backdropUrl}>
      <PosterImageWrapper>
        <PosterImage src={posterImage} />
      </PosterImageWrapper>
    </PosterContainer>
  );
};
