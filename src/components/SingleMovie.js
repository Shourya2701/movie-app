import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "./useFetch";
import { NavLink } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    if (data.Response === "True") {
      setIsLoading(false);
      setMovie(data);
    } else {
      setIsLoading(true);
    }
  };

  //debouncing effect
  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovies(`${API}&i=${id}`);
    }, 800);
    return () => clearInterval(timeOut);
  }, [id]);

  if (isLoading) {
    return (
      <>
        <div className="movie-section">
          <div className="loading">Loading...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="movie-section">
        <div className="movie-card">
          <figure>
            <img src={movie.Poster} alt="Poster" />
          </figure>
          <div className="card-content">
            <p className="title">{movie.Title}</p>
            <p className="card-text">{movie.Released}</p>
            <p className="card-text">{movie.Genre}</p>
            <p className="card-text">{movie.imdbRating}</p>
            <p className="card-text">{movie.Country}</p>
            <NavLink to={"/"} className="back-btn">
              Go Back
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleMovie;
