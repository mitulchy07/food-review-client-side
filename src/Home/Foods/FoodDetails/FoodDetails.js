import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import image1 from '../../../images/cat.jpg';
import ReviewCard from '../ReviewCard/ReviewCard';

const FoodDetails = () => {
  const { user } = useContext(AuthContext);
  const {
    name,
    img,
    description,
    ratings,
    lowPrice,
    highPrice,
    meals,
    _id,
    date,
  } = useLoaderData();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://server-side-opal-nu.vercel.app/common/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id]);
  const handlePlaceReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.name.value;
    const email = user?.email || 'unregistered';
    const ratings = form.ratings.value;
    const details = form.details.value;
    const subject = form.subject.value;
    const category = form.category.value;
    const photoURL = form.photo.value;
    const displayName = form.displayName.value;
    console.log(details);
    const review = {
      title: title,
      displayName: displayName,
      email: email,
      photoURL: photoURL,
      subject: subject,
      details: details,
      ratings: ratings,
      category: category,
    };
    fetch('https://server-side-opal-nu.vercel.app/addreview ', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success('Review Added', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div
        className='hero h-60 rounded my-5'
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div className='grid grid-cols-1 gap-3 md:grid-cols-3 justify-items-center my-5'>
        <div className='card md:w-96 text-primary-content'>
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
            <div className='card-actions '></div>
          </div>
        </div>
        <div className='card md:w-96 bg  text-yellow-900	'>
          <div className='card-body'>
            <h2 className='card-title'>Food Details:</h2>
            <p> Minimum price: ${lowPrice} </p>
            <p> Maximum price: ${highPrice} </p>
            <p>Meals Available for: {meals} </p>
            <p>
              Review Added on:{' '}
              {date ? (
                date
              ) : (
                <p className='text-danger'>User forget to add time.</p>
              )}
            </p>
            <p>Description: {description} </p>
          </div>
        </div>
        <div className='card md:w-96 text-black'>
          <div className='card-body'>
            <form onSubmit={handlePlaceReview}>
              <div>
                <div className='grid grid-cols-1 gap-1'>
                  <input
                    type='text'
                    placeholder='Subject'
                    className='input bg-transparent input-bordered input-primary w-auto my-1'
                    name='subject'
                    required
                  />
                  <input
                    type='text'
                    defaultValue={name}
                    className='input input-bordered input-primary w-auto my-1 d-none'
                    name='name'
                    readOnly
                    required
                  />
                  <input
                    type='text'
                    className='input input-bordered input-primary w-auto my-1 d-none'
                    name='category'
                    defaultValue={_id}
                    readOnly
                    required
                  />
                  <input
                    type='text'
                    className='input input-bordered input-primary w-auto my-1 d-none'
                    name='photo'
                    defaultValue={user?.photoURL}
                    readOnly
                    required
                  />
                  <input
                    type='text'
                    placeholder='Email'
                    defaultValue={user?.displayName}
                    className='input input-bordered input-primary w-auto my-1 d-none '
                    name='displayName'
                    readOnly
                  />
                </div>
                <div>
                  <select
                    className='select btn btn-outline w-full'
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
                  className='textarea bg-transparent textarea-primary w-full my-1'
                  type='text'
                  placeholder='Write your reviews here'
                  name='details'
                  required
                ></textarea>

                {user?.uid ? (
                  <input
                    className='btn btn-primary w-full'
                    type='submit'
                    value='Submit Review'
                  />
                ) : (
                  <Link className='btn' to='/login'>
                    Login to Give a review
                  </Link>
                )}
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
            </form>
          </div>
        </div>
      </div>

      <div className='container my-5'>
        <h1 className='text-2xl text-white'>
          What other peoples think about this item:
        </h1>
        {reviews.length === 0 ? (
          <h1 className='text-xl text-info'>
            No Reviews yet.. Be The first one by providing your opinion..
          </h1>
        ) : (
          ' '
        )}
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default FoodDetails;
