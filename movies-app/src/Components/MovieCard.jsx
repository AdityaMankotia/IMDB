import React from 'react';

const MovieCard = (props) => {
    const { addToWatchlist, removeFromWatchlist, index, movieObj, watchlist } = props;

    const isMoviePresentInWatchlist = () => {
        return watchlist.some((movie) => movie.id === movieObj.id);
    };

    return (
        <div className='flex justify-center'>
            <div 
                className='relative h-[40vh] w-[200px] 
                bg-center bg-cover 
                rounded-xl shadow-lg 
                transition-transform transform hover:scale-105 
                duration-300 ease-in-out' 
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movieObj.backdrop_path})` }}
                key={index}
            >
                {isMoviePresentInWatchlist() ? (
                    <button 
                        className='absolute top-2 right-2 bg-red-600/90 text-white rounded-full h-10 w-10 flex justify-center items-center hover:bg-red-500 transition duration-200'
                        onClick={() => removeFromWatchlist(movieObj)}
                        aria-label="Remove from Watchlist"
                    >
                        {/* Remove from Watchlist Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A6.978 6.978 0 0112 19.5c-3.866 0-7-3.134-7-7s3.134-7 7-7c1.215 0 2.355.308 3.375.825M15 3h6m-3-3v6" />
                        </svg>
                    </button>
                ) : (
                    <button 
                        className='absolute top-2 right-2 bg-green-600/90 text-white rounded-full h-10 w-10 flex justify-center items-center hover:bg-green-500 transition duration-200'
                        onClick={() => addToWatchlist(movieObj)}
                        aria-label="Add to Watchlist"
                    >
                        {/* Add to Watchlist Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M12 3v18" />
                        </svg>
                    </button>
                )}
                <div className='absolute bottom-0 w-full text-center p-2 
                bg-gray-900/70 text-white rounded-b-xl shadow-md'>
                    <h3 className='font-semibold text-lg'>{movieObj.title}</h3>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
