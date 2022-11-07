import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import image from '../../../images/login.jpg';

const Login = () => {
  const { login } = useContext(AuthContext);
  const handleLogin = (event) => {
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
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='hero w-full my-20'>
      <div className='hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row'>
        <div className='text-center lg:text-left'>
          <img className='w-3/4' src={image} alt='' />
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <h1 className='text-5xl font-bold text-center my-2'>Login now!</h1>
          <Form onSubmit={handleLogin} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='text'
                name='email'
                placeholder='email'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                name='password'
                placeholder='password'
                className='input input-bordered'
              />
              <label className='label'>
                <Link to='/register' className='label-text-alt link link-hover'>
                  Need an account?
                </Link>
              </label>
            </div>
            <div className='form-control mt-6'>
              <input className='btn btn-primary' type='submit' value='Login' />
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
