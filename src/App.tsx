import { useEffect, useMemo } from 'react'
import {useDispatch} from 'react-redux';
import {Zap as ZapIcon} from 'styled-icons/octicons';
import {useLazyGetMoviesQuery} from './services/apis/movieApi';
import './App.css'
import {DefaultButton} from './components/shared/DefaultButton/DefaultButton';
import {LikeButton} from './components/shared/LIkeButton/LikeButton';
import {MovieCard} from './components/Movie/MovieCard/MovieCard';
import {Heading1} from './components/shared/Typography/Typography';
import {Movie} from './interfaces/movieInterface';
import {toggleLikedMovie} from './services/slices/likedMovieSlice';

function App() {
  const [trigger, resultObject] = useLazyGetMoviesQuery();
  const dispatch = useDispatch();

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
    <div className="App">

      <Heading1>The Header</Heading1>
      <DefaultButton
        icon={<ZapIcon />}
        onClick={() => console.log('click meh')}
      >
        Click Me
      </DefaultButton>
      <LikeButton liked={true} onClick={() => console.log('like or unlike')} />
      {movies.map((movie: Movie) => <MovieCard movie={movie} toggleLikeAction={() => dispatch(toggleLikedMovie(movie.id))} />)}
    </div>
  )
}

export default App
