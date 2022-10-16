import React from 'react';
import Stats from '../components/Stats';

const LocationsPage = () => {
  return (
    <div>
      <Stats>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='lg:text-4xl text-3xl font-bold text-center text-gray-800'>
            Locations We Serve
          </h1>
          <p className='text-xl leading-6 mt-4 text-center text-gray-600 2xl:w-2/5 '>
            We proudly serve entire Bay Area. 24/7 Bay Guard Fire Protection is
            ready to handle your fire protection needs. Cities include San
            Francisco, San Jose, etc. Contact us today to receive a free quote
            or learn more about cities we serve.
          </p>
        </div>
      </Stats>
    </div>
  );
};

export default LocationsPage;
