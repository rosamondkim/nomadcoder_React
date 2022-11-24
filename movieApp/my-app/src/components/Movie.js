import React from 'react'
import PropsTypes from "prop-types"

function Movie({coverImg,title,summary,genres}) {
    return (
        <div>
            <img src={coverImg}/>
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g)=>(
                <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.PropsTypes ={
    coverImg : PropsTypes.string.isRequired,
    title: PropsTypes.string.isRequired,
    summary:PropsTypes.string.isRequired,
    genres:PropsTypes.arrayOf(PropsTypes.string).isRequired,
}

export default Movie