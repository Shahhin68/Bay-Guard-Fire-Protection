const faqs = [
  {
    id: 1,
    question: "Why do I need a fire sprinkler system in my building?",
    answer:
      "Buildings with a working fire sprinkler system see an average property loss and risk of death per fire that is 50 to 66 percent lower than buildings without sprinkler systems.",
  },
  {
    id: 2,
    question: "How many fire extinguishers do I need in my building?",
    answer:
      "Number of fire extinguishers required for each building varied based on there layout and hazard level. ABC fire extinguisher must be supplied to every seven to fiv feet or less.",
  },
  {
    id: 3,
    question: "How often do I need fire extinguisher inspection?",
    answer:
      "Fire extinguishers are required to be inspected once a month and also they are required to be inspected and certified by a licensed fire extinguisher company once a year.",
  },
  {
    id: 4,
    question:
      "What kind of fire extinguisher do I need in my commercial kitchen?",
    answer:
      "If you own a restaurant, you already know you need a special type of fire suppression system to keep your kitchen safe from fires and also a Wet class K portable fire extinguishers is required for commercial kitchen.",
  },
  {
    id: 6,
    question:
      "What is the best type of fire extinguisher for sensitive electrical equipment?",
    answer:
      "If you have sensitive electronic equipment, such as in a computer room or data center, using a water or a dry chemical fire extinguisher can cause as much damage as a fire itself. Instead, use a Clean Agent Fire Extinguisher.",
  },
];

export default function Example() {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6'>
        <h2 className='text-3xl font-extrabold text-gray-900 text-center'>
          Frequently asked questions
        </h2>
        <div className='mt-12'>
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3'>
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  {faq.question}
                </dt>
                <dd className='mt-2 text-base text-gray-500'>{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
