/* This example requires Tailwind CSS v2.0+ */
import { PhoneIcon } from '@heroicons/react/20/solid';
import {
  MegaphoneIcon,
  // PhoneIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

export default function Banner() {
  return (
    <div className='bg-red-600'>
      <div className='mx-auto max-w-7xl py-2 px-3 sm:px-6 lg:px-8'>
        <div className='flex flex-wrap items-center justify-between'>
          <div className='flex w-0 flex-1 items-center'>
            <span className='hidden md:inline-flex rounded-lg bg-red-800 p-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='#FFF'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46'
                />
              </svg>
            </span>
            <p className='hidden md:inline ml-3 truncate font-medium text-white'>
              24/7 Service in the Bay Area
            </p>
          </div>
          <div className='order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto flex items-center'>
            <PhoneIcon
              className='flex-shrink-0 w-6 h-6 text-white'
              aria-hidden='true'
            />
            <span className='ml-3 text-white font-semibold'>
              <a href="tel:+14083188636">
              +1 (408) 318-8636
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
