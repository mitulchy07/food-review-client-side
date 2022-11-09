import React from 'react';
import Banner from './Banner/Banner';
import Foods from './Foods/Foods/Foods';
import Reservation from './Reservation/Reservation';
import ViewPhoto from './ViewPhoto/ViewPhoto';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Reservation></Reservation>
      <Foods></Foods>
      <ViewPhoto></ViewPhoto>
    </div>
  );
};

export default Home;
