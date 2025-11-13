'use client';

import * as React from 'react';
import { cn } from '@/lib/utils'; // optional helper for combining classNames

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-800 bg-slate-900/50 p-4 shadow-lg backdrop-blur transition hover:shadow-cyan-500/10',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
