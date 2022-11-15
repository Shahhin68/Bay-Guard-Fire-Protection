/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { KitchenFireSuppressionSystem } from "../../assets";
import ContactUs from "../../components/ContactUs";

const examples = [
  "Restaurants",
  "School",
  "Airports",
  "Hotels and casino",
  "Hospitals",
  "Nursing/care homes",
  "Food trucks/trailer",
];

const types = [
  "Ansul system",
  "Pyrochem",
  "Range guard",
  "Kiddie",
  "Buckyee",
  "Amerex",
];

export default function Example() {
  return (
    <div className='bg-white'>
      <div className='mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32'>
        <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
          <div className='sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left'>
            <p className='block text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl'>
              Bay Guard Fire Protection
            </p>
            <p className='my-2 block gradient-text text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl'>
              Kitchen Fire Suppresion System
            </p>
            <p className='mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
              Our company provides installation and inspection services for
              industrial and commercial kitchen fire suppression systems.
            </p>
            <div className='mt-5 sm:flex sm:justify-center lg:justify-start'>
              <div className='rounded-md shadow'>
                <Link
                  to='/contact'
                  className='w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-3 md:text-lg md:px-8'
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className='mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
            <div className='relative mx-auto w-full rounded-lg'>
              <img
                className='w-full'
                src={KitchenFireSuppressionSystem}
                alt='Kitchen Fire Suppression System'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl xl:max-w-4xl mx-auto text-center mt-12'>
          <p className='mb-4 text-lg lg:text-xl text-gray-700'>
            Kitchen fires can spread quickly through multiple sources of heat. A
            fire suppression system will help stop kitchen fires before it has a
            chance to spread to other areas.
          </p>
        </div>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8'>
          <div>
            <h2 className='text-lg font-semibold text-red-600 uppercase tracking-wide'>
              We Provide
            </h2>
            <p className='mt-4 text-base text-gray-600'>
              We perform services and grant certifications for a wide range of
              fire suppression systems all of these systems are in compliance
              with the standards set by Underwriters Laboratories (UL-300).
            </p>
          </div>
          <div className='mt-12 lg:mt-0'>
            <h2 className='text-lg font-semibold text-red-600 uppercase tracking-wide mb-8'>
              Fire Suppression Systems
            </h2>
            <dl className='space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-2 lg:gap-x-8'>
              {types.map((type) => (
                <div key={type} className='relative'>
                  <dt>
                    <CheckIcon
                      className='absolute h-6 w-6 text-red-500'
                      aria-hidden='true'
                    />
                    <p className='ml-9 text-lg leading-6 font-medium text-gray-900'>
                      {type}
                    </p>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8'>
        <div>
          <h2 className='text-lg font-semibold text-red-600 uppercase tracking-wide'>
            Everything you need
          </h2>
          <p className='mt-4 text-base text-gray-600'>
            By law, it is required to have every fire suppression system
            serviced and tested at least every 6 months. We are licensed by the
            State Fire Marshal to conduct semiannual inspections of fire
            suppression systems.
          </p>
          <p className='mt-4 text-base text-gray-600'>
            Ansul R-102 fire suppression system is the most common automatic
            pre-engineered kitchen fire suppression system under UL-300
            standards. It is designed to protect the following areas associated
            with cooking equipment such as stove, fryer, oven, griddle,
            charbroiler, wok, salamander as well as ventilating equipment such
            as kitchen hoods, ducts, plenums and filters.
          </p>
        </div>
        <div className='mt-12 lg:mt-0'>
          <h2 className='text-lg font-semibold text-red-600 uppercase tracking-wide mb-8'>
            Examples of commercial kitchens
          </h2>
          <dl className='space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-2 lg:gap-x-8'>
            {examples.map((example) => (
              <div key={example} className='relative'>
                <dt>
                  <CheckIcon
                    className='absolute h-6 w-6 text-red-500'
                    aria-hidden='true'
                  />
                  <p className='ml-9 text-lg leading-6 font-medium text-gray-900'>
                    {example}
                  </p>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <ContactUs />
    </div>
  );
}
