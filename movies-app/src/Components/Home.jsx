import React, { useState } from 'react'
import Pagination from './Pagination';
import MovieCard from './MovieCard';
import Banner from './Banner';

function Movies(){
  const [movies,setMovies]=useState([
    { title: 'Movie1' , url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTofVOKT0DO4X-O3TZkCzhps6-YxOg06jiYaw&s', },
    { title: 'Movie2' , url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5p6xtfkBNNe4y9k46bGgpT7_xxK7oUi5K-Q&s', },
    { title: 'Movie3' , url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_G3n5hrIUB6z6Abw2Z4s-3_EZ1cHoKPfnw&s', },
    { title: 'Movie4' , url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_pXvunm83Tz2UdRDYGv1TGaX8-AYqMPQ3w&s', },
    { title: 'Movie5' , url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpZ30UEV071asUQIUF2NKoCRQt9soNapO4g&s', },
  ])

  const [pageNo, setPageNo]=useState(1);
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

  return <>
  <div className='text-2xl font-bold text-center m-4'>
  <h2>Trending Movies:</h2>
  </div>
  
  <div className='flex justify-evenly flex-wrap gap-6'>
    {movies.map((movieObj,index)=>  <MovieCard {...movieObj} index={index} />)}
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
