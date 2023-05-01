import React from 'react'
import Logo from '../../Assets/logo'
import Login from '../Login'
import { Register } from '../Register'

const Navbar = () => {
    return (
        <>
            <div className='bg-[#0d5b46] h-20 section flex justify-between   items-center' >
                <Logo className="w-44 h-auto" />
                <div className='flex text-white gap-4  '>
                    Home
                    About
                    Services
                    Contact
                    <Login />
                    <Register />
                </div>
            </div>
        </>

    )
}

export default Navbar