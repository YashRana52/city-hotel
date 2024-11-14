import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice'

function Signin() {
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true) 
        dispatch(signInStart())
        try {
            const res = await axios.post('/api/auth/signin', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            // Dispatch success if sign-in is successful
            dispatch(signInSuccess(res.data)) // Assuming you want to store the user data in Redux
            console.log('Response:', res.data)
            navigate('/') // Redirect to homepage or dashboard after successful sign-in
        } catch (error) {
            console.error('Error signing in:', error)
            dispatch(signInFailure(error.response ? error.response.data : error.message)) // Dispatch failure with error
        } finally {
            setLoading(false) // Stop loading state
        }
    }

    return (
        <div className='p-4 max-w-md mx-auto bg-white shadow-md rounded-lg border mt-8 sm:mt-12'>
            <h1 className='text-2xl sm:text-3xl text-center font-semibold text-gray-800 mb-4'>Sign In</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 sm:gap-4'>
                <input 
                    type="email" 
                    placeholder='Email' 
                    className='border p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' 
                    id='email'
                    onChange={handleChange} 
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder='Password' 
                    className='border p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' 
                    id='password'
                    onChange={handleChange} 
                    value={formData.password}
                />
                <button 
                    disabled={loading} 
                    className='bg-blue-600 text-white p-2 sm:p-3 rounded-lg font-medium uppercase hover:bg-blue-700 disabled:opacity-80 transition'>
                   {loading ? 'Loading...' : 'Sign In'}
                </button>
            </form>
            <div className='flex justify-center gap-1 mt-4 text-gray-700'>
                <p>Don't have an account?</p>
                <Link to='/sign-up'>
                    <span className='text-blue-600 font-medium hover:underline'>Sign Up</span>
                </Link>
            </div>
        </div>
    )
}

export default Signin
