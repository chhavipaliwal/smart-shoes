'use client';
import { useEffect } from 'react';
import useCanvasCursor from '@/components/hooks/useCanvas';

const CanvasCursor = () => {
  useCanvasCursor();

  return (
    <canvas
      id="canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none', // allow clicks to pass through
        zIndex: 9999
      }}
    />
  );
};

export default CanvasCursor;
