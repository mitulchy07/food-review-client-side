import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import FoodItems from '../FoodItems/FoodItems';

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    fetch('https://server-side-opal-nu.vercel.app/foods')
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className='container'>
      <h1 className='text-3xl my-4 text-white'>
        Top-rated foods of this restaurent:
      </h1>
      {loading ? <Spinner animation='border' /> : <></>}
      <div className='grid grid-cols-1	md:grid-cols-3 gap-3	justify-items-center'>
        {foods.map((foodItem) => (
          <FoodItems key={foodItem._id} foodItem={foodItem}></FoodItems>
        ))}
      </div>
      <div>
        <Link to='/allFoods' className='btn btn-outline btn-error w-full my-4'>
          See More
        </Link>
      </div>
    </div>
  );
};

export default Foods;
