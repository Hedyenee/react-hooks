import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import AddMovieForm from './AddMovieForm';
import  Filter  from './Filter';
import MovieList from './MovieList';
import './App.css';
import { Rating } from 'react-simple-star-rating';


function App() {
  const [Rate,setRate]= useState('');
  const [movies, setMovies] = useState([
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      rating: '05'
    },
    { 
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      rating: '04'
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
      rating: '03'
    }
  ]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filterMovies = ({ title, rating }) => {
    if (!title && !rating) {
      return setMovies(movies);
    }


    setMovies(
      movies.filter(
        (movie) =>
          (!title || movie.title.toLowerCase().includes(title.toLowerCase()))
      )
    );
  };
  const handleRating = ( rate) => { 
    setRate (rate)
  }
  return (
    <div className='App'> 
    <Container>
      <h1 style={{ color:'red'}}> Movies</h1>
      <Rating onClick={handleRating}/>
      <Filter   onFilter={filterMovies} />
      <AddMovieForm onAdd={addMovie} />
      <MovieList movies={movies.filter(elm=>elm.rating>= Rate)} />
    </Container>
    </div>
  );
}

export default App;
