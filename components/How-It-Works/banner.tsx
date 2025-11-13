'use client';

import { Icon } from '@iconify/react';

export default function KysoleFeatures() {
  const mainFeatures = [
    {
      icon: 'mdi:lightbulb-outline',
      title: 'Dynamic LED',
      description: 'For night visibility'
    },
    {
      icon: 'mdi:map-marker-outline',
      title: 'GPS Tracking',
      description: 'Map your runs'
    },
    {
      icon: 'mdi:lightning-bolt',
      title: 'Wireless Charging',
      description: 'Limitless power'
    },
    {
      icon: 'mdi:shoe-prints',
      title: 'Step Tracking',
      description: 'Monitor your goals'
    }
  ];

  const techFeatures = [
    {
      icon: 'mdi:bluetooth',
      title: 'Bluetooth Sync',
      description: 'Real-time data transfer to your favorite health apps.'
    },
    {
      icon: 'mdi:power-plug',
      title: 'Wireless Charging',
      description: 'Simply place your shoes on the pad to power up'
    },
    {
      icon: 'mdi:led-on',
      title: 'LED Indicators',
      description: 'Customizable lights for safety and style.'
    },
    {
      icon: 'mdi:bell-outline',
      title: 'Smart Alerts',
      description: 'Voice and haptic feedback for notifications.'
    },
    {
      icon: 'mdi:map-search',
      title: 'GPS Tracking',
      description: 'Accurate location and route mapping'
    }
  ];

  const integrationSteps = [
    {
      icon: 'mdi:power',
      title: 'Activate',
      description: 'Shoes power on and sync via Bluetooth automatically.'
    },
    {
      icon: 'mdi:wifi',
      title: 'Track Use',
      description: 'The app tracks live stats on steps, pace, and location.'
    },
    {
      icon: 'mdi:cog',
      title: 'Get Alerts',
      description: 'LEDs and voice alerts notify you of goals and messages.'
    },
    {
      icon: 'mdi:wireless-charging',
      title: 'Charge',
      description: 'Place on the wireless pad to charge for your next journey.'
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero CTA Section */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        {/* Background gradient effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500 blur-3xl"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-balance text-5xl font-bold md:text-6xl">
            Step Into The Future.
          </h1>
          <p className="mb-10 text-balance text-xl text-gray-300">
            Kysole Smart Shoes merge cutting-edge technology with unparalleled
            comfort, lighting up your path to fitness.
          </p>

          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-cyan-500 px-8 py-3 font-semibold text-black transition hover:bg-cyan-600">
              Buy Now
            </button>
            <button className="rounded-full border-2 border-cyan-500 px-8 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black">
              Track Your Activity
            </button>
          </div>

          {/* Main Features Row */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <Icon
                  icon={feature.icon}
                  className="mb-3 h-8 w-8 text-cyan-400"
                />
                <h3 className="text-sm font-semibold">{feature.title}</h3>
                <p className="mt-1 text-xs text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced On-Board Technology Section */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Advanced On-Board Technology
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Every component is engineered for performance, connectivity, and
              convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {techFeatures.map((feature, index) => (
              <div
                key={index}
                className="group rounded-lg border border-gray-800 bg-gray-950 p-8 transition hover:border-cyan-500"
              >
                <Icon
                  icon={feature.icon}
                  className="mb-4 h-12 w-12 text-cyan-400 transition group-hover:scale-110"
                />
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seamless Integration Section */}
      <section className="border-t border-gray-800 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Seamless Integration
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Follow the journey from the moment you step in, to achieving your
              goals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {integrationSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < integrationSteps.length - 1 && (
                  <div className="absolute left-full top-12 -z-10 hidden h-0.5 w-full bg-gradient-to-r from-cyan-500 to-transparent lg:block"></div>
                )}

                <div className="text-center">
                  <div className="mx-auto mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full border-2 border-cyan-500 bg-gray-950">
                    <Icon
                      icon={step.icon}
                      className="h-10 w-10 text-cyan-400"
                    />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
