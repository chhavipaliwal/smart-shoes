'use client';

import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function KysoleProductShowcase() {
  return (
    <section className="bg-black px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Product and Dashboard Section */}
        <div className="mb-20 grid gap-12 md:grid-cols-2">
          {/* Product Card */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-sm rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8">
              <div className="mb-6 flex h-64 items-center justify-center overflow-hidden rounded-xl bg-slate-700">
                <Image
                  src="/3d-design.png"
                  alt="Kysole Model X1"
                  width={304}
                  height={256}
                  className="object-cover"
                />
              </div>
              <h3 className="mb-2 text-center text-xl font-bold text-white">
                Kysole Model X1
              </h3>
              <p className="mb-6 text-center text-lg font-bold text-cyan-400">
                $249.99
              </p>
              <button className="flex w-full items-center justify-center gap-2 rounded-full bg-cyan-500 py-3 font-semibold text-white transition-colors hover:bg-cyan-600">
                <Icon icon="mdi:shopping-cart" width={20} height={20} />
                Add to Cart
              </button>
            </div>
          </div>

          {/* Command Center Dashboard */}
          <div className="rounded-2xl bg-slate-900 p-8">
            <div className="mb-6 flex items-start justify-between">
              <h3 className="text-2xl font-bold text-white">
                Your Command Center
              </h3>
              <div className="flex items-center gap-2 text-sm text-cyan-400">
                <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400"></div>
                Live Sync
              </div>
            </div>
            <p className="mb-8 text-sm text-gray-400">
              Monitor your progress, customize your shoes, and analyze your
              performance all from one powerful dashboard.
            </p>

            {/* Activity Dashboard */}
            <div className="mb-8">
              <h4 className="mb-4 font-bold text-white">Activity Dashboard</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-slate-800 p-4">
                  <p className="mb-1 text-xs text-gray-400">Steps Today</p>
                  <p className="text-2xl font-bold text-cyan-400">8,452</p>
                </div>
                <div className="rounded-lg bg-slate-800 p-4">
                  <p className="mb-1 text-xs text-gray-400">Distance</p>
                  <p className="text-2xl font-bold text-cyan-400">6.2 km</p>
                </div>
                <div className="rounded-lg bg-slate-800 p-4">
                  <p className="mb-1 text-xs text-gray-400">Battery</p>
                  <p className="text-2xl font-bold text-cyan-400">92%</p>
                </div>
                <div className="rounded-lg bg-slate-800 p-4">
                  <p className="mb-1 text-xs text-gray-400">Calories</p>
                  <p className="text-2xl font-bold text-cyan-400">310</p>
                </div>
              </div>
            </div>

            {/* GPS Location */}
            <div>
              <p className="mb-2 text-xs text-gray-400">GPS Location</p>
              <div className="flex h-32 items-center justify-center rounded-lg bg-slate-800">
                <Image
                  src="/gps-route-map-with-glowing-cyan-path.jpg"
                  alt="GPS Location Map"
                  width={300}
                  height={128}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              <p className="mt-2 text-xs text-gray-400">Central Park Run</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: 'mdi:hand-heart',
              title: 'Acupressure Comfort',
              description:
                'Acupuncture-inspired insoles relieve fatigue and enhance recovery after every run.'
            },
            {
              icon: 'mdi:leaf',
              title: 'Eco-Friendly Design',
              description:
                'Crafted from long-lasting, sustainable materials that are kind to the planet.'
            },
            {
              icon: 'mdi:shield-check',
              title: 'Enhanced Safety',
              description:
                'Bright, customizable LED lights ensure you are visible and safe during night-time activities.'
            }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-cyan-500">
                <Icon
                  icon={feature.icon}
                  width={40}
                  height={40}
                  className="text-cyan-400"
                />
              </div>
              <h4 className="mb-2 font-bold text-white">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
