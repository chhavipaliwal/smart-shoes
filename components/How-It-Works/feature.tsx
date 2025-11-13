'use client';

import Image from 'next/image';

export default function KysoleSteps() {
  const steps = [
    {
      number: '01',
      title: 'Sync with the App',
      description:
        "Unbox your AuraStep shoes and connect them to our intuitive mobile app via Bluetooth. Customize your settings, set goals, and you're ready to go in seconds.",
      image: '/appp.png',
      position: 'right'
    },
    {
      number: '02',
      title: 'Walk, Run, Explore',
      description:
        'As you move, the integrated sensors and GPS track every step, route, and milestone. The LED lights enhance your visibility, keeping you safe day and night.',
      image: '/walk.png',
      position: 'left'
    },
    {
      number: '03',
      title: 'Recharge and Repeat',
      description:
        "After a long day, simply place your shoes on the wireless charging mat. They'll be powered up and ready for your next adventure by morning.",
      image: '/charge.png',
      position: 'right'
    }
  ];

  return (
    <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`mb-20 flex flex-col ${
              step.position === 'right'
                ? 'items-center gap-12 lg:flex-row'
                : 'items-center gap-12 lg:flex-row-reverse'
            }`}
          >
            {/* Text Content */}
            <div className="flex-1">
              <div className="mb-4 text-sm font-semibold tracking-widest text-cyan-400">
                STEP {step.number}
              </div>
              <h3 className="mb-6 text-balance text-4xl font-bold text-white sm:text-5xl">
                {step.title}
              </h3>
              <p className="text-lg leading-relaxed text-gray-400">
                {step.description}
              </p>
            </div>

            {/* Image Content */}
            <div className="flex-1">
              <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-b from-slate-800 to-slate-900 p-8">
                <Image
                  src={step.image || '/placeholder.svg'}
                  alt={step.title}
                  className="h-auto w-full rounded-lg object-cover"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
