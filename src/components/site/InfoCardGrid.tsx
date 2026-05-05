import { Reveal, SectionHeader } from "./Reveal";
import { Bullet } from "./Bullet";

export interface InfoCard {
  img?: string;
  title: string;
  intro: string;
  bullets: string[];
}

export function InfoCardGrid({
  id,
  eyebrow,
  title,
  description,
  items,
  bg,
  withImage = true,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  items: InfoCard[];
  bg?: "muted" | "default";
  withImage?: boolean;
}) {
  return (
    <section id={id} className={`section-pad ${bg === "muted" ? "bg-white/[0.015]" : ""}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <article className="h-full rounded-sm bg-card glow-border overflow-hidden flex flex-col">
                {withImage && it.img && (
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={it.img}
                      alt={it.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {it.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-white/65 leading-relaxed text-justify min-h-[72px]">{it.intro}</p>
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
