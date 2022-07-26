/**
 * File: MoviesPage.tsx
 * Created by: sai @ 7/25/22
 */
import {useEffect, useMemo} from 'react';
import {Movie} from '../../interfaces/movieInterface';
import {useLazyGetMoviesQuery} from '../../services/apis/movieApi';
import {MoviesList} from '../../components/movies/MoviesList/MoviesList';
import {Heading1} from '../../components/shared/Typography/Typography';

export const MoviesPage = () => {
  const [trigger, resultObject] = useLazyGetMoviesQuery();

  const movies = useMemo(() => {
    try {
      const {data: {results}} = resultObject as {[key: string]: any};
      return results ? results as Movie[] : [];
    } catch (e) {
      return [];
    }
  }, [resultObject]);

  useEffect(() => {
    trigger();
  }, []);

  return (
    <div>
      <Heading1>Popular Movies</Heading1>
      <MoviesList movies={movies} />
    </div>
  )
}
