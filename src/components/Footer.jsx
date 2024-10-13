import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className='text-white px-5 pt-44 pb-24 md:px-44'>
            <h1 className='text-zinc-400 mb-5'>Questions? Contact us.</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10'>
                <div>
                    <ul className='space-y-3'>
                        <li className='text-zinc-400 text-sm underline cursor-pointer'><Link to={'/faq'}><p>FAQ</p></Link></li>
                        <li className='text-zinc-400 text-sm underline cursor-pointer'><Link to={'/'}>Cookie Preferences</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-3'>
                        <li className='text-zinc-400 text-sm underline cursor-pointer'><Link to={'/'}>Help Center</Link></li>
                        <li className='text-zinc-400 text-sm underline cursor-pointer'><Link to={'/'}></Link></li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-3'>
                        <li className='text-zinc-400 text-sm underline cursor-pointer'><Link to={'/'}>Terms of Use</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-3'>
                        <li className='text-zinc-400 text-sm underline cursor-pointer'><Link to={'/'}>Privacy</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
