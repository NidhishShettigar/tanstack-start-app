import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(10).max(2000),
});

const COMPANY_EMAIL = "msventures.srthkl@gmail.com";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const json = await request.json();
          const parsed = schema.safeParse(json);
          if (!parsed.success) {
            return Response.json(
              { error: "Invalid input", details: parsed.error.issues },
              { status: 400 }
            );
          }
          const { name, email, message } = parsed.data;

          const apiKey = process.env.RESEND_API_KEY;
          if (!apiKey) {
            console.error("RESEND_API_KEY not configured");
            return Response.json({ error: "Email not configured" }, { status: 500 });
          }

          const escape = (s: string) =>
            s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

          const html = `
            <div style="font-family: Arial, sans-serif; background:#0a0a0a; color:#fff; padding:24px;">
              <h2 style="margin:0 0 16px;color:#fff;font-weight:300;letter-spacing:1px;">New Inquiry from MS Ventures Website</h2>
              <p style="margin:6px 0;"><strong style="color:#aaa;">Name:</strong> ${escape(name)}</p>
              <p style="margin:6px 0;"><strong style="color:#aaa;">Email:</strong> <a style="color:#fff;" href="mailto:${escape(email)}">${escape(email)}</a></p>
              <p style="margin:14px 0 6px;"><strong style="color:#aaa;">Message:</strong></p>
              <p style="margin:0;white-space:pre-wrap;">${escape(message)}</p>
            </div>
          `;

          const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

          const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              from: "MS Ventures Website <onboarding@resend.dev>",
              to: [COMPANY_EMAIL],
              reply_to: email,
              subject: "New Inquiry from MS Ventures Website",
              html,
              text,
            }),
          });

          if (!res.ok) {
            const text = await res.text();
            console.error("Resend error:", res.status, text);
            return Response.json({ error: "Failed to send email" }, { status: 502 });
          }

          return Response.json({ ok: true });
        } catch (err) {
          console.error("Contact route error:", err);
          return Response.json({ error: "Server error" }, { status: 500 });
        }
      },
    },
  },
});
