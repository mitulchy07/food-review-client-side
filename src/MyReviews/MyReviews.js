import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useTitel from '../hooks/useTitle';
import PersonalReview from '../PersonalReview/PersonalReview';

const MyReviews = () => {
  const { user, logout } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitel('MY REVIEWS');
  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      fetch(`https://server-side-opal-nu.vercel.app/myreviews/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('Successfully Deleted.');
            const remaining = reviews.filter((odr) => odr._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  useEffect(() => {
    if (!user?.email) return;
    fetch(`https://server-side-opal-nu.vercel.app/myreviews/${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          'token-for-review-site'
        )}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          alert('Error: 401. Login Again');
          logout();
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user?.email]);
  return (
    <div>
      {reviews.map((review) => (
        <PersonalReview
          key={review._id}
          review={review}
          handleDelete={handleDelete}
        ></PersonalReview>
      ))}
    </div>
  );
};

export default MyReviews;
