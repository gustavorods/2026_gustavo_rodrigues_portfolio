import { useEffect, useRef } from "react";

const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      update: () => void;
      draw: (context: CanvasRenderingContext2D, color: string) => void;
    }

    const particles: Particle[] = [];
    const maxParticles = 60;
    const particleCount = Math.min(maxParticles, Math.floor((width * height) / 25000));
    const connectionDistance = 120;
    const mouse = { x: null as number | null, y: null as number | null, radius: 150 };

    class Node implements Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Slow natural movement
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on boundaries
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Gentle interactive repulsion/attraction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            // Move slightly away from mouse
            this.x -= (dx / dist) * force * 0.6;
            this.y -= (dy / dist) * force * 0.6;
          }
        }
      }

      draw(context: CanvasRenderingContext2D, color: string) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = color;
        context.fill();
      }
    }

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Node());
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", handleResize);
    if (!prefersReducedMotion) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseleave", handleMouseLeave);
    }

    init();

    const animate = () => {
      const isDark = document.documentElement.classList.contains("dark");
      const dotColor = isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.12)";

      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((p) => {
        if (!prefersReducedMotion) p.update();
        p.draw(ctx, dotColor);
      });

      // Draw connections between nodes
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark
              ? `rgba(56, 189, 248, ${alpha * 0.12})`
              : `rgba(2, 132, 199, ${alpha * 0.08})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw connections between nodes and mouse
        if (mouse.x !== null && mouse.y !== null) {
          const p = particles[i];
          const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.7;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = isDark
              ? `rgba(56, 189, 248, ${alpha * 0.25})`
              : `rgba(14, 165, 233, ${alpha * 0.15})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      if (!prefersReducedMotion && !document.hidden) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animate();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else if (!prefersReducedMotion) {
        animate();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none w-full h-full" />;
};

export default BackgroundCanvas;
