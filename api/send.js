const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { fname, lname, email, sujet, message } = req.body || {};

  if (!fname || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Champs requis manquants.' });
  }

  const subjectMap = {
    don:         'Faire un don',
    partenariat: 'Partenariat',
    benevole:    'Devenir bénévole',
    presse:      'Presse / Médias',
    autre:       'Autre',
  };
  const sujetLabel = subjectMap[sujet] || sujet || 'Contact général';

  try {
    await resend.emails.send({
      from:    'Site CDA <onboarding@resend.dev>',
      to:      'info@chretiensdafrique.org',
      replyTo: email,
      subject: `[${sujetLabel}] Message de ${fname} ${lname || ''}`.trim(),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
          <div style="background:#1A3D2B;padding:24px 32px;">
            <h2 style="color:#C8920A;margin:0;font-size:1.1rem;letter-spacing:0.05em;">FONDATION CHRÉTIENS D'AFRIQUE</h2>
            <p style="color:rgba(255,255,255,0.6);margin:4px 0 0;font-size:0.8rem;">Nouveau message depuis le site web</p>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
              <tr><td style="padding:8px 0;color:#888;width:120px;">Prénom</td><td style="padding:8px 0;font-weight:700;">${fname}</td></tr>
              <tr><td style="padding:8px 0;color:#888;">Nom</td><td style="padding:8px 0;font-weight:700;">${lname || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#888;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#1A3D2B;">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#888;">Sujet</td><td style="padding:8px 0;font-weight:700;">${sujetLabel}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #eee;margin:20px 0;">
            <p style="color:#888;font-size:0.8rem;margin-bottom:8px;">MESSAGE</p>
            <p style="background:#f9f9f9;padding:16px;border-radius:6px;line-height:1.7;white-space:pre-wrap;">${message}</p>
          </div>
          <div style="background:#f5f5f5;padding:16px 32px;text-align:center;font-size:0.75rem;color:#aaa;">
            Message envoyé depuis chretiensdafrique.org
          </div>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err.message);
    return res.status(500).json({ ok: false, error: "Échec de l'envoi." });
  }
};
