import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import image2 from '../../images/cat.jpg';

const ViewPhoto = () => {
  return (
    <div className='md:w-96'>
      <PhotoProvider>
        <PhotoView src={image2}>
          <img src={image2} alt='' />
        </PhotoView>
      </PhotoProvider>
    </div>
  );
};

export default ViewPhoto;
