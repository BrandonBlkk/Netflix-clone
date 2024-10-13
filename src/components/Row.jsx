import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import { RiArrowLeftSLine , RiArrowRightSLine } from '@remixicon/react';

const Row = ({ rowID, title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  //Slide left button
  const slideLeft = () => {
    let slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 1000;
  };
  //Slide right button
  const slideRight = () => {
    let slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 1000;
  };

  return (
    <div className='px-8 py-5'>
        <h2 className='text-white font-bold md:text-xl px-3 py-2'>{title}</h2>
        <div className='relative flex items-center group'>
            <RiArrowLeftSLine 
              onClick={slideLeft}
              size={30}
              className='hidden absolute left-0 top-[30%] z-20 w-8 text-white bg-gray-900/50 rounded-full p-1 opacity-0 transition-all duration-300 hover:bg-gray-900/70 group-hover:opacity-100 cursor-pointer md:block'
            />
            <div id={'slider' + rowID} className='w-full h-full whitespace-nowrap scroll-smooth overflow-x-scroll scrollbar-hide relative'>
                {movies.map((movie, id) => (
                    <Movie key={id} movie={movie} />
                ))}
            </div>
            <RiArrowRightSLine 
              onClick={slideRight}
              size={30}
              className='hidden absolute right-0 top-[30%] z-20 w-8 text-white bg-gray-900/50 rounded-full p-1 opacity-0 transition-all duration-300 hover:bg-gray-900/70 group-hover:opacity-100 cursor-pointer md:block'
            />
        </div>
    </div>
  );
};

export default Row;