import React from 'react';
import useTitel from '../hooks/useTitle';
import { ContactForm } from '../Pages/Shared/ContactForm/ContactForm';
import Faq from '../Pages/Shared/FAQ/Faq';
import Banner from './Banner/Banner';
import Foods from './Foods/Foods/Foods';
import Reservation from './Reservation/Reservation';

const Home = () => {
  useTitel('HOME');
  return (
    <div>
      <Banner></Banner>
      <Reservation></Reservation>
      <Foods></Foods>
      <Faq></Faq>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
