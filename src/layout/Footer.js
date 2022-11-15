import logo from "../assets/logo.png";

const navigation = {
  Services: [
    {
      name: "Fire Sprinkler Services",
      href: "/services/fire-sprinkler-system",
    },
    {
      name: "Fire Extinguisher Services",
      href: "/services/fire-extinguishers",
    },
    {
      name: "Kitchen Fire Suppression Services",
      href: "/services/kitchen-fire-suppression",
    },
    {
      name: "Emergency and Exit Light Services",
      href: "/services/exit-and-emergency-sign",
    },
  ],
  company: [
    { name: "About", href: "/about-us" },
    { name: "Contact Us", href: "/contact" },
  ],
};

export default function Example() {
  return (
    <footer className='bg-white' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='flex flex-col items-center my-12'>
          <img className='h-16 w-auto sm:h-24' src={logo} alt='Logo' />
          <p className='text-gray-700 text-2xl text-center sm:text-left'>
            Bay Guard Fire Protection Services
          </p>
          <p className='text-red-500 text-base text-center sm:text-left mb-6'>
            Providing fire protection services in entire Bay Area California
          </p>
          <a
            href='https://www.yelp.com/biz/bay-guard-fire-protection-san-francisco'
            target={"_blank"}
            rel='noreferrer noopenner'
            className='mt-2 inline-flex items-center justify-center whitespace-nowrap rounded-sm border border-transparent bg-red-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-600'
          >
            Check us out on Yelp!
          </a>
        </div>

        <div className='xl:grid xl:grid-cols-5 gap-4 xl:gap-8'>
          <div className='xl:col-span-3'>
            <div className='flex flex-col justify-between items-center sm:items-start md:justify-start'>
              <li className='text-gray-600'>
                C_16 CSLB License Number: 1085623 Fire Sprinkler
              </li>
              <li className='text-gray-600'>
                Automatic Extinguishing Systems License Number: A019043
              </li>
              <li className='text-gray-600'>
                Portable Fire Extinguisher License Number: #3756
              </li>
            </div>
          </div>
          <div className='xl:col-span-1'>
            <h3 className='block lg:hidden mt-6 lg:mt-0 text-sm font-medium text-red-600 tracking-wider uppercase'>
              Services
            </h3>
            <ul>
              {navigation.Services.filter((el, index) => index < 2).map(
                (item) => (
                  <li key={item.name} className='my-2'>
                    <a
                      href={item.href}
                      className='text-base text-gray-500 hover:text-gray-900 lg:text-gray-600 lg:font-medium'
                    >
                      {item.name}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className='xl:col-span-1'>
            <ul>
              {navigation.Services.filter((el, index) => index > 1).map(
                (item) => (
                  <li key={item.name} className='my-2'>
                    <a
                      href={item.href}
                      className='text-base text-gray-500 hover:text-gray-900 lg:text-gray-600 lg:font-medium'
                    >
                      {item.name}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className='mt-12 border-t border-gray-200 pt-4'>
          <p className='text-base text-gray-500 sm:text-center'>
            &copy; Copyright © 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
