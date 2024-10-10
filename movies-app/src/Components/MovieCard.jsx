import React from 'react'

const MovieCard = (props) => {

    const {addToWatchlist,removeFromWatchlist,index,movieObj, watchlist} =props

    const isMoviePresentInWatchlist =() => {
        //if id is present in movies present in watchlistArr 
        //return true : else false
        for(let i=0;i<watchlist.length;i++){
            if(watchlist[i].id===movieObj.id){
                return true;
            }
        }
        return false;
    }

  return (
    <>
  <div className='flex justify-evenly flex-wrap gap-6'>
        <div 
        className='h-[40vh] w-[200px] 
        bg-center bg-cover 
        rounded-xl flex flex-col 
        justify-between items-end
        hover:scale-110 duration-200
        hover:cursor-pointer' 
        style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movieObj.backdrop_path})`}}
        key={index}
        >
            {isMoviePresentInWatchlist() ?
                    <div 
             className='m-4 bg-gray-700/60 justify-center items-center rounded-md flex h-8 w-8'
             onClick={()=> removeFromWatchlist(movieObj)}
             >
               ❌
            </div>
            : <div 
            className='m-4 bg-gray-700/60 justify-center items-center rounded-md flex h-8 w-8'
            onClick={()=>addToWatchlist(movieObj)}
            >
              😍
           </div>
            }
             
            

          <div className='text-white w-full text-center p-2
          rounded-lg bg-gray-900/50'>
            {movieObj.title}
          </div>
        </div>
  </div>

  </>
  )
}

export default MovieCard
