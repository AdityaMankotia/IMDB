import React, { useState } from 'react'

function Banner(){
  return (
    <>
    <div className='h-[20vh] md:h-[75vh] bg-center flex items-end'
    style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpZ30UEV071asUQIUF2NKoCRQt9soNapO4g&s)`}}
    >
      <div className='text-white w-full text-center text-2xl'>  Iron Man</div>
    </div>
    </>
  )
}

function Movies(){
  const [movies,setMovies]=useState([
    { title: 'Movie1' , url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTofVOKT0DO4X-O3TZkCzhps6-YxOg06jiYaw&s', },
    { title: 'Movie2' , url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5p6xtfkBNNe4y9k46bGgpT7_xxK7oUi5K-Q&s', },
    { title: 'Movie3' , url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_G3n5hrIUB6z6Abw2Z4s-3_EZ1cHoKPfnw&s', },
    { title: 'Movie4' , url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_pXvunm83Tz2UdRDYGv1TGaX8-AYqMPQ3w&s', },
    { title: 'Movie5' , url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpZ30UEV071asUQIUF2NKoCRQt9soNapO4g&s', },
  ])
  return <>
  <h2>Trending Movies:</h2>
  <div>
    {movies.map((movie,key)=> {
      return (
        <div style={{backgroundImage: `url(${movie.url})`}}>
          <div>
            {movie.title}
          </div>
        </div>
      )
    })}
  </div>
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
