"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  maxStars?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

const getRandomStartPoint = (
  width: number,
  height: number,
): Pick<ShootingStar, "x" | "y" | "angle"> => {
  // Stars enter from the top or left and always travel down-right.
  if (Math.random() < 0.5) {
    return {
      x: Math.random() * width,
      y: 0,
      angle: 45,
    };
  }

  return {
    x: 0,
    y: Math.random() * height,
    angle: 45,
  };
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 3,
  maxSpeed = 8,
  minDelay = 350,
  maxDelay = 1000,
  maxStars = 5,
  starColor = "var(--gold)",
  trailColor = "var(--text)",
  starWidth = 10,
  starHeight = 1,
  className,
}) => {
  const [stars, setStars] = useState<ShootingStar[]>([]);
  const starsRef = useRef<ShootingStar[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);
  const nextIdRef = useRef(0);

  useEffect(() => {
    let timer: number | undefined;
    let cancelled = false;

    const createStar = () => {
      if (cancelled) return;

      const bounds = svgRef.current?.getBoundingClientRect();
      const width = bounds?.width ?? 1;
      const height = bounds?.height ?? 1;

      if (starsRef.current.length < maxStars) {
        const { x, y, angle } = getRandomStartPoint(width, height);

        const newStar: ShootingStar = {
          id: ++nextIdRef.current,
          x,
          y,
          angle,
          scale: 1,
          speed:
            Math.random() * (maxSpeed - minSpeed) + minSpeed,
          distance: 0,
        };

        const nextStars = [...starsRef.current, newStar];

        starsRef.current = nextStars;
        setStars(nextStars);
      }
    };

    const scheduleNext = () => {
      const delay =
        Math.random() * (maxDelay - minDelay) + minDelay;

      timer = window.setTimeout(() => {
        if (cancelled) return;

        createStar();
        scheduleNext();
      }, delay);
    };

    createStar();
    scheduleNext();

    return () => {
      cancelled = true;

      if (timer !== undefined) {
        window.clearTimeout(timer);
      }
    };
  }, [minSpeed, maxSpeed, minDelay, maxDelay, maxStars]);

  useEffect(() => {
    let animationFrame = 0;
    let cancelled = false;

    const animate = () => {
      if (cancelled) return;

      const width = svgRef.current?.clientWidth ?? 0;
      const height = svgRef.current?.clientHeight ?? 0;

      const nextStars = starsRef.current.flatMap((star) => {
        const radians = (star.angle * Math.PI) / 180;

        const newX = star.x + star.speed * Math.cos(radians);
        const newY = star.y + star.speed * Math.sin(radians);
        const newDistance = star.distance + star.speed;

        if (
          newX < -20 ||
          newX > width + 20 ||
          newY < -20 ||
          newY > height + 20
        ) {
          return [];
        }

        return [
          {
            ...star,
            x: newX,
            y: newY,
            distance: newDistance,
            scale: 1 + newDistance / 100,
          },
        ];
      });

      starsRef.current = nextStars;
      setStars(nextStars);

      animationFrame = window.requestAnimationFrame(animate);
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className={cn("absolute inset-0 h-full w-full", className)}
      aria-hidden="true"
    >
      {stars.map((star) => (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#shooting-gradient)"
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      ))}

      <defs>
        <linearGradient
          id="shooting-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            style={{ stopColor: trailColor, stopOpacity: 0 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: starColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};