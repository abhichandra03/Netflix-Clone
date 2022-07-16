import axios from "axios";
import React, { useState, useEffect } from "react";
import requests from "../requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movie);

  const shrtovr = (str, num) => {
    if (str?.len > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[600px] text-yellow ">
      <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.original_title}
        />
        <div className=" text white absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            {movie?.original_title}
          </h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 px-5 py-2">
              {" "}
              Play
            </button>
            <button className="border  text-white border-gray-300 ml-4 px-5 py-2">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {shrtovr(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
