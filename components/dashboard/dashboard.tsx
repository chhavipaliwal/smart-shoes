'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const [stats] = useState({
    steps: { current: 8452, goal: 10000 },
    distance: { current: 6.7, unit: 'km' },
    calories: { current: 420, unit: 'kcal' },
    activeTime: { current: '1h 15m', unit: 'Total Duration' }
  });

  const [weeklyData] = useState([
    { day: 'Mon', steps: 8000 },
    { day: 'Tue', steps: 8500 },
    { day: 'Wed', steps: 10000 },
    { day: 'Thu', steps: 8000 },
    { day: 'Fri', steps: 12000 },
    { day: 'Sat', steps: 11500 },
    { day: 'Sun', steps: 9000 }
  ]);

  const [shoeStatus] = useState([
    {
      name: 'Left Shoe',
      battery: 82,
      color: 'from-primary-400 to-primary-600'
    },
    { name: 'Right Shoe', battery: 76, color: 'from-purple-400 to-purple-600' }
  ]);

  const [healthMetrics] = useState([
    {
      label: 'Acu-Pressure',
      value: 90,
      sublabel: 'Optimal Balance',
      color: 'primary'
    },
    {
      label: 'Fatigue Level',
      value: 0,
      sublabel: 'Ready to go!',
      color: 'purple'
    },
    {
      label: 'Comfort Score',
      value: 100,
      sublabel: 'Perfect Fit',
      color: 'green'
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-950/50 backdrop-blur">
        <div className="flex items-center justify-between px-8 py-6">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Welcome Back, Alex!
            </h1>
            <p className="mt-1 text-slate-400">
              Here&apos;s your real-time activity dashboard.
            </p>
          </div>
          <Button className="gap-2 bg-primary-400 font-semibold text-slate-950 hover:bg-primary-500">
            <Icon icon="heroicons:bell-alert-20-solid" width={20} />
            Sync Now
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Stats Cards Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Steps Today */}
          <Card className="border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="mb-2 text-sm text-slate-400">Steps Today</p>
                <p className="text-4xl font-bold text-white">
                  {stats.steps.current.toLocaleString()}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Goal: {stats.steps.goal.toLocaleString()}
                </p>
              </div>
              <Icon
                icon="streamline:shoe-2"
                width={24}
                className="text-primary-400"
              />
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
              <div
                className="h-full bg-gradient-to-r from-primary-400 to-primary-600"
                style={{
                  width: `${(stats.steps.current / stats.steps.goal) * 100}%`
                }}
              />
            </div>
          </Card>

          {/* Distance */}
          <Card className="border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="mb-2 text-sm text-slate-400">Distance</p>
                <p className="text-4xl font-bold text-white">
                  {stats.distance.current}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {stats.distance.unit}
                </p>
              </div>
              <Icon
                icon="game-icons:map-marker"
                width={24}
                className="text-purple-400"
              />
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
              <div
                className="h-full bg-gradient-to-r from-purple-400 to-purple-600"
                style={{ width: '67%' }}
              />
            </div>
          </Card>

          {/* Calories Burned */}
          <Card className="border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="mb-2 text-sm text-slate-400">Calories Burned</p>
                <p className="text-4xl font-bold text-white">
                  {stats.calories.current}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {stats.calories.unit}
                </p>
              </div>
              <Icon
                icon="game-icons:fire"
                width={24}
                className="text-orange-400"
              />
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
              <div
                className="h-full bg-gradient-to-r from-orange-400 to-orange-600"
                style={{ width: '84%' }}
              />
            </div>
          </Card>

          {/* Active Time */}
          <Card className="border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="mb-2 text-sm text-slate-400">Active Time</p>
                <p className="text-4xl font-bold text-white">
                  {stats.activeTime.current}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {stats.activeTime.unit}
                </p>
              </div>
              <Icon
                icon="game-icons:lightning"
                width={24}
                className="text-yellow-400"
              />
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                style={{ width: '76%' }}
              />
            </div>
          </Card>
        </div>

        {/* Weekly Activity & Shoe Status */}
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Weekly Activity Chart */}
          <Card className="border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6 lg:col-span-2">
            <h2 className="mb-6 text-xl font-bold text-white">
              Weekly Activity
            </h2>
            <div className="flex h-80 items-end justify-around gap-2">
              {weeklyData.map((item, idx) => {
                const maxSteps = 12000;
                const height = (item.steps / maxSteps) * 100;
                return (
                  <div
                    key={idx}
                    className="flex flex-1 flex-col items-center gap-2"
                  >
                    <div
                      className="relative w-full rounded bg-slate-700"
                      style={{ height: `${height * 3}px` }}
                    >
                      <div className="absolute inset-0 rounded bg-gradient-to-t from-primary-500 to-primary-400 opacity-80 transition-opacity hover:opacity-100" />
                    </div>
                    <p className="text-xs text-slate-400">{item.day}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <span>0</span>
              <span>6k</span>
              <span>12k</span>
            </div>
          </Card>

          {/* Shoe Status */}
          <Card className="border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
            <h2 className="mb-6 text-xl font-bold text-white">Shoe Status</h2>
            <div className="space-y-6">
              {shoeStatus.map((shoe, idx) => (
                <div key={idx}>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-8 w-8 rounded bg-gradient-to-br ${shoe.color}`}
                      />
                      <span className="text-sm font-medium text-white">
                        {shoe.name}
                      </span>
                    </div>
                    <span className="font-bold text-primary-400">
                      {shoe.battery}%
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
                    <div
                      className={`bg-gradient-to-r ${shoe.color} h-full`}
                      style={{ width: `${shoe.battery}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="space-y-2 border-t border-slate-700 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-primary-400" />
                  <span className="text-slate-400">Connected</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon
                    icon="game-icons:battery-empty"
                    width={16}
                    className="text-green-400"
                  />
                  <span className="text-slate-400">Not Charging</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Route & Health Metrics */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Recent Route */}
          <Card className="border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold text-white">Recent Route</h2>
            <div className="relative mb-4 flex h-64 items-center justify-center overflow-hidden rounded-lg border border-slate-700 bg-slate-900">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10" />
              <div className="relative flex h-full w-full items-center justify-center">
                <svg viewBox="0 0 300 300" className="h-full w-full">
                  <path
                    d="M 50,150 Q 100,100 150,120 T 250,180"
                    stroke="#f97316"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.8"
                  />
                  <circle cx="50" cy="150" r="8" fill="#10b981" />
                  <circle cx="250" cy="180" r="8" fill="#ef4444" />
                </svg>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-slate-400">Last Run</p>
              <p className="text-lg font-bold text-white">Central Park Loop</p>
              <p className="text-xs text-slate-500">Duration: 32 min</p>
            </div>
          </Card>

          {/* Health & Comfort */}
          <Card className="border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
            <h2 className="mb-6 text-xl font-bold text-white">
              Health & Comfort
            </h2>
            <div className="flex items-center justify-around">
              {healthMetrics.map((metric, idx) => {
                const colorMap = {
                  primary:
                    'text-primary-400 ring-primary-400/30 bg-primary-500/10',
                  purple: 'text-purple-400 ring-purple-400/30 bg-purple-500/10',
                  green: 'text-green-400 ring-green-400/30 bg-green-500/10'
                };
                return (
                  <div key={idx} className="flex flex-col items-center">
                    <div
                      className={`relative flex h-24 w-24 items-center justify-center rounded-full ring-4 ${colorMap[metric.color as keyof typeof colorMap]}`}
                    >
                      <div className="text-center">
                        <p className="text-2xl font-bold">{metric.value}%</p>
                      </div>
                    </div>
                    <p className="mt-3 text-center text-xs font-medium text-white">
                      {metric.label}
                    </p>
                    <p className="text-center text-xs text-slate-500">
                      {metric.sublabel}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
