/* This example requires Tailwind CSS v2.0+ */
import ContactUs from "../components/ContactUs";
import CustomMarquee from "../components/CustomMarquee";
import Services from "../components/Services";

export default function Example() {
  return (
    <div className='bg-white'>
      {/* Header */}
      <div className='relative pb-32 bg-red-800'>
        <div className='absolute inset-0'>
          <img
            className='w-full h-full object-cover'
            src='https://static.wixstatic.com/media/52c74d_5cfb9fd551934bdfbca4779feceb526e~mv2.jpg/v1/fill/w_1440,h_1046,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/52c74d_5cfb9fd551934bdfbca4779feceb526e~mv2.jpg'
            alt=''
          />
          <div
            className='absolute inset-0 bg-red-700 mix-blend-multiply'
            aria-hidden='true'
          />
        </div>
        <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-bold text-white md:text-5xl lg:text-6xl'>
            Services
          </h1>
          <p className='mt-6 max-w-3xl text-xl text-gray-100 font-medium'>
            We provide fire protection services in order to help you. Bay Guard
            Fire Protection offers fire extinguisher services and kitchen fire
            suppression systems. Whether you need a fire extinguisher,
            inspection, refills, or maintenance, we are here to help you.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className='-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8'
        aria-labelledby='contact-heading'
      >
        <h2 className='sr-only' id='contact-heading'>
          Contact us
        </h2>
        <Services />
      </section>
      <CustomMarquee />

      <ContactUs />
    </div>
  );
}
