import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Signin = () => {

  return (
    <>
        <div className='w-full'>
            <img
                className='hidden sm:block absolute w-full h-[730px] object-cover -z-10'
                src='../images/Netflix.webp'
                alt='Background'
            />
            <div className='bg-black/60 absolute top-0 left-0 w-full h-[730px] -z-10'></div>
            <div className='w-full px-4 pt-[105px] z-50'>
                <div className='max-w-[450px] h-full mx-auto bg-black/55 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign In</h1>
                        <form className='w-full flex flex-col py-4'>
                            <input
                                className='p-4 my-3 bg-slate-700/60 rounded border border-slate-400'
                                type='email'
                                placeholder='Email'
                                autoComplete='email'
                            />
                            <input
                                className='p-4 my-1 bg-slate-700/60 rounded border border-slate-400'
                                type='password'
                                placeholder='Password'
                                autoComplete='current-password'
                            />
                            <button className='bg-red-600 py-2 mt-3 rounded font-semibold select-none hover:bg-red-700 transition-colors duration-300'>
                            Sign In
                            </button>
                            <p className='text-center my-4'>OR</p>
                                <button className='bg-gray-400/30 py-2 rounded font-semibold select-none hover:bg-gray-400/20 transition-colors duration-300'>
                                Use a Sign-in Code
                                </button>
                            <p className='text-center my-4 cursor-pointer hover:underline hover:text-gray-300'>Forget Password?</p>
                            <p className='select-none'>
                                <input className='mr-2 cursor-pointer' type='checkbox' />
                                Remember me
                            </p>
                            <p className='py-4'>
                                <span className='text-gray-300'>
                                    New to Netflix?
                                </span>{' '}
                                <Link to='/signup' className='font-bold hover:underline'>Sign up now</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  );
};

export default Signin;