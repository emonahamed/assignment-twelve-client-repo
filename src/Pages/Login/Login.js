import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;

        const password = form.password.value;

        console.log(email, password)
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='mx-auto my-3'>New to this website<Link to='/signup'><span className=' mx-2 text-orange-600'>SignUp</span></Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;