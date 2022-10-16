/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { KitchenFireSuppressionSystem } from "../../assets";

const examples = [
  "Restaurants",
  "School",
  "Airports",
  "Hotels and casino",
  "Hospitals",
  "Nursing/care homes",
  "Food trucks/trailer",
];

const weProvide = [
  {
    name: "New batteries",
    description:
      "Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.",
  },
  {
    name: "New Exit and Emergency Lights",
    description:
      "Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.",
  },
  {
    name: "Commercial and Residential",
    description:
      "Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.",
  },
];

export default function Example() {
  return (
    <div className='bg-white'>
      <div className='lg:relative'>
        <div className='mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left'>
          <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
            <p className='block text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl'>
              Bay Guard Fire Protection
            </p>
            <p className='my-2 block gradient-text text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl'>
              Kitchen Fire Suppresion System
            </p>
            <p className='mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
              Our company provides installation and inspection services for
              industrial and commercial kitchen fire suppression systems.
              Kitchen fires can spread quickly through multiple sources of heat.
              A fire suppression system will help stop kitchen fires before it
              has a chance to spread to other areas.
            </p>
            <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
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
        </div>
        <div className='relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
          <img
            className='absolute inset-0 w-full h-full object-cover'
            src={KitchenFireSuppressionSystem}
            alt='Kitchen Fire Suppression System'
          />
        </div>
      </div>
      <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mt-12'>
          <h2 className='text-3xl font-extrabold text-gray-900'>We provide</h2>
          <p className='mt-4 text-lg text-gray-500'>
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
        <dl className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8'>
          {weProvide.map((feature) => (
            <div key={feature.name} className='relative'>
              <dt>
                <CheckIcon
                  className='absolute h-6 w-6 text-green-500'
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
            By law, it is required to have every fire suppression system
            serviced and tested at least every 6 months. We are licensed by the
            State Fire Marshal to conduct semiannual inspections of fire
            suppression systems.
          </p>
          <p className='mt-4 text-base text-gray-600'>
            We perform services and grant certifications for a wide range of
            fire suppression systems including, Ansul system, Pyrochem, Range
            guard, Kiddie, Buckyee, and Amerex; all of these systems are in
            compliance with the standards set by Underwriters Laboratories
            (UL-300).
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
            Examples of commercial kitchens include
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
    </div>
  );
}
