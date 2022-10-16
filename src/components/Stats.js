import React from "react";
import { Location } from "../assets";

export default function Stats({ children }) {
  return (
    <>
      <div className='xl:px-20 px-6 py-20 xl:mx-auto xl:container'>
        {children}
        <div className='md:mt-14 mt-4 relative sm:flex items-center justify-center'>
          <img
            src={Location}
            alt='Lcoations'
            className='w-full xl:h-full h-96 object-fill'
          />
        </div>
      </div>
    </>
  );
}
