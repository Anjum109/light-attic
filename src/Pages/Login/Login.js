import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle/useTile';
import Navbar from '../../Shared/Navbar/Navbar';
import './login.css'

const Login = () => {

    const [error, setError] = useState('');
    const { providerLogin, google, signIn, loading } = useContext(AuthContext);
    const [loginUserEmail, setLoginUserEmail] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login');


    const from = location.state?.from?.pathname || '/';

    if (loading) {
        return <button className="btn btn-square loading" animation='border' variant='primary' />
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        signIn(email, password, name)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(email)
                form.reset();
                setError('');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })

    }



    const handleGoogle = () => {
        google()
            .then(result => {
                const user = result.user
                if (user) {
                    // toast.success('Login Successfully')
                    navigate(from, { replace: true })

                }

            })
            .catch(error => console.error(error))
    }



    return (
        <div>

            <div className='login-body login-background'>
                <Navbar></Navbar>
                <div className="hero">

                    <div className="hero-content my-5">

                        <div className="flex-shrink-0 w-full pb-12 login-bg my-5 px-5">
                            <h2 className='font-bold text-white text-center mt-5 text-5xl login-name'>Log In</h2>
                            <form onSubmit={handleSubmit} className="card-body pt-12">
                                <div className="form-control">
                                    <input type="email" name='email' placeholder="email" className="input input-bg" required />
                                </div>
                                <div className="form-control">
                                    <input type="text" name='password' placeholder="password" className="input input-bg" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-blue-900 hover:bg-blue-700" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className='text-center'>Have an new account <Link className=' font-bold text-orange-500' to={'/signup'}>Registration</Link></p>
                            <div className="">
                                <button onClick={handleGoogle} className='btn w-full bg-blue-900 hover:bg-blue-700 font-bold'> Google Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;