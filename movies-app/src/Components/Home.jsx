import React, { useState,useEffect } from 'react'
import Pagination from './Pagination';
import MovieCard from './MovieCard';
import Banner from './Banner';
import axios from 'axios';

function Movies(){
  const [movies,setMovies]=useState([
   ])

  const [pageNo, setPageNo]=useState(1);

  const [watchlist,setWatchlist] = useState([])

  useEffect( ()=> {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=531303e97c2f034ac21838d9c185c8c3&language=en-US&page=${pageNo}`)
    .then(function (response){
        //handle success
        setMovies(response.data.results)
    })
    .catch( function (error){
        //handle error
    })
    .finally( function(){
        //always executed
    })
},[pageNo] )

  const handleNext = () => {
    //increment page no
    setPageNo(pageNo+1)
  }
  const handlePrev = () => {
    //decrement page no
    if(pageNo==1){
      setPageNo(1);
    }
    else{
      setPageNo(pageNo-1);
      }
  }

  const addToWatchlist = (movieObj) => {
    const updatedMovies= [...watchlist, movieObj]
    setWatchlist(updatedMovies)
  }

  const removeFromWatchlist= movieObj => {
    const filteredMovies=watchlist.filter((watchlistMovie)=> {
      return movieObj.id !== watchlistMovie.id
    })
    setWatchlist(filteredMovies)
  }

  return <>
  <div className='text-2xl font-bold text-center m-4'>
  <h2>Trending Movies:</h2>
  </div>
  
  <div className='flex justify-evenly flex-wrap gap-6'>
    {movies.map((movieObj,index)=>  <MovieCard 
    movieObj={movieObj}
    index={index} 
    watchlist={watchlist} 
    addToWatchlist={addToWatchlist}
    removeFromWatchlist={removeFromWatchlist}
    />)}
  </div>

  {/* pagination */}
  <Pagination 
  handleNext={handleNext} 
  handlePrev={handlePrev} 
  pageNo={pageNo} />
  </>
}

const Home = () => {
  return (
    <div>
      Home
      <Banner/>
      <Movies />
    </div>
  )
}

export default Home
