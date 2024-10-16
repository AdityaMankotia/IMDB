import { createContext,useState,useEffect } from "react";

const WatchListContext = createContext()

export default function WatchListContextWrapper(props) {
    const [watchlist,setWatchlist] = useState([])

    useEffect( ()=> {
        let moviesFromLS=localStorage.getItem('movies')
        if(moviesFromLS){
          setWatchlist(JSON.parse(moviesFromLS))
        }
      },[])

      useEffect(() => {
        if (watchlist.length > 0) {
          localStorage.setItem('movies', JSON.stringify(watchlist));
        }
      }, [watchlist]);

      const addToWatchlist = (movieObj) => {
        const isAlreadyInWatchlist = watchlist.some(movie => movie.id === movieObj.id);
        if (!isAlreadyInWatchlist) {
          const updatedMovies = [...watchlist, movieObj];
          setWatchlist(updatedMovies);
          localStorage.setItem('movies', JSON.stringify(updatedMovies));
        }
      };      
      
      const removeFromWatchlist= movieObj => {
        const filteredMovies=watchlist.filter((watchlistMovie)=> {
          return movieObj.id !== watchlistMovie.id
        })
        setWatchlist(filteredMovies)
        localStorage.setItem('movies',JSON.stringify(filteredMovies))
      }

    return <WatchListContext.Provider
    value={{addToWatchlist,removeFromWatchlist,watchlist,setWatchlist}}
    >
        {props.children}
    </WatchListContext.Provider>
}

export { WatchListContext }