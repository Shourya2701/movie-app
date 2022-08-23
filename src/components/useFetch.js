import React, { useState, useEffect, useContext } from "react";

export const API = `https://www.omdbapi.com/?&apikey=${process.env.REACT_APP_MOVIE_KEY}`;

const useFetch = (apiParam) => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: false, msg: "" });

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    if (data.Response === "True") {
      setIsLoading(false);
      setIsError({
        show: false,
        msg: "",
      });
      setMovie(data.Search);
    } else {
      setIsLoading(true);
      setIsError({
        show: true,
        msg: data.Error,
      });
    }
  };

  //debouncing effect
  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovies(`${API}&s=${apiParam}`);
    }, 800);
    return () => clearInterval(timeOut);
  }, [apiParam]);

  return { isError, isLoading, movie };
};

export default useFetch;
