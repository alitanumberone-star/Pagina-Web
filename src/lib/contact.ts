// Contact settings for GTI_Gaspar. The WhatsApp number is stored in international
// format (country code + number, digits only) as wa.me requires.
export const WHATSAPP_NUMBER = "526565562250";
export const WHATSAPP_DISPLAY = "656 556 2250";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola GTI_Gaspar, me interesa una evaluación de gobierno de TI (EDM03 – Optimización del riesgo) para mi empresa.";

export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
