// components/hero.tsx
import Image from 'next/image';
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background gradient accent */}
      <div className="pointer-events-none absolute inset-0" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full px-6 text-center sm:px-12 lg:px-20">
          {/* Main Heading */}
          <h1 className="mb-6 text-6xl font-bold leading-tight sm:text-7xl lg:text-7xl">
            Step Smart with <span className="text-primary">Kysole</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Experience the future of footwear. Smart, connected shoes that blend
            technology, comfort, and sustainability to elevate your every move.
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Primary Button - Blue filled */}
            <button className="rounded-full bg-primary px-8 py-4 font-semibold text-slate-900 transition-colors duration-200 hover:bg-blue-300">
              Explore Features
            </button>

            {/* Secondary Button - Outlined */}
            <button className="flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-slate-900">
              Watch Video <span>▶</span>
            </button>
          </div>

          {/* Product Image Placeholder */}
          <div className="relative flex h-80 items-center justify-center sm:h-96">
            <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-t from-blue-500/20 to-transparent">
              <Image
                src="/banner.png"
                alt="Product Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
