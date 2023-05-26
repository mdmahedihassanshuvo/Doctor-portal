import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(name, photo, email, password, confirm)
        if (password !== confirm) {
            return Swal.fire({
                icon: 'error',
                title: "Password isn't match",
            })
        }
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'user sign up successfully',
                showConfirmButton: false,
                timer: 1500
              })
              form.reset()
        })
        .catch(error => console.log(error));
    }

    return (
        <div className="hero min-h-screen lg:mb-5">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo" className="input input-bordered" />
                        </div>
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
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirm' placeholder="Confirm password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Already have an account please, <Link to='/login' className='text-blue-600 underline'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;