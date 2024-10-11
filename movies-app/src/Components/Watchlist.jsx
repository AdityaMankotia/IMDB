import React, { useEffect, useState } from 'react'

const Watchlist = () => {
  const [watchlist,setWatchlist] =useState([])
  useEffect( ()=> {
    let moviesFromLs=localStorage.getItem('movies')
    if(moviesFromLs){
      setWatchlist(JSON.parse(moviesFromLs))
    }
  },[])
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm
        text-gray-500">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th>
                <div className="flex">
                  <div>Ratings</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Popularity</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Genre</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {watchlist.map((movie)=> {
              return(<tr className="hover:bg-gray-50">
              <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                <img className="h-[6rem] w-[10rem] object-fit" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
                <div className="font-medium text-gray-700 text-sm">{movie.title}s</div>
              </td>
              <td className="pl-6 py-4">{movie.vote_average}</td>
              <td className="pl-6 py-4">{movie.popularity}</td>
              <td className="pl-2 py-4">Action</td>
            </tr>)
            })}
                
          </tbody>
        </table>
      </div>
  )
}

export default Watchlist
