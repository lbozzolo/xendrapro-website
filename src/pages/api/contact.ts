import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  if (!import.meta.env.SMTP_HOST || !import.meta.env.SMTP_USER || !import.meta.env.SMTP_PASS) {
    console.error('Missing SMTP configuration variables');
    return new Response(JSON.stringify({
      error: 'Configuration Error',
      details: 'Faltan variables de entorno SMTP en el servidor.'
    }), { status: 500 });
  }

  try {
    const data = await request.json();
    const { name, email, company, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({
        error: 'Campos requeridos faltantes',
        details: 'Nombre, email y mensaje son obligatorios.'
      }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: import.meta.env.SMTP_HOST,
      port: Number(import.meta.env.SMTP_PORT),
      secure: Number(import.meta.env.SMTP_PORT) === 465,
      auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"Xendra Pro" <${import.meta.env.SMTP_USER}>`,
      to: import.meta.env.SMTP_TO || import.meta.env.SMTP_USER,
      replyTo: email,
      subject: `Nuevo mensaje de contacto: ${name}`,
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
              <h1>Nuevo <span class="highlight">Mensaje de Contacto</span></h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Nombre</span>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <span class="label">Email</span>
                <div class="value"><a href="mailto:${email}" style="color: #7c3aed; text-decoration: none;">${email}</a></div>
              </div>

              <div class="field">
                <span class="label">Empresa</span>
                <div class="value">${company || 'No especificada'}</div>
              </div>

              <div class="field">
                <span class="label">Mensaje</span>
                <div class="message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>Este correo fue enviado desde el formulario de contacto de xendrapro.com</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return new Response(JSON.stringify({ message: 'Email enviado con éxito' }), { status: 200 });
  } catch (error: any) {
    console.error('Error sending contact email:', error);
    return new Response(JSON.stringify({
      error: 'Error al enviar el correo',
      details: error.message || JSON.stringify(error)
    }), { status: 500 });
  }
};
