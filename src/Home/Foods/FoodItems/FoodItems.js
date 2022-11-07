import React from 'react';
import { Link } from 'react-router-dom';

const FoodItems = ({ foodItem }) => {
  const { name, img, ratings } = foodItem;
  return (
    <div>
      <div className='card w-96 bg-base-100 shadow-xl text-white'>
        <figure>
          <img className='h-56 w-full' src={img} alt='food' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'> {name} </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <p>Ratings: {ratings} stars </p>
          <div className='card-actions justify-end'>
            <Link to={`/allfoods/${foodItem._id}`} className='btn btn-primary'>
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
