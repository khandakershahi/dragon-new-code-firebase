import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const { createUser, setUser } = use(AuthContext);


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setUser(user)

            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)

            })

    }

    return (
        <div className='flex justify-center  items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-bold text-2xl text-center'>Register your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* name field  */}
                        <label className="label">Your Name</label>
                        <input
                            type="text"
                            name='name'
                            className="input"
                            placeholder="Name"
                            required />
                        {/* photo field  */}
                        <label className="label">Photo URL</label>
                        <input
                            type="text"
                            name='photo'
                            className="input"
                            placeholder="Photo url"
                            required />
                        {/* email field  */}
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name='email'
                            className="input"
                            placeholder="Email"
                            required />
                        {/* password field  */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name='password'
                            className="input"
                            placeholder="Password"
                            required />


                        <button type='submit' className="btn btn-neutral mt-4">Register</button>

                        <p className='text-center py-2 font-semibold'>Already Have An Account ?<Link className='text-secondary' to='/auth/login'> Login</Link></p>

                    </fieldset>

                </form>
            </div>
        </div>
    );
};

export default Register;