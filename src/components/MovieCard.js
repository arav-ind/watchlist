import React from "react";
import { MovieControls } from "./MovieControls";

export const MovieCard = ({ movie, type }) => {
    const POSTER_URL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <div className="movie-card">
        <div className="overlay"></div>

            {movie.poster_path ? (
                <img src = {POSTER_URL}
                alt = {`${movie.title} POSTER`}
                />
                ) : (
                <div className="filler-poster"> </div>
                )
            }

            <MovieControls movie={movie} type={type}/>
        </div>
    );
};