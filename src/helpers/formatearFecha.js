export function formatearFecha(fecha) {
  const fechaNueva = Date.now(fecha);
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return fechaNueva.toLocaleDateString("es-Es", opciones);
}
