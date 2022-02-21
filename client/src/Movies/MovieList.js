import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieList(props) {
  // console.log(props.movies);
  return (
    <div className="movie-list">
      {props.something.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <MovieDetails key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}