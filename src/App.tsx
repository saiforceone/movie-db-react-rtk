import { useEffect } from 'react'
import {Zap as ZapIcon} from 'styled-icons/octicons';
import {useLazyGetMoviesQuery} from './services/apis/movieApi';
import './App.css'
import {DefaultButton} from './components/shared/DefaultButton/DefaultButton';
import {LikeButton} from './components/shared/LIkeButton/LikeButton';
import {MovieCard} from './components/Movie/MovieCard/MovieCard';
import {Heading1} from './components/shared/Typography/Typography';

function App() {
  const [trigger, resultObject] = useLazyGetMoviesQuery();

  useEffect(() => {
    trigger();
  }, []);

  console.log(resultObject);

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
      {resultObject.currentData?.results.map(movie => <MovieCard movie={movie} />)}
    </div>
  )
}

export default App
