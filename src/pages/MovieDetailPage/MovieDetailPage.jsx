import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../../data";
function MovieDetailPage() {
  const { movieName } = useParams();

  // Find the selected movie based on the movieName parameter
  const selectedMovie = movies.find(
    (movie) => movie.title.toLowerCase() === movieName.toLowerCase()
  );

  if (!selectedMovie) {
    return <p>Movie not found!</p>;
  }
  const { title, releaseDate, posterPath, cast } = selectedMovie;

  return (
    <div>
      <h1>Movie Detail Page</h1>
      <img src={posterPath} alt={`Poster for ${title}`} />
      <h1>{title}</h1>
      <p>Release Date: {releaseDate}</p>
      <p>Cast: {cast.join(", ")}</p>
    </div>
  );
}

export default MovieDetailPage;