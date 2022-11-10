import React, { useContext, useEffect, useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useTitel from '../hooks/useTitle';
import PersonalReview from '../PersonalReview/PersonalReview';

import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
  const { user, logout } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitel('MY REVIEWS');
  const handleDelete = (id) => {
    const proceed = window.confirm('Are You Sure?');
    if (proceed) {
      fetch(`https://server-side-opal-nu.vercel.app/myreviews/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.warn('Deleted', {
              position: 'top-center',
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
            });
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
      {reviews.length === 0 ? (
        <h1 className='text-3xl text-center text-warning my-5'>
          You have not given any reviews yet.
        </h1>
      ) : (
        <></>
      )}
      {reviews.map((review) => (
        <PersonalReview
          key={review._id}
          review={review}
          handleDelete={handleDelete}
        ></PersonalReview>
      ))}
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
    </div>
  );
};

export default MyReviews;
