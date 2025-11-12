'use client';

import { Icon } from '@iconify/react';

const activityData = [
  { day: 'Mon', steps: 8200 },
  { day: 'Tue', steps: 8900 },
  { day: 'Wed', steps: 10500 },
  { day: 'Thu', steps: 7800 },
  { day: 'Fri', steps: 12500 },
  { day: 'Sat', steps: 14200 },
  { day: 'Sun', steps: 9100 }
];

export default function KysoleDashboard() {
  const maxSteps = Math.max(...activityData.map((d) => d.steps));
  const chartHeight = 300;
  const chartWidth = 100;
  const padding = 40;

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      {/* Header */}
      <div className="mx-auto mb-12 max-w-6xl">
        <h1 className="mb-4 text-4xl font-bold">
          Your Personal Command Center
        </h1>
        <p className="max-w-2xl text-gray-400">
          Track your activity, monitor shoe status, and visualize your progress
          with the integrated Kysole smart dashboard.
        </p>
      </div>

      {/* Main Dashboard Grid */}
      <div className="mx-auto max-w-7xl rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-4 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Weekly Activity Chart - Left Side, Takes 2 columns */}
            <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-8 lg:col-span-2">
              <div className="mb-6 flex items-center gap-2">
                <Icon icon="mdi:activity" className="h-5 w-5 text-cyan-400" />
                <h2 className="text-xl font-semibold">Weekly Activity</h2>
              </div>

              <div className="overflow-x-auto">
                <svg
                  width="100%"
                  height="350"
                  viewBox={`0 0 700 350`}
                  preserveAspectRatio="xMidYMid meet"
                  className="min-w-full"
                >
                  {/* Background grid */}
                  <g stroke="rgba(100, 100, 100, 0.2)" strokeWidth="1">
                    <line x1="60" y1="50" x2="680" y2="50" />
                    <line x1="60" y1="100" x2="680" y2="100" />
                    <line x1="60" y1="150" x2="680" y2="150" />
                    <line x1="60" y1="200" x2="680" y2="200" />
                    <line x1="60" y1="250" x2="680" y2="250" />
                    <line x1="60" y1="300" x2="680" y2="300" />
                  </g>

                  {/* Y-axis labels */}
                  <g fill="#888" fontSize="12">
                    <text x="45" y="310" textAnchor="end">
                      0
                    </text>
                    <text x="45" y="260" textAnchor="end">
                      4k
                    </text>
                    <text x="45" y="210" textAnchor="end">
                      8k
                    </text>
                    <text x="45" y="160" textAnchor="end">
                      12k
                    </text>
                    <text x="45" y="110" textAnchor="end">
                      14k
                    </text>
                  </g>

                  {/* Axes */}
                  <line
                    x1="60"
                    y1="50"
                    x2="60"
                    y2="310"
                    stroke="#888"
                    strokeWidth="2"
                  />
                  <line
                    x1="60"
                    y1="310"
                    x2="680"
                    y2="310"
                    stroke="#888"
                    strokeWidth="2"
                  />

                  {/* Area chart path */}
                  <defs>
                    <linearGradient
                      id="areaGradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                      <stop
                        offset="100%"
                        stopColor="#06b6d4"
                        stopOpacity="0.1"
                      />
                    </linearGradient>
                  </defs>

                  {/* Area fill */}
                  <path
                    d={`M 100 ${310 - (activityData[0].steps / maxSteps) * 250} ${activityData
                      .map(
                        (d, i) =>
                          `L ${100 + i * 85} ${310 - (d.steps / maxSteps) * 250}`
                      )
                      .join(' ')} L 680 310 L 100 310 Z`}
                    fill="url(#areaGradient)"
                  />

                  {/* Line stroke */}
                  <polyline
                    points={activityData
                      .map(
                        (d, i) =>
                          `${100 + i * 85},${310 - (d.steps / maxSteps) * 250}`
                      )
                      .join(' ')}
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="2"
                  />

                  {/* Data points */}
                  {activityData.map((d, i) => (
                    <circle
                      key={i}
                      cx={100 + i * 85}
                      cy={310 - (d.steps / maxSteps) * 250}
                      r="4"
                      fill="#06b6d4"
                    />
                  ))}

                  {/* X-axis labels */}
                  <g fill="#888" fontSize="12">
                    {activityData.map((d, i) => (
                      <text
                        key={i}
                        x={100 + i * 85}
                        y="330"
                        textAnchor="middle"
                      >
                        {d.day}
                      </text>
                    ))}
                  </g>

                  {/* Y-axis label */}
                  <text
                    x="20"
                    y="180"
                    fontSize="12"
                    fill="#888"
                    textAnchor="middle"
                    transform="rotate(-90 20 180)"
                  >
                    Steps
                  </text>
                </svg>
              </div>
            </div>

            {/* Right Column - Battery & GPS */}
            <div className="flex flex-col gap-6">
              {/* Battery Status */}
              <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="flex items-center gap-2 text-lg font-semibold">
                    <Icon
                      icon="mdi:lightning-bolt"
                      className="h-5 w-5 text-green-400"
                    />
                    Battery Status
                  </h3>
                  <div className="text-2xl font-bold text-green-400">87%</div>
                </div>

                <div className="h-2 w-full rounded-full bg-gray-700">
                  <div className="h-2 w-[87%] rounded-full bg-gradient-to-r from-green-400 to-green-500"></div>
                </div>

                <p className="mt-4 text-sm text-gray-500">5 days remaining</p>
              </div>

              {/* GPS Location */}
              <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                  <Icon
                    icon="mdi:map-marker"
                    className="h-5 w-5 text-cyan-400"
                  />
                  GPS Location
                </h3>

                {/* Map Visualization Placeholder */}
                <div className="relative mb-4 h-40 w-full overflow-hidden rounded-lg bg-gradient-to-b from-gray-800 to-gray-900">
                  {/* Simulated map with route path */}
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 300 160"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    {/* Background map pattern */}
                    <g opacity="0.3" stroke="#444" strokeWidth="0.5">
                      <line x1="0" y1="40" x2="300" y2="40" />
                      <line x1="0" y1="80" x2="300" y2="80" />
                      <line x1="0" y1="120" x2="300" y2="120" />
                      <line x1="75" y1="0" x2="75" y2="160" />
                      <line x1="150" y1="0" x2="150" y2="160" />
                      <line x1="225" y1="0" x2="225" y2="160" />
                    </g>

                    {/* Route path with glow effect */}
                    <defs>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Glowing path */}
                    <path
                      d="M 80 120 Q 120 100 140 60 T 200 40"
                      stroke="#06b6d4"
                      strokeWidth="3"
                      fill="none"
                      filter="url(#glow)"
                    />

                    {/* Start marker */}
                    <circle cx="80" cy="120" r="6" fill="#10b981" />

                    {/* End marker */}
                    <circle cx="200" cy="40" r="6" fill="#ef4444" />
                  </svg>
                </div>

                <p className="text-sm text-gray-400">
                  Last sync:{' '}
                  <span className="font-medium text-white">Central Park</span>,
                  5 mins ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
