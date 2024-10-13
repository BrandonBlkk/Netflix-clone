import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Constants/Requests';

const Main = () => {
    
    const [movies, setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
        setMovies(response.data.results);
        });
    }, []);
    //Truncate string based on num
    const truncateString = (str, num) => {
        if (str?.length > num) {
        return str.slice(0, num) + '...';
        } else {
        return str;
        }
    };

    console.log(movies)
    
  return (
    <div className='w-full h-[620px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[620px] bg-gradient-to-tr from-black opacity-85'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className="absolute inset-0 h-[620px] bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className='absolute top-[15%] p-4 md:p-8 sm:top-[25%] md:top-[35%]'>
                <h1 className='text-4xl font-bold pb-3 md:text-5xl'>{movie?.title}</h1>
                <div className='flex gap-10'>
                    <p className='opacity-50 text-md pb-4 md:text-lg'>Released : {movie?.release_date}</p>
                    <div className='select-none'>
                        <span className='bg-gray-400 text-xs font-bold px-1 rounded mr-2 md:text-sm'>HD</span>
                        <span className='bg-gray-400 text-xs font-bold px-1 rounded md:text-sm'>{movie?.vote_average?.toFixed(1)}</span>
                    </div>
                </div>
                <p className='text-md pb-4 opacity-50 md:text-lg'>{truncateString(movie?.overview, 500)}</p>
                <div className='flex flex-col gap-4 select-none sm:flex-row'>
                    <button className='bg-gray-300 text-black font-semibold rounded py-2 px-8 hover:bg-gray-400 transition-colors duration-300'>
                        Play
                    </button>
                    <button className='border text-white font-semibold border-gray-300 rounded py-2 px-6 ml-0 hover:bg-gray-300 hover:text-black transition-colors duration-500 md:ml-4'>
                        Watch Later
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
