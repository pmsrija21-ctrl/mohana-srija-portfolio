import React, { useEffect, useRef } from 'react';

export default function CosmicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Generate stars
    const starCount = Math.floor((width * height) / 8000);
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.7 + 0.2,
        speed: (Math.random() * 0.15 + 0.05) * (prefersReducedMotion ? 0 : 1),
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseOffset: Math.random() * Math.PI * 2,
        color: Math.random() > 0.6 ? '#00f0ff' : Math.random() > 0.3 ? '#a855f7' : '#ffffff',
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    let time = 0;
    const render = () => {
      time += 0.01;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Deep space subtle gradient
      const bgGrad = ctx.createRadialGradient(
        mouseX,
        mouseY,
        50,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      bgGrad.addColorStop(0, 'rgba(11, 17, 44, 0.4)');
      bgGrad.addColorStop(0.5, 'rgba(7, 11, 25, 0.7)');
      bgGrad.addColorStop(1, 'rgba(3, 7, 18, 0.95)');

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Nebula glow clouds
      ctx.save();
      ctx.filter = 'blur(60px)';
      const neb1 = ctx.createRadialGradient(width * 0.2, height * 0.3, 20, width * 0.2, height * 0.3, 350);
      neb1.addColorStop(0, 'rgba(0, 240, 255, 0.06)');
      neb1.addColorStop(1, 'transparent');
      ctx.fillStyle = neb1;
      ctx.fillRect(0, 0, width, height);

      const neb2 = ctx.createRadialGradient(width * 0.8, height * 0.7, 20, width * 0.8, height * 0.7, 400);
      neb2.addColorStop(0, 'rgba(168, 85, 247, 0.07)');
      neb2.addColorStop(1, 'transparent');
      ctx.fillStyle = neb2;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // Render stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        if (!prefersReducedMotion) {
          star.y -= star.speed;
          if (star.y < 0) {
            star.y = height;
            star.x = Math.random() * width;
          }
        }

        const pulse = Math.sin(time * 2 + star.pulseOffset) * 0.3 + 0.7;
        const currentAlpha = Math.max(0.1, Math.min(1, star.alpha * pulse));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = currentAlpha;
        ctx.shadowBlur = star.radius > 1 ? 8 : 0;
        ctx.shadowColor = star.color;
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.95 }}
      aria-hidden="true"
    />
  );
}
