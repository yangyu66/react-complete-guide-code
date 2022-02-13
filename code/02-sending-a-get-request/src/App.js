import React, { useState, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);

  // function fetchMoviesHandler() {
  //   fetch('https://swapi.dev/api/films/')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const transformedMovies = data.results.map((movieData) => {
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           openingText: movieData.opening_crawl,
  //           releaseDate: movieData.release_date,
  //         };
  //       });
  //       setMovies(transformedMovies);
  //     });
  // }


  const fetchMoviesHandler =  useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('https://swapi.dev/api/films/');

      if (!response.ok) {
        throw new Error("sth went wrong!")
      }

      const data = await response.json();
  
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
    } catch (error) {
      setError(error.message)
    }


      setLoading(false)
  }, [])

  useEffect(() => {fetchMoviesHandler()}, [fetchMoviesHandler])

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!loading && movies.length > 0 && <MoviesList movies={movies} />}
        {!loading && movies.length ===0 && <p>No Movies!!</p> }
        {loading && <p> Loading!!</p> }
        {err && <p>{err}</p> }

      </section>
    </React.Fragment>
  );
}

export default App;
