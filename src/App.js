import React, { useState } from "react";
import "./App.css";
import Movies from "./Pages/Movies";
import Description from "./Pages/Description";
import Trailer from "./Pages/Trailer";
import { Routes, Route } from "react-router-dom";
import AddMovieForm from "./Components/AddMovieForm";
import Filter from "./Components/Filter";
import MovieList from "./Components/MovieList";
import { Rating } from "react-simple-star-rating";
import { Container } from "react-bootstrap";

function App() {
  const [Rate, setRate] = useState("");
  const [movies, setMovies] = useState([
    {
      title: "The Shawshank Redemption",
      description: 
       "https://www.youtube.com/embed/P9mwtI82k6E" ,
       
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: "05",
    },
    {
      title: "The Godfather",
      description:
        "https://www.youtube.com/embed/UaVTIH8mujA",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: "04",
    },
    {
      title: "The Dark Knight",
      description:
        "https://www.youtube.com/embed/EXeTwQWrcwY",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: "03",
    },
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
          !title || movie.title.toLowerCase().includes(title.toLowerCase())
      )
    );
  };
  const handleRating = (rate) => {
    setRate(rate);
  };

  return (
    <div className="App">
      {/* <Movies /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Container>
                <h1 style={{ color: "red" }}> Movies</h1>
                <Rating onClick={handleRating} />
                <Filter onFilter={filterMovies} />
                <AddMovieForm onAdd={addMovie} />
                <MovieList
                  movies={movies.filter((elm) => elm.rating >= Rate)}
                />
              </Container>
            </>
          }
        />
        <Route path="/description/:title" element={<Description movies={movies}/>} />
        
      </Routes>
    </div>
  );
}

export default App;
