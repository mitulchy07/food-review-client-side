import React from 'react';
import image from '../../images/Hi.jpg';

const ReviewWritting = () => {
  return (
    <div className='flex flex-col w-full lg:flex-row my-5 container'>
      <div className='grid flex-grow  card  rounded-box place-items-center'>
        <img src={image} alt='' className='h-56 w-auto' />
      </div>
      <div className='divider lg:divider-horizontal'>Here:</div>
      <div className='grid flex-grow  card bg-base-300 rounded-box p-3'>
        <div>
          <input
            type='text'
            placeholder='Name'
            className='input input-bordered input-primary w-full my-1'
          />
          <input
            type='text'
            placeholder='Email'
            className='input input-bordered input-primary w-full my-1'
          />
          <input
            type='text'
            placeholder='Titele'
            className='input input-bordered input-primary w-full my-1'
          />
          <input
            type='number'
            placeholder='Give ratings (range: 1-5)'
            className='input input-bordered input-primary w-full my-1'
          />
          <textarea
            className='textarea textarea-primary w-full my-1'
            placeholder='Write your reviews here'
          ></textarea>
          <button className='btn btn-primary'>Submit Review</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewWritting;
