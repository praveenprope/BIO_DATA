import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const user = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate()

    const logout = () =>{
        localStorage.clear('user')
        navigate('/login')
    }
    return (
        <div className='main lg:flex md:flex flex-wrap justify-between items-center 
     px-4 bg-blue-700 py-4 w-3/4     mx-auto z-10 p-4 sticky top-0  bg-opacity-5 shadow-lg backdrop-blur-xl rounded-2xl border border-white border-opacity-20"'>
            <div className="left">
                <div className="logo font-bold text-2xl text-blue-500 text-center">E- <span className='text-pink-700'>BIODATA</span> </div>
            </div>
            <div className="right">
                <ul className='flex space-x-4 text-white justify-center items-center'>
                    {/* <Link to={'/'}>
                        <li className='cursor-pointer'>Home</li>
                    </Link> */}
                    {user && <li onClick={logout} className='cursor-pointer text-blue-500 font-bold'>Logout</li>}
                </ul>
            </div>
        </div>
    )
}

export default Navbar