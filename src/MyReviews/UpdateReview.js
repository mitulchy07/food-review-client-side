import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import image from '../images/review.jpg';

import 'react-toastify/dist/ReactToastify.css';

const  = () => {
  const currentReview = useLoaderData();
  const [review, setReview] = useState(currentReview);
  const handleUpdate = (event) => {
    event.preventDefault();

    fetch(
      `https://server-side-opal-nu.vercel.app/allreviews/${currentReview._id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(review),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success('Review Updated', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        }
        console.log(data);
      });
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div className='flex flex-col w-full lg:flex-row my-5 container '>
          <div className='grid flex-grow  card  rounded-box place-items-center'>
            <img src={image} alt='' className='h-56 w-auto' />
          </div>
          <div className='divider lg:divider-horizontal'>Here:</div>
          <div className='grid flex-grow  card  rounded-box p-3'>
            <div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
                <input
                  onChange={handleInputChange}
                  type='text'
                  placeholder='Subject'
                  className='input bg-transparent input-bordered input-primary w-auto my-1'
                  name='subject'
                  defaultValue={currentReview.subject}
                  required
                />
                <select
                  className='select btn btn-outline'
                  name='ratings'
                  required
                  onChange={handleInputChange}
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
                className='textarea bg-transparent textarea-primary w-full my-1'
                type='text'
                placeholder='Write your reviews here'
                name='details'
                defaultValue={currentReview.details}
                onChange={handleInputChange}
                required
              ></textarea>

              <input
                className='btn btn-primary w-full'
                type='submit'
                value='Submit Review'
              />
            </div>
            <ToastContainer
              position='top-center'
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='dark'
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ;
