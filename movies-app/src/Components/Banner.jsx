import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Banner = () => {

    const [bannerImg, setBannerImg] =useState('')
    const [title,setTitle] =useState('')
    useEffect( ()=> {
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=531303e97c2f034ac21838d9c185c8c3&language=en-US')
        .then(function (response){
            //handle success
            const firstMovie =response.data.results[0]
            const firstMovieTitle =firstMovie.title
            const firstMovieImg =firstMovie.backdrop_path 
            setTitle(firstMovieTitle)
            setBannerImg(`https://image.tmdb.org/t/p/original${firstMovieImg}`)


        })
        .catch( function (error){
            //handle error
        })
        .finally( function(){
            //always executed
        })
    },[] )
  return (
    <div className='h-[20vh] md:h-[75vh] bg-center flex items-end'
    style={{
      backgroundImage: bannerImg ? `url(${bannerImg})` : 'none',
      backgroundSize: 'cover', // Ensures the image covers the div without stretching
      backgroundPosition: 'center', // Center the image
      backgroundRepeat: 'no-repeat', // Prevents repeating of image
      backgroundColor: '#333', // Fallback color if no image
    }}
    >
      <div className='text-white w-full text-center text-2xl'>{title}</div>
    </div>
  )
}

export default Banner
