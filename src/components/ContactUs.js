import {
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const form = useRef();
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const currentForm = form.current;
    const errors = {};

    // Required fields validation
    if (!currentForm["first-name"].value.trim()) {
      errors["first-name"] = "First name is required";
    }

    if (!currentForm["last-name"].value.trim()) {
      errors["last-name"] = "Last name is required";
    }

    if (!currentForm.email.value.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(currentForm.email.value)) {
      errors.email = "Email is invalid";
    }

    if (!currentForm.subject.value.trim()) {
      errors.subject = "Subject is required";
    }

    if (!currentForm.message.value.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_bayguard",
        "bayguardfireprotection",
        form.current,
        "a6bfEA_PfsKHzEnj2"
      )
      .then(
        (result) => {
          navigate("/thank-you");
          window.gtag("event", "conversion", {
            send_to: "AW-10808147810/eEW7CKnPiecDEOL-3KEo",
          });
        },
        (error) => {
          setIsSubmitting(false);
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6'>
      <div className='relative bg-white shadow-xl'>
        <h2 className='sr-only'>Contact us</h2>

        <div className='grid grid-cols-1 lg:grid-cols-3 shadow-sm border border-red-700'>
          {/* Contact information */}
          <div className='relative overflow-hidden py-10 px-6 bg-red-700 sm:px-10 xl:p-12'>
            <div
              className='absolute inset-0 pointer-events-none sm:hidden'
              aria-hidden='true'
            >
              <svg
                className='absolute inset-0 w-full h-full'
                width={343}
                height={388}
                viewBox='0 0 343 388'
                fill='none'
                preserveAspectRatio='xMidYMid slice'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
                  fill='url(#linear1)'
                  fillOpacity='.1'
                />
                <defs>
                  <linearGradient
                    id='linear1'
                    x1='254.553'
                    y1='107.554'
                    x2='961.66'
                    y2='814.66'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#fff' />
                    <stop offset={1} stopColor='#fff' stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden'
              aria-hidden='true'
            >
              <svg
                className='absolute inset-0 w-full h-full'
                width={359}
                height={339}
                viewBox='0 0 359 339'
                fill='none'
                preserveAspectRatio='xMidYMid slice'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
                  fill='url(#linear2)'
                  fillOpacity='.1'
                />
                <defs>
                  <linearGradient
                    id='linear2'
                    x1='192.553'
                    y1='28.553'
                    x2='899.66'
                    y2='735.66'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#fff' />
                    <stop offset={1} stopColor='#fff' stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block'
              aria-hidden='true'
            >
              <svg
                className='absolute inset-0 w-full h-full'
                width={160}
                height={678}
                viewBox='0 0 160 678'
                fill='none'
                preserveAspectRatio='xMidYMid slice'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
                  fill='url(#linear3)'
                  fillOpacity='.1'
                />
                <defs>
                  <linearGradient
                    id='linear3'
                    x1='192.553'
                    y1='325.553'
                    x2='899.66'
                    y2='1032.66'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#fff' />
                    <stop offset={1} stopColor='#fff' stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className='text-lg font-medium text-white'>
              Contact information
            </h3>
            <p className='mt-6 text-lg text-red-50 max-w-3xl'>
              Contact Us Today to Receive a Free Quote!
            </p>
            <dl className='mt-8 space-y-6'>
              <dt>
                <span className='sr-only'>Phone number</span>
              </dt>
              <dd className='flex text-base text-red-50'>
                <PhoneIcon
                  className='flex-shrink-0 w-6 h-6 text-red-200'
                  aria-hidden='true'
                />
                <span className='ml-3'>
                  <a href='tel:+14083188636'>+1 (408) 318-8636</a>
                </span>
              </dd>
              <dt>
                <span className='sr-only'>Email</span>
              </dt>
              <dd className='flex text-base text-red-50'>
                <EnvelopeIcon
                  className='flex-shrink-0 w-6 h-6 text-red-200'
                  aria-hidden='true'
                />
                <span className='ml-3'>
                  <a className='' href='mailto:info@bayguardfireprotection.com'>
                    info@bayguardfireprotection.com
                  </a>
                </span>
              </dd>
              <dd className='flex text-base text-red-50'>
                <ClockIcon
                  className='flex-shrink-0 w-6 h-6 text-red-200'
                  aria-hidden='true'
                />
                <span className='ml-3'>24/7 Business Hours</span>
              </dd>
            </dl>
          </div>

          {/* Contact form */}
          <div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'>
            <h3 className='text-lg font-medium text-gray-900'>
              Send us a message
            </h3>
            <form
              onSubmit={handleSubmit}
              ref={form}
              className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
            >
              <div>
                <label
                  htmlFor='first-name'
                  className='block text-sm font-medium text-gray-900'
                >
                  First name <span className='text-red-600'>*</span>
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='first-name'
                    id='first-name'
                    autoComplete='given-name'
                    className={`py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md ${
                      formErrors["first-name"] ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {formErrors["first-name"] && (
                    <p className='mt-1 text-sm text-red-600'>
                      {formErrors["first-name"]}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor='last-name'
                  className='block text-sm font-medium text-gray-900'
                >
                  Last name <span className='text-red-600'>*</span>
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='last-name'
                    id='last-name'
                    autoComplete='family-name'
                    className={`py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md ${
                      formErrors["last-name"] ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {formErrors["last-name"] && (
                    <p className='mt-1 text-sm text-red-600'>
                      {formErrors["last-name"]}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-900'
                >
                  Email <span className='text-red-600'>*</span>
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    className={`py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md ${
                      formErrors.email ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {formErrors.email && (
                    <p className='mt-1 text-sm text-red-600'>
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <div className='flex justify-between'>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-gray-900'
                  >
                    Phone
                  </label>
                  <span id='phone-optional' className='text-sm text-gray-500'>
                    Optional
                  </span>
                </div>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    autoComplete='tel'
                    className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md'
                    aria-describedby='phone-optional'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-900'
                >
                  Subject <span className='text-red-600'>*</span>
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='subject'
                    id='subject'
                    className={`py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md ${
                      formErrors.subject ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {formErrors.subject && (
                    <p className='mt-1 text-sm text-red-600'>
                      {formErrors.subject}
                    </p>
                  )}
                </div>
              </div>
              <div className='sm:col-span-2'>
                <div className='flex justify-between'>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-900'
                  >
                    Message <span className='text-red-600'>*</span>
                  </label>
                  <span id='message-max' className='text-sm text-gray-500'>
                    Max. 500 characters
                  </span>
                </div>
                <div className='mt-1'>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    className={`py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border border-gray-300 rounded-md ${
                      formErrors.message ? "border-red-500" : ""
                    }`}
                    aria-describedby='message-max'
                    maxLength={500}
                    required
                  />
                  {formErrors.message && (
                    <p className='mt-1 text-sm text-red-600'>
                      {formErrors.message}
                    </p>
                  )}
                </div>
              </div>
              <div className='sm:col-span-2 sm:flex sm:justify-end'>
                <button
                  type='submit'
                  className='mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto disabled:opacity-50'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
