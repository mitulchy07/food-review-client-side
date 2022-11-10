import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <div className='card card-side shadow-xl align-items-center'>
      <figure>
        <img
          src={review?.photoURL}
          className='h-20 w-20 rounded m-2'
          alt='Bad PhotoURL'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'> {review.subject} </h2>
        <p> Description: {review.details} </p>
        <p>Ratings: {review.ratings} stars </p>
        <p>
          <small>reviewed by: {review.displayName} </small>
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
