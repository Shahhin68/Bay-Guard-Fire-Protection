import React from "react";
import { FireIcon } from "@heroicons/react/24/outline";

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

const Services = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-20 lg:grid-cols-4 lg:gap-x-4'>
      {services.map((link) => (
        <div
          key={link.name}
          className='flex flex-col bg-white rounded-2xl shadow-xl'
        >
          <div className='flex-1 relative pt-16 px-6 pb-8 md:px-8'>
            <div className='absolute top-0 p-5 inline-block bg-red-600 rounded-xl shadow-lg transform -translate-y-1/2'>
              <link.icon className='h-6 w-6 text-white' aria-hidden='true' />
            </div>
            <h3 className='text-xl font-medium text-gray-900'>{link.name}</h3>
            <p className='mt-4 text-base text-gray-500'>{link.description}</p>
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
  );
};

export default Services;
