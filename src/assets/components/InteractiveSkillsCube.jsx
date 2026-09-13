import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './InteractiveSkillsCube.css';

export default function InteractiveSkillsCube({ categories }) {
  const cubeRef = useRef(null);
  const containerRef = useRef(null);
  
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let isHovering = false;
    let rotationX = -15; // Initial isometric view
    let rotationY = 45;
    let targetVelocityX = 0;
    let targetVelocityY = 0;
    let currentVelocityX = 0;
    let currentVelocityY = 0;
    
    gsap.set(cubeRef.current, { rotateX: rotationX, rotateY: rotationY });

    const handlePointerMove = (e) => {
      const container = containerRef.current;
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate how far mouse is from center (normalized roughly -1 to 1)
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);
      
      // Speed multiplier (increased for faster rotation)
      targetVelocityX = deltaX * 2.5; 
      targetVelocityY = deltaY * 2.5;
    };

    const handlePointerEnter = () => {
      isHovering = true;
    };

    const handlePointerLeave = () => {
      isHovering = false;
      targetVelocityX = 0;
      targetVelocityY = 0;
    };

    // Ticker loop for continuous rotation
    const updateRotation = () => {
      // Smoothly interpolate current velocity towards target velocity
      currentVelocityX += (targetVelocityX - currentVelocityX) * 0.05;
      currentVelocityY += (targetVelocityY - currentVelocityY) * 0.05;
      
      // If velocity is practically zero, don't trigger layout thrashing
      if (Math.abs(currentVelocityX) < 0.01 && Math.abs(currentVelocityY) < 0.01) return;

      rotationY += currentVelocityX;
      rotationX -= currentVelocityY; // Subtract because moving up/down inverts visual rotation
      
      gsap.set(cubeRef.current, {
        rotateX: rotationX,
        rotateY: rotationY
      });
    };

    gsap.ticker.add(updateRotation);

    const container = containerRef.current;
    if (container) {
      container.addEventListener('pointermove', handlePointerMove);
      container.addEventListener('pointerenter', handlePointerEnter);
      container.addEventListener('pointerleave', handlePointerLeave);
    }

    return () => {
      gsap.ticker.remove(updateRotation);
      if (container) {
        container.removeEventListener('pointermove', handlePointerMove);
        container.removeEventListener('pointerenter', handlePointerEnter);
        container.removeEventListener('pointerleave', handlePointerLeave);
      }
    };
  }, { scope: containerRef });

  return (
    <div className="cube-wrapper" ref={containerRef}>
      <div className="giant-cube" ref={cubeRef}>
        {/* Front Face: Title */}
        <div className="giant-cube-face cube-front title-face">
          <div className="cube-title-content">
            <h3>Hover to rotate</h3>
            <p>Explore my domain skills</p>
          </div>
        </div>
        
        {/* Back Face: Programming Languages */}
        <div className="giant-cube-face cube-back">
          <h4>{categories[0].label}</h4>
          <div className="cube-pills">
            {categories[0].items.map(item => <span key={item}>{item}</span>)}
          </div>
        </div>
        
        {/* Right Face: Machine Learning */}
        <div className="giant-cube-face cube-right">
          <h4>{categories[1].label}</h4>
          <div className="cube-pills">
            {categories[1].items.map(item => <span key={item}>{item}</span>)}
          </div>
        </div>
        
        {/* Left Face: Frameworks */}
        <div className="giant-cube-face cube-left">
          <h4>{categories[2].label}</h4>
          <div className="cube-pills">
            {categories[2].items.map(item => <span key={item}>{item}</span>)}
          </div>
        </div>
        
        {/* Top Face: Web Technologies */}
        <div className="giant-cube-face cube-top">
          <h4>{categories[3].label}</h4>
          <div className="cube-pills">
            {categories[3].items.map(item => <span key={item}>{item}</span>)}
          </div>
        </div>
        
        {/* Bottom Face: Big Data */}
        <div className="giant-cube-face cube-bottom">
          <h4>{categories[4].label}</h4>
          <div className="cube-pills">
            {categories[4].items.map(item => <span key={item}>{item}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
