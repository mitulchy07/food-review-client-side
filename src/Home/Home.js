import React from 'react';
import Banner from './Banner/Banner';
import Foods from './Foods/Foods/Foods';
import Reservation from './Reservation/Reservation';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Reservation></Reservation>
      <Foods></Foods>
    </div>
  );
};

export default Home;
