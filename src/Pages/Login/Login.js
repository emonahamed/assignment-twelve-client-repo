import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {


    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        setLoginError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            })





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
                        <div>
                            {loginError && <p className='text-red-600'>{loginError}</p>}
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='mx-auto my-3'>New to this website<Link to='/signup'><span className=' mx-2 text-orange-600'>SignUp</span></Link> </p>
                    <p className='p-3'>Go to<Link to='/signup'><span className=' mx-2 text-orange-600'>SignUp</span></Link> page for sign in with Google</p>
                </div>

            </div>
        </div>
    );
};

export default Login;