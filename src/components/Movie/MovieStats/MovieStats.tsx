/**
 * File: MovieStats.tsx
 * Created by: sai @ 7/23/22
 */

import {FC} from 'react';
import {Star as StarIcon} from 'styled-icons/remix-line';
import {Language as LanguageIcon} from 'styled-icons/ionicons-solid'
import styled from 'styled-components';

interface MovieStatsProps {
  averageRating: number;
  totalRatings: number;
  languageCode: string;
}

const MovieStatsContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-self: center;
  width: fit-content;
`;

const StatItem = styled.div`
  align-items: center;
  display: flex;
  padding: 0.25rem;
`;

export const MovieStats: FC<MovieStatsProps> = ({averageRating, totalRatings, languageCode}) => {
  return (
    <MovieStatsContainer>
      <StatItem>
        <StarIcon size={20} />
        <span>{averageRating} avg</span> ({totalRatings}) Total Votes
      </StatItem>
      <StatItem>
        <LanguageIcon size={20} />
        <span>{languageCode.toUpperCase()}</span>
      </StatItem>
    </MovieStatsContainer>
  );
};
