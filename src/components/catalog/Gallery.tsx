import { useState } from "react";
export default function Gallery({ imagenes, nombre }: { imagenes: string[]; nombre: string }) {
  const [idx, setIdx] = useState(0);
  const src = (p: string) => `/${p}`;
  return (
    <div className="card p-3 flex flex-col">
      <div className="overflow-hidden rounded-xl bg-white border border-[var(--color-border)] flex items-center justify-center p-2 sm:p-3 min-h-[280px] sm:min-h-[360px]">
        <img src={src(imagenes[idx])} alt={nombre} className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-contain" loading="eager" decoding="async" fetchPriority="high" sizes="(max-width: 1024px) 100vw, 50vw" />
      </div>
      {imagenes.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-auto snap-x" role="tablist" aria-label="Miniaturas">
          {imagenes.map((im, i) => (
            <button key={im} onClick={() => setIdx(i)} role="tab" aria-selected={i===idx} aria-label={`Ver imagen ${i+1} de ${imagenes.length}`} className={`shrink-0 rounded-lg overflow-hidden border-2 snap-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] bg-white ${i===idx?"border-[var(--color-accent)]":"border-[var(--color-border)]"}`}>
              <img src={src(im)} alt="" className="w-16 h-16 object-contain p-0.5" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
