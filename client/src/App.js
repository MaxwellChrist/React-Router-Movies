import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default function App (props) {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          // console.log(response.data);
          setMovieList(response.data);
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
        <Route path="/"> 
          <MovieList movies={movieList}/>
        </Route>
        <Route path={"/movies/:movieID"}> 
          <Movie />
        </Route>
    </div>
  );
}

{/* <Route path="/"> 
<MovieList />
</Route>
<Route path="/"> 
<Movie />
</Route> */}


{/* <Link to="/">Home</Link>
<Link to="/movies">Movie List</Link> */}

{/* <Route path="/"> 
<MovieList movie={movieList}/>
</Route>
<Route path={"/movies/:movieID"}> 
<Movie />
</Route> */}