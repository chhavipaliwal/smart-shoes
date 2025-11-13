'use client';

import Image from 'next/image';

export default function KysoleAbout() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <div className="relative flex min-h-96 items-center justify-center overflow-hidden px-4 py-20">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-cyan-500 mix-blend-screen blur-3xl filter" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-600 mix-blend-screen blur-3xl filter" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-wider text-white md:text-7xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              WE ARE KYSOLE
            </span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-300 md:text-2xl">
            Engineering the next leap in human movement, where technology and
            biology move as one.
          </p>
        </div>
      </div>

      {/* Genesis Section */}
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl">
              Our Genesis
            </h2>

            <p className="text-lg leading-relaxed text-gray-300">
              Kysole was born from a simple yet profound question: what if our
              footwear could do more than just protect our feet? What if it
              could enhance our lives, connect us to our health, and keep us
              safe in a seamless, intuitive way?
            </p>

            <p className="text-lg leading-relaxed text-gray-300">
              We are a collective of bio-engineers, data scientists, and
              visionary designers united by a passion for innovation. We
              don&apos;t just build smart shoes; we craft intelligent companions
              for your journey, powered by cutting-edge technology and a deep
              understanding of human anatomy.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-96 min-h-96 md:h-full">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-cyan-500/30 bg-black/50 backdrop-blur-sm">
              <Image
                src="/about.png"
                alt="Kysole futuristic lab with holographic shoe displays"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
