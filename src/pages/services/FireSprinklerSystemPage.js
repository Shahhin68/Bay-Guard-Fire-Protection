import { Link } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/24/outline";
import { FireSprinklers } from "../../assets";
import ContactUs from "../../components/ContactUs";

const features = [
  { name: "Commercial and resedential fire sprinkler inspection" },
  { name: "Yearly fire sprinkler inspection" },
  {
    name: "Five years fire sprinkler test",
  },
  { name: "Fire sprinkler repair Relocation of sprinklers head" },
  { name: "ADUS additional dwelling units Single family homes/duplexes" },
  { name: "Fire sprinkler leak repair" },
  { name: "Tenant improvements" },
];

const types = [
  "Wet Pipe",
  "Dry Pipe",
  "Deluge",
  "Preaction Fire Sprinkler Systems",
];

export default function FireSprinklerSystemPage() {
  return (
    <div className='relative bg-white'>
      <div className='mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32'>
        <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
          <div className='sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left'>
            <p className='block text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl'>
              Bay Guard Fire Protection
            </p>
            <p className='my-2 block gradient-text text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl'>
              Fire Sprinklers
            </p>
            <p className='mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
              We offer solutions for commercial and residential buildings,
              multitenant buildings, single family and multi-family homes,
              hotels, restaurants, retails, and more.
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
                src={FireSprinklers}
                alt='Fire Sprinklers'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8'>
        <div>
          <h2 className='text-lg font-semibold text-red-600 uppercase tracking-wide'>
            Everything you need
          </h2>
          <p className='my-4 text-base text-gray-600'>
            Whether it is your home or business, existing or new project we have
            the expertise to fulfill your fire protection needs. Fire sprinklers
            are very effective which react so quickly to reduce heat, flames,
            and smoke, allowing people to skip by providing an appropriate
            amount of water before fire grow and spread throughout the room.
            There are several types of sprinkler systems such as:
          </p>
          {types.map((type) => (
            <div key={type} className='relative my-2'>
              <dt>
                <CheckIcon
                  className='absolute h-6 w-6 text-red-500 bg-gray-300 rounded-full p-1'
                  aria-hidden='true'
                />
                <p className='ml-9 text-lg leading-6 font-medium text-gray-600'>
                  {type}
                </p>
              </dt>
            </div>
          ))}
          <p className='mt-4 text-base text-gray-600'>
            It is very important to install the appropriate numbers and type of
            fire sprinkler to cover your area.
          </p>

          <p className='mt-4 text-base text-gray-600'>
            Fire sprinkler system are crucial to your building's safety. We
            offer quarterly, yearly inspection services and five years test to
            eliminate any system defects or compliance issues. Failing to
            properly inspect, test and maintain fire sprinkler systems may
            result in citation or worse. Our goal is to keep you fire sprinkler
            system functioning at it's full potential at an affordable price.
            The work of each fire protection contractor is geared toward keeping
            your fire sprinkler system functioning at its full potential at an
            affordable price.
          </p>
        </div>
        <div className='mt-12 lg:mt-0'>
          <h2 className='text-lg font-semibold text-red-600 uppercase tracking-wide mb-8'>
            Our services
          </h2>
          <dl className='grid grid-cols-1 md:grid-cols-2 sm:gap-x-6 sm:gap-y-6 lg:gap-x-8'>
            {features.map((feature) => (
              <div key={feature.name} className='relative'>
                <dt>
                  <CheckIcon
                    className='absolute h-6 w-6 text-red-500'
                    aria-hidden='true'
                  />
                  <p className='ml-9 text-lg leading-6 font-medium text-gray-900'>
                    {feature.name}
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
