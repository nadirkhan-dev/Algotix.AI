import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CircleCheck,
  Mail,
  Phone,
  type LucideIcon,
} from "lucide-react";

import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { contactData } from "@/src/containers/contact/data";

/* The same email and phone as the contact page, so they never drift apart. */
const email = contactData.find((c) => c.link.startsWith("mailto:"))!;
const phone = contactData.find((c) => c.link.startsWith("tel:"))!;

const channels: {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}[] = [
  { icon: Mail, label: "Email us", value: email.title, href: email.link },
  { icon: Phone, label: "Call us", value: phone.title, href: phone.link },
  {
    icon: CalendarDays,
    label: "Book a meeting",
    value: "Pick a time that suits you",
    href: "/meeting-request",
  },
];

export default function ValueBand() {
  return (
    <section className="section-screen relative overflow-hidden bg-[#0B0B12] py-20 tablet:py-28 laptop:py-16">
      {/* Layered blooms rather than a bitmap, so it stays crisp at any width. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 420px at 15% 20%, rgba(254,89,1,0.38) 0%, rgba(254,89,1,0) 60%), radial-gradient(760px 420px at 85% 80%, rgba(127,0,255,0.30) 0%, rgba(127,0,255,0) 62%), radial-gradient(600px 300px at 60% 10%, rgba(255,138,61,0.20) 0%, rgba(255,138,61,0) 65%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 xl:px-[60px]">
        <div className="grid items-center gap-14 laptop:grid-cols-[1.1fr_1fr] laptop:gap-20">
          <Reveal direction="right" distance={32} amount={0.2}>
            <p className="text-label uppercase text-primary">Get In Touch</p>
            <h2 className="text-heading mt-5 text-white laptop:text-display">
              Let&apos;s build
              <span className="block text-primary">what&apos;s next.</span>
            </h2>
            <p className="text-body mt-7 max-w-xl text-white/65 laptop:text-subheading laptop:font-normal laptop:leading-relaxed">
              Tell us what you are trying to build. We will come back with a
              clear view of scope, approach, and what it takes to ship it.
            </p>
            <Link
              href="/contact"
              className="text-label group mt-10 inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full bg-primary px-8 py-4 uppercase text-white shadow-[0_16px_38px_-14px_rgba(254,89,1,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FF6A1A] laptop:px-10"
            >
              Contact us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <p className="text-small mt-6 flex items-center gap-2 text-white/55">
              <CircleCheck className="h-4 w-4 text-primary" strokeWidth={2} />
              We reply to every message within one business day.
            </p>
          </Reveal>

          {/* The ways to reach us, one card each, stepping in from the right. */}
          <RevealGroup
            className="flex flex-col gap-4 tablet:gap-5"
            stagger={0.14}
            amount={0.2}
          >
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <RevealItem key={channel.label} direction="left" distance={32}>
                  <Link
                    href={channel.href}
                    className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.08] tablet:p-6"
                  >
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="text-label block text-white/55">
                        {channel.label}
                      </span>
                      <span className="text-subheading mt-1 block truncate text-white">
                        {channel.value}
                      </span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
