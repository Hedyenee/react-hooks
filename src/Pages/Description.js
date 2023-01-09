import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function Description({ movies }) {
  const navigate = useNavigate();
  const goBack = () => {
    if (true) navigate(-1);
    else navigate("/");
  };
  const movieTitle = useParams();
  const movieDescription = movies.find((m) => {
    return m.title === movieTitle.title

});
  console.log("movieTitleParams===",movieTitle.title);
  console.log("movieDescription===",movieDescription);
  console.log("movies===",movies);
  return (
    <div>
      <h2>{movieDescription.title}</h2>
      <div>{movieDescription.description}</div>
      <iframe width="560" height="315" src={movieDescription.description} title="Youtube video player" frameborder="0" allow="accelermeter; autoplay"></iframe>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

export default Description;
