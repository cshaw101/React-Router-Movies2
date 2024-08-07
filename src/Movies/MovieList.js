// MovieList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MovieList({ movies }) {
  const navigate = useNavigate();

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} navigate={navigate} />
      ))}
    </div>
  );
}

function MovieDetails({ movie, navigate }) {
  const { id, title, director, metascore } = movie;

  return (
    <div className="movie-card" onClick={() => navigate(`/movies/${id}`)}>
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
