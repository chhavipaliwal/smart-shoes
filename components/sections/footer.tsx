import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <div>
      <div className="px-6 py-12 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="mb-4 flex items-center gap-2">
                <Icon
                  icon="mdi:lightning-bolt"
                  className="text-2xl text-cyan-400"
                />
                <span className="text-xl font-bold">KYSOLE</span>
              </div>
              <p className="mb-6 text-sm text-gray-400">
                Step into the future.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-cyan-400 transition hover:text-cyan-300"
                >
                  <Icon icon="mdi:twitter" className="text-xl" />
                </a>
                <a
                  href="#"
                  className="text-cyan-400 transition hover:text-cyan-300"
                >
                  <Icon icon="mdi:instagram" className="text-xl" />
                </a>
                <a
                  href="#"
                  className="text-cyan-400 transition hover:text-cyan-300"
                >
                  <Icon icon="mdi:facebook" className="text-xl" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="mb-4 font-bold">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    Technology
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="mb-4 font-bold">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    Sustainability
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="mb-4 font-bold">Stay Connected</h4>
              <p className="mb-4 text-sm text-gray-400">
                Get the latest updates and offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none"
                />
                <button className="bg-cyan-400 px-4 py-2 font-semibold text-black transition hover:bg-cyan-300">
                  <Icon icon="mdi:arrow-right" className="text-xl" />
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© 2025 Kysole. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
