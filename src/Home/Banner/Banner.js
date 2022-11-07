import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div>
      <div
        className='hero h-full'
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold text-white'>Food Bank</h1>
            <p className='mb-5 text-white'>
              Some reviews are positive, but are so vague that you question
              their legitimacy. Some might have helpful information, but are so
              poorly written they're unintelligible.
            </p>
            <Link to='/register' className='btn btn-primary'>
              Sign Up Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
