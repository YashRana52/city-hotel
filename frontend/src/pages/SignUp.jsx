import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <div className='p-5 max-w-lg mx-auto bg-white shadow-lg rounded-lg border mt-20'>
            <h1 className='text-4xl text-center font-bold text-gray-800 mb-8'>Sign Up</h1>
            <form className='flex flex-col gap-5'>
                <input 
                    type="text" 
                    placeholder='Username' 
                    className='border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' 
                    id='username' 
                />
                <input 
                    type="email" 
                    placeholder='Email' 
                    className='border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' 
                    id='email' 
                />
                <input 
                    type="password" 
                    placeholder='Password' 
                    className='border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' 
                    id='password' 
                />
                <button className='bg-blue-600 text-white p-4 rounded-lg font-semibold uppercase hover:bg-blue-700 disabled:opacity-80 transition'>
                    Sign Up
                </button>
            </form>
            <div className='flex justify-center gap-2 mt-6 text-gray-700'>
                <p>Already have an account?</p>
                <Link to='/sign-in'>
                    <span className='text-blue-600 font-semibold hover:underline'>Sign In</span>
                </Link>
            </div>
        </div>
    )
}

export default SignUp
