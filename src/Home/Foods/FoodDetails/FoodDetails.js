import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
  const { name, img, description } = useLoaderData();
  return (
    <div>
      <h1> {name} </h1>
      <img src={img} alt='' />
      <p> {description} </p>
    </div>
  );
};

export default FoodDetails;
