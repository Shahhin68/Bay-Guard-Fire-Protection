import { Link } from "react-router-dom";
import { HeroImage } from "../assets";
export default function Hero() {
  return (
    <div className='relative bg-white overflow-hidden pb-24'>
      <main className='mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32'>
        <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
          <div className='sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left'>
            <h1>
              <span className='mt-1 block text-4xl tracking-tight font-bold sm:text-6xl'>
                <span className='block text-red-600 gradient-text'>
                  Bay Guard
                </span>
                <span className='block text-red-700 text-5xl my-3'>
                  Fire Protection Services
                </span>
              </span>
            </h1>
            <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
              We provide fire protection services in order to help you with your
              Fire Protection needs. Bay Guard Fire Protection offers Fire
              Extinguisher, Fire Sprinklers, Emergency Exit Lights and Kitchen
              Fire Suppression systems.
            </p>
            <div className='mt-5 sm:flex sm:justify-center lg:justify-start'>
              <div className='rounded-md shadow'>
                <Link
                  to='/contact'
                  className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10'
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className='mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
            <div className='relative mx-auto w-full rounded-lg lg:max-w-md'>
              <img className='w-full' src={HeroImage} alt='Hero' />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
