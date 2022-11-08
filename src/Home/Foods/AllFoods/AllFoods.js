import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FoodItems from '../FoodItems/FoodItems';

const AllFoods = () => {
  const [allFoods, setAllFoods] = useState([]);
  useEffect(() => {
    fetch('https://server-side-opal-nu.vercel.app/allfoods')
      .then((res) => res.json())
      .then((data) => setAllFoods(data));
  }, []);

  return (
    <div className='text-center my-4 '>
      <h1 className='text-3xl my-2'>Total Food Items: {allFoods.length} </h1>
      <div>
        <Link to='/additem' className='btn btn-warning my-4 w-1/2 container '>
          + Add new food Item
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2  justify-items-center'>
        {allFoods.map((foodItem) => (
          <FoodItems key={foodItem._id} foodItem={foodItem}></FoodItems>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
