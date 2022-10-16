import React from "react";
import ContactUs from "../components/ContactUs";
import {
  ClipboardDocumentCheckIcon,
  FireIcon,
  ClockIcon,
} from "@heroicons/react/20/solid";
import { FireExtinguishers } from "../assets";

const perks = [
  {
    title: "Fire safety solutions",
    description: `Fire safety solutions to building owners, real state managers and companies, general contractors, engineers and architects.`,
    icon: <FireIcon className='h-7 w-7 flex-shrink-0 text-red-600' />,
  },
  {
    title: "Licensed",
    description: `We are licensed by the State Fire Marshal to perform annual inspections and maintain of portable fire extinguishers and semiannual inspections and installation of kitchen fire suppression systems.`,
    icon: (
      <ClipboardDocumentCheckIcon className='h-7 w-7 flex-shrink-0 text-red-600' />
    ),
  },
  {
    title: "24-hour Speedy Service",
    description: `We provide speedy 24-hour service on fire sprinklers system, commercial kitchen fire suppression systems, as well as portable fire extinguishers.`,
    icon: <ClockIcon className='h-7 w-7 flex-shrink-0 text-red-600' />,
  },
];

const AboutUsPage = () => {
  return (
    <div className='2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4'>
      <div className='flex lg:items-start lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12'>
        <div className='w-full lg:w-6/12'>
          <p className='font-normal text-sm leading-3 text-red-700 hover:text-red-800 cursor-pointer pb-2'>
            About
          </p>
          <h2 className='w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9'>
            Get Full Fire Protection Services Solutions
          </h2>
          <p className='font-normal text-base leading-6 text-gray-600 mt-6'>
            We are a fire protection company that you can trust. Bay Guard Fire
            Protection. repairs, inspects, designs, installs and maintains fire
            sprinklers systems for both residential and commercial properties.
            We are locally owned &amp; operated; state licensed, bonded and
            insured company. We understand the complexities of fire protection.
          </p>
        </div>
        <div className='w-full lg:w-6/12'>
          <img src={FireExtinguishers} alt='' />
        </div>
      </div>

      <div className='flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16'>
        <div className='w-full lg:w-6/12'>
          <h2 className='font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800'>
            Our Mission
          </h2>
          <p className='font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12'>
            At Bay Guard Fire Protection Services, our mission is to provide the
            highest quality fire safety products and services to our customers.
            We are committed to delivering the best possible solutions to meet
            the unique needs of our customers, and to do so in a timely and
            professional manner. We strive to be the fire safety partner of
            choice for our customers, and to be a leader in the fire safety
            industry.
          </p>
          <p className='font-normal text-base leading-6 text-gray-600 w-full lg:w-10/12 xl:w-9/12 mt-10'>
            We provide speedy 24-hour service on fire sprinklers system,
            commercial kitchen fire suppression systems, as well as portable
            fire extinguishers. Our highly trained team is excited to work with
            you to protect your business, property and loved ones.
          </p>
        </div>
        <div className='w-full lg:w-6/12'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10'>
            {/* <!-- Team Card --> */}
            {perks.map((perk) => (
              <div className='flex p-4 shadow-md'>
                <div className='mr-6'>{perk.icon}</div>
                <div className=''>
                  <p className='font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800'>
                    {perk.title}
                  </p>
                  <p className='mt-2 font-normal text-base leading-6 text-gray-600'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default AboutUsPage;
