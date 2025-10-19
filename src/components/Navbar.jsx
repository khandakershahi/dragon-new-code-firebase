import React from 'react';
import { Link, Links, NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex flex-row justify-between items-center mt-10 mb-17'>
            <div className=''></div>
            <div className='nav flex gap-3 text-accent'>
                <NavLink to="./">Home</NavLink>
                <NavLink to="./about">About</NavLink>
                <NavLink to="./career">Career</NavLink>
            </div>
            <div className='login-btn flex gap-3'>
                <img src={user} alt="" />
                <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;