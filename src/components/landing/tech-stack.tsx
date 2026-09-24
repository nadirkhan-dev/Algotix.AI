import Image from "next/image";
import type React from "react";
import type { IconType } from "react-icons";
import {
  SiAmazonwebservices,
  SiAndroid,
  SiAnsible,
  SiApachekafka,
  SiCircleci,
  SiDjango,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiGitlab,
  SiGooglecloud,
  SiGrafana,
  SiHuggingface,
  SiJenkins,
  SiKotlin,
  SiKubernetes,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPandas,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedux,
  SiScikitlearn,
  SiSolidity,
  SiSwift,
  SiTailwindcss,
  SiTensorflow,
  SiTerraform,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { techLogosRowA, techLogosRowB, type TechLogo } from "./data";

/**
 * Single-colour marks for the dark band, keyed by the name in `data.ts`.
 *
 * Whitening the full-colour logo files with a CSS filter turns every opaque
 * pixel white, so logos drawn as a filled shape with the detail in a second
 * colour (TypeScript's square, Ansible's circle, Swift's rounded square)
 * collapse into blank blocks. These vector marks are drawn as one colour with
 * the detail cut out, which is the only kind of logo that reads on dark.
 *
 * Azure is not in Simple Icons (Microsoft's marks were withdrawn from it),
 * hence the one import from the VS Code set.
 */
/* `color` is the brand colour shown on hover. Marks whose brand colour is black
   or near-black use white instead, because they would vanish on the dark band.
   Every mark rests dimmed and gains a glow in its colour on hover, so even the
   white ones visibly switch on. */
const MONO_ICONS: Record<string, { icon: IconType; color: string }> = {
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  Python: { icon: SiPython, color: "#4B8BBE" },
  Django: { icon: SiDjango, color: "#44B78B" },
  TensorFlow: { icon: SiTensorflow, color: "#FF6F00" },
  PyTorch: { icon: SiPytorch, color: "#EE4C2C" },
  OpenAI: { icon: SiOpenai, color: "#FFFFFF" },
  AWS: { icon: SiAmazonwebservices, color: "#FF9900" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  Terraform: { icon: SiTerraform, color: "#844FBA" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Flutter: { icon: SiFlutter, color: "#54C5F8" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Google Cloud": { icon: SiGooglecloud, color: "#4285F4" },
  Azure: { icon: VscAzure, color: "#0089D6" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  GitHub: { icon: SiGithub, color: "#FFFFFF" },
  GitLab: { icon: SiGitlab, color: "#FC6D26" },
  Jenkins: { icon: SiJenkins, color: "#D24939" },
  Grafana: { icon: SiGrafana, color: "#F46800" },
  Prometheus: { icon: SiPrometheus, color: "#E6522C" },
  Kafka: { icon: SiApachekafka, color: "#FFFFFF" },
  Ansible: { icon: SiAnsible, color: "#EE0000" },
  CircleCI: { icon: SiCircleci, color: "#FFFFFF" },
  Vercel: { icon: SiVercel, color: "#FFFFFF" },
  Swift: { icon: SiSwift, color: "#F05138" },
  Kotlin: { icon: SiKotlin, color: "#7F52FF" },
  Android: { icon: SiAndroid, color: "#3DDC84" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  Redux: { icon: SiRedux, color: "#764ABC" },
  Vue: { icon: SiVuedotjs, color: "#4FC08D" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  NestJS: { icon: SiNestjs, color: "#E0234E" },
  "Hugging Face": { icon: SiHuggingface, color: "#FFD21E" },
  "scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
  pandas: { icon: SiPandas, color: "#E70488" },
  Solidity: { icon: SiSolidity, color: "#FFFFFF" },
};

/**
 * On hover the white mark cross-fades to the original full-colour logo file.
 * These are the exceptions: their original artwork is black or dark navy and
 * would vanish on the dark band, so they keep the vector mark and light up in
 * the colour above instead (white is how these brands show themselves on dark).
 */
const KEEP_MONO_ON_HOVER = new Set([
  "Next.js",
  "GitHub",
  "Kafka",
  "CircleCI",
  "Vercel",
  "Solidity",
  "OpenAI",
  "AWS",
  "Django",
  "pandas",
]);

export default function TechStack() {
  return (
    <section className="section-screen band-gradient relative overflow-hidden py-20 tablet:py-28 laptop:py-16">
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 xl:px-[60px]">
        <div className="grid items-center gap-14 laptop:grid-cols-2 laptop:gap-20">
          <Reveal direction="right" amount={0.2}>
            <p className="text-label uppercase text-primary">Our Stack</p>
            <h2 className="text-heading mt-5 text-white">
              Built on proven,
              <span className="block">production-grade tech</span>
            </h2>
            <p className="text-body mt-7 max-w-xl text-white/60 laptop:text-subheading laptop:font-normal laptop:leading-relaxed">
              We pick tools for longevity, not novelty, so what we ship stays
              maintainable long after launch.
            </p>
          </Reveal>

          <StackNetwork />
        </div>
      </div>

      {/* Two plain rows of wordmarks drifting in opposite directions. */}
      <RevealGroup
        className="relative z-10 mt-16 w-full overflow-hidden tablet:mt-20"
        amount={0.3}
        stagger={0.22}
      >
        <RevealItem direction="right" distance={48}>
          <LogoRow items={techLogosRowA} tone="dark" reverse />
        </RevealItem>
        <RevealItem direction="left" distance={48} className="mt-6 laptop:mt-7">
          <LogoRow items={techLogosRowB} tone="dark" />
        </RevealItem>
      </RevealGroup>
    </section>
  );
}

/* The network is drawn on a 640 x 600 canvas. Node positions are in those
   units and become percentages, so the whole figure scales with its column. */
const NET_W = 640;
const NET_H = 600;
const CORE = { x: 327, y: 315 };

const NET_NODES: { name: string; x: number; y: number; small?: boolean }[] = [
  { name: "Figma", x: 433, y: 50, small: true },
  { name: "OpenAI", x: 300, y: 117 },
  { name: "Next.js", x: 200, y: 143 },
  { name: "Kubernetes", x: 510, y: 187 },
  { name: "Python", x: 560, y: 281 },
  { name: "AWS", x: 132, y: 335 },
  { name: "PostgreSQL", x: 47, y: 352, small: true },
  { name: "Node.js", x: 134, y: 443 },
  { name: "React", x: 443, y: 475 },
  { name: "Django", x: 356, y: 525 },
  { name: "Tailwind CSS", x: 501, y: 533, small: true },
];

/** Nodes wired straight to the core. */
const NET_SPOKES = [
  "OpenAI",
  "Next.js",
  "Kubernetes",
  "Python",
  "AWS",
  "Node.js",
  "React",
  "Django",
];

/** The web between the outer nodes. */
const NET_LINKS: [string, string][] = [
  ["Next.js", "OpenAI"],
  ["OpenAI", "Figma"],
  ["OpenAI", "Kubernetes"],
  ["Next.js", "AWS"],
  ["AWS", "Node.js"],
  ["PostgreSQL", "Node.js"],
  ["PostgreSQL", "Django"],
  ["Node.js", "Django"],
  ["Kubernetes", "Python"],
  ["Kubernetes", "Tailwind CSS"],
  ["Python", "React"],
  ["React", "Django"],
];

/** The stack as a still network around a glowing core. */
function StackNetwork() {
  const at = (name: string) => NET_NODES.find((n) => n.name === name)!;

  return (
    <div className="relative mx-auto aspect-[640/600] w-full max-w-[680px]">
      {/* The orange bloom behind the core. */}
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full bg-[radial-gradient(closest-side,rgba(254,89,1,0.55),rgba(254,89,1,0))] blur-xl"
        style={{
          left: `${((CORE.x - 210) / NET_W) * 100}%`,
          top: `${((CORE.y - 210) / NET_H) * 100}%`,
          width: `${(420 / NET_W) * 100}%`,
          height: `${(420 / NET_H) * 100}%`,
        }}
      />

      <svg
        aria-hidden
        viewBox={`0 0 ${NET_W} ${NET_H}`}
        className="absolute inset-0 h-full w-full"
      >
        {NET_LINKS.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={at(a).x}
            y1={at(a).y}
            x2={at(b).x}
            y2={at(b).y}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={1.5}
          />
        ))}
        {NET_SPOKES.map((name) => (
          <line
            key={name}
            x1={at(name).x}
            y1={at(name).y}
            x2={CORE.x}
            y2={CORE.y}
            stroke="rgba(255,255,255,0.14)"
            strokeWidth={1.5}
          />
        ))}

        {/* The core: a thin ring round a solid orange dot. */}
        <circle
          cx={CORE.x}
          cy={CORE.y}
          r={52}
          fill="none"
          stroke="rgba(254,89,1,0.55)"
          strokeWidth={1.5}
        />
        <circle cx={CORE.x} cy={CORE.y} r={18} fill="#FE5A01" />
        <circle cx={CORE.x} cy={CORE.y} r={6} fill="#FFFFFF" />
      </svg>

      <RevealGroup className="absolute inset-0" stagger={0.06} amount={0.2}>
        {NET_NODES.map((node) => {
          const { icon: Icon, color } = MONO_ICONS[node.name];
          const size = node.small ? 58 : 72;
          return (
            <RevealItem
              key={node.name}
              direction="none"
              className="absolute"
              style={{
                left: `${((node.x - size / 2) / NET_W) * 100}%`,
                top: `${((node.y - size / 2) / NET_H) * 100}%`,
                width: `${(size / NET_W) * 100}%`,
              }}
            >
              <div
                role="img"
                aria-label={node.name}
                className="flex aspect-square w-full items-center justify-center rounded-full border border-white/15 bg-[#17171F] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.8)]"
              >
                {/* Each mark in its brand colour (white for the black ones). */}
                <Icon className="h-[42%] w-[42%]" style={{ color }} />
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </div>
  );
}

/** The mark for one row entry: a white vector on dark, the colour file on light. */
function LogoMark({ tech, dark }: { tech: TechLogo; dark: boolean }) {
  const mono = dark ? MONO_ICONS[tech.name] : undefined;
  if (mono) {
    const Icon = mono.icon;
    const swap = !KEEP_MONO_ON_HOVER.has(tech.name);
    return (
      <span className="relative block h-9 w-9 shrink-0 tablet:h-10 tablet:w-10 laptop:h-12 laptop:w-12">
        <Icon
          /* Dimmed white at rest. The hover stays pure CSS (a variable carries
             the colour), so this can remain a server component. */
          style={{ "--brand": mono.color } as React.CSSProperties}
          className={`absolute inset-0 h-full w-full text-white/55 transition-all duration-300 ${
            swap
              ? "group-hover:opacity-0"
              : "group-hover:text-[color:var(--brand)] group-hover:[filter:drop-shadow(0_0_10px_var(--brand))]"
          }`}
          aria-label={`${tech.name} logo`}
        />
        {swap && (
          <Image
            src={tech.logo}
            alt=""
            aria-hidden
            width={80}
            height={80}
            className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
      </span>
    );
  }
  return (
    <Image
      src={tech.logo}
      alt={`${tech.name} logo`}
      width={40}
      height={40}
      className={`h-9 w-auto object-contain tablet:h-10 ${
        dark ? "brightness-0 invert" : ""
      }`}
    />
  );
}

export function LogoRow({
  items,
  reverse = false,
  className = "",
  tone = "light",
}: {
  items: TechLogo[];
  /** Reverse runs the same loop backwards, so the row drifts left to right. */
  reverse?: boolean;
  className?: string;
  /** On dark bands the marks are white and take their brand colour on hover. */
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`landing-marquee flex w-max ${reverse ? "marquee-reverse" : ""} ${
          dark ? "hover:[animation-play-state:paused]" : ""
        }`}
        style={{ animationDuration: "70s" }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {items.map((tech) => (
              <div
                key={`${copy}-${tech.name}`}
                className={`group flex shrink-0 items-center pr-16 transition duration-300 tablet:pr-28 ${
                  dark
                    ? "gap-3.5"
                    : "gap-3.5 opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
                }`}
              >
                <LogoMark tech={tech} dark={dark} />
                <span
                  className={`text-body whitespace-nowrap font-semibold ${dark ? " text-white/65 transition-colors duration-300 group-hover:text-white laptop:text-subheading " : " text-[#6B6F76] "}`}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
