import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='bg-white shadow-md py-4'>
            <div className='flex justify-between items-center max-w-7xl mx-auto px-6'>
                
                {/* Logo Section */}
                <Link to='/' className='flex items-center space-x-2'>
                    <h1 className='text-2xl font-bold text-slate-700'>
                        <span className='text-blue-600'>Hotel</span>Booking
                    </h1>
                </Link>
                
                {/* Search Bar */}
                <form className='flex-1 mx-4 sm:mx-6'>
                    <div className='relative'>
                        <input 
                            type="text" 
                            placeholder='Search for hotels, locations...' 
                            className='w-full bg-slate-100 text-slate-600 py-2 pl-4 pr-10 rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent sm:placeholder-slate-400'
                        />
                        <button type="submit" className='absolute top-1/2 right-3 transform -translate-y-1/2 text-blue-500'>
                            <FaSearch />
                        </button>
                    </div>
                </form>
                
                {/* Navigation Links and Account Icon */}
                <ul className='flex items-center space-x-6 text-slate-700 font-medium'>
                    <Link to='/sign-in' className='flex items-center space-x-1'>
                        <FaUserCircle className='text-2xl text-slate-600' />
                        <span className='hidden sm:inline'>Sign In</span>
                    </Link>
                    
                    {/* Links hidden on mobile screens */}
                    <div className='hidden md:flex items-center space-x-6'>
                        <Link to='/home'>
                            <li className='hover:text-blue-600 transition'>Home</li>
                        </Link>
                        <Link to='/about'>
                            <li className='hover:text-blue-600 transition'>About</li>
                        </Link>
                    </div>
                </ul>
            </div>
        </header>
    )
}

export default Header;
