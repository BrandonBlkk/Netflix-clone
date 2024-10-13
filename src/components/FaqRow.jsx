import React, { useEffect, useState } from 'react'
import { articles, FAQs } from '../Constants'
import { Link } from 'react-router-dom'
import { RiArticleLine, RiArrowUpDoubleLine } from "@remixicon/react";

const FaqRow = () => {
    //Function to scroll to the top
    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
    };
    //Button appears based on scroll position
    useEffect(() => {
        const scrollUpBtn = document.getElementById('scrollUpBtn');
        
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;   
            scrollPosition > 1000 ? scrollUpBtn.style.right = "0%" : scrollUpBtn.style.right = "-100%";
        })
    })
    //Show and hide feesback
    const [showFeedback, setShowFeedback] = useState(false);

    // Pop up feedback box
    const handleYesClick = () => {
        setShowFeedback(true);
    };

    const hideFeedback = () => {
        setShowFeedback(false);
    };

  return (
    <div className='pt-[75px] sm:pt-[45px]'>
        <div className='flex flex-col justify-center gap-20 py-14 px-4 bg-white lg:flex-row'>
            <div>
                <div className='flex items-center gap-2 mb-10'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        className='w-5'
                        ><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
                    </svg>
                    <Link to={'/'}>
                        <p className='text-sm hover:underline hover:text-gray-500'>Back to Help Home</p>
                    </Link>
                </div>
                <div className='max-w-[800px]'>
                    {FAQs.map((faq) => (
                        <div key={faq.id} className='space-y-5 pb-7'>
                            {faq.mainTitle &&
                                <h1 className='text-4xl font-bold'>{faq.mainTitle}</h1>
                            }
                            {faq.title &&
                                <h1 className='text-2xl font-semibold'>{faq.title}</h1>
                            }
                            {
                                faq.imageUrl &&
                                <div>
                                    <img
                                        className='w-full h-full object-cover pt-3'
                                        src={faq.imageUrl}
                                        alt='Image'
                                    />
                                </div>
                            }
                            <div className='space-y-4 pb-14 border-b-2'>
                                {faq.text1 && <p>{faq.text1}</p>}
                                {faq.text2 && <p>{faq.text2}</p>}
                                {faq.text3 && <p>{faq.text3}</p>}
                            </div>
                        </div>
                    ))}
                </div>
                {!showFeedback &&
                <div id='helpfulQuestion' className='flex items-center gap-3'>
                    <h1 className='text-lg font-semibold'>Was this article helpful?</h1>
                    <div>
                        <span 
                            id='yesBtn' 
                            className='text-md underline cursor-pointer pr-3 hover:text-slate-600 transition-colors duration-200'
                            onClick={handleYesClick}
                        >
                            Yes
                        </span>
                        <span 
                            id='noBtn'
                            className='text-md underline cursor-pointer hover:text-slate-600 transition-colors duration-200'
                            >No
                        </span>
                    </div>
                </div>
                }
                {showFeedback && (
                    <div className='items-center gap-3 relative'>
                        <svg
                            onClick={hideFeedback} 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                            className='w-6 absolute right-0 cursor-pointer hover:rotate-90 hover:text-red-600 transition-all duration-200'
                            ><path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
                        </svg>
                        <h1 className='text-lg font-semibold mb-4'>Thanks for your feedback! Any suggestions for further improvement?</h1>
                        <form action="">
                            <textarea 
                                type="text" 
                                className='w-full border border-black rounded p-4 outline-none resize-none' 
                                placeholder='(Optional) We do not respond to individual feedback. Please do not leave personal information.'
                                required
                            />
                            <button className='bg-black text-white font-semibold py-2 px-6 rounded mt-3 hover:bg-gray-700 transition-colors duration-200'>Submit</button>
                        </form>
                    </div>
                )}
            </div>
            <div>
                <div className='max-w-96 md:w-96 border sticky top-40 border-gray-300 p-5 rounded border-t-8 border-t-red-600'>
                    <h1 className='text-xl font-semibold'>Related Articles</h1>
                    <div>
                        <ul>
                            {articles.map((article) => (
                                <Link key={article.id} to={article.path} className='flex items-center gap-3 space-y-2'>
                                    <RiArticleLine 
                                        size={20}
                                    />
                                    <li className='underline text-lg hover:text-slate-500'>{article.title}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div onClick={scrollToTop} id='scrollUpBtn' className='hidden fixed top-40 -right-full bg-black p-3 w-14 rounded-l-md cursor-pointer hover:bg-red-600 transition-all duration-300 md:block'>
                <RiArrowUpDoubleLine 
                    size={30}
                    className='text-white'
                />
            </div>
        </div>  
    </div>
  )
}

export default FaqRow