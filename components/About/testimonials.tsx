'use client';

import Image from 'next/image';

export default function KysoleTestimonial() {
  return (
    <div className="relative w-full bg-black px-4 py-20 sm:px-6 lg:px-8">
      {/* Testimonial Section */}
      <div className="mx-auto mb-20 max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Founder Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
              <div className="relative overflow-hidden rounded-lg border border-cyan-500/30 shadow-2xl">
                <Image
                  src="/founder.jpg"
                  alt="Elara Vance, Founder & Chief Innovator"
                  width={500}
                  height={600}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <svg
                className="mb-4 h-12 w-12 text-cyan-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-6 0-8.812 19.036-9 24h15c0-1 0-4.5-1-6.5-.712-1.567-1.382-1.094-1.488-2.972-.116-1.966-1.48-2.5-4.5-2.5s-4 .5-4 4c0 1 0 8 7 8z" />
              </svg>
            </div>
            <p className="mb-8 text-lg italic leading-relaxed text-gray-300 md:text-xl">
              We&apos;re not just creating a product; we&apos;re architecting a
              new relationship between humans and their environment. Kysole is
              the first step towards a future where personal technology is truly
              an extension of ourselves—anticipating our needs, enhancing our
              abilities, and empowering our lives.
            </p>
            <div>
              <p className="text-lg font-bold text-white">Elara Vance</p>
              <p className="text-sm text-cyan-400">Founder & Chief Innovator</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="mb-6 text-balance text-4xl font-bold text-white md:text-5xl">
          Ready to Step into the Future?
        </h2>
        <p className="mb-12 text-balance text-lg text-gray-400">
          Experience the revolution in footwear. Explore our technology, track
          your progress, and join a community that&apos;s moving forward.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="transform rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
            Shop Kysole One
          </button>
          <button className="rounded-full border-2 border-gray-600 px-8 py-3 font-semibold text-gray-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400">
            Explore Features
          </button>
        </div>
      </div>
    </div>
  );
}
