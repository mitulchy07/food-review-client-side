import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import image1 from '../../../images/cat.jpg';
import image from '../../../images/review.jpg';

const FoodDetails = () => {
  const { name, img, description, ratings, lowPrice, highPrice, meals, _id } =
    useLoaderData();
  return (
    <div>
      <div
        className='hero h-60 rounded my-5'
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center my-5'>
        <div className='card w-96 text-primary-content'>
          <div className='card-body text-yellow-900'>
            <h2 className='card-title 	'>
              Reviews for: <span className='text-danger'> {name} </span>
            </h2>
            <p className='badge badge-ghost badge-sm'>
              Ratings: {ratings} stars
            </p>{' '}
            <p className='badge badge-ghost badge-sm'>
              Total Reviews: 5 reviews
            </p>
            <img src={image1} alt='cat' className='rounded' />
            <div className='card-actions justify-end'>
              <Link to={`/allfoods/${_id}/reviewwrite`} className='btn w-full'>
                Write a review
              </Link>
            </div>
          </div>
        </div>
        <div className='card w-96 bg  text-yellow-900	'>
          <div className='card-body'>
            <h2 className='card-title'>Food Details:</h2>
            <p> Minimum price: {lowPrice} </p>
            <p> Maximum price: {highPrice} </p>
            <p>Meals Available for: {meals} </p>
            <p>Description: {description} </p>
          </div>
        </div>
        <div className='card w-96 text-yellow-900'>
          <div className='card-body'>
            <h2 className='card-title'>
              Add your valueable review. So that, others can know.
            </h2>
            <img src={image} alt='review' className='rounded' />
          </div>
        </div>
      </div>

      <div>
        <div className='overflow-x-auto w-full'>
          <table className='table w-full'>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Title</th>
                <th>Reviews</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th></th>
                <td>
                  <div className='flex items-center space-x-3'>
                    <div className='avatar'>
                      <div className='mask mask-squircle w-12 h-12'>
                        <img
                          src='/tailwind-css-component-profile-2@56w.png'
                          alt='Avatar Tailwind CSS Component'
                        />
                      </div>
                    </div>
                    <div>
                      <div className='font-bold'>Hart Hagerty</div>
                      <div className='text-sm opacity-50'>United States</div>
                    </div>
                  </div>
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>Purple</td>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
