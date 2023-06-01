import React, {useState, useEffect} from 'react'
import axios from 'axios'

import MovieCard from '../components/MovieCard'

const Home = () => {
    const [movieData, getMovieData] = useState(null)

    const getAllMoviesData = () => {
      axios.get(process.env.REACT_APP_MOVIES_URL)
        .then((response) => {
          
          const movieData = response.data.results
          getMovieData(movieData)
          console.log(movieData)
          console.log(response.data)
        }).catch(err =>{
          console.log(err)
        })
    }

    useEffect(()=> {
        getAllMoviesData()
    }, [])

  return (
    <div className="home">
      <div className="all-movies">
        {
        movieData?.map((movie, key) => { return <MovieCard movie={movie} key={key}/>})
      }
      </div>
      
    </div>
  )
}

export default Home 