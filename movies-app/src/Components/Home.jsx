import React, { useState, useEffect, useContext } from 'react';
import Pagination from './Pagination';
import MovieCard from './MovieCard';
import Banner from './Banner';
import axios from 'axios';
import { WatchListContext } from '../context/WatchListContext';
import { useSelector, useDispatch } from 'react-redux';
import PaginationSlice from '../redux/paginationSlice';

const paginationActions = PaginationSlice.actions;

function Movies() {
  const [movies, setMovies] = useState([]);
  const { pageNo } = useSelector((state) => state.PaginationSlice);
  const dispatch = useDispatch();
  const { addToWatchlist, removeFromWatchlist, watchlist, setWatchlist } = useContext(WatchListContext);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=531303e97c2f034ac21838d9c185c8c3&language=en-US&page=${pageNo}`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [pageNo]);

  useEffect(() => {
    const watchlistMovie = localStorage.getItem('movies');
    if (watchlistMovie) {
      setWatchlist(JSON.parse(watchlistMovie));
    }
  }, [setWatchlist]);

  const handleNextPage = () => {
    dispatch(paginationActions.handleNext());
  };

  const handlePrevious = () => {
    dispatch(paginationActions.handlePrev());
  };

  return (
    <>
      <div className='text-2xl font-bold text-center m-4'>
        <h2>Trending Movies:</h2>
      </div>

      <div className='flex justify-evenly flex-wrap gap-6 mb-6'>
        {movies.map((movieObj, index) => (
          <MovieCard
            key={movieObj.id} // Added unique key for each MovieCard
            movieObj={movieObj}
            index={index}
            watchlist={watchlist}
            addToWatchlist={addToWatchlist}
            removeFromWatchlist={removeFromWatchlist}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination handleNext={handleNextPage} handlePrev={handlePrevious} pageNo={pageNo} />
    </>
  );
}

const Home = () => {
  return (
    <div>
      <Banner />
      <Movies />
    </div>
  );
}

export default Home;
