"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  isMain: boolean;
}

interface Bubble {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  skill: Skill;
  targetX: number;
  targetY: number;
  angle: number;
  speed: number;
  wobble: number;
  wobbleSpeed: number;
}

const skills: Skill[] = [
  { name: "Web Development", level: 100, isMain: true },
  { name: "Angular", level: 90, isMain: false },
  { name: "Typescript", level: 90, isMain: false },
  { name: "Liquid / Shopify", level: 90, isMain: false },
  { name: "Tailwind CSS", level: 40, isMain: false },
  { name: "Node.js", level: 60, isMain: false },
  { name: "Vue.js", level: 40, isMain: false },
  { name: "Git", level: 60, isMain: false },
  { name: "UI/UX Design", level: 60, isMain: false },
  { name: "Webflow", level: 60, isMain: false },
  { name: "Next.js", level: 40, isMain: false },
];

const Skills: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const startupProgressRef = useRef(0); // Startup animation progress (ref to avoid setState in loop)
  const animationRef = useRef<number>();
  const bubblesRef = useRef<Bubble[]>([]);
  const observerRef = useRef<IntersectionObserver>();

  // Initialize bubbles with particle effects
  const initializeBubbles = useCallback(() => {
    const config = isMobile ? { distance: 180, mainRadius: 60 } : { distance: 280, mainRadius: 100 };
    
    bubblesRef.current = skills.map((skill, index) => {
      if (skill.isMain) {
        return {
          x: 0,
          y: 0,
          vx: 0,
          vy: 0,
          radius: config.mainRadius,
          skill,
          targetX: 0,
          targetY: 0,
          angle: 0,
          speed: 0,
          wobble: 0,
          wobbleSpeed: 0,
        };
      }
      
      // Create orbital motion around main skill - much further out
      const angle = (index * 2 * Math.PI) / (skills.length - 1);
      const distance = config.distance + Math.random() * 60; // More distance variation
      const radius = 25 + (skill.level / 100) * 15; // Consistent size with level variation
      
      // Calculate target position
      const targetX = Math.cos(angle) * distance;
      const targetY = Math.sin(angle) * distance;
      
      // Start very close to target position to prevent bouncing
      const startX = targetX + (Math.random() - 0.5) * 10; // Within 5px of target
      const startY = targetY + (Math.random() - 0.5) * 10; // Within 5px of target
      
      return {
        x: startX,
        y: startY,
        vx: 0, // Start with zero velocity
        vy: 0, // Start with zero velocity
        radius,
        skill,
        targetX,
        targetY,
        angle: angle + Math.random() * Math.PI * 2, // Random starting angle
        speed: 0.02 + Math.random() * 0.003, // Extremely slow orbital speed
        wobble: Math.random() * Math.PI * 2, // Random wobble phase
        wobbleSpeed: 0.001 + Math.random() * 0.0002, // Extremely slow wobble speed
      };
    });
  }, [isMobile]);

  // Enhanced physics simulation with particle effects
  const updatePhysics = useCallback(() => {
    const time = Date.now() * 0.001; // Current time for animations
    
    // Gradually increase startup progress
    if (startupProgressRef.current < 1) {
      startupProgressRef.current = Math.min(startupProgressRef.current + 0.008, 1);
    }
    
    bubblesRef.current.forEach((bubble, i) => {
      if (bubble.skill.isMain) {
        // Main skill stays centered with very subtle breathing effect
        const breathing = Math.sin(time * 0.2) * 0.5; // Extremely slow breathing
        bubble.x = breathing;
        bubble.y = breathing;
        return;
      }

      // Only start moving after startup animation
      if (startupProgressRef.current < 0.3) {
        return; // Keep bubbles still during initial startup
      }

      // Update orbital motion - extremely slow
      bubble.angle += bubble.speed * 0.001 * startupProgressRef.current; // Scale with startup progress
      bubble.wobble += bubble.wobbleSpeed * startupProgressRef.current; // Scale with startup progress
      
      // Calculate orbital position with very gentle wobble
      const wobbleRadius = 2 * Math.sin(bubble.wobble); // Reduced from 3
      const orbitalX = Math.cos(bubble.angle) * (bubble.targetX + wobbleRadius);
      const orbitalY = Math.sin(bubble.angle) * (bubble.targetY + wobbleRadius);
      
      // Add extremely subtle random movement for gentle water-like feel
      const randomX = (Math.random() - 0.5) * 0.02; // Reduced from 0.1
      const randomY = (Math.random() - 0.5) * 0.02; // Reduced from 0.1
      
      // Extremely gentle movement towards orbital position
      const dx = orbitalX - bubble.x + randomX;
      const dy = orbitalY - bubble.y + randomY;
      bubble.vx += dx * 0.001 * startupProgressRef.current; // Scale with startup progress
      bubble.vy += dy * 0.001 * startupProgressRef.current; // Scale with startup progress

      // Very gentle repulsion between bubbles to prevent overlap
      bubblesRef.current.forEach((otherBubble, j) => {
        if (i === j) return;
        
        const dx = otherBubble.x - bubble.x;
        const dy = otherBubble.y - bubble.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = bubble.radius + otherBubble.radius + 20; // Extra padding
        
        if (distance < minDistance && distance > 0) {
          const force = (minDistance - distance) / distance;
          bubble.vx -= dx * force * 0.05 * startupProgressRef.current; // Scale with startup progress
          bubble.vy -= dy * force * 0.05 * startupProgressRef.current; // Scale with startup progress
        }
      });

      // Very gentle damping for smooth water-like movement
      const damping = 0.995 + (Math.random() - 0.5) * 0.005; // Increased from 0.98
      bubble.vx *= damping;
      bubble.vy *= damping;

      // Update position
      bubble.x += bubble.vx;
      bubble.y += bubble.vy;
    });
  }, []);

  // Enhanced render function with consistent color scheme
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Get canvas dimensions for centering
    const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
    const canvasHeight = canvas.height / (window.devicePixelRatio || 1);
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;

    // Draw bubbles
    bubblesRef.current.forEach((bubble) => {
      // Calculate centered position
      const x = centerX + bubble.x;
      const y = centerY + bubble.y;
      
      // Apply startup fade-in effect
      const opacity = Math.min(startupProgressRef.current * 2, 1); // Fade in over first 50% of startup
      
      if (bubble.skill.isMain) {
        // Main skill bubble - bright glow and primary color
        const mainGradient = ctx.createRadialGradient(
          x, y, 0,
          x, y, bubble.radius * 2
        );
        mainGradient.addColorStop(0, `#007AFF${Math.round(opacity * 255).toString(16).padStart(2, '0')}`);
        mainGradient.addColorStop(0.3, `#007AFF${Math.round(opacity * 128).toString(16).padStart(2, '0')}`);
        mainGradient.addColorStop(0.7, `#007AFF${Math.round(opacity * 64).toString(16).padStart(2, '0')}`);
        mainGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = mainGradient;
        ctx.beginPath();
        ctx.arc(x, y, bubble.radius * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Main bubble
        ctx.fillStyle = `#007AFF${Math.round(opacity * 64).toString(16).padStart(2, '0')}`;
        ctx.beginPath();
        ctx.arc(x, y, bubble.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // White border
        ctx.strokeStyle = `#ffffff${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 4;
        ctx.stroke();
        
        // Text
        ctx.fillStyle = `#ffffff${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.font = 'bold 16px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(bubble.skill.name, x, y);
        
      } else {
        // Skill bubbles - much darker theme with light blue borders
        
        // Very subtle glow effect
        const skillGradient = ctx.createRadialGradient(
          x, y, 0,
          x, y, bubble.radius * 1.2
        );
        skillGradient.addColorStop(0, `#0f172a${Math.round(opacity * 144).toString(16).padStart(2, '0')}`);
        skillGradient.addColorStop(0.7, `#0f172a${Math.round(opacity * 96).toString(16).padStart(2, '0')}`);
        skillGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = skillGradient;
        ctx.beginPath();
        ctx.arc(x, y, bubble.radius * 1.2, 0, Math.PI * 2);
        ctx.fill();
        
        // Main bubble with very dark blue gradient
        const bubbleGradient = ctx.createLinearGradient(
          x - bubble.radius, y - bubble.radius,
          x + bubble.radius, y + bubble.radius
        );
        bubbleGradient.addColorStop(0, `#0f172a${Math.round(opacity * 255).toString(16).padStart(2, '0')}`);
        bubbleGradient.addColorStop(0.3, `#1e293b${Math.round(opacity * 255).toString(16).padStart(2, '0')}`);
        bubbleGradient.addColorStop(0.7, `#334155${Math.round(opacity * 255).toString(16).padStart(2, '0')}`);
        bubbleGradient.addColorStop(1, `#0f172a${Math.round(opacity * 255).toString(16).padStart(2, '0')}`);
        
        ctx.fillStyle = bubbleGradient;
        ctx.beginPath();
        ctx.arc(x, y, bubble.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Light blue border
        ctx.strokeStyle = `#60a5fa${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Text
        ctx.fillStyle = `#ffffff${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.font = '12px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Split long skill names
        const words = bubble.skill.name.split(' ');
        if (words.length > 1) {
          ctx.fillText(words[0], x, y - 6);
          ctx.fillText(words.slice(1).join(' '), x, y + 6);
        } else {
          ctx.fillText(bubble.skill.name, x, y);
        }

        // Percentage
        ctx.font = '10px Inter, sans-serif';
        ctx.fillStyle = `#60a5fa${Math.round(opacity * 128).toString(16).padStart(2, '0')}`;
        ctx.fillText(`${bubble.skill.level}%`, x, y + bubble.radius + 15);
      }
    });
  }, []);

  // Animation loop
  const animate = useCallback(() => {
    if (!isVisible) return;
    
    updatePhysics();
    render();
    animationRef.current = requestAnimationFrame(animate);
  }, [isVisible, updatePhysics, render]);

  // Handle resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
    
    setIsMobile(rect.width < 768);
  }, []);

  // Handle mouse interactions
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Convert to centered coordinates
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const centeredX = x - centerX;
    const centeredY = y - centerY;

    // Add gentle repulsion from mouse position for skill bubbles only
    bubblesRef.current.forEach((bubble) => {
      if (bubble.skill.isMain) return; // Don't affect main skill
      
      const dx = bubble.x - centeredX; // Direction FROM mouse TO bubble
      const dy = bubble.y - centeredY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 120) {
        const force = (120 - distance) / 120 * 0.0008; // Gentle repulsion force
        bubble.vx += dx * force; // Move away from mouse
        bubble.vy += dy * force;
      }
    });
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Convert to centered coordinates
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const centeredX = x - centerX;
    const centeredY = y - centerY;

    // Find clicked bubble and add very gentle ripple effect
    bubblesRef.current.forEach((bubble) => {
      const dx = centeredX - bubble.x;
      const dy = centeredY - bubble.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < bubble.radius) {
        // Add a very gentle "ripple" effect
        const rippleForce = bubble.skill.isMain ? 3 : 1.5; // Main skill ripples more
        bubble.vx += (Math.random() - 0.5) * rippleForce;
        bubble.vy += (Math.random() - 0.5) * rippleForce;
        
        // For skill bubbles, also add a temporary gentle speed boost
        if (!bubble.skill.isMain) {
          bubble.speed += 0.05;
          // Reset speed after a delay
          setTimeout(() => {
            bubble.speed = Math.max(0.02, bubble.speed - 0.05);
          }, 3000);
        }
      }
    });
  }, []);

  // Set up intersection observer and resize listener
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setIsVisible(isIntersecting);
        if (isIntersecting) {
          startupProgressRef.current = 0; // Reset startup progress when becoming visible
        }
      },
      { threshold: 0.1 }
    );

    if (canvasRef.current) {
      observerRef.current.observe(canvasRef.current);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  // Initialize bubbles when mobile state changes
  useEffect(() => {
    initializeBubbles();
  }, [initializeBubbles]);

  // Start/stop animation
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
          <h2 className="section-title text-white">Skills & Expertise</h2>
          <p className="section-subtitle text-gray-300 text-sm sm:text-base">
            My technical skills and areas of expertise
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="relative w-full h-screen max-w-7xl mx-auto">
            <canvas
              ref={canvasRef}
              className="w-full h-full cursor-pointer"
              style={{ touchAction: 'none' }}
              onMouseMove={handleMouseMove}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
