import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Home = () => {
    const [movieData, getmovieData] = useState([])

    useEffect(()=> {
        axios.get(process.env.REACT_APP_MOVIES_URL)
        .then(response => {
          console.log(response.data)
        }) 
        
    })

  return (
    <div>test
    </div>
  )
}

export default Home