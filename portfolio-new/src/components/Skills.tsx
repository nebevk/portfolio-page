"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  isMain: boolean;
}

// A skill bubble that floats in place underwater (bobs + sways around a home point)
interface Bubble {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  skill: Skill;
  homeX: number;
  homeY: number;
  bobPhase: number;
  bobFreq: number;
  bobAmp: number;
  swayPhase: number;
  swayFreq: number;
  swayAmp: number;
  shimmerPhase: number;
  shimmerSpeed: number;
}

// A small decorative bubble rising in the background (the "we're underwater" layer)
interface Ambient {
  x: number;
  y: number;
  r: number;
  speed: number;
  swayPhase: number;
  swaySpeed: number;
  alpha: number;
}

const skills: Skill[] = [
  { name: "Web Development", level: 100, isMain: true },
  { name: "Angular", level: 90, isMain: false },
  { name: "Typescript", level: 90, isMain: false },
  { name: "Liquid / Shopify", level: 90, isMain: false },
  { name: "Tailwind CSS", level: 85, isMain: false },
  { name: "Next.js", level: 80, isMain: false },
  { name: "React", level: 80, isMain: false },
  { name: "Vue.js", level: 75, isMain: false },
  { name: "UI/UX Design", level: 75, isMain: false },
  { name: "Git", level: 75, isMain: false },
  { name: "Node.js", level: 65, isMain: false },
  { name: "Webflow", level: 65, isMain: false },
];

// smoothstep easing for a gentler fade-in
const smoothstep = (t: number) => {
  const c = Math.max(0, Math.min(t, 1));
  return c * c * (3 - 2 * c);
};

// Ambient bubble motion speed scale (lower = slower / calmer). Tune this to taste.
const MOTION_SPEED = 0.45;
// How firmly a bubble is pulled back toward its drifting home point (spring), and how
// quickly motion settles (water viscosity). Low spring + heavy damping = floaty water feel.
const SPRING = 0.02;
const DAMPING = 0.9;

const Skills: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  // sizeKey changes only on meaningful container-size changes, re-seeding the layout
  const [sizeKey, setSizeKey] = useState(0);
  const startupProgressRef = useRef(0); // Startup animation progress (ref to avoid setState in loop)
  const animationRef = useRef<number>();
  const bubblesRef = useRef<Bubble[]>([]);
  const ambientRef = useRef<Ambient[]>([]);
  const observerRef = useRef<IntersectionObserver>();
  const fontRef = useRef<string>("Quicksand, sans-serif");
  const dimsRef = useRef({ w: 0, h: 0 });

  // Orbit/size config derived from the actual container so nothing clips
  const getLayout = useCallback(() => {
    const rect = canvasRef.current?.parentElement?.getBoundingClientRect();
    const width = rect?.width || 0;
    const height = rect?.height || 0;
    const minDim = Math.min(width, height) || 600;
    // largest orbit radius that still leaves room for a bubble + margin
    const safeR = Math.max(110, minDim / 2 - 72);
    const mainRadius = Math.max(46, Math.min(minDim * 0.13, 100));
    const orbitBase = Math.max(100, safeR * 0.82);
    const orbitSpread = safeR * 0.1;
    return { width, height, minDim, mainRadius, orbitBase, orbitSpread };
  }, []);

  // Initialize the skill bubbles (arranged in a ring) and the rising ambient bubbles
  const initializeBubbles = useCallback(() => {
    const { width, height, minDim, mainRadius, orbitBase, orbitSpread } = getLayout();
    const orbiting = skills.length - 1;
    // Size is strongly tied to proficiency so differences are obvious; scales with container
    const skillBase = Math.max(14, Math.min(minDim * 0.028, 20));
    const skillSpan = Math.max(22, Math.min(minDim * 0.072, 46));

    bubblesRef.current = skills.map((skill, index) => {
      if (skill.isMain) {
        return {
          x: 0,
          y: 0,
          vx: 0,
          vy: 0,
          radius: mainRadius,
          skill,
          homeX: 0,
          homeY: 0,
          bobPhase: 0,
          bobFreq: 0.012,
          bobAmp: 4,
          swayPhase: 0,
          swayFreq: 0.009,
          swayAmp: 4,
          shimmerPhase: 0,
          shimmerSpeed: 0.012,
        };
      }

      const angle = (index * 2 * Math.PI) / orbiting;
      const distance = orbitBase + Math.random() * orbitSpread;
      // Normalize level across the ~60–100 band so the size gradient is pronounced
      const norm = Math.max(0, Math.min((skill.level - 60) / 40, 1));
      const radius = skillBase + norm * skillSpan;

      const homeX = Math.cos(angle) * distance;
      const homeY = Math.sin(angle) * distance;

      return {
        x: homeX,
        y: homeY,
        vx: 0,
        vy: 0,
        radius,
        skill,
        homeX,
        homeY,
        // Buoyant vertical bob (the dominant water motion)
        bobPhase: Math.random() * Math.PI * 2,
        bobFreq: 0.03 + Math.random() * 0.015,
        bobAmp: 9 + Math.random() * 8,
        // Slower horizontal sway, like swaying in a current
        swayPhase: Math.random() * Math.PI * 2,
        swayFreq: 0.02 + Math.random() * 0.012,
        swayAmp: 7 + Math.random() * 6,
        // Subtle size shimmer so they feel like soft water bubbles
        shimmerPhase: Math.random() * Math.PI * 2,
        shimmerSpeed: 0.02 + Math.random() * 0.01,
      };
    });

    // Background bubbles rising toward the surface
    const w = dimsRef.current.w || width || 600;
    const h = dimsRef.current.h || height || 500;
    const count = Math.max(14, Math.min(Math.round((w * h) / 26000), 40));
    ambientRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 2 + Math.random() * 5,
      speed: 0.3 + Math.random() * 0.8,
      swayPhase: Math.random() * Math.PI * 2,
      swaySpeed: 0.01 + Math.random() * 0.02,
      alpha: 0.22 + Math.random() * 0.32,
    }));
  }, [getLayout]);

  // Water-like physics: bubbles drift around a home point and settle gently
  const updatePhysics = useCallback(() => {
    if (startupProgressRef.current < 1) {
      startupProgressRef.current = Math.min(startupProgressRef.current + 0.008, 1);
    }
    const startup = startupProgressRef.current;

    // Rising background bubbles
    const { w, h } = dimsRef.current;
    ambientRef.current.forEach((p) => {
      p.swayPhase += p.swaySpeed * MOTION_SPEED;
      p.y -= p.speed * MOTION_SPEED * startup;
      p.x += Math.sin(p.swayPhase) * 0.3;
      if (p.y < -p.r) {
        p.y = (h || 500) + p.r;
        p.x = Math.random() * (w || 600);
      }
    });

    bubblesRef.current.forEach((bubble, i) => {
      bubble.shimmerPhase += bubble.shimmerSpeed * MOTION_SPEED;

      if (bubble.skill.isMain) {
        // The anchor bubble breathes and bobs very gently
        bubble.bobPhase += bubble.bobFreq * MOTION_SPEED;
        bubble.swayPhase += bubble.swayFreq * MOTION_SPEED;
        bubble.x = Math.sin(bubble.swayPhase) * bubble.swayAmp;
        bubble.y = Math.sin(bubble.bobPhase) * bubble.bobAmp;
        return;
      }

      // Hold still during the very start of the intro
      if (startup < 0.3) return;

      bubble.bobPhase += bubble.bobFreq * MOTION_SPEED * startup;
      bubble.swayPhase += bubble.swayFreq * MOTION_SPEED * startup;

      // Target = home point + layered sine drift (buoyant bob + sway)
      const desiredX = bubble.homeX + Math.sin(bubble.swayPhase) * bubble.swayAmp;
      const desiredY =
        bubble.homeY +
        Math.sin(bubble.bobPhase) * bubble.bobAmp +
        Math.sin(bubble.bobPhase * 0.5 + 1.3) * bubble.bobAmp * 0.35;

      // Spring toward the drifting target
      bubble.vx += (desiredX - bubble.x) * SPRING * startup;
      bubble.vy += (desiredY - bubble.y) * SPRING * startup;

      // Soft repulsion so bubbles don't overlap
      bubblesRef.current.forEach((otherBubble, j) => {
        if (i === j) return;
        const ox = otherBubble.x - bubble.x;
        const oy = otherBubble.y - bubble.y;
        const distance = Math.sqrt(ox * ox + oy * oy);
        const minDistance = bubble.radius + otherBubble.radius + 18;
        if (distance < minDistance && distance > 0) {
          const force = (minDistance - distance) / distance;
          bubble.vx -= ox * force * 0.04 * startup;
          bubble.vy -= oy * force * 0.04 * startup;
        }
      });

      // Viscous damping (water resistance)
      bubble.vx *= DAMPING;
      bubble.vy *= DAMPING;

      bubble.x += bubble.vx;
      bubble.y += bubble.vy;
    });
  }, []);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const canvasWidth = canvas.width / dpr;
    const canvasHeight = canvas.height / dpr;
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;

    const font = fontRef.current;
    // Eased fade-in over the first part of the intro
    const opacity = smoothstep(startupProgressRef.current * 1.6);
    const alpha = (a: number) =>
      Math.round(Math.max(0, Math.min(a, 1)) * 255)
        .toString(16)
        .padStart(2, "0");

    // A small light highlight makes a disc read as a bubble
    const drawHighlight = (x: number, y: number, r: number, strength: number) => {
      const hx = x - r * 0.32;
      const hy = y - r * 0.38;
      const hr = r * 0.55;
      const hg = ctx.createRadialGradient(hx, hy, 0, hx, hy, hr);
      hg.addColorStop(0, `#ffffff${alpha(strength)}`);
      hg.addColorStop(1, "transparent");
      ctx.fillStyle = hg;
      ctx.beginPath();
      ctx.arc(hx, hy, hr, 0, Math.PI * 2);
      ctx.fill();
    };

    // --- Background: rising ambient bubbles (drawn first, behind everything) ---
    ambientRef.current.forEach((p) => {
      const a = opacity * p.alpha;
      const g = ctx.createRadialGradient(p.x - p.r * 0.3, p.y - p.r * 0.3, 0, p.x, p.y, p.r);
      g.addColorStop(0, `#cfeeff${alpha(a * 0.7)}`);
      g.addColorStop(0.7, `#7cc4ff${alpha(a * 0.18)}`);
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = `#dff3ff${alpha(a * 0.22)}`;
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // --- Foreground: skill bubbles ---
    bubblesRef.current.forEach((bubble) => {
      const x = centerX + bubble.x;
      const y = centerY + bubble.y;
      const r = bubble.radius * (1 + 0.04 * Math.sin(bubble.shimmerPhase)); // subtle shimmer

      if (bubble.skill.isMain) {
        const mainGradient = ctx.createRadialGradient(x, y, 0, x, y, r * 2);
        mainGradient.addColorStop(0, `#007AFF${alpha(opacity)}`);
        mainGradient.addColorStop(0.3, `#007AFF${alpha(opacity * 0.5)}`);
        mainGradient.addColorStop(0.7, `#007AFF${alpha(opacity * 0.25)}`);
        mainGradient.addColorStop(1, "transparent");

        ctx.fillStyle = mainGradient;
        ctx.beginPath();
        ctx.arc(x, y, r * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `#007AFF${alpha(opacity * 0.25)}`;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `#ffffff${alpha(opacity * 0.55)}`;
        ctx.lineWidth = 4;
        ctx.stroke();

        drawHighlight(x, y, r, opacity * 0.5);

        // Text (wraps multi-word labels so they fit smaller bubbles)
        const fs = Math.max(13, Math.min(r * 0.22, 18));
        ctx.fillStyle = `#ffffff${alpha(opacity)}`;
        ctx.font = `bold ${fs}px ${font}`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const words = bubble.skill.name.split(" ");
        if (words.length > 1) {
          ctx.fillText(words[0], x, y - fs * 0.55);
          ctx.fillText(words.slice(1).join(" "), x, y + fs * 0.55);
        } else {
          ctx.fillText(bubble.skill.name, x, y);
        }
      } else {
        const skillGradient = ctx.createRadialGradient(x, y, 0, x, y, r * 1.2);
        skillGradient.addColorStop(0, `#0f172a${alpha(opacity * 0.56)}`);
        skillGradient.addColorStop(0.7, `#0f172a${alpha(opacity * 0.38)}`);
        skillGradient.addColorStop(1, "transparent");

        ctx.fillStyle = skillGradient;
        ctx.beginPath();
        ctx.arc(x, y, r * 1.2, 0, Math.PI * 2);
        ctx.fill();

        const bubbleGradient = ctx.createLinearGradient(
          x - r,
          y - r,
          x + r,
          y + r
        );
        bubbleGradient.addColorStop(0, `#0f172a${alpha(opacity * 0.62)}`);
        bubbleGradient.addColorStop(0.3, `#1e293b${alpha(opacity * 0.62)}`);
        bubbleGradient.addColorStop(0.7, `#334155${alpha(opacity * 0.62)}`);
        bubbleGradient.addColorStop(1, `#0f172a${alpha(opacity * 0.62)}`);

        ctx.fillStyle = bubbleGradient;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `#60a5fa${alpha(opacity * 0.4)}`;
        ctx.lineWidth = bubble.radius < 40 ? 1 : 2; // thinner border on smaller bubbles
        ctx.stroke();

        drawHighlight(x, y, r, opacity * 0.4);

        const fs = Math.max(10, Math.min(r * 0.42, 13));
        ctx.fillStyle = `#ffffff${alpha(opacity)}`;
        ctx.font = `${fs}px ${font}`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const words = bubble.skill.name.split(" ");
        if (words.length > 1) {
          ctx.fillText(words[0], x, y - 6);
          ctx.fillText(words.slice(1).join(" "), x, y + 6);
        } else {
          ctx.fillText(bubble.skill.name, x, y);
        }

        ctx.font = `${Math.max(9, fs - 2)}px ${font}`;
        ctx.fillStyle = `#60a5fa${alpha(opacity * 0.5)}`;
        ctx.fillText(`${bubble.skill.level}%`, x, y + r + 14);
      }
    });
  }, []);

  const animate = useCallback(() => {
    if (!isVisible) return;
    updatePhysics();
    render();
    animationRef.current = requestAnimationFrame(animate);
  }, [isVisible, updatePhysics, render]);

  // Size the canvas to its container (DPR-aware) and capture the inherited font
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";
    dimsRef.current = { w: rect.width, h: rect.height };

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    // Match the site's Quicksand font for canvas text
    const family = getComputedStyle(canvas).fontFamily;
    if (family) fontRef.current = family;

    // Re-seed layout only when size changes meaningfully (avoids churn on tiny deltas)
    const key = Math.round(rect.width / 40) * 1000 + Math.round(rect.height / 40);
    setSizeKey((prev) => (prev === key ? prev : key));
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const centeredX = e.clientX - rect.left - rect.width / 2;
    const centeredY = e.clientY - rect.top - rect.height / 2;

    // Part the water: gently push nearby bubbles away; the spring pulls them back
    bubblesRef.current.forEach((bubble) => {
      if (bubble.skill.isMain) return;
      const dx = bubble.x - centeredX;
      const dy = bubble.y - centeredY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 130) {
        const force = ((130 - distance) / 130) * 0.04;
        bubble.vx += dx * force;
        bubble.vy += dy * force;
      }
    });
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const centeredX = e.clientX - rect.left - rect.width / 2;
    const centeredY = e.clientY - rect.top - rect.height / 2;

    // Tap a bubble to nudge it; it drifts back like a disturbed bubble in water
    bubblesRef.current.forEach((bubble) => {
      const dx = centeredX - bubble.x;
      const dy = centeredY - bubble.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < bubble.radius) {
        const rippleForce = bubble.skill.isMain ? 2.5 : 1.5;
        bubble.vx += (Math.random() - 0.5) * rippleForce;
        bubble.vy += (Math.random() - 0.5) * rippleForce;
      }
    });
  }, []);

  // Intersection observer + resize listener
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setIsVisible(isIntersecting);
        if (isIntersecting) {
          startupProgressRef.current = 0; // replay intro on (re)entry
        }
      },
      { threshold: 0.1 }
    );

    if (canvasRef.current) {
      observerRef.current.observe(canvasRef.current);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // (Re)initialize bubbles on mount and whenever the container size changes
  useEffect(() => {
    initializeBubbles();
  }, [initializeBubbles, sizeKey]);

  // Start/stop the animation loop with visibility
  useEffect(() => {
    if (isVisible) {
      animate();
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, animate]);

  return (
    <section id="skills" className="py-8 sm:py-12 bg-black">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="section-title text-white">Skills &amp; Expertise</h2>
          <p className="section-subtitle text-gray-300 text-sm sm:text-base">
            My technical skills and areas of expertise
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="relative w-full mx-auto max-w-6xl h-[58vh] min-h-[400px] max-h-[540px] sm:h-[68vh] sm:max-h-[680px]">
            <canvas
              ref={canvasRef}
              className="w-full h-full cursor-pointer"
              style={{ touchAction: "none" }}
              onMouseMove={handleMouseMove}
              onClick={handleClick}
              aria-hidden="true"
            />
            {/* Accessible / crawlable representation of the same skills */}
            <ul className="sr-only">
              {skills.map((skill) => (
                <li key={skill.name}>
                  {skill.name}
                  {!skill.isMain ? ` — ${skill.level}% proficiency` : ""}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-4 text-center text-xs sm:text-sm text-gray-500">
          Hover or tap the bubbles to play with them.
        </p>
      </div>
    </section>
  );
};

export default Skills;
