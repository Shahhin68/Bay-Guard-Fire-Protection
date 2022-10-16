/* This example requires Tailwind CSS v2.0+ */
import { FireIcon } from "@heroicons/react/24/outline";
import ContactUs from "../components/ContactUs";

const services = [
  {
    name: "Fire Extinguisher ",
    description:
      "An active fire protection device used to extinguish or control small fires, often in emergencies.",
    href: "/services/fire-extinguishers",
    icon: FireIcon,
  },
  {
    name: "Fire Sprinkler",
    description:
      "Discharges water when the effects of a fire have been detected, such as when a predetermined temperature has been exceeded.",
    href: "/services/fire-sprinkler-system",
    icon: FireIcon,
  },
  {
    name: "Kitchen Fire Suppression ",
    description:
      "An automatic pre-engineered system; designed to protect the kitchen area including ducts and plenums.",
    href: "/services/kitchen-fire-suppression",
    icon: FireIcon,
  },
  {
    name: "Emergency and Exit Light",
    description: "Designed to guide people to safety during an emergency.",
    href: "/services/exit-and-emergency-sign",
    icon: FireIcon,
  },
];

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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-20 lg:grid-cols-4 lg:gap-x-4'>
          {services.map((link) => (
            <div
              key={link.name}
              className='flex flex-col bg-white rounded-2xl shadow-xl'
            >
              <div className='flex-1 relative pt-16 px-6 pb-8 md:px-8'>
                <div className='absolute top-0 p-5 inline-block bg-red-600 rounded-xl shadow-lg transform -translate-y-1/2'>
                  <link.icon
                    className='h-6 w-6 text-white'
                    aria-hidden='true'
                  />
                </div>
                <h3 className='text-xl font-medium text-gray-900'>
                  {link.name}
                </h3>
                <p className='mt-4 text-base text-gray-500'>
                  {link.description}
                </p>
              </div>
              <div className='p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8'>
                <a
                  href={link.href}
                  className='text-base font-medium text-red-700 hover:text-red-600'
                >
                  View More<span aria-hidden='true'> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactUs />
    </div>
  );
}
