import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    const { loginUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from.pathname || '/'
    console.log(location)

    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        loginUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'user Login successfully',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from, {replace: true})
              form.reset()
        })
        .catch(error => console.log(error));
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Don't have any account please, <Link to='/register' className='text-blue-600 underline'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;