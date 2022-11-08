import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import ReviewCard from '../Home/Foods/FoodDetails/ReviewCard/ReviewCard';

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  console.log(user?.email);
  useEffect(() => {
    if (!user?.email) return;
    fetch(`https://server-side-opal-nu.vercel.app/myreviews/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);
  return (
    <div>
      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review}></ReviewCard>
      ))}
    </div>
  );
};

export default MyReviews;
