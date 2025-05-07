import React, { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  isMain: boolean;
}

interface Position {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const skills: Skill[] = [
  { name: "Frontend Development", level: 100, isMain: true },
  { name: "Angular", level: 80, isMain: false },
  { name: "Typescript", level: 80, isMain: false },
  { name: "Liquid / Shopify", level: 80, isMain: false },
  { name: "Tailwind CSS", level: 40, isMain: false },
  { name: "Node.js", level: 60, isMain: false },
  { name: "Vue.js", level: 40, isMain: false },
  { name: "Git", level: 60, isMain: false },
  { name: "UI/UX Design", level: 60, isMain: false },
  { name: "Webflow", level: 60, isMain: false },
  { name: "Next.js", level: 40, isMain: false },
];

const Skills: React.FC = () => {
  const [positions, setPositions] = useState<Position[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    // Initialize positions in a circle
    const initialPositions = skills.map((skill, index) => {
      if (skill.isMain) {
        return { x: 0, y: 0, vx: 0, vy: 0 };
      }
      const angle = (index * 2 * Math.PI) / (skills.length - 1);
      const distance = 250; // Increased distance for better spacing
      return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        vx: 0,
        vy: 0,
      };
    });
    setPositions(initialPositions);

    const animate = () => {
      if (!containerRef.current) return;

      setPositions((prevPositions) => {
        const newPositions = [...prevPositions];
        const containerWidth = containerRef.current?.offsetWidth || 800;
        const containerHeight = containerRef.current?.offsetHeight || 600;

        // Update positions using force-directed layout
        newPositions.forEach((pos, i) => {
          const skill = skills[i];
          const size = skill.isMain ? 200 : skill.level * 2;

          // Repulsion between bubbles
          newPositions.forEach((otherPos, j) => {
            if (i === j) return;
            const otherSkill = skills[j];
            const otherSize = otherSkill.isMain ? 200 : otherSkill.level * 2;

            const dx = otherPos.x - pos.x;
            const dy = otherPos.y - pos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = (size + otherSize) / 2 + 20; // Added padding

            if (distance < minDistance) {
              const force = (minDistance - distance) / distance;
              pos.vx -= dx * force * 0.2;
              pos.vy -= dy * force * 0.2;
            }
          });

          // Attraction to center for main skill
          if (skill.isMain) {
            const dx = 0 - pos.x;
            const dy = 0 - pos.y;
            pos.vx += dx * 0.02;
            pos.vy += dy * 0.02;
          }

          // Damping
          pos.vx *= 0.95;
          pos.vy *= 0.95;

          // Update position
          pos.x += pos.vx;
          pos.y += pos.vy;

          // Keep within container bounds
          const maxX = (containerWidth - size) / 2;
          const maxY = (containerHeight - size) / 2;
          pos.x = Math.max(-maxX, Math.min(maxX, pos.x));
          pos.y = Math.max(-maxY, Math.min(maxY, pos.y));
        });

        return newPositions;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Skills
        </h2>

        <div
          ref={containerRef}
          className="relative w-full h-[600px] max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => {
            const isMain = skill.isMain;
            const size = isMain ? 200 : skill.level * 2;
            const position = positions[index] || { x: 0, y: 0 };

            return (
              <div
                key={skill.name}
                className="absolute transition-all duration-500 ease-in-out opacity-0 scale-0 animate-fade-in"
                style={{
                  left: `calc(50% + ${position.x}px)`,
                  top: `calc(50% + ${position.y}px)`,
                  transform: "translate(-50%, -50%)",
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className="relative group"
                  style={{
                    width: size,
                    height: size,
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                    style={{
                      filter: "blur(20px)",
                    }}
                  />
                  <div
                    className="relative w-full h-full rounded-full bg-[#1c2633] flex items-center justify-center text-white font-semibold text-center p-4 cursor-pointer transform hover:scale-105 transition-transform duration-300"
                    style={{
                      border: "1px solid #4a90e2",
                    }}
                  >
                    <div
                      className="font-bold"
                      style={{
                        fontSize: `${Math.max(0.5, skill.level / 70)}rem`,
                      }}
                    >
                      {skill.name}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
