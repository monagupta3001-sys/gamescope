import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Position references for buttery smooth lerping
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse/trackpad), not touchscreens
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    setEnabled(true);
    document.documentElement.classList.add('custom-cursor-enabled');

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Instantly position center dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering interactive target
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, select, textarea, [role="button"], .cursor-pointer, [data-cursor="interactive"]'
        );
        setIsHovered(!!interactive);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth physics loop for trailing ring
    const render = () => {
      // Lerp factor
      const speed = 0.22;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * speed;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * speed;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!enabled) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Trailing Outer Glowing Ring / Reticle */}
      <div
        ref={ringRef}
        className="absolute top-0 left-0 -ml-4 -mt-4 pointer-events-none will-change-transform"
      >
        <div
          className={`rounded-full border transition-all duration-200 ease-out flex items-center justify-center ${
            isHovered
              ? 'w-12 h-12 -ml-2 -mt-2 border-lime-400/80 bg-lime-400/15 shadow-[0_0_20px_rgba(163,230,53,0.35)] scale-110'
              : isClicked
              ? 'w-6 h-6 ml-1 mt-1 border-lime-300 bg-lime-400/40 scale-90'
              : 'w-8 h-8 border-indigo-400/50 bg-indigo-500/5 shadow-[0_0_12px_rgba(99,102,241,0.2)]'
          }`}
        >
          {/* Subtle crosshair notches when hovering interactive element */}
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="w-1.5 h-0.5 bg-lime-400 absolute -top-1" />
              <span className="w-1.5 h-0.5 bg-lime-400 absolute -bottom-1" />
              <span className="w-0.5 h-1.5 bg-lime-400 absolute -left-1" />
              <span className="w-0.5 h-1.5 bg-lime-400 absolute -right-1" />
            </div>
          )}
        </div>
      </div>

      {/* Immediate Sharp Point Cursor Dot */}
      <div
        ref={dotRef}
        className="absolute top-0 left-0 -ml-1 -mt-1 pointer-events-none will-change-transform"
      >
        <div
          className={`w-2 h-2 rounded-full transition-all duration-150 ${
            isHovered
              ? 'bg-lime-400 scale-125 shadow-[0_0_8px_#a3e635]'
              : isClicked
              ? 'bg-white scale-75'
              : 'bg-indigo-300 shadow-[0_0_6px_#818cf8]'
          }`}
        />
      </div>
    </div>
  );
};
