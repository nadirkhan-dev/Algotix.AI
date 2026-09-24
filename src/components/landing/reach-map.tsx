"use client";

import Image from "next/image";
import { useId, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/* The dotted map is drawn on a 126 x 60 grid (see world-dots.svg). Points are
   in those units, so the arcs and pins line up with the dots at any width. */
const MAP_W = 126;
const MAP_H = 60;

/** Home base, where every arc starts. */
const HOME = { label: "Pakistan", x: 88, y: 25.1 };

/** Where the work goes, with the side each name sits on so none collide. */
const DESTINATIONS: {
  label: string;
  x: number;
  y: number;
  side: "left" | "right" | "above" | "below" | "belowLeft";
}[] = [
  { label: "Canada", x: 20, y: 16.5, side: "above" },
  { label: "New York", x: 37, y: 19.9, side: "right" },
  { label: "United Kingdom", x: 63, y: 14.7, side: "above" },
  { label: "Germany", x: 67.5, y: 13.9, side: "below" },
  { label: "UAE", x: 82, y: 26.8, side: "left" },
  { label: "Singapore", x: 100, y: 35.5, side: "right" },
  { label: "Australia", x: 116.5, y: 48.5, side: "left" },
  { label: "New Zealand", x: 124.5, y: 51, side: "belowLeft" },
];

const LABEL_SIDE = {
  left: "right-3 top-0 -translate-y-1/2",
  right: "left-3 top-0 -translate-y-1/2",
  above: "bottom-3 left-1/2 -translate-x-1/2",
  below: "top-3 left-1/2 -translate-x-1/2",
  // Under the pin and running left, for points at the map's right edge.
  belowLeft: "right-0 top-3",
};

/* Entrance timing, in seconds: the home pin lands, then each line draws out
   from it in turn and its country's pin pops in as the line arrives. */
const START = 0.35;
const DRAW = 1.1;
const STAGGER = 0.18;
const arrival = (i: number) => START + i * STAGGER + DRAW * 0.9;

/** A curve from home to a point, bowed upwards by a share of its length. */
function arc(to: { x: number; y: number }) {
  const midX = (HOME.x + to.x) / 2;
  const lift = Math.hypot(to.x - HOME.x, to.y - HOME.y) * 0.3;
  const midY = Math.min(HOME.y, to.y) - lift;
  return `M${HOME.x} ${HOME.y} Q${midX} ${midY} ${to.x} ${to.y}`;
}

const pct = (x: number, y: number) => ({
  left: `${(x / MAP_W) * 100}%`,
  top: `${(y / MAP_H) * 100}%`,
});

/** Hidden state is applied at once, so leaving the section never plays backwards. */
const HIDE = { duration: 0 };

/**
 * The world map for Global Reach. Each time it scrolls into view the dashed
 * lines draw out from Pakistan to every country; with reduced motion they are
 * simply shown.
 */
export default function ReachMap() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduce = useReducedMotion();
  const shown = inView || !!reduce;
  // useId can contain colons, which do not belong inside url(#...).
  const maskId = `reach-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <div ref={ref} className="relative aspect-[126/60] w-full">
      <Image
        src="/images/landing/world-dots.svg"
        alt="World map showing work delivered from Pakistan to clients abroad"
        fill
        sizes="(max-width: 1024px) 100vw, 55vw"
        className="object-contain"
      />

      <svg
        aria-hidden
        viewBox={`0 0 ${MAP_W} ${MAP_H}`}
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        {/* The lines are dashed, so each is drawn by growing a solid mask
            along it rather than animating the dashes themselves. */}
        <defs>
          {DESTINATIONS.map((to, i) => (
            <mask
              key={to.label}
              id={`${maskId}-${i}`}
              maskUnits="userSpaceOnUse"
              x={0}
              y={-MAP_H / 2}
              width={MAP_W}
              height={MAP_H * 2}
            >
              <motion.path
                d={arc(to)}
                fill="none"
                stroke="#fff"
                strokeWidth={2}
                initial={false}
                animate={{ pathLength: shown ? 1 : 0 }}
                transition={
                  shown && !reduce
                    ? {
                        duration: DRAW,
                        delay: START + i * STAGGER,
                        ease: "easeInOut",
                      }
                    : HIDE
                }
              />
            </mask>
          ))}
        </defs>

        {DESTINATIONS.map((to, i) => (
          <path
            key={to.label}
            d={arc(to)}
            mask={`url(#${maskId}-${i})`}
            fill="none"
            stroke="#FE5A01"
            strokeOpacity={0.7}
            strokeWidth={1.5}
            strokeDasharray="4 4"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* Pins are HTML so they stay round and crisp at any size. */}
      {DESTINATIONS.map((to, i) => (
        <motion.div
          key={to.label}
          className="absolute"
          style={pct(to.x, to.y)}
          initial={false}
          animate={
            shown ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }
          }
          transition={
            shown && !reduce
              ? {
                  duration: 0.4,
                  delay: arrival(i),
                  ease: [0.34, 1.56, 0.64, 1],
                }
              : HIDE
          }
        >
          <span className="absolute h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-primary shadow-[0_0_0_5px_rgba(254,89,1,0.2)]" />
          <span
            className={`text-label absolute hidden whitespace-nowrap rounded-full bg-white px-3 py-1 text-[#14141D] shadow-[0_8px_20px_-10px_rgba(11,11,18,0.35)] tablet:block ${LABEL_SIDE[to.side]}`}
          >
            {to.label}
          </span>
        </motion.div>
      ))}

      <motion.div
        className="absolute"
        style={pct(HOME.x, HOME.y)}
        initial={false}
        animate={shown ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
        transition={
          shown && !reduce
            ? { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }
            : HIDE
        }
      >
        <span className="absolute h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15" />
        <span className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-primary shadow-[0_6px_18px_-4px_rgba(254,89,1,0.8)]" />
        <span className="text-label absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-white shadow-[0_10px_24px_-10px_rgba(254,89,1,0.9)]">
          {HOME.label}
        </span>
      </motion.div>
    </div>
  );
}
