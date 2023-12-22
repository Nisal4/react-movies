import React from "react";
import { Link } from "react-router-dom";
import { movies } from "../../data";
function MovieListPage() {
  const moviesList = movies.map((m, idx) => (
    <Link to={`/movies/${encodeURIComponent(m.title)}`}>
      <div key={idx}>
        <img src={m.posterPath} />
        <h2>{m.title}</h2>
        <p>Release Date: {m.releaseDate}</p>
        <hr />
      </div>
    </Link>
  ));
  return (
    <>
      <h1>Movie List Page</h1>
      {moviesList}
    </>
  );
}

export default MovieListPage;