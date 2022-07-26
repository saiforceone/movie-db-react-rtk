import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {MoviesPage} from './pages/MoviesPage/MoviesPage';
import {LikedMoviesPage} from './pages/LikedMoviesPage/LikedMoviesPage';
import {Menu} from './components/navigation/Menu/Menu';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route element={<MoviesPage />} path="" />
          <Route element={<LikedMoviesPage />} path="liked-movies" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
