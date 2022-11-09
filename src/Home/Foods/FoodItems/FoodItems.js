import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const FoodItems = ({ foodItem }) => {
  const { name, img, ratings, description, lowPrice, highPrice } = foodItem;
  return (
    <div>
      <div className='card w-auto h-auto bg-amber-600 shadow-xl text-white'>
        <figure>
          <PhotoProvider>
            <PhotoView src={img}>
              <img className='h-56 w-full rounded' src={img} alt='food' />
            </PhotoView>
          </PhotoProvider>
        </figure>

        <div className='card-body'>
          <h2 className='card-title '> {name} </h2>
          <div className='text-start'>
            <p>Ratings: {ratings} stars </p>
            <p>
              Price Range: ${lowPrice}-${highPrice}
            </p>
            <p> {description.slice(0, 80)} ... </p>
          </div>

          <div className='card-actions'>
            <Link
              to={`/allfoods/${foodItem._id}`}
              className='btn btn-warning w-full'
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
