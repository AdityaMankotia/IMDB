import React, { useState,useEffect,useContext } from 'react'
import Pagination from './Pagination';
import MovieCard from './MovieCard';
import Banner from './Banner';
import axios from 'axios';
import { WatchListContext } from '../context/WatchListContext'
import { useSelector, useDispatch } from 'react-redux';
import PaginationSlice from '../redux/paginationSlice';


const paginationActions = PaginationSlice.actions;
function Movies(){
  const [movies,setMovies]=useState([])

  const {pageNo} = useSelector( (state) => state.PaginationSlice)
  const dispatch =useDispatch()

  const {addToWatchlist,removeFromWatchlist,watchlist,setWatchlist} = useContext(WatchListContext)

  useEffect( ()=> {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=531303e97c2f034ac21838d9c185c8c3&language=en-US&page=${pageNo}`)
    .then(function (response){
        //handle success
        setMovies(response.data.results)
    })
    .catch( function (error){
        //handle error
        console.log(error);
    })
    .finally( function(){
        //always executed
    })
},[pageNo] )

useEffect( () => {
  //on page load, set the watchlist from LS
  const watchlistMovie=localStorage.getItem('movies')
  if(watchlistMovie){
    setWatchlist(JSON.parse(watchlistMovie))
  }
},[])

const handleNextPage = () => {

  dispatch(paginationActions.handleNext());

}

const handlePrevious = () => {
  dispatch(paginationActions.handlePrev());
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
  handleNext={handleNextPage} 
  handlePrev={handlePrevious} 
  pageNo={pageNo} />
  </>
}

const Home = () => {
  return (
    <div>
      <Banner/>
      <Movies />
    </div>
  )
}

export default Home