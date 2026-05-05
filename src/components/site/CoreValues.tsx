import { Reveal, SectionHeader } from "./Reveal";
import { Bullet } from "./Bullet";
import vIntegrity from "@/assets/value-integrity.jpg";
import vQuality from "@/assets/value-quality.jpg";
import vCustomer from "@/assets/value-customer.jpg";
import vSustain from "@/assets/value-sustain.jpg";

interface ValueItem {
  img: string;
  title: string;
  intro: string;
  bullets: string[];
}

const items: ValueItem[] = [
  {
    img: vIntegrity,
    title: "Integrity",
    intro: "We stand by our values, every single time. Built on trust, honesty and doing what we promise.",
    bullets: [
      "We Keep Everything Honest and Clear",
      "No Hidden Terms or Confusion",
      "Strong Trust with Clients",
      "Long-Term Relationships",
    ],
  },
  {
    img: vQuality,
    title: "Quality",
    intro: "We aim for the best in everything we do. Consistent results that meet high standards.",
    bullets: [
      "Only Tested and High-Grade Materials",
      "Same Quality Every Time",
      "Proper Checking and Grading",
      "Reliable Performance",
    ],
  },
  {
    img: vCustomer,
    title: "Customer Focus",
    intro: "We put you at the center of our work. Focused on understanding and delivering what matters most.",
    bullets: [
      "We Understand Customer Needs",
      "Flexible Supply Options",
      "Quick Support",
      "Long-Term Partnerships",
    ],
  },
  {
    img: vSustain,
    title: "Sustainability",
    intro: "We think long-term in every decision. Creating growth that cares for people and the world.",
    bullets: [
      "Promote Eco-Friendly Fuels",
      "Reduce Environmental Impact",
      "Support Renewable Options",
      "Responsible Sourcing ",
    ],
  },
];

export function CoreValues() {
  return (
    <section className="section-pad bg-white/[0.015]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow="Core Values" title="What Guides us Every Day" />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <article className="h-full rounded-sm bg-card glow-border overflow-hidden flex flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {it.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-white/65 leading-relaxed text-justify min-h-[72px]">
                    {it.intro}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {it.bullets.map((b) => (
                      <Bullet key={b}>
                        <span className="text-[13px]">{b}</span>
                      </Bullet>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
