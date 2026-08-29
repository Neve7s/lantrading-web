import { useState, useEffect } from "react";
const slides = [
  { src: "/imagenes/21803__1.webp", title: "Trozador F-200 · SAGAS", href: "/producto/trozadora-de-carnes-modelo-f-200-marca-sagas" },
  { src: "/imagenes/21452__1.webp", title: "Amarrador KZ-52B · SAGAS", href: "/producto/amarrador-electrico-semi-automatico-marca-sagas" },
  { src: "/imagenes/20570__1.webp", title: "Balanza Pallets FTS-A101E · ACU", href: "/producto/balanza-pallets-acu-mod-fts-a101e" },
];
export default function HeroCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % slides.length), 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="card p-3 relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-primary)] opacity-10 rounded-full blur-2xl animate-pulse" />
      <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden bg-[var(--paper-2)]">
        {slides.map((s, idx) => (
          <a key={s.src} href={s.href} className={`absolute inset-0 transition-all duration-700 ${idx===i ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"}`}>
            <img src={s.src} alt={s.title} className="w-full h-full object-cover" loading={idx===0?"eager":"lazy"} decoding="async" fetchpriority={idx===0?"high":"auto"} sizes="(max-width: 1024px) 100vw, 50vw" />
          </a>
        ))}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {slides.map((_, idx)=>(
            <button key={idx} onClick={()=>setI(idx)} className={`h-1.5 rounded-full transition-all ${idx===i?"w-6 bg-white":"w-3 bg-white/60"}`} aria-label={`slide ${idx+1}`} />
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-sm font-medium">{slides[i].title}</div>
        <a href={slides[i].href} className="btn-accent !py-2 !px-3 text-xs">Ver</a>
      </div>
    </div>
  );
}
