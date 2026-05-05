import { Reveal, SectionHeader } from "./Reveal";
import gadre from "@/assets/clients/gadre.png";
import ulka from "@/assets/clients/ulka.png";
import jk from "@/assets/clients/jkcement.jpg";
import taj from "@/assets/clients/taj.webp";
import sanchary from "@/assets/clients/sanchary.png";
import yashaswi from "@/assets/clients/yashaswi.png";

const clients = [
  { name: "Gadre Marine", logo: gadre },
  { name: "Yashaswi Marine", logo: yashaswi },
  { name: "Ulka", logo: ulka },
  { name: "JK Cement", logo: jk },
  { name: "Taj Hotels", logo: taj },
  { name: "Sanchary Marine", logo: sanchary },
];

export function Clients() {
  const loop = [...clients, ...clients];

  return (
    <section id="clients" className="section-pad bg-white/[0.015] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Clients"
          title="Trusted by Leading Industries"
          description="A growing network of partners across cement, marine, hospitality, and processing sectors."
          align="center"
        />
      </div>

      <Reveal delay={0.2}>
        <div className="relative mt-16">
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

          <div className="flex w-max animate-marquee-rtl gap-5">
            {loop.map((c, i) => {
              const zoom = c.name === "Taj Hotels" || c.name === "JK Cement";
              return (
                <div
                  key={`${c.name}-${i}`}
                  className="flex items-center justify-center min-w-[240px] h-32 px-2 rounded-sm bg-white glow-border overflow-hidden"
                >
                  <img
                    src={c.logo}
                    alt={c.name}
                    loading="lazy"
                    className="block object-contain"
                    style={
                      zoom
                        ? { height: "95%", width: "auto", maxWidth: "none", transform: "scale(1.35)", transformOrigin: "center" }
                        : { maxHeight: "85%", maxWidth: "85%", width: "auto", height: "auto" }
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
