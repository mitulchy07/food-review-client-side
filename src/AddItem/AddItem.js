import React from 'react';
import image from '../images/clock.jpg';

const AddItem = () => {
  return (
    <div>
      <div className='flex flex-col w-full lg:flex-row my-5 container'>
        <div className='grid flex-grow  card  rounded-box place-items-center'>
          <img src={image} alt='' className='h-56 w-auto' />
        </div>
        <div className='divider lg:divider-horizontal'>Here:</div>
        <div className='grid flex-grow  card bg-base-300 rounded-box p-3'>
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <input
                type='text'
                placeholder='Title: (Chicken Curry) '
                className='input input-bordered input-primary w-auto m-1'
              />
              <input
                type='text'
                placeholder='Email'
                className='input input-bordered input-primary w-auto m-1'
              />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <input
                type='url'
                placeholder='Photo URL'
                className='input input-bordered input-primary w-auto m-1'
              />
              <input
                type='number'
                placeholder='Give ratings (range: 1-5)'
                className='input input-bordered input-primary w-auto m-1'
              />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <input
                type='number'
                placeholder='minimum price'
                className='input input-bordered input-primary w-auto m-1'
              />
              <input
                type='number'
                placeholder='maximum price'
                className='input input-bordered input-primary w-auto m-1'
              />
            </div>
            <textarea
              className='textarea textarea-primary w-full my-1'
              placeholder='Meals Available for: (Breakfast, Lunch, Dinner)'
            ></textarea>
            <textarea
              className='textarea textarea-primary w-full my-1'
              placeholder='Add Description here'
            ></textarea>
            <button className='btn btn-primary w-full'>+ Add Item</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
