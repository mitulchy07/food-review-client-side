import React, { useEffect, useState } from 'react';
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
      <div className='grid grid-cols-1 md:grid-cols-3 gap-y-2 justify-items-center'>
        {allFoods.map((foodItem) => (
          <FoodItems key={foodItem._id} foodItem={foodItem}></FoodItems>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
