import React from 'react';

/**
 * Decorative hero backdrop: slowly drifting blurred gradient orbs over a
 * faint grid that fades out towards the edges. Pure CSS, no JS animation loop.
 */
const gridStyle: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
  backgroundSize: '56px 56px',
  maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000 20%, transparent 75%)',
  WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000 20%, transparent 75%)',
};

const CanvasBackground: React.FC = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0" style={gridStyle} />

      {/* Orbs (positioned with top/left so the float keyframes' transform is free) */}
      <div
        className="absolute -top-32 -left-24 h-[22rem] w-[22rem] rounded-full bg-cyan-400/20 blur-[100px] animate-float sm:h-[30rem] sm:w-[30rem]"
        style={{ animationDuration: '14s' }}
      />
      <div
        className="absolute top-1/4 -right-32 h-[20rem] w-[20rem] rounded-full bg-purple-500/20 blur-[110px] animate-float sm:h-[28rem] sm:w-[28rem]"
        style={{ animationDuration: '18s', animationDelay: '-6s' }}
      />
      <div
        className="absolute -bottom-40 left-1/3 h-[18rem] w-[18rem] rounded-full bg-green-400/10 blur-[110px] animate-float sm:h-[24rem] sm:w-[24rem]"
        style={{ animationDuration: '22s', animationDelay: '-11s' }}
      />

      {/* Fade into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink" />
    </div>
  );
};

export default CanvasBackground;
