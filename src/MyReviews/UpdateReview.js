import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import image from '../images/review.jpg';

const UpdateReview = () => {
  const { user } = useContext(AuthContext);
  const currentReview = useLoaderData();
  console.log(currentReview);
  return (
    <div>
      <form>
        <div className='flex flex-col w-full lg:flex-row my-5 container '>
          <div className='grid flex-grow  card  rounded-box place-items-center'>
            <img src={image} alt='' className='h-56 w-auto' />
          </div>
          <div className='divider lg:divider-horizontal'>Here:</div>
          <div className='grid flex-grow  card bg-base-300 rounded-box p-3'>
            <div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
                <input
                  type='text'
                  placeholder='Subject'
                  className='input input-bordered input-primary w-auto my-1'
                  name='subject'
                  defaultValue={currentReview.subject}
                  required
                />
                <select
                  className='select btn btn-outline'
                  name='ratings'
                  required
                >
                  <option disabled>How much ratings will you give?</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <textarea
                className='textarea textarea-primary w-full my-1'
                type='text'
                placeholder='Write your reviews here'
                name='details'
                defaultValue={currentReview.details}
                required
              ></textarea>

              <input
                className='btn btn-primary w-full'
                type='submit'
                value='Submit Review'
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateReview;