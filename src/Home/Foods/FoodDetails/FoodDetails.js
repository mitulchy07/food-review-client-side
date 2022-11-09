import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import image1 from '../../../images/cat.jpg';
import image from '../../../images/review.jpg';
import ReviewCard from './ReviewCard/ReviewCard';

const FoodDetails = () => {
  const { user } = useContext(AuthContext);
  const { name, img, description, ratings, lowPrice, highPrice, meals, _id } =
    useLoaderData();

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://server-side-opal-nu.vercel.app/allreviews/${name}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [name]);
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
              Total Reviews: {reviews.length} reviews
            </p>
            <img src={image1} alt='cat' className='rounded' />
            <div className='card-actions '>
              {user?.uid ? (
                <Link
                  to={`/allfoods/${_id}/reviewwrite`}
                  className='btn w-full'
                >
                  Write a review
                </Link>
              ) : (
                <Link className='btn w-full' to='/login'>
                  Please Login to Review
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className='card w-96 bg  text-yellow-900	'>
          <div className='card-body'>
            <h2 className='card-title'>Food Details:</h2>
            <p> Minimum price: ${lowPrice} </p>
            <p> Maximum price: ${highPrice} </p>
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

      <div className='container my-5'>
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default FoodDetails;
