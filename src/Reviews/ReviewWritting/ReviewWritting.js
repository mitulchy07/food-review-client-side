import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import image from '../../images/Hi.jpg';

const ReviewWritting = () => {
  const { user } = useContext(AuthContext);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    fetch('https://server-side-opal-nu.vercel.app/allfoods')
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, []);
  return (
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
            />
            <input
              type='text'
              placeholder='Email'
              defaultValue={user?.email}
              className='input input-bordered input-primary w-auto my-1'
              readOnly
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
            <select className='select btn btn-outline'>
              <option disabled>What are you reviewing for?</option>
              {options.map((option) => (
                <option key={option._id} option={option}>
                  {option.name}
                </option>
              ))}
            </select>
            <select className='select btn btn-outline'>
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
            placeholder='Write your reviews here'
          ></textarea>
          <button className='btn btn-primary w-full'>Submit Review</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewWritting;
