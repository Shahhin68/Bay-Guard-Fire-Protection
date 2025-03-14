/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, FireIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const Services = [
  {
    name: "Fire Extinguisher",
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
    name: "Kitchen Fire Suppression",
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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Popover className='relative bg-white z-50'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 z-50'>
        <div className='flex items-center justify-between border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link to='/'>
              <span className='sr-only'>Bay Guard Fire Protection</span>
              <img
                className='h-8 w-auto sm:h-16'
                src={logo}
                alt='Bay Guard Fire Protection'
              />
            </Link>
          </div>
          <div className='-my-2 -mr-2 md:hidden'>
            <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none'>
              <span className='sr-only'>Open menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <Popover.Group as='nav' className='hidden space-x-10 md:flex'>
            <Link
              to='/'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Home
            </Link>
            {/* <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none"
                    )}
                  >
                    <span>Services</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden='true'
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  >
                    <Popover.Panel className='absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'>
                      <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                          {Services.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                            >
                              <item.icon
                                className='h-6 w-6 flex-shrink-0 text-red-600'
                                aria-hidden='true'
                              />
                              <div className='ml-4'>
                                <p className='text-base font-medium text-gray-900'>
                                  {item.name}
                                </p>
                                <p className='mt-1 text-sm text-gray-500'>
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition> 
                </>
              )}
            </Popover> */}
            <Link
              to='/services'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Services
            </Link>
            <Link
              to='/about-us'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
            >
              About us
            </Link>
            <Link
              to='/locations'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Locations
            </Link>
          </Popover.Group>
          <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0'>
            <Link
              to='/contact'
              className='ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700'
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'
        >
          <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className='px-5 pt-5 pb-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <img
                    className='h-8 w-auto'
                    src={logo}
                    alt='Bay Guard Fire Protection'
                  />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none'>
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid gap-y-8'>
                  {Services.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className='-m-3 flex items-center rounded-md p-3 hover:bg-gray-50'
                    >
                      <item.icon
                        className='h-6 w-6 flex-shrink-0 text-red-600'
                        aria-hidden='true'
                      />
                      <span className='ml-3 text-base font-medium text-gray-900'>
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className='space-y-6 py-6 px-5'>
              <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                <Link
                  to='/'
                  className='text-base font-medium text-gray-500 hover:text-gray-900'
                >
                  Home
                </Link>
                <Link
                  to='/about-us'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  About us
                </Link>

                <Link
                  to='/locations'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Locations
                </Link>
                <Link
                  to='/contact'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
