import React from 'react'

const MovieCard = ({
    movie: {id, original_language, original_title, overview, popularity, 
        poster_path, release_date, title, vote_average, vote_count}}) => {


  return (
    <div className="movie-card">
        
        <img className="movie-image" 
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`} 
            alt="Movie Image" 
        />
        <div className="movie-textbox">
            <h3 className="movie-title">{title}</h3>
            <div className="movie-text">
                <p className="movie-popularity">{popularity}</p>
                <p className="movie-date">{release_date}</p>
                <p className="movie-overview">{overview}</p>
                <p className="movie-language">{original_language}</p>
            </div>
            
        </div>
       
    </div>
  )
}

export default MovieCard