export type ContactPayload = {
  name: string;
  company: string;
  industry: string;
  country: string;
  phone: string;
  email: string;
  requestType: string;
  message: string;
};

export function whatsappHref(message?: string) {
  const digits = process.env.WHATSAPP_NUMBER || "50768987181";
  const text = encodeURIComponent(
    message ||
      "Hola, quiero solicitar una asesoría técnica especializada con Quality Techno Services."
  );

  return `https://wa.me/${digits}?text=${text}`;
}
