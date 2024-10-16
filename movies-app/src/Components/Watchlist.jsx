import React, { useContext, useState, useEffect } from 'react';
import { WatchListContext } from '../context/WatchListContext';
import genreids from '../constants';

const ALL_GENRES = 'All genres';

const getGenreName = (genre_id) => {
  return genreids[genre_id] || 'NA';
};

const Watchlist = () => {
  const { watchlist, removeFromWatchlist, setWatchlist } = useContext(WatchListContext);
  const [searchedStr, setSearch] = useState('');
  const [genreList, setGenreList] = useState([ALL_GENRES, 'Action', 'Animation', 'Horror']);
  const [currGenre, setCurrGenre] = useState(ALL_GENRES);

  useEffect(() => {
    let tempArr = watchlist.map((movie) => {
      return getGenreName(movie.genre_ids[0]);
    });
    let uniqueGenres = new Set(tempArr);
    setGenreList([ALL_GENRES, ...uniqueGenres]);
  }, [watchlist]);

  const handleAscRatings = () => {
    const sortedOrder = [...watchlist].sort((a, b) => a.vote_average - b.vote_average);
    setWatchlist(sortedOrder); // Ensure a new array is passed to setWatchlist
  };

  const handleDescRatings = () => {
    const sortedOrder = [...watchlist].sort((a, b) => b.vote_average - a.vote_average);
    setWatchlist(sortedOrder); // Ensure a new array is passed to setWatchlist
  };

  const handleAscPopularity = () => {
    const sortedOrder = [...watchlist].sort((a, b) => a.popularity - b.popularity);
    setWatchlist(sortedOrder); // Ensure a new array is passed to setWatchlist
  };

  const handleDescPopularity = () => {
    const sortedOrder = [...watchlist].sort((a, b) => b.popularity - a.popularity);
    setWatchlist(sortedOrder); // Ensure a new array is passed to setWatchlist
  };

  return (
    <>
      {/* Genres */}
      <div className='flex justify-center m-4'>
        {genreList.map((genre, index) => {
          return (
            <div
              key={index} // Assign a unique key for each genre
              className={
                currGenre === genre
                  ? 'flex justify-center items-center bg-blue-500 h-8 w-[300px] text-white font-bold rounded-xl mx-4 cursor-pointer'
                  : 'flex justify-center items-center bg-gray-500 h-8 w-[300px] text-white font-bold rounded-xl mx-4 cursor-pointer'
              }
              onClick={() => setCurrGenre(genre)}
            >
              {genre}
            </div>
          );
        })}
      </div>

      {/* Search Field */}
      <div className='flex justify-center my-5'>
        <input
          placeholder='Search Movies'
          type='text'
          value={searchedStr}
          onChange={(e) => setSearch(e.target.value)}
          className='h-8 w-[300px] bg-gray-200 px-4 outline-none border border-slate-300'
        />
      </div>

      {/* Watchlist Table */}
      <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md m-5'>
        <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
          <thead>
            <tr className='bg-gray-50'>
              <th className='px-6 py-4 font-medium text-gray-900'>Name</th>
              <th>
                <div className='flex'>
                  <i
                    className='fa-solid fa-arrow-up cursor-pointer pr-1'
                    onClick={handleAscRatings}
                  ></i>
                  <div>Ratings</div>
                  <i
                    className='fa-solid fa-arrow-down cursor-pointer pl-1'
                    onClick={handleDescRatings}
                  ></i>
                </div>
              </th>
              <th>
                <div className='flex'>
                  <i
                    className='fa-solid fa-arrow-up cursor-pointer pr-1'
                    onClick={handleAscPopularity}
                  ></i>
                  <div>Popularity</div>
                  <i
                    className='fa-solid fa-arrow-down cursor-pointer pl-1'
                    onClick={handleDescPopularity}
                  ></i>
                </div>
              </th>
              <th>
                <div className='flex'>
                  <div>Genre</div>
                </div>
              </th>
              <th>
                <div className='flex'>
                  <div>Delete</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
            {watchlist
              .filter((movie) => {
                if (currGenre === ALL_GENRES) {
                  return true;
                } else {
                  return currGenre === getGenreName(movie.genre_ids[0]);
                }
              })
              .filter((movie) =>
                movie.title.toLowerCase().includes(searchedStr.toLowerCase())
              )
              .map((movie) => {
                return (
                  <tr key={movie.id} className='hover:bg-gray-50'>
                    {/* Assign unique key using movie.id */}
                    <td className='flex items-center px-6 py-4 font-normal text-gray-900'>
                      <img
                        className='h-[6rem] w-[10rem] object-fit'
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt={movie.title}
                      />
                      <div className='font-medium text-gray-700 text-sm pl-5 font-semibold'>
                        {movie.title}
                      </div>
                    </td>
                    <td className='pl-6 py-4'>{movie.vote_average}</td>
                    <td className='pl-6 py-4'>{movie.popularity}</td>
                    <td className='pl-2 py-4'>{getGenreName(movie.genre_ids[0])}</td>
                    <td
                      className='pl-2 py-4 text-red-500 cursor-pointer'
                      onClick={() => removeFromWatchlist(movie)}
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
