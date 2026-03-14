"use client";

import { formOptions, siteConfig } from "@/lib/site";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

const initialState = {
  name: "",
  company: "",
  industry: "",
  country: "",
  phone: "",
  email: "",
  requestType: formOptions[0],
  message: ""
};

type Status =
  | { type: "idle"; message: string }
  | { type: "loading"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<Status>({
    type: "idle",
    message: "Completa el formulario y te contactaremos en menos de 24 horas."
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "loading", message: "Enviando solicitud..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const result = (await response.json()) as { message?: string; demoMode?: boolean };

      if (!response.ok) {
        throw new Error(result.message || "No fue posible enviar la solicitud.");
      }

      setStatus({
        type: "success",
        message:
          result.message ||
          "Gracias. Hemos recibido tu solicitud y te contactaremos en menos de 24 horas."
      });
      setForm(initialState);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Ocurrió un error al enviar el formulario."
      });
    }
  }

  return (
    <section id="contacto" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-premium">
            <p className="text-[11px] uppercase tracking-[0.28em] text-brand-600">
              Formulario de leads
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
              Solicita asesoría técnica especializada
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Comparte el contexto de tu operación, tu industria y el tipo de solicitud.
              El equipo está preparado para responder con enfoque técnico y sentido comercial.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                <Mail className="mt-1 h-5 w-5 text-brand-600" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-slate-600 transition hover:text-slate-900"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                <Phone className="mt-1 h-5 w-5 text-brand-600" />
                <div>
                  <p className="text-sm font-medium text-slate-900">WhatsApp directo</p>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappDigits}`}
                    target="_blank"
                    className="text-sm text-slate-600 transition hover:text-slate-900"
                  >
                    {siteConfig.whatsapp} · {siteConfig.contactName}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-premium md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label="Nombre"
                name="name"
                value={form.name}
                onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
                required
              />
              <Field
                label="Empresa"
                name="company"
                value={form.company}
                onChange={(value) => setForm((prev) => ({ ...prev, company: value }))}
                required
              />
              <Field
                label="Industria"
                name="industry"
                value={form.industry}
                onChange={(value) => setForm((prev) => ({ ...prev, industry: value }))}
                required
              />
              <Field
                label="País"
                name="country"
                value={form.country}
                onChange={(value) => setForm((prev) => ({ ...prev, country: value }))}
                required
              />
              <Field
                label="Teléfono"
                name="phone"
                value={form.phone}
                onChange={(value) => setForm((prev) => ({ ...prev, phone: value }))}
                required
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
                required
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-800">
                Tipo de solicitud
              </label>
              <select
                value={form.requestType}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, requestType: event.target.value }))
                }
                className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-brand-300/60 focus:ring-2 focus:ring-brand-300/20"
              >
                {formOptions.map((option) => (
                  <option key={option} value={option} className="bg-white">
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-800">
                Mensaje
              </label>
              <textarea
                value={form.message}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, message: event.target.value }))
                }
                required
                rows={6}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-brand-300/60 focus:ring-2 focus:ring-brand-300/20"
                placeholder="Describe brevemente tu necesidad, proyecto o contexto operativo."
              />
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="group inline-flex items-center justify-center rounded-full border border-brand-300/40 bg-brand-500 px-6 py-4 text-sm font-semibold text-white transition hover:border-brand-400 hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                Enviar solicitud
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </button>

              <div
                className={`max-w-sm text-sm leading-6 ${
                  status.type === "success"
                    ? "text-emerald-600"
                    : status.type === "error"
                    ? "text-rose-500"
                    : "text-slate-600"
                }`}
                aria-live="polite"
              >
                {status.message}
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  type?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

function Field({
  label,
  name,
  value,
  type = "text",
  required = false,
  onChange
}: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-slate-800">
        {label}
      </label>
      <input
        id={name}
        type={type}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-brand-300/60 focus:ring-2 focus:ring-brand-300/20"
      />
    </div>
  );
}
