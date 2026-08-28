import type { Producto } from "./types";

export function getRelated(actual: Producto, todos: Producto[], n = 4) {
  const sameCat = todos.filter(p => p.codigo !== actual.codigo && p.categoria?.slug === actual.categoria?.slug);
  if (sameCat.length >= n) return sameCat.slice(0, n);
  const sameMarca = todos.filter(p => p.codigo !== actual.codigo && p.marca === actual.marca && !sameCat.includes(p));
  return [...sameCat, ...sameMarca].slice(0, n);
}
