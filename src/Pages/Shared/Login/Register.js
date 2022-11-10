import React, { useContext, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitel from '../../../hooks/useTitle';
import image from '../../../images/register.jpg';

const Register = () => {
  const { createUser, loading, updateUserName } = useContext(AuthContext);
  useTitel('REGISTER');
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const img = form.img.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserName(name, img);
        form.reset();
        console.log(user);
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

  return (
    <div>
      {loading ? <Spinner animation='border' /> : <></>}
      <div className='hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row'>
        <div className='text-center lg:text-left'>
          <img src={image} alt='' />
        </div>
        <div className='card  w-full shadow-2xl '>
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
                className='input bg-transparent input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>PhotoURL</span>
              </label>
              <input
                type='text'
                name='img'
                placeholder='PhotoURL'
                className='input bg-transparent input-bordered'
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
                className='input bg-transparent input-bordered'
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
                className='input bg-transparent input-bordered'
                required
              />
              <label className='label'>
                <Link to='/login' className='label-text-alt link link-hover'>
                  Already have an account?
                </Link>
              </label>
              {success ? (
                <p className='text-success'>Registration Successfull</p>
              ) : (
                ' '
              )}
              <p className='text-danger'>{errorMsg} </p>
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
