import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const MovieControls = ({movie,type}) => {

    const {removeMovieFromWatchList, addMovieToWatched, removeMovieFromWatched} = useContext(GlobalContext)

    return (
        <div className="inner-card-controls">
            {type==="watchList" && (
                <div>
                    <button className="ctrl-btn1" onClick = {() => addMovieToWatched(movie)}>
                        👁️
                    </button>

                    <button className="ctrl-btn1" onClick = {()=>removeMovieFromWatchList(movie.id)}>
                        ❌
                    </button>
                </div>
            )}
            {type==="watched" && (
                <div>
                    <button className="ctrl-btn1" onClick = {()=>removeMovieFromWatched(movie.id)}>
                        ❌
                    </button>
                </div>
            )}
        </div>
    )
}
