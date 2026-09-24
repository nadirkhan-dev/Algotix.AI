import { Reveal } from "@/src/components/motion/reveal";
import { stats } from "./data";
import ReachMap from "./reach-map";

export default function Proof() {
  return (
    /* On laptop the map block takes the free height and centres in it, and
       the stats row sits along the bottom. */
    <section className="section-screen relative overflow-hidden border-t border-[#E4E4E8] bg-white py-20 tablet:py-28 laptop:grid-rows-[1fr_auto] laptop:content-stretch laptop:py-16">
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 laptop:self-center xl:px-[60px]">
        <div className="grid gap-14 laptop:grid-cols-[1fr_1.2fr] laptop:items-center laptop:gap-12">
          <Reveal direction="right" amount={0.2}>
            <p className="text-label uppercase text-primary">Global Reach</p>
            <h2 className="text-heading mt-5 text-[#14141D] laptop:text-display">
              Rooted in Pakistan.
              <span className="block text-primary">Delivering worldwide.</span>
            </h2>
            <p className="text-body mt-7 max-w-xl text-[#6B6F76] laptop:text-subheading laptop:font-normal laptop:leading-relaxed">
              We partner with startups and enterprises across industries,
              pairing global engineering standards with the responsiveness of a
              close-knit team.
            </p>
          </Reveal>

          {/* The dotted world map: lines draw out from Pakistan to the places
              the work goes, with an orange pin at each end. */}
          <Reveal direction="left" distance={40} amount={0.2}>
            <div className="w-full xl:w-[104%] desktop:w-[115%]">
              <ReachMap />
            </div>
          </Reveal>
        </div>
      </div>

      {/* The figures in one still row along the bottom, where the logo chain
          sits in Our Stack, split by thin rules. */}
      <Reveal
        amount={0.2}
        className="mx-auto mt-14 w-full max-w-[1600px] px-6 sm:px-10 laptop:mt-10 xl:px-[60px]"
      >
        <dl className="grid grid-cols-3 border-t border-[#E4E4E8] pt-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={
                i > 0
                  ? "border-l border-[#E4E4E8] pl-5 tablet:pl-10 laptop:pl-14"
                  : "pr-5"
              }
            >
              <dt className="text-heading text-primary">{stat.value}</dt>
              <dd className="text-small mt-2 text-[#6B6F76]">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
