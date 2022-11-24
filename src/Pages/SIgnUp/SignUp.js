import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const userType = form.userType.value;

        console.log(name, email, password, userType)

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">sign up !!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" />
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
                        <div>
                            <label className="label">
                                <span className="label-text">User Type</span>
                            </label>

                            <select name='userType' className=" input input-bordered required:  select w-full max-w-xs">
                                <option selected>user</option>
                                <option>seller</option>
                            </select>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='mx-auto my-3'>Already have an account<Link to='/login'><span className=' mx-2 text-orange-600'>Login</span></Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;