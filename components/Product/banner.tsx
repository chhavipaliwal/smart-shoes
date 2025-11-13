'use client';

import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function ProductBanner() {
  const technologies = [
    {
      icon: 'mdi:crosshairs-gps',
      title: 'Precision GPS',
      description:
        'Track your runs, walks, and explorations with pin-point accuracy. Never lose your way or your data.'
    },
    {
      icon: 'mdi:flash-circle',
      title: 'Wireless Charging',
      description:
        'Effortless and fast. Simply place your shoes on the Kysole X1 on the charging pad and be ready for your next adventure.'
    },
    {
      icon: 'mdi:lightbulb-on-outline',
      title: 'Dynamic LEDs',
      description:
        'Customizable LED lights for safety and style. Shine bright during night runs or match your outfit.'
    },
    {
      icon: 'mdi:phone-check',
      title: 'Full App Sync',
      description:
        'Connects seamlessly with the Kysole app to sync your activity, customize settings, and track goals.'
    },
    {
      icon: 'mdi:foot-print',
      title: 'Acu-Pressure Insoles',
      description:
        'Inspired by acupressure, our insoles reduce fatigue and provide unparalleled comfort all day long.'
    },
    {
      icon: 'mdi:shield-check',
      title: 'Eco-Durable Materials',
      description:
        'Crafted from long-lasting, eco-friendly materials that withstand the elements and reduce your footprint.'
    }
  ];

  return (
    <section className="bg-black text-white">
      {/* Hero Image */}
      <div className="mx-auto mb-16 max-w-7xl px-4">
        <Image
          src="/product-banner.png"
          alt="Kysole X1 Smart Shoes"
          width={1920}
          height={1080}
          className="w-full rounded-xl object-cover"
          priority
        />
      </div>

      {/* Heading */}
      <div className="mx-auto mb-12 max-w-7xl px-4 text-center">
        <h2 className="mb-3 text-4xl font-bold text-white">
          Core Technology Unleashed
        </h2>
        <p className="text-gray-400">
          Every component is designed for peak performance and seamless
          integration.
        </p>
      </div>

      {/* Technology Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="group relative rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            {/* Icon */}
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 transition-colors group-hover:border-cyan-400">
              <Icon
                icon={tech.icon}
                width="24"
                height="24"
                className="text-cyan-400"
              />
            </div>

            {/* Title */}
            <h3 className="mb-3 text-xl font-bold text-white">{tech.title}</h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-gray-400">
              {tech.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
