import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './FluidCodeReveal.css';

export default function FluidCodeReveal({ imageUrl }) {
  const containerRef = useRef(null);
  const imageLayerRef = useRef(null);
  const pathRef = useRef(null);
  
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth <= 768;
    
    if (prefersReducedMotion || isMobile) {
      gsap.set(containerRef.current, { "--hero-x": `${window.innerWidth / 2}px`, "--hero-y": `${window.innerHeight / 2}px` });
      gsap.set(imageLayerRef.current, { opacity: 0 });
      
      const section = containerRef.current.closest('section');
      if (section) {
        section.addEventListener('pointerenter', () => gsap.to(imageLayerRef.current, { opacity: 1, duration: 0.8 }));
        section.addEventListener('pointerleave', () => gsap.to(imageLayerRef.current, { opacity: 0, duration: 0.8 }));
      }
      return;
    }

    const NUM_POINTS = 12;
    const BASE_RADIUS = 180;
    
    const points = Array.from({ length: NUM_POINTS }, (_, i) => ({
      angle: (i / NUM_POINTS) * Math.PI * 2,
      radius: BASE_RADIUS,
      velocity: 0
    }));

    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    
    // We use a dummy object to track the smoothed coordinates via quickTo
    const tracker = { x: currentX, y: currentY, opacity: 0 };
    
    const xTo = gsap.quickTo(tracker, "x", { duration: 0.45, ease: "power3.out" });
    const yTo = gsap.quickTo(tracker, "y", { duration: 0.45, ease: "power3.out" });
    const opacityTo = gsap.quickTo(tracker, "opacity", { duration: 0.5, ease: "power2.out" });
    
    const setCssX = (val) => containerRef.current?.style.setProperty('--hero-x', `${val}px`);
    const setCssY = (val) => containerRef.current?.style.setProperty('--hero-y', `${val}px`);
    const setOpacity = gsap.quickSetter(imageLayerRef.current, "opacity");
    
    let isHovering = false;
    let lastTrackerX = tracker.x;
    let lastTrackerY = tracker.y;

    const onPointerMove = (e) => {
      isHovering = true;
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const targetX = e.clientX - rect.left;
      const targetY = e.clientY - rect.top;
      
      xTo(targetX);
      yTo(targetY);
      opacityTo(1);
    };

    const onPointerEnter = (e) => {
      isHovering = true;
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      if (tracker.opacity < 0.05) {
        // Snap instantly if coming from hidden state
        const startX = e.clientX - rect.left;
        const startY = e.clientY - rect.top;
        tracker.x = startX;
        tracker.y = startY;
        lastTrackerX = startX;
        lastTrackerY = startY;
        xTo(startX);
        yTo(startY);
        
        // Reset springs
        points.forEach(p => { p.radius = BASE_RADIUS; p.velocity = 0; });
        
        setCssX(startX);
        setCssY(startY);
      }
      opacityTo(1);
    };

    const onPointerLeave = () => {
      isHovering = false;
      opacityTo(0);
    };

    const section = containerRef.current.closest('section');
    if (section) {
      section.addEventListener('pointermove', onPointerMove);
      section.addEventListener('pointerenter', onPointerEnter);
      section.addEventListener('pointerleave', onPointerLeave);
    }

    const update = () => {
      setOpacity(tracker.opacity);
      if (tracker.opacity < 0.01 && !isHovering) return;
      
      // Calculate smoothed velocity
      const velX = tracker.x - lastTrackerX;
      const velY = tracker.y - lastTrackerY;
      lastTrackerX = tracker.x;
      lastTrackerY = tracker.y;
      
      const speed = Math.sqrt(velX * velX + velY * velY);
      const normX = speed > 0 ? velX / speed : 0;
      const normY = speed > 0 ? velY / speed : 0;
      
      const time = performance.now() * 0.001;

      // Calculate physics for each control point
      for (let i = 0; i < NUM_POINTS; i++) {
        const p = points[i];
        const nx = Math.cos(p.angle);
        const ny = Math.sin(p.angle);
        
        const dot = nx * normX + ny * normY;
        
        let targetRadius = BASE_RADIUS;
        
        if (speed > 0.1) {
          if (dot > 0) {
            // Leading edge (head) expands to form the fat part of the drop
            targetRadius += dot * Math.min(speed * 3.5, 140);
          } else {
            // Trailing edge (tail) uniformly shrinks to form the smaller, rounded rear end
            targetRadius -= Math.abs(dot) * Math.min(speed * 2.5, 100);
          }
          // Perpendicular sides squash inward to connect them smoothly
          const perp = 1 - Math.abs(dot);
          targetRadius -= perp * Math.min(speed * 2.5, 100);
        }
        
        // Add subtle organic resting noise
        const noise = Math.sin(time * 2.5 + i * 1.2) * 4 + Math.sin(time * 1.5 + i * 2.5) * 2;
        targetRadius += noise;
        
        // Clamp deformation to prevent exploding geometries
        targetRadius = Math.max(BASE_RADIUS * 0.3, Math.min(targetRadius, BASE_RADIUS * 2.5));
        
        // Apply spring physics
        const stiffness = 0.15;
        const damping = 0.7;
        
        p.velocity += (targetRadius - p.radius) * stiffness;
        p.velocity *= damping;
        p.radius += p.velocity;
      }

      // Generate Catmull-Rom spline coordinates
      const coords = points.map(p => ({
        x: tracker.x + Math.cos(p.angle) * p.radius,
        y: tracker.y + Math.sin(p.angle) * p.radius
      }));

      // Convert Catmull-Rom to SVG Cubic Bezier Path
      let d = `M ${coords[0].x} ${coords[0].y}`;
      const tension = 1; // 1 = smooth Catmull-Rom
      
      for (let i = 0; i < coords.length; i++) {
        const p0 = coords[(i - 1 + coords.length) % coords.length];
        const p1 = coords[i];
        const p2 = coords[(i + 1) % coords.length];
        const p3 = coords[(i + 2) % coords.length];
        
        const cp1x = p1.x + (p2.x - p0.x) / 6 * tension;
        const cp1y = p1.y + (p2.y - p0.y) / 6 * tension;
        
        const cp2x = p2.x - (p3.x - p1.x) / 6 * tension;
        const cp2y = p2.y - (p3.y - p1.y) / 6 * tension;
        
        d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
      }
      
      // Update SVG path directly for max performance
      if (pathRef.current) {
        pathRef.current.setAttribute('d', d);
      }
      
      // Update gradient overlay position
      setCssX(tracker.x);
      setCssY(tracker.y);
    };

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
      if (section) {
        section.removeEventListener('pointermove', onPointerMove);
        section.removeEventListener('pointerenter', onPointerEnter);
        section.removeEventListener('pointerleave', onPointerLeave);
      }
    };
  }, { scope: containerRef });

  return (
    <div className="fluid-reveal-container" ref={containerRef}>
      <svg className="fluid-svg-defs" aria-hidden="true">
        <defs>
          <mask id="fluid-path-mask">
            <path ref={pathRef} fill="white" d="" />
          </mask>
        </defs>
      </svg>
      <div className="fluid-image-layer" ref={imageLayerRef} style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="fluid-image-overlay"></div>
      </div>
    </div>
  );
}
