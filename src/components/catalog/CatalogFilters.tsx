import { useState, useMemo, useEffect } from "react";
type Prod = { codigo: number; nombre: string; slug: string; categoria: any; marca: string; modelo: string; especificaciones: string[]; descripcion_corta: string; imagen_principal: string; imagenes: string[] };
export default function CatalogFilters({ productos, categorias, initialCat, onFilter }: { productos: Prod[]; categorias: any[]; initialCat?: string; onFilter: (list: Prod[])=>void }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState(initialCat ?? "todas");
  const [marca, setMarca] = useState("todas");
  const marcas = useMemo(()=> [...new Set(productos.map(p=>p.marca))].filter(Boolean).sort(), [productos]);
  const filtered = useMemo(()=>{
    let l=[...productos];
    if(cat!=="todas") l=l.filter(p=>p.categoria?.slug===cat);
    if(marca!=="todas") l=l.filter(p=>p.marca===marca);
    if(q.trim()){ const t=q.toLowerCase(); l=l.filter(p=>[p.nombre,p.marca,p.modelo,p.especificaciones.join(" ")].join(" ").toLowerCase().includes(t));}
    return l;
  },[q,cat,marca,productos]);
  useEffect(()=>{ onFilter(filtered); }, [filtered, onFilter]);
  return (
    <div className="card p-3 md:p-4 flex flex-col gap-3">
      <div className="grid md:grid-cols-3 gap-3">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Buscar producto, modelo, marca..." className="px-3 py-2.5 rounded-full border border-[var(--color-border)] bg-white text-sm outline-none focus:border-[var(--color-primary)]" />
        <select value={cat} onChange={e=>setCat(e.target.value)} className="px-3 py-2.5 rounded-full border border-[var(--color-border)] bg-white text-sm">
          <option value="todas">Todas las categorías</option>
          {categorias.filter(c=>c.productos>0).sort((a,b)=>b.productos-a.productos).map(c=> <option key={c.slug} value={c.slug}>{c.nombre} ({c.productos})</option>)}
        </select>
        <select value={marca} onChange={e=>setMarca(e.target.value)} className="px-3 py-2.5 rounded-full border border-[var(--color-border)] bg-white text-sm">
          <option value="todas">Todas las marcas</option>
          {marcas.map(m=> <option key={m} value={m}>{m}</option>)}
        </select>
      </div>
      <div className="text-xs text-[var(--color-text-muted)]">{filtered.length} productos · Amazon-style filtros reutilizables para futura DB</div>
    </div>
  );
}
