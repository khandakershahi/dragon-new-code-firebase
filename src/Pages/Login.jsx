import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')

    const { logIn } = use(AuthContext);

    const locaiton = useLocation();

    const navigate = useNavigate();

    console.log(locaiton);


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log({ email, password });
        logIn(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                navigate(`${locaiton.state ? locaiton.state : '/'}`)

            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                // alert(errorCode, errorMessage)
                setError(errorCode);
            });

    }
    return (
        <div className='flex justify-center  items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-bold text-2xl text-center'>Login your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* email field */}
                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input"
                            name="email"
                            placeholder="Email"
                            required />
                        {/* password field  */}
                        <label className="label">Password</label>
                        <input
                            type="password" className="input"
                            name="password"
                            placeholder="Password"
                            required />
                        <div><a className="link link-hover">Forgot password?</a></div>

                        {error && <p className='text-error text-xs'>{error}</p>}

                        <button type='submit' className="btn btn-neutral mt-4">Login</button>

                        <p className='text-center py-2 font-semibold'>Dont’t Have An Account ?<Link className='text-secondary' to='/auth/register'> Register</Link></p>
                    </fieldset>

                </form>
            </div>
        </div>
    );
};

export default Login;