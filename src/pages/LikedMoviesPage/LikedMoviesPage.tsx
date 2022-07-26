/**
 * File: LikedMoviesPage.tsx
 * Created by: sai @ 7/25/22
 */

import {useSelector} from 'react-redux';
import {RootState} from '../../services/store';
import {MoviesList} from '../../components/movies/MoviesList/MoviesList';
import {Heading1} from '../../components/shared/Typography/Typography';

export const LikedMoviesPage = () => {

  const likedMoviesStore = useSelector((state: RootState) => state.likedMovies);

  return (
    <div>
      <Heading1>Liked Movies</Heading1>
      <MoviesList movies={likedMoviesStore.likedMovies} />
    </div>
  );
};
