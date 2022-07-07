import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    watchList: localStorage.getItem("WatchList") ? JSON.parse(localStorage.getItem("WatchList")) : [],
    watched: localStorage.getItem("Watched") ? JSON.parse(localStorage.getItem("Watched")) : [],
}

export const GlobalContext = createContext(initialState)
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem("WatchList",JSON.stringify(state.watchList))
        localStorage.setItem("Watched",JSON.stringify(state.watched))
    }, [state])

    const addMovieToWatchList = movie => {
        dispatch({
            type: "ADD_MOVIE_TO_WATCHLIST",
            payload: movie
        })
    }

    const removeMovieFromWatchList = id => {
        dispatch({
            type:"REMOVE_MOVIE_FROM_WATCHLIST",
            payload:id
        })
    }

    const addMovieToWatched = movie => {
        dispatch({
            type: "ADD_MOVIE_TO_WATCHED",
            payload: movie
        })
    }

    const removeMovieFromWatched = id => {
        dispatch({
            type: "REMOVE_MOVIE_FROM_WATCHED",
            payload: id
        })
    }

    return (
        <GlobalContext.Provider
            value={{
                watchList: state.watchList,
                watched: state.watched,
                addMovieToWatchList,
                removeMovieFromWatchList,
                addMovieToWatched,
                removeMovieFromWatched,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}