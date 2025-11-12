import Image from 'next/image';

export default function Order() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl rounded-3xl bg-gradient-to-b from-slate-900 to-black p-5">
              <Image
                src="/Order-hero.png"
                alt="Kysole One Smart Shoe"
                className="h-auto w-full rounded-2xl"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-sm font-semibold tracking-widest text-primary">
                KYSOLE ONE
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight md:text-5xl">
              The Only Shoe You&apos;ll Ever Need.
            </h1>

            <p className="text-lg leading-relaxed text-gray-400">
              The Kysole One is engineered for performance, designed for life.
              It seamlessly integrates our core technologies into a sleek,
              comfortable, and durable frame. Ready for any challenge.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="text-xl text-primary">✓</span>
                <span className="text-gray-300">
                  Bluetooth 5.2 Connectivity
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl text-primary">✓</span>
                <span className="text-gray-300">7-Day Battery Life</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl text-primary">✓</span>
                <span className="text-gray-300">Water-Resistant (IPX7)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl text-primary">✓</span>
                <span className="text-gray-300">
                  Ultra-lightweight Carbon Fiber Sole
                </span>
              </li>
            </ul>

            <div className="flex items-center gap-6 pt-4">
              <span className="text-5xl font-bold">$299</span>
              <button className="rounded-full bg-primary px-8 py-3 font-semibold text-black transition-colors hover:bg-cyan-300">
                🛒 Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
