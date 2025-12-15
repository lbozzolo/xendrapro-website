import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  const smtpConfig = {
    host: import.meta.env.SMTP_HOST,
    port: import.meta.env.SMTP_PORT,
    user: import.meta.env.SMTP_USER,
    passLength: import.meta.env.SMTP_PASS ? import.meta.env.SMTP_PASS.length : 0,
    secure: Number(import.meta.env.SMTP_PORT) === 465
  };
  
  console.log('Attempting to send email...');
  console.log('SMTP Config Loaded:', smtpConfig);

  if (!smtpConfig.host || !smtpConfig.user || !smtpConfig.passLength) {
    console.error('Missing SMTP configuration variables');
    return new Response(JSON.stringify({ 
      error: 'Configuration Error', 
      details: 'Faltan variables de entorno SMTP en el servidor.' 
    }), { status: 500 });
  }

  try {
    const data = await request.json();
    // Map frontend form fields (kebab-case) to backend variables (camelCase)
    const firstName = data['first-name'];
    const lastName = data['last-name'];
    const email = data['work-email'];
    const jobTitle = data['job-title'];
    const { phone, range, message } = data;

    // Configura el transporte SMTP
    const transporter = nodemailer.createTransport({
      host: import.meta.env.SMTP_HOST,
      port: Number(import.meta.env.SMTP_PORT),
      secure: Number(import.meta.env.SMTP_PORT) === 465, // true para 465, false para otros
      auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASS,
      },
    });

    // Envía el correo
    await transporter.sendMail({
      from: `"Xendra Pro" <${import.meta.env.SMTP_USER}>`,
      to: 'info@verticedigital.com.ar',
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
                  <div class="value">${phone || 'No especificado'}</div>
                </div>
                <div class="field" style="flex: 1;">
                  <span class="label">Cargo</span>
                  <div class="value">${jobTitle || 'No especificado'}</div>
                </div>
              </div>

              <div class="field">
                <span class="label">Rango Horario Preferido</span>
                <div class="value">${range === 'morning' ? 'Por la mañana' : range === 'afternoon' ? 'Por la tarde' : range || 'No especificado'}</div>
              </div>

              <div class="field">
                <span class="label">Mensaje Adicional</span>
                <div class="message-box">
                  ${message || 'Sin mensaje adicional'}
                </div>
              </div>
            </div>
            <div class="footer">
              <p>Este correo fue enviado automáticamente desde el formulario de contacto de tu sitio web.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return new Response(JSON.stringify({ message: 'Email enviado con éxito' }), { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ 
      error: 'Error al enviar el correo', 
      details: error.message || JSON.stringify(error) 
    }), { status: 500 });
  }
};
