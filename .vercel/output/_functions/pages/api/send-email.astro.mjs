import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const smtpConfig = {
    host: "mail.xendrapro.com",
    port: "465",
    user: "info@xendrapro.com",
    passLength: "!HFf}NrG,pkm".length ,
    secure: Number("465") === 465
  };
  console.log("Attempting to send email...");
  console.log("SMTP Config Loaded:", smtpConfig);
  if (!smtpConfig.passLength) {
    console.error("Missing SMTP configuration variables");
    return new Response(JSON.stringify({
      error: "Configuration Error",
      details: "Faltan variables de entorno SMTP en el servidor."
    }), { status: 500 });
  }
  try {
    const data = await request.json();
    const firstName = data["first-name"];
    const lastName = data["last-name"];
    const email = data["work-email"];
    const jobTitle = data["job-title"];
    const { phone, range, message } = data;
    const transporter = nodemailer.createTransport({
      host: "mail.xendrapro.com",
      port: Number("465"),
      secure: Number("465") === 465,
      auth: {
        user: "info@xendrapro.com",
        pass: "!HFf}NrG,pkm"
      },
      tls: {
        rejectUnauthorized: false
        // necesario en hosting compartido con cert autofirmado
      }
    });
    await transporter.sendMail({
      from: `"Xendra Pro" <${"info@xendrapro.com"}>`,
      to: undefined                        || "info@xendrapro.com",
      replyTo: email,
      subject: `Nueva solicitud de Demo: ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9fafb; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #e5e7eb; }
            .header { background-color: #ffffff; padding: 30px; text-align: center; border-bottom: 1px solid #e5e7eb; }
            .content { padding: 30px; }
            .field { margin-bottom: 20px; }
            .label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; font-weight: 600; margin-bottom: 4px; display: block; }
            .value { font-size: 16px; color: #111827; font-weight: 500; }
            .message-box { background-color: #f3f4f6; padding: 20px; border-radius: 6px; margin-top: 8px; font-size: 15px; color: #374151; white-space: pre-wrap; }
            .footer { background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
            h1 { margin: 0; font-size: 24px; color: #111827; font-weight: 700; }
            .highlight { color: #7c3aed; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nueva Solicitud de <span class="highlight">Demo</span></h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Nombre Completo</span>
                <div class="value">${firstName} ${lastName}</div>
              </div>
              
              <div class="field">
                <span class="label">Email Corporativo</span>
                <div class="value"><a href="mailto:${email}" style="color: #7c3aed; text-decoration: none;">${email}</a></div>
              </div>

              <div style="display: flex; gap: 20px;">
                <div class="field" style="flex: 1;">
                  <span class="label">Teléfono</span>
                  <div class="value">${phone || "No especificado"}</div>
                </div>
                <div class="field" style="flex: 1;">
                  <span class="label">Cargo</span>
                  <div class="value">${jobTitle || "No especificado"}</div>
                </div>
              </div>

              <div class="field">
                <span class="label">Rango Horario Preferido</span>
                <div class="value">${range === "morning" ? "Por la mañana" : range === "afternoon" ? "Por la tarde" : range || "No especificado"}</div>
              </div>

              <div class="field">
                <span class="label">Mensaje Adicional</span>
                <div class="message-box">
                  ${message || "Sin mensaje adicional"}
                </div>
              </div>
            </div>
            <div class="footer">
              <p>Este correo fue enviado automáticamente desde el formulario de contacto de tu sitio web.</p>
            </div>
          </div>
        </body>
        </html>
      `
    });
    return new Response(JSON.stringify({ message: "Email enviado con éxito" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({
      error: "Error al enviar el correo",
      details: error.message || JSON.stringify(error)
    }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
