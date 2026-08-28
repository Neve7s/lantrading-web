import { useState } from "react";
export default function Gallery({ imagenes, nombre }: { imagenes: string[]; nombre: string }) {
  const [idx, setIdx] = useState(0);
  const src = (p: string) => `/${p}`;
  return (
    <div className="card p-3">
      <div className="overflow-hidden rounded-xl bg-[var(--paper-2)]">
        <img src={src(imagenes[idx])} alt={nombre} className="w-full h-[360px] object-cover" />
      </div>
      {imagenes.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-auto">
          {imagenes.map((im, i) => (
            <button key={im} onClick={() => setIdx(i)} className={`shrink-0 rounded-lg overflow-hidden border ${i===idx?"border-[var(--color-accent)]":"border-[var(--color-border)]"}`}>
              <img src={src(im)} alt="" className="w-16 h-16 object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
