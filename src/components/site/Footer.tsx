const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "products", label: "Products & Services" },
  { id: "clients", label: "Clients" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="font-display text-xl font-bold tracking-tight text-white">MS Ventures</div>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              Coal, charcoal, and bio-briquettes — supplied with quality and trust since 2015.
            </p>
          </div>

          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-white/50 mb-5">Navigate</div>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button onClick={() => go(l.id)} className="text-sm text-white hover:text-white/70 transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-white/50 mb-5">Contact</div>
            <ul className="space-y-2.5 text-sm text-white">
              <li className="text-white/80">Kulur, Mangalore — 575013</li>
              <li><a href="tel:+919844629696" className="hover:text-white/70 transition-colors">+91 98446 29696</a></li>
              <li><a href="mailto:msventures.srthkl@gmail.com" className="hover:text-white/70 transition-colors break-all">msventures.srthkl@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/60">
          <div>© {new Date().getFullYear()} MS Ventures. All rights reserved.</div>
          <div className="tracking-[0.2em] uppercase">Partner in Global Trade</div>
        </div>
      </div>
    </footer>
  );
}
