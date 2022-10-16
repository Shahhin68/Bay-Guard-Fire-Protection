/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className='bg-white py-16 lg:py-24'>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6'>
        {/* <h1 className='lg:text-4xl text-3xl my-8 font-bold gradient-text'>
          Hear from our clients
        </h1> */}
        <div className='relative py-24 px-8 bg-red-400 rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8'>
          <div className='absolute inset-0 opacity-20 filter saturate-0 mix-blend-multiply'>
            <img
              src='https://static.wixstatic.com/media/52c74d_5cfb9fd551934bdfbca4779feceb526e~mv2.jpg/v1/fill/w_1440,h_1046,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/52c74d_5cfb9fd551934bdfbca4779feceb526e~mv2.jpg'
              alt=''
              className='w-full h-full object-cover'
            />
          </div>
          <div className='relative lg:col-span-1'>
            <img
              className='h-12 w-auto'
              src='https://tailwindui.com/img/logos/workcation-logo-white.svg'
              alt=''
            />
            <blockquote className='mt-6 text-white'>
              <p className='text-xl font-medium sm:text-2xl'>
                Workflow has completely transformed how we interact with
                customers. We've seen record bookings, higher customer
                satisfaction, and reduced churn.
              </p>
              <footer className='mt-6'>
                <p className='flex flex-col font-medium'>
                  <span>Marie Chilvers</span>
                  <span>CEO, Workcation</span>
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
