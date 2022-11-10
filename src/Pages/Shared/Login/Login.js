import React, { useContext, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitel from '../../../hooks/useTitle';
import img from '../../../images/login.jpg';

const Login = () => {
  const { login, handleGoogleSignIn, loading } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useTitel('LOGIN');
  const from = location.state?.from?.pathname || '/';
  const handleLogin = (event) => {
    setSuccess(false);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        console.log(user);
        const currentUser = {
          email: user.emeil,
        };
        fetch('https://server-side-opal-nu.vercel.app/jwt', {
          method: 'post',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem('token-for-review-site', data.token);
            navigate(from, { replace: true });
          });
        setSuccess(true);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 container items-center'>
      <div className='md:w-96 px-8'>
        {loading ? <Spinner animation='border' /> : <></>}
        <img src={img} alt='' className='rounded-lg' />
      </div>
      <div className=' py-8'>
        <Form onSubmit={handleLogin} className='grid justify-center'>
          <h1 className='text-xl text-center'>Login here:</h1>
          <div className='grid gap-y-3 my-2 p-3 text-black card md:w-96'>
            <input
              type='text'
              name='email'
              placeholder='email'
              className='input input-bordered bg-transparent '
            />

            <input
              type='password'
              name='password'
              placeholder='password'
              className='input input-bordered bg-transparent'
            />
            <Link to='/register' className='label-text-alt link link-hover'>
              Need an account?
            </Link>
            <input className='btn btn-primary' type='submit' value='Login' />
            {success && <p className='text-success my-2'>Login Successfull!</p>}
            <button className='btn' onClick={handleGoogleSignIn}>
              Login with google
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
