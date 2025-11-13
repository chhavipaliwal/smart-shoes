'use client';
import useSpotlightEffect from '@/components/hooks/UseSpotlightEffect';

const SpotlightCursor = () => {
  const canvasRef = useSpotlightEffect({
    spotlightSize: 250,
    spotlightIntensity: 0.8,
    fadeSpeed: 0.15,
    glowColor: '255, 255, 255',
    pulseSpeed: 1500
  });

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none', // make clicks pass through
        zIndex: 9999
      }}
    />
  );
};

export default SpotlightCursor;
