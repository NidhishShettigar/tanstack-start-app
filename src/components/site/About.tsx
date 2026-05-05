import { Reveal, SectionHeader } from "./Reveal";
import { Eye, Target } from "lucide-react";
import { Bullet } from "./Bullet";
import aboutImg from "@/assets/about-yard.jpg";
import visionBg from "@/assets/vision-bg.jpg";
import missionBg from "@/assets/mission-bg.jpg";

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Who We Are */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          <div className="flex flex-col justify-center">
            <SectionHeader
              eyebrow="Who We Are"
              title="A Trusted Partner in Industrial Energy Supply"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-white/70 leading-relaxed text-justify">
                MS Ventures, established in 2015, is a proprietorship firm specializing in the
                Trading and Supply of Coal, Charcoal and Bio-Briquettes. With a strong emphasis
                on quality, consistency and timely delivery, the Company has earned a reputation
                as a reliable supplier to key industries such as Cement, Steel, Pharmaceuticals,
                Food Processing and Energy.
              </p>
              <p className="mt-5 text-white/70 leading-relaxed text-justify">
                Backed by a robust sourcing network and efficient logistics, MS Ventures ensures an
                uninterrupted supply of Fuel materials tailored to both bulk and customized
                industrial requirements across Karnataka and neighboring regions. Our dedication to
                ethical business practices and customer satisfaction continues to drive our steady
                growth and long-term partnerships.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative w-full h-full min-h-[420px] lg:min-h-[520px] overflow-hidden rounded-sm glow-border">
              <img
                src={aboutImg}
                alt="Coal logistics yard"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Vision & Mission */}
        <div className="mt-24 grid md:grid-cols-2 gap-6">
          <Reveal>
            <article className="relative h-full p-8 md:p-10 rounded-sm bg-white/[0.02] glow-border overflow-hidden">
              <img
                src={visionBg}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-[0.7] pointer-events-none"
                style={{ filter: "brightness(1.1) contrast(1.1)" }}
              />
              <div className="absolute inset-0 bg-black/35 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50 pointer-events-none" />
              <div className="relative">
                <Eye className="h-7 w-7 text-white/80" strokeWidth={1.2} />
                <h3 className="mt-6 font-display text-2xl md:text-3xl font-semibold tracking-tight">
                  Vision
                </h3>
                <ul className="mt-5 space-y-3">
                  <Bullet>Become a Trusted Name in Fuel Supply</Bullet>
                  <Bullet>Maintain Consistent Product Quality</Bullet>
                  <Bullet>Build Long-Term Client Relationships</Bullet>
                  <Bullet>Support Eco-Friendly Solutions</Bullet>
                  <Bullet>Expand reach across Industries with Reliable Energy Solutions</Bullet>
                </ul>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="relative h-full p-8 md:p-10 rounded-sm bg-white/[0.02] glow-border overflow-hidden">
              <img
                src={missionBg}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-[0.7] pointer-events-none"
                style={{ filter: "brightness(1.1) contrast(1.1)" }}
              />
              <div className="absolute inset-0 bg-black/35 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60 pointer-events-none" />
              <div className="relative">
                <Target className="h-7 w-7 text-white/80" strokeWidth={1.2} />
                <h3 className="mt-6 font-display text-2xl md:text-3xl font-semibold tracking-tight">
                  Mission
                </h3>
                <ul className="mt-5 space-y-3">
                  <Bullet>Source the Best Fuel from Trusted Suppliers.</Bullet>
                  <Bullet>Check Quality on Every Shipment.</Bullet>
                  <Bullet>Deliver on Time, Every Time.</Bullet>
                  <Bullet>Offer Fair, Transparent Pricing.</Bullet>
                  <Bullet>Promote Greener Fuel Options.</Bullet>
                </ul>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
