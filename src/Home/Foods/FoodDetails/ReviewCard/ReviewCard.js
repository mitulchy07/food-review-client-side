import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <div className='card w-full my-2 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>Reviewd By: {review.email} </h2>
        <p>Ratings: {review.ratings} </p>
        <p>Description: {review.details} </p>
      </div>
    </div>
  );
};

export default ReviewCard;
