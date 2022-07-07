import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const ResultCard = ({movie}) => {

    const POSTER_URL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const {addMovieToWatchList, watchList} = useContext(GlobalContext)
    const storedMovie = watchList.find(o => o.id === movie.id)
    const watchlistDisabled = storedMovie ? true:false

    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img src = {POSTER_URL}
                    alt = {`${movie.title} POSTER`}
                    />
                ) : (
                <div className="filler-poster"> </div>
                )}
            </div> 
            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                    <h4 className="release-date">{
                        movie.release_date ? movie.release_date.substring(0,4) : "-"
                    }</h4>
                </div>   
                <div className="controls">
                <button className="btn"
                 disabled = {watchlistDisabled}
                 onClick={() => addMovieToWatchList(movie)}
                >ADD TO WATCHLIST</button>
                </div>  
            </div> 
             
        </div>
    )
}

export default ResultCard
