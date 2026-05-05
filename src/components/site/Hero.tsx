import { motion } from "framer-motion";
import heroImg from "@/assets/hero-coal.jpg";

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="MS Ventures coal operations"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      {/* Lighter overlay — image must remain clearly visible */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/55" />

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.95] tracking-tight text-white text-balance drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
        >
          MS Ventures
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-8 text-xl md:text-3xl text-white font-light tracking-wide"
        >
          Partner in Global Trade
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 text-[11px] md:text-xs uppercase tracking-[0.4em] text-white/70"
        >
          Est. 2015 — Mangalore, India
        </motion.div>
      </div>
    </section>
  );
}
