'use client';

import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function KysoleAnatomyJourney() {
  const timelineEvents = [
    {
      year: '2022',
      period: 'The Idea',
      title: 'Concept & Prototyping',
      description:
        'Kysole was born from the desire to make every run safer and smarter. The first prototype was built in a garage, combining LEDs with a simple step tracker.',
      dotColor: 'bg-cyan-400'
    },
    {
      year: '2023',
      period: 'The Launch',
      title: 'First Generation Release',
      description:
        'After securing funding and refining the design, the Kysole Model 1 was launched, selling out within the first 24 hours.',
      dotColor: 'bg-green-400'
    },
    {
      year: '2025',
      period: 'The Future',
      title: 'Global Expansion & AI Integration',
      description:
        'Expanding to new markets and integrating an AI-powered gait analysis coach directly into the Kysole app, redefining personal fitness.',
      dotColor: 'bg-cyan-400'
    }
  ];

  const features = [
    {
      icon: 'game-icons:cpu',
      title: 'Proprietary Ky-Core™ Processor',
      description: 'For instantaneous data processing and response.'
    },
    {
      icon: 'game-icons:heartbeats',
      title: 'Acupressure-Point Comfort System',
      description: 'Inspired by acupuncture for enhanced fatigue relief.'
    },
    {
      icon: 'game-icons:leaf',
      title: 'Eco-Weave™ Upper Fabric',
      description: 'Breathable, durable, and made from recycled materials.'
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Anatomy Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left side - Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
                <Image
                  src="/3d-design.png"
                  alt="Kysole X1 Anatomy"
                  width={500}
                  height={600}
                  className="relative z-10 h-auto w-full rounded-lg border border-cyan-500/30 object-cover shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-wider sm:text-5xl">
                THE ANATOMY OF
                <br />
                INTELLIGENCE
              </h2>

              <p className="text-lg leading-relaxed text-gray-300">
                Every Kysole shoe is a symphony of advanced technology and
                meticulous craftsmanship. We&apos;ve deconstructed traditional
                footwear and rebuilt it from the ground up, embedding our
                proprietary sensor suite, wireless charging coil, and a powerful
                processing unit directly into a durable, flexible sole.
              </p>

              {/* Features */}
              <div className="space-y-4 pt-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <Icon
                        icon={feature.icon}
                        className="h-6 w-6 text-cyan-400"
                      />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Section Title */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-wider sm:text-5xl">
              OUR JOURNEY
            </h2>
            <p className="text-lg text-gray-400">
              From a spark of an idea to a global community.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative space-y-8">
            {/* Vertical line */}
            <div className="absolute bottom-0 left-4 top-0 w-1 bg-gradient-to-b from-cyan-500 via-green-500 to-cyan-500 sm:left-1/2 sm:-translate-x-1/2 sm:transform"></div>

            {/* Timeline Events */}
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex gap-8 sm:gap-0 ${
                  index % 2 === 0
                    ? 'sm:pr-1/2 sm:flex-row-reverse sm:pl-0'
                    : 'sm:pl-1/2 sm:pr-0'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 top-6 z-10 flex h-9 w-9 items-center justify-center rounded-full border-4 border-black bg-black sm:left-1/2 sm:top-8 sm:-translate-x-1/2 sm:transform">
                  <div
                    className={`h-3 w-3 rounded-full ${event.dotColor}`}
                  ></div>
                </div>

                {/* Content */}
                <div className="pl-20 sm:w-1/2 sm:pl-0 sm:pr-12">
                  <div className="rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900 to-black p-6 transition-colors hover:border-cyan-500/50">
                    <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                      {event.year} - {event.period}
                    </div>
                    <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                      {event.title}
                    </h3>
                    <p className="leading-relaxed text-gray-400">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
