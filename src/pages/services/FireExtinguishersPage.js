import { Link } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/24/outline";
import { FireExtinguisherInspection } from "../../assets";
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
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },
  {
    id: 2,
    name: "Water fire extinguishers",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },
  {
    id: 3,
    name: "Halotron fire extinguishers",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },
];

export default function Example() {
  return (
    <div className='relative bg-white'>
      <div className='lg:relative'>
        <div className='mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left'>
          <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
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
            src={FireExtinguisherInspection}
            alt='Fire Extinguisher Inspection'
          />
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
            clients throughout Bay Area, CA We come to your location and get
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
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div>
          <img src={FireExtinguisherInspection} alt='Fire Exitnguishers' />
        </div>
        <div>
          <h2 className='text-lg font-semibold text-red-600 uppercase tracking-wide'>
            Fire Extinguishers we Provide
          </h2>
          <div className='mt-6 flex flex-col'>
            {products.map((product) => (
              <div key={product.id} className='group relative'>
                <div className='mt-4 flex justify-between'>
                  <dt>
                    <CheckIcon
                      className='absolute h-6 w-6 text-red-500'
                      aria-hidden='true'
                    />
                    <h3 className='ml-9 text-center text-lg font-medium text-red-600 mb-8'>
                      {product.name}
                    </h3>
                  </dt>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
}
