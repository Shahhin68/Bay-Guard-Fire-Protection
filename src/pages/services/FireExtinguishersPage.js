import { Link } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/24/outline";
import {
  ABCFireExtinguisher,
  FireExtinguisherInspection,
  HalotronFireExtinguisher,
  WaterFireExtinguisher,
  WetFireExtinguisher,
} from "../../assets";
import ContactUs from "../../components/ContactUs";

const features = [
  { name: "Yearly Inspection Service and Certification" },

  {
    name: "Fast, Same Week Fire Extinguisher service",
  },
  { name: "Wholesale Pricing on New Fire Extinguishers" },
  { name: "Fire Extinguisher Delivery" },
  { name: "Fire Extinguisher Cabinets" },
  { name: "Fire Extinguisher Cabinet Glasses Service, Maintenance and Repair" },
  { name: "Recharge and Refill" },
  { name: "6 Years Maintenance Service" },
  { name: "Hydrostatic Test" },
];

const products = [
  {
    id: 1,
    name: "ABC fire extinguishers",
    imageSrc: ABCFireExtinguisher,
  },
  {
    id: 2,
    name: "Wet class K fire extinguishers",
    imageSrc: WetFireExtinguisher,
  },
  {
    id: 2,
    name: "Water fire extinguishers",
    imageSrc: WaterFireExtinguisher,
  },
  {
    id: 3,
    name: "Halotron fire extinguishers",
    imageSrc: HalotronFireExtinguisher,
  },
];

export default function Example() {
  return (
    <div className='relative bg-white'>
      <div className='mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32'>
        <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
          <div className='sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left'>
            <p className='block text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl'>
              Bay Guard Fire Protection
            </p>
            <p className='my-2 block gradient-text text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl'>
              Fire Extinguishers
            </p>
            <p className='mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
              We offer fire extinguishers for purchase as well as fire
              extinguisher services such as inspections, refills, and
              maintenance.
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
                src={FireExtinguisherInspection}
                alt='Fire Extinguisher Inspection'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8'>
        <div>
          <h2 className='text-lg font-semibold text-red-600 uppercase tracking-wide'>
            Everything you need
          </h2>
          <p className='mt-4 text-base text-gray-600'>
            A fire extinguisher is often best method of fire protection that can
            help prevent flames from growing out of control and become extremely
            dangerous. Every public facility must undergo annual testing on all
            fire extinguishers located in their facilities.
          </p>
          <p className='mt-4 text-base text-gray-600'>
            Need to Get Compliant? Our team provides high grade fire
            extinguisher inspections, sales, refills and installations for all
            clients throughout Bay Area, CA. We come to your location and get
            your portable fire extinguishers serviced and inspected to help
            ensure you are up to fire code.
          </p>
        </div>
        <div className='mt-12 lg:mt-0 lg:col-span-2'>
          <h2 className='text-lg font-semibold text-red-600 uppercase tracking-wide mb-8'>
            We provide a fire extinguisher services such as:
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
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <h2 className='text-lg font-semibold text-red-600 uppercase tracking-wide'>
          Fire Extinguishers we Provide
        </h2>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {products.map((product) => (
            <div key={product.id} className='group relative'>
              <div className='h-96 w-full'>
                <img
                  src={product.imageSrc}
                  className='h-full w-full object-contain'
                  alt={product.name}
                />
              </div>
              <div className='mt-1'>
                <h3 className='text-center text-lg font-medium text-red-600 mb-8'>
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactUs />
    </div>
  );
}
