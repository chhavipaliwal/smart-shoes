'use client';

import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function KysoleGalleryCTA() {
  return (
    <section className="bg-black py-20">
      {/* Gallery Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Designed for Every Moment
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            From urban exploration to intense workouts, Kysole X1 adapts to your
            lifestyle.
          </p>
        </div>

        {/* Image Gallery Grid */}
        <Image
          src="/product-feature.png"
          alt="Kysole X1 Gallery"
          width={1920}
          height={1080}
          className="w-full rounded-xl object-cover"
          priority
        />
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-black">
          <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:p-12">
            {/* Left Content */}
            <div>
              <h3 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
                Step Into The Future.
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-gray-400">
                The Kysole X1 is more than a shoe—it&apos;s your personal
                fitness companion. Order yours today and revolutionize the way
                you move.
              </p>
              <button className="flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-3 font-semibold text-black transition-colors duration-300 hover:bg-cyan-600">
                <Icon icon="mdi:shopping-cart" width="20" height="20" />
                Buy Now - $249
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <div className="relative h-80 w-full max-w-sm overflow-hidden rounded-lg">
                <Image
                  src="/1.png"
                  alt="Kysole X1 White"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
