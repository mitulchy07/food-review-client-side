import React from 'react';
import { Link } from 'react-router-dom';

const PersonalReview = ({ review, handleDelete }) => {
  return (
    <div>
      <div className='card w-full my-2 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title'>
            You Have Reviewd for:{' '}
            <span className='text-success'>{review.name}</span>{' '}
          </h2>
          <p>Ratings: {review.ratings} </p>
          <p>Description: {review.details} </p>
          <Link to={`/myreviews/${review._id}`} className='btn btn-warning'>
            Update Review
          </Link>
          <Link
            onClick={() => {
              handleDelete(review._id);
            }}
            className='btn btn-error'
          >
            Delete Your Review
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonalReview;
