import React from 'react'
import { RiHeartLine } from '@remixicon/react';

const Movie = ({movie}) => {
    //Truncate string based on num
    const truncateString = (str, num) => {
        if (str?.length > num) {
          return str.slice(0, num) + '...';
        } else {
          return str;
        }
    };
    //Truncate date based on num
    const truncateDate = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num);
        }
    };
    
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block item cursor-pointer p-1'> 
        <div className="movie relative w-full h-auto" key={movie?.id}>
            {movie?.backdrop_path ? 
                <div>
                    <img 
                        className='w-full h-auto block opacity-100 hover:bg-black/80 hover:opacity-80 transition-all duration-200 select-none' 
                        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
                        alt={movie?.title} 
                    />
                    <RiHeartLine 
                        size={24}
                        className='favourite absolute top-1 left-1 text-white bg-gray-900/30 p-1 rounded'
                    />
                </div>
            : 
                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white p-16">
                    <p>No image available</p>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className='favourite absolute top-1 left-1 text-white bg-gray-900/30 p-1 rounded w-6'><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                </div>                              
            }
        </div>
        <div className='flex flex-col pt-1'>
            <p className='text-slate-200 text-sm font-semibold truncate'>{movie?.title}</p>
            <div className='flex items-center gap-5'>
                <p className='text-slate-400 text-sm text-wrap pt-2'>{truncateDate(movie?.release_date, 4)}</p>
                <div className='select-none'>
                    <span className='bg-red-700 text-white text-xs font-bold px-1 rounded mr-1'>HD</span>
                    <span className='bg-gray-400 text-xs font-bold px-1 rounded'>{movie?.vote_average?.toFixed(1)}</span>
                </div>
            </div>
        </div>
        <p className='text-slate-500 text-sm text-wrap pt-2'>{truncateString(movie?.overview, 100)}</p>
    </div>
  )
}

export default Movie
