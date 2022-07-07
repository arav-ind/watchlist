import React, { useState } from 'react'
import ResultCard from './ResultCard'

const Add = () => {

    const [query, setQuery] = useState("")
    const [result, setresult] = useState([])

    const onChange = (e) => {
        e.preventDefault()
        setQuery(e.target.value)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(!data.errors){
                setresult(data.results)
            }else{
                setresult([])
            }
        })
    }


    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input
                        type="text"
                        placeholder="Search for movies"
                        value={query}
                        onChange={onChange}
                        />
                    </div>
                    {result.length > 3 && (
                        <ul className="results">
                            {result.map((movie) => (
                                <li key={movie.id}>
                                    <ResultCard
                                        movie = {movie}
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Add