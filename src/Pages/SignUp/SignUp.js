import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

import useTitle from '../../hooks/useTitle/useTile';
import useToken from '../../hooks/useToken/useToken';
import Navbar from '../../Shared/Navbar/Navbar';
import './SignUp.css'


const SignUp = () => {

    const { createUser, google, updateUser, loading } = useContext(AuthContext)
    const [createUserEmail, setCreateUserEmail] = useState('');
    const [passwordError, setPasswordError] = useState("");
    const [success, setSuccess] = useState(false);
    const [token] = useToken(createUserEmail);
    useTitle('Sign Up');
    const navigate = useNavigate();



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const role = form.option.value;
        console.log(name, email, password);



        if (password.length < 6) {
            setPasswordError("Please should be at least 6 characters");
            return;
        }
        if (!/(?=.[!@#$%&^])/.test(password)) {
            setPasswordError("Please add at least one special character");
            return;
        }
        if (password !== confirm) {
            setPasswordError("password and confirm password did not match");
            return;
        }
        setPasswordError("");

        createUser(email, password, name, role)
            .then(result => {
                const user = result.user
                setSuccess(true);
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => {

                        saveUser(name, email, role)

                    })

            })
            .catch(error => console.error(error))
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role }
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreateUserEmail(email);
                // setUserEmail(email)
                // getToken(email)
            })
    }

    const handleGoogle = () => {
        google()
            .then(result => {
                const user = result.user
                if (user) {
                    navigate('/')

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
                            <h2 className='font-bold text-white text-center mt-5 text-5xl login-name'>Sign Up</h2>
                            <form onSubmit={handleSubmit} className="card-body pt-12">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bg" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bg" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bg" required />

                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="FirstName"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Are you seller or buyer?
                                    </label>

                                    <select
                                        name="option"
                                        className="select select-bordered w-full max-w-xs input-bg"

                                    >
                                        {/* <option disabled selected>Who shot first?</option> */}
                                        <option selected value="Buyer">Buyer</option>
                                        <option value="Seller">Seller</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        name="confirm"
                                        className="input input-bordered input-bg"
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-blue-900 hover:bg-blue-700" type="submit" value="Signup" />
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

export default SignUp;