import type { ReactNode } from "react";

export function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-white/70 leading-relaxed">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-white shrink-0" />
      <span className="flex-1">{children}</span>
    </li>
  );
}
