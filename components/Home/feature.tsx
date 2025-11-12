// components/features.tsx

export default function Features() {
  const features = [
    {
      icon: '📍',
      title: 'Location Tracking',
      description:
        'Built-in GPS for security and precise logging of your outdoor activities, from city jogs to mountain trails.'
    },
    {
      icon: '🌿',
      title: 'Acupuncture-Inspired Comfort',
      description:
        'Smart sole design relieves pressure points, reducing fatigue and maximizing comfort throughout your day.'
    },
    {
      icon: '📊',
      title: 'Step Count & Notifications',
      description:
        'Track your steps with precision and receive progress updates and goal reminders directly to your app.'
    },
    {
      icon: '💡',
      title: 'LED Safety Lights',
      description:
        'Enhance your visibility and safety during night runs with customizable, bright LED indicators.'
    },
    {
      icon: '⚡',
      title: 'Wireless Charging',
      description:
        'An effortless, cable-free charging experience. Simply place your Kysole shoes on the included pad.'
    },
    {
      icon: '♻️',
      title: 'Eco-Friendly Design',
      description:
        'Crafted with durable, environmentally conscious materials for a long-lasting, sustainable footprint.'
    }
  ];

  return (
    <section className="w-full sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Innovation in Every Step
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Kysole integrates cutting-edge technology to provide an unparalleled
            experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-slate-700 bg-slate-800 p-6 transition-colors duration-300 hover:border-blue-500 sm:p-8"
            >
              {/* Icon */}
              <div className="mb-4 text-4xl">{feature.icon}</div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
