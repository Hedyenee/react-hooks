import React from 'react';
import { ListGroup } from 'react-bootstrap';

import MovieCard from './MovieCard';


function MovieList({ movies }) {
    return (
      <ListGroup>
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            title={movie.title}
            description={movie.description}
            posterURL={movie.posterURL}
            rating={movie.rating}
          />
        ))}
      </ListGroup>
    );
  }
  export default MovieList;
