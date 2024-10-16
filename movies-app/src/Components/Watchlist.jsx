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

  const handleSorting = (key, order) => {
    const sortedOrder = [...watchlist].sort((a, b) => (order === 'asc' ? a[key] - b[key] : b[key] - a[key]));
    setWatchlist(sortedOrder);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Genres */}
      <div className="flex justify-center mb-4">
        {genreList.map((genre, index) => (
          <div
            key={index}
            className={`flex justify-center items-center h-10 w-32 mx-2 rounded-full cursor-pointer text-white font-bold 
            ${currGenre === genre ? 'bg-blue-600 shadow-md' : 'bg-gray-500'}`}
            onClick={() => setCurrGenre(genre)}
          >
            {genre}
          </div>
        ))}
      </div>

      {/* Search Field */}
      <div className="flex justify-center mb-4">
        <input
          placeholder="Search Movies"
          type="text"
          value={searchedStr}
          onChange={(e) => setSearch(e.target.value)}
          className="h-10 w-80 bg-gray-200 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Sorting Buttons */}
      <div className="flex justify-center mb-4">
        {['asc', 'desc'].map((order) => (
          <React.Fragment key={order}>
            <button onClick={() => handleSorting('vote_average', order)} className="bg-blue-500 text-white py-2 px-4 rounded-lg mx-1">
              Sort by Ratings {order === 'asc' ? '↑' : '↓'}
            </button>
            <button onClick={() => handleSorting('popularity', order)} className="bg-blue-500 text-white py-2 px-4 rounded-lg mx-1">
              Sort by Popularity {order === 'asc' ? '↑' : '↓'}
            </button>
          </React.Fragment>
        ))}
      </div>

      {/* Watchlist Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {watchlist
          .filter((movie) => {
            if (currGenre === ALL_GENRES) {
              return true;
            } else {
              return currGenre === getGenreName(movie.genre_ids[0]);
            }
          })
          .filter((movie) => movie.title.toLowerCase().includes(searchedStr.toLowerCase()))
          .map((movie) => (
            <div key={movie.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-200 transform hover:scale-105">
              <img
                className="w-full h-48 object-cover"
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{movie.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">Ratings: {movie.vote_average}</p>
                <p className="text-gray-600 dark:text-gray-400">Popularity: {movie.popularity}</p>
                <p className="text-gray-600 dark:text-gray-400">Genre: {getGenreName(movie.genre_ids[0])}</p>
                <button
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg transition duration-200 hover:bg-red-600"
                  onClick={() => removeFromWatchlist(movie)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Watchlist;
