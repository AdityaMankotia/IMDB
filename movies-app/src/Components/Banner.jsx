import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Banner = () => {
    const [bannerImg, setBannerImg] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=531303e97c2f034ac21838d9c185c8c3&language=en-US')
            .then(function (response) {
                const firstMovie = response.data.results[0];
                const firstMovieTitle = firstMovie.title;
                const firstMovieImg = firstMovie.backdrop_path;

                if (firstMovieTitle && firstMovieImg) {
                    setTitle(firstMovieTitle);
                    setBannerImg(`https://image.tmdb.org/t/p/original${firstMovieImg}`);
                }
            })
            .catch(function (error) {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className='relative h-[20vh] md:h-[75vh] bg-center flex items-end'
            style={{
                backgroundImage: bannerImg ? `url(${bannerImg})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#333',
            }}
        >
            <div className='absolute inset-0 bg-black opacity-50'></div> {/* Overlay */}
            <div className='relative z-10 text-white w-full text-center p-4 md:p-6'>
                <h1 className='text-2xl md:text-4xl font-bold shadow-md'>{title}</h1> {/* Title Styling */}
            </div>
        </div>
    );
};

export default Banner;
