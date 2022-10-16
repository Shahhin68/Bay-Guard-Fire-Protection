import { FireExtinguisher } from "../assets";

const WhyChooseUs = () => (
  <div className='xl:mx-auto xl:container  md:px-6 px-4 py-24'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div className='w-full'>
        <img
          src={FireExtinguisher}
          alt='ongoing meeting'
          className='w-full obejct-fit object-center object-fill h-full'
        />
      </div>
      <div>
        <p className='lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800'>
          Why choose us
        </p>
        <p className='text-lg leading-7 text-gray-600 mt-4 w-full'>
          We are a fire protection company that you can trust. Bay Guard Fire
          Protection. repairs, inspects, designs, installs and maintains fire
          sprinklers systems for both residential and commercial properties. We
          are locally owned &amp; operated; state licensed, bonded and insured
          company. We understand the complexities of fire protection.
        </p>
        <p className='text-lg leading-7 text-gray-600 mt-4 w-full'>
          We are licensed by the State Fire Marshal to perform annual
          inspections and maintain of portable fire extinguishers and semiannual
          inspections and installation of kitchen fire suppression systems. We
          provide speedy 24-hour service on fire sprinklers system, commercial
          kitchen fire suppression systems, as well as portable fire
          extinguishers. Our highly trained team is excited to work with you to
          protect your business, property and loved ones.
        </p>
      </div>
    </div>
  </div>
);
export default WhyChooseUs;
