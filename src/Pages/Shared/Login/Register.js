import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import image from '../../../images/register.jpg';

const Register = () => {
  const { createUser, loading } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className='hero w-full my-20'>
      {loading ? <Spinner animation='border' /> : <></>}
      <div className='hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row'>
        <div className='text-center lg:text-left'>
          <img className='w-3/4' src={image} alt='' />
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <h1 className='text-5xl font-bold text-center my-2'>Register now!</h1>
          <Form onSubmit={handleRegister} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                name='name'
                placeholder='name'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='email'
                className='input input-bordered'
                required
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
                required
              />
              <label className='label'>
                <Link to='/login' className='label-text-alt link link-hover'>
                  Already have an account?
                </Link>
              </label>
            </div>
            <div className='form-control mt-6'>
              <input
                className='btn btn-primary'
                type='submit'
                value='Register'
              />
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
