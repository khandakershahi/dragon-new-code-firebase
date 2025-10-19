import React, { use } from 'react';
import { Link, Links, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user } = use(AuthContext);
    return (
        <div className='flex flex-row justify-between items-center mt-10 mb-17'>
            <div className=''>{user && user.email}</div>
            <div className='nav flex gap-3 text-accent'>
                <NavLink to="./">Home</NavLink>
                <NavLink to="./about">About</NavLink>
                <NavLink to="./career">Career</NavLink>
            </div>
            <div className='login-btn flex gap-3'>
                <img src={userIcon} alt="" />
                <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;