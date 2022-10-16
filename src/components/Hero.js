import { HeroImage } from "../assets";
export default function Hero() {
  return (
    <div className='relative bg-white overflow-hidden pb-24'>
      <main className='mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32'>
        <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
          <div className='sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left'>
            <h1>
              <span className='mt-1 block text-4xl tracking-tight font-bold sm:text-6xl'>
                <span className='block text-red-600 gradient-text'>
                  Bay Guard
                </span>
                <span className='block text-red-700 text-5xl my-3'>
                  Fire Protection Services
                </span>
              </span>
            </h1>
            <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
              We provide fire protection services in order to help you. Bay
              Guard Fire Protection offers fire extinguisher services and
              kitchen fire suppression systems. Whether you need a fire
              extinguisher, inspection, refills, or maintenance, we are here to
              help you.
            </p>
          </div>
          <div className='mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
            <svg
              className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden'
              width={640}
              height={784}
              fill='none'
              viewBox='0 0 640 784'
              aria-hidden='true'
            >
              <defs>
                <pattern
                  id='4f4f415c-a0e9-44c2-9601-6ded5a34a13e'
                  x={118}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                y={72}
                width={640}
                height={640}
                className='text-gray-50'
                fill='currentColor'
              />
              <rect
                x={118}
                width={404}
                height={784}
                fill='url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)'
              />
            </svg>
            <div className='relative mx-auto w-full rounded-lg lg:max-w-md'>
              <img className='w-full' src={HeroImage} alt='Hero' />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
