'use client';

import { Icon } from '@iconify/react';

export default function KysoleFooter() {
  return (
    <footer className="w-full bg-black text-white">
      {/* Steps Section */}
      <div className="border-t border-gray-800 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl">
            Simple, Seamless, Smart.
          </h2>
          <p className="mb-16 text-center text-gray-400">
            Getting started with Kysole is as easy as 1-2-3.
          </p>

          {/* Steps Grid */}
          <div className="mb-12 grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-cyan-400">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 transform bg-black px-2 text-xs font-bold text-cyan-400">
                  1
                </span>
                <Icon
                  icon="mdi:smartphone"
                  className="text-3xl text-cyan-400"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold">Sync & Connect</h3>
              <p className="text-sm text-gray-400">
                Pair your Kysole shoes with our mobile app via Bluetooth to
                unlock all smart features.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-cyan-400">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 transform bg-black px-2 text-xs font-bold text-cyan-400">
                  2
                </span>
                <Icon
                  icon="mdi:shoe-print"
                  className="text-3xl text-cyan-400"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold">Wear & Go</h3>
              <p className="text-sm text-gray-400">
                Put on your shoes and start your day. Kysole automatically
                tracks your activity and stats.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-cyan-400">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 transform bg-black px-2 text-xs font-bold text-cyan-400">
                  3
                </span>
                <Icon
                  icon="mdi:lightning-bolt"
                  className="text-3xl text-cyan-400"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold">Charge & Repeat</h3>
              <p className="text-sm text-gray-400">
                When it&apos;s time to recharge, simply place your shoes on the
                wireless charging pad. No cables needed.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800"></div>
        </div>
      </div>

      {/* Footer Content */}
    </footer>
  );
}
