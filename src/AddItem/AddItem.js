import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import image from '../images/clock.jpg';

const AddItem = () => {
  const { user } = useContext(AuthContext);

  const handlePlaceItem = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const highPrice = form.highPrice.value;
    const lowPrice = form.lowPrice.value;
    const meals = form.meals.value;
    const ratings = form.ratings.value;
    const date = form.date.value;
    const img = form.img.value;
    const item = {
      name: title,
      description: description,
      highPrice: highPrice,
      lowPrice: lowPrice,
      meals: meals,
      ratings: ratings,
      img: img,
      date: date,
    };
    fetch('https://server-side-opal-nu.vercel.app/additem ', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert('Item Added');
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handlePlaceItem}>
        <div className='flex flex-col w-full lg:flex-row my-5 container'>
          <div className='grid flex-grow  card  rounded-box place-items-center'>
            <h1 className='text-xl text-success'>
              Hello, {user?.displayName ? user?.displayName : user?.email}
            </h1>
            <img src={image} alt='' className='h-56 w-auto' />
          </div>
          <div className='divider lg:divider-horizontal'>Here:</div>
          <div className='grid flex-grow  card bg-base-300 rounded-box p-3'>
            <div>
              <div className='grid grid-cols-1 md:grid-cols-2'>
                <input
                  type='text'
                  name='title'
                  placeholder='Title: (Chicken Curry) '
                  className='input input-bordered input-primary w-auto m-1'
                  required
                />
                <input
                  type='text'
                  placeholder='Email'
                  className='input input-bordered input-primary w-auto m-1'
                  defaultValue={user?.email}
                  disabled
                />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2'>
                <input
                  type='url'
                  placeholder='Photo URL'
                  name='img'
                  className='input input-bordered input-primary w-auto m-1'
                  required
                />
                <input
                  type='number'
                  name='ratings'
                  placeholder='Give ratings (range: 1-5)'
                  className='input input-bordered input-primary w-auto m-1'
                  required
                />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2'>
                <input
                  type='number'
                  name='lowPrice'
                  placeholder='minimum price'
                  className='input input-bordered input-primary w-auto m-1'
                  required
                />
                <input
                  type='number'
                  placeholder='maximum price'
                  name='highPrice'
                  className='input input-bordered input-primary w-auto m-1'
                  required
                />
              </div>
              <input
                type='datetime-local'
                placeholder='select today'
                name='date'
                className='input input-bordered input-primary w-full m-1'
                required
              />
              <textarea
                className='textarea textarea-primary w-full my-1'
                name='meals'
                placeholder='Meals Available for: (Breakfast, Lunch, Dinner)'
                required
              ></textarea>
              <textarea
                className='textarea textarea-primary w-full my-1'
                name='description'
                placeholder='Add Description here'
                required
              ></textarea>
              <input
                className='btn btn-primary w-full'
                type='submit'
                value='+ Add Item'
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
