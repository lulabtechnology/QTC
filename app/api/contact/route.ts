import { siteConfig } from "@/lib/site";
import { Resend } from "resend";

type Payload = {
  name?: string;
  company?: string;
  industry?: string;
  country?: string;
  phone?: string;
  email?: string;
  requestType?: string;
  message?: string;
};

function validate(payload: Payload) {
  const requiredFields: Array<keyof Payload> = [
    "name",
    "company",
    "industry",
    "country",
    "phone",
    "email",
    "requestType",
    "message"
  ];

  for (const field of requiredFields) {
    if (!payload[field]?.trim()) {
      return `El campo ${field} es obligatorio.`;
    }
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Payload;
    const error = validate(payload);

    if (error) {
      return Response.json({ message: error }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactTo = process.env.CONTACT_TO_EMAIL || siteConfig.email;
    const contactFrom =
      process.env.CONTACT_FROM_EMAIL ||
      "Quality Techno Services <no-reply@qualitytechnoservices.com>";

    if (!apiKey) {
      console.info("CONTACT_FORM_DEMO_MODE", payload);
      return Response.json({
        message:
          "Gracias. El formulario quedó funcionando en modo demo. Configura RESEND_API_KEY para recibir correos reales en Vercel."
      });
    }

    const resend = new Resend(apiKey);

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0b1220">
        <h2>Nueva solicitud desde Quality Techno Services</h2>
        <p><strong>Nombre:</strong> ${payload.name}</p>
        <p><strong>Empresa:</strong> ${payload.company}</p>
        <p><strong>Industria:</strong> ${payload.industry}</p>
        <p><strong>País:</strong> ${payload.country}</p>
        <p><strong>Teléfono:</strong> ${payload.phone}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Tipo de solicitud:</strong> ${payload.requestType}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${payload.message?.replace(/\n/g, "<br />")}</p>
      </div>
    `;

    await resend.emails.send({
      from: contactFrom,
      to: [contactTo],
      replyTo: payload.email!,
      subject: `Nuevo lead industrial: ${payload.requestType} · ${payload.company}`,
      html
    });

    return Response.json({
      message:
        "Gracias. Hemos recibido tu solicitud y te contactaremos en menos de 24 horas."
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "No fue posible enviar la solicitud. Intenta nuevamente." },
      { status: 500 }
    );
  }
}
