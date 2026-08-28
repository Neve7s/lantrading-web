// función reutilizable — mismo contrato cuando migremos a DB
export const WHATSAPP_NUM = "51959683123"; // ventas principal sagas
export function buildWhatsAppUrl(producto: { codigo: number; nombre: string; slug: string }, opts?: { categoria?: string }) {
  const msg = `Hola SAGAS 👋, me interesa cotizar:\n\n• ${producto.nombre}\n• Código: ${producto.codigo}\n• ${`https://sagas.com.pe/product/${producto.slug}/`}${opts?.categoria ? `\n• Categoría: ${opts.categoria}` : ""}\n\n¿Precio y disponibilidad?`;
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUM}&text=${encodeURIComponent(msg)}`;
}
export function buildGenericWhatsApp(text = "Hola SAGAS, quisiera información") {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUM}&text=${encodeURIComponent(text)}`;
}
