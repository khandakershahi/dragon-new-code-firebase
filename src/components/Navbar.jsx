import React, { use } from 'react';
import { Link, Links, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';


const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogout = () => {
        console.log('user logout');
        logOut()
            .then(() => {
                alert('You logged out successfully')
            }).catch((error) => {
                console.log(error);

            });
    }
    return (
        <div className='flex flex-row justify-between items-center mt-10 mb-17'>
            <div className=''>{user && user.email}</div>
            <div className='nav flex gap-3 text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='login-btn flex gap-3 items-center'>
                <img className='w-12 h-12 rounded-full object-cover' src={`${user ? user.photoURL : userIcon}`} alt="" />
                {
                    user ?
                        <button onClick={handleLogout} className='btn btn-primary px-10'>Logout</button> : <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;