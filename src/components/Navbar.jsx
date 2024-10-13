import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  
  // Array of the hidden paths
  const hiddenPaths = ['/signin', '/signup'];
  const FaqPage = ['/faq'];

  // Check if the current path is one of the hidden paths
  const isHiddenPath = hiddenPaths.includes(location.pathname);
  const isFqaPage = FaqPage.includes(location.pathname);

  return (
    <div className={`flex justify-between py-4 px-2 z-[100] ${isFqaPage ? 'fixed bg-black' : 'absolute'} w-full px-5 md:px-24`}>
        {isFqaPage
        ?
        <div className='flex flex-col items-center gap-2 sm:flex-row'>
            <Link to={'/'}>
                <h1 className='text-red-600 text-2xl font-bold cursor-pointer select-none md:text-3xl'>NETFLIX</h1>
            </Link>
            <Link to={'/'}>
                <h1 className='text-white text-lg border-l-0 pl-2 cursor-pointer hover:underline sm:border-l-2'>Help Center</h1>
            </Link>
        </div>
        :
            <Link to={'/'}>
                <h1 className='text-red-600 text-2xl font-bold cursor-pointer select-none md:text-4xl'>NETFLIX</h1>
            </Link>
        }
        {isHiddenPath || isFqaPage
        ?
            null
        : 
        <div className='pl-3'>
            <Link to={'/signin'}>
                <button className='text-white text-sm pr-4 font-semibold select-none hover:text-red-500 transition-colors duration-300'>Sign In</button>
            </Link>
            <Link to={'/signup'}>
                <button className='bg-red-600 text-white text-sm font-semibold px-6 py-2 rounded cursor-pointer select-none hover:bg-red-700 transition-colors duration-300'>Sign Up</button>
            </Link>
        </div>
        }
        {isFqaPage &&
        <div className='pl-2'>
            <Link to={'/'}>
                <button className='text-white text-sm pr-4 font-semibold select-none border px-4 py-[6px] mr-3 rounded sm:px-4 sm:py-2 hover:text-red-500 transition-colors duration-300'>Join Netflix</button>
            </Link>
            <Link to={'/signin'}>
                <button className='bg-red-600 text-white text-sm font-semibold px-3 py-[6px] rounded cursor-pointer select-none sm:px-4 sm:py-2 hover:bg-red-700 transition-colors duration-300'>Sign In</button>
            </Link>
        </div>
        }
    </div>
  );
};

export default NavBar;
