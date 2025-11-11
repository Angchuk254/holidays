/*
  Sample Firebase Cloud Function (Node.js) to trigger on Realtime Database write
  and send an email (SendGrid) and WhatsApp (Twilio) notification to admin.

  BEFORE DEPLOYING:
  - Create a Firebase Functions project (firebase init functions)
  - Add SendGrid and Twilio API keys as environment variables or use a secrets manager.
  - Set env vars: SENDGRID_API_KEY, ADMIN_EMAIL, TWILIO_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_FROM, ADMIN_WHATSAPP_NUMBER

  This is a sample; adjust as per your deployment and security practices.
*/

const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
const twilio = require('twilio');

sgMail.setApiKey(functions.config().sendgrid?.key || process.env.SENDGRID_API_KEY);

exports.notifyOnNewContact = functions.database.ref('/contacts/{pushId}').onCreate(async (snap, context) => {
    const data = snap.val();
    const adminEmail = functions.config().app?.admin_email || process.env.ADMIN_EMAIL;

    // Send email via SendGrid
    try {
        const msg = {
            to: adminEmail,
            from: adminEmail, // or a verified sender
            subject: `New contact form submission from ${data.name}`,
            html: `<p><strong>Name:</strong> ${data.name}</p>
             <p><strong>Email:</strong> ${data.email}</p>
             <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
             <p><strong>Message:</strong><br/>${data.message}</p>`
        };
        await sgMail.send(msg);
    } catch (e) {
        console.error('SendGrid error', e);
    }

    // Send WhatsApp via Twilio
    try {
        const sid = functions.config().twilio?.sid || process.env.TWILIO_SID;
        const token = functions.config().twilio?.token || process.env.TWILIO_AUTH_TOKEN;
        const client = twilio(sid, token);
        const from = functions.config().twilio?.from || process.env.TWILIO_WHATSAPP_FROM; // e.g., 'whatsapp:+1234567890'
        const to = functions.config().twilio?.admin_whatsapp || process.env.ADMIN_WHATSAPP_NUMBER; // e.g., 'whatsapp:+9876543210'

        const body = `New contact from ${data.name} (${data.email}). Message: ${data.message.substring(0, 200)}`;
        await client.messages.create({ from, to, body });
    } catch (e) {
        console.error('Twilio error', e);
    }

    return null;
});
