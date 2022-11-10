import emailjs from '@emailjs/browser';
import React, { useContext, useRef } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import img from '../../../images/cat.jpg';

export const ContactForm = () => {
  const { user } = useContext(AuthContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hu9we12',
        'template_hidbk6w',
        form.current,
        'bnq5kMoL3oqS7myN1'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 container text-white'>
      <div className='py-4'>
        <h1 className='text-xl '>Contact Me:</h1>
        <img src={img} alt='' className='rounded md:w-96' />
      </div>
      <div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='grid grid-cols-1 gap-2'
        >
          <label>Name</label>
          <input
            className='input'
            type='text'
            name='user_name'
            defaultValue={user?.displayName ? user.displayName : ' '}
          />
          <label>Email</label>
          <input
            className='input'
            type='email'
            name='user_email'
            defaultValue={user?.email ? user.email : ' '}
          />
          <label>Message</label>
          <textarea className='textarea' name='message' />
          <input className='btn' type='submit' value='Send' />
        </form>
      </div>
    </div>
  );
};
