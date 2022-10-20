import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FireExtinguishers } from "../assets";

const ThankYouPage = () => {
  useEffect(() => {
    window.gtag("event", "conversion", {
      send_to: "AW-10808147810/eEW7CKnPiecDEOL-3KEo",
    });
  }, []);

  return (
    <div className='bg-white min-h-full flex flex-col lg:relative'>
      <div className='flex-grow flex flex-col'>
        <main className='flex-grow flex flex-col bg-white'>
          <div className='flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8'>
            <div className='flex-shrink-0 my-auto py-16 sm:py-32'>
              <p className='text-sm font-semibold text-red-600 uppercase tracking-wide'>
                Bay Guard Fire Protection Services
              </p>
              <h1 className='mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl'>
                Thank You
              </h1>
              <p className='mt-2 text-base text-gray-500'>for reaching out</p>
              <div className='mt-6'>
                <Link
                  to='/'
                  replace
                  className='text-base font-medium text-red-600 hover:text-red-500'
                >
                  Go back home<span aria-hidden='true'> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <img
          className='absolute inset-0 h-full w-full object-cover'
          src={FireExtinguishers}
          alt=''
        />
      </div>
    </div>
  );
};

export default ThankYouPage;
