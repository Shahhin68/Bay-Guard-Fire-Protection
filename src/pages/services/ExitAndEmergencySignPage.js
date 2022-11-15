/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ExitLight } from "../../assets";
import ContactUs from "../../components/ContactUs";

const features = [
  {
    name: "Visual inspection",
    description:
      "Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.",
  },
  {
    name: "Physical inspection",
    description:
      "Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.",
  },
  {
    name: "Verification",
    description:
      "Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.",
  },
];

const weProvide = [
  {
    name: "New batteries",
    description:
      "We provide new batteries for existing exit and emergency lights.",
  },
  {
    name: "New Exit and Emergency Lights",
    description: "We install and service exit & emergency lights.",
  },
  {
    name: "Commercial and Residential",
    description:
      "We install and service exit & emergency lights in any building.",
  },
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
              Exit & Emergency Lights
            </p>
            <p className='mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
              Emergency lights and exit signs are some of the most important
              safety devices in any building and it is crucial that they are
              fully operational to help guide your building occupants to safety
              in the event of an emergency.
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
              <img className='w-full' src={ExitLight} alt='Exit Light' />
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mt-12'>
          <h2 className='text-3xl font-extrabold text-gray-900'>We provide</h2>
        </div>
        <dl className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8'>
          {weProvide.map((feature) => (
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
              <dd className='mt-2 ml-9 text-base text-gray-500'>
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8'>
        <div>
          <h2 className='text-lg font-semibold text-red-600 uppercase tracking-wide'>
            Everything you need
          </h2>
          <p className='mt-4 text-base text-gray-600'>
            We install and service exit & emergency lights in the Bay Area,
            including San Francisco, San Jose and beyond. Emergency lights and
            exit signs are some of the most important safety devices in any
            building and it is crucial that they are fully operational to help
            guide your building occupants to safety in the event of an
            emergency.
          </p>
          <p className='mt-4 text-base text-gray-600'>
            NFPA 101, the life safety and code, requires all exit and emergency
            lights to be serviced annually. Every sign must be continuously
            illuminated while the building is occupied, and the word, Exit must
            be displayed no smaller than 6 inches high and 0.75 inches wide.
            Yearly inspection, NFPA 101 requires an e test of the emergency
            lights, by ensuring they can remain illuminated for a minimum of 90
            minutes .
          </p>
        </div>
        <div className='mt-12 lg:mt-0'>
          <h2 className='text-lg font-semibold text-red-600 uppercase tracking-wide mb-8'>
            How the service works
          </h2>
          <dl className='space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-2 lg:gap-x-8'>
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
