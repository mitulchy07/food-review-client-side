import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import image from '../../images/Hi.jpg';

const ReviewWritting = ({ _id }) => {
  const { user } = useContext(AuthContext);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    fetch('https://server-side-opal-nu.vercel.app/allfoods')
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, []);

  const handlePlaceReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email || 'unregistered';
    const ratings = form.ratings.value;
    const details = form.details.value;
    const subject = form.subject.value;
    console.log(details);
    const review = {
      name: name,
      email: email,
      ratings: ratings,
      subject: subject,
      details: details,
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
          alert('Review Added');
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handlePlaceReview}>
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
                required
              />
              <input
                type='text'
                placeholder='Email'
                defaultValue={user?.email}
                className='input input-bordered input-primary w-auto my-1'
                name='email'
                readOnly
              />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
              <select className='select btn btn-outline' name='name' required>
                <option disabled>What are you reviewing for?</option>
                {options.map((option) => (
                  <option key={option._id} option={option}>
                    {option.name}
                  </option>
                ))}
              </select>
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
  );
};

export default ReviewWritting;
