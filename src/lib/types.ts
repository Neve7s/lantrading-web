export type Producto = {
  codigo: number; nombre: string; slug: string; url: string;
  categoria: { codigo: number; nombre: string; slug: string } | null;
  categorias: string[]; marca: string; modelo: string;
  precio: string | null; moneda: string; estado: string;
  imagenes: string[]; imagen_principal: string;
  descripcion_corta: string; descripcion: string;
  especificaciones: string[]; beneficios: string[]; tags: string[];
}
export type Categoria = { codigo: number; nombre: string; slug: string; descripcion: string; url: string; padre: number; productos: number }
