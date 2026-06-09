const express    = require('express');
const nodemailer = require('nodemailer');
const path       = require('path');
require('dotenv').config();

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

/* ── SMTP transporter ── */
const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST   || 'smtpout.secureserver.net',
  port:   parseInt(process.env.SMTP_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: { rejectUnauthorized: false },
});

/* ── Contact form endpoint ── */
app.post('/send', async (req, res) => {
  const { fname, lname, email, sujet, message } = req.body;

  if (!fname || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Champs requis manquants.' });
  }

  const subjectMap = {
    don:        'Faire un don',
    partenariat:'Partenariat',
    benevole:   'Devenir bénévole',
    presse:     'Presse / Médias',
    autre:      'Autre',
  };

  const sujetLabel = subjectMap[sujet] || sujet || 'Contact général';

  try {
    await transporter.sendMail({
      from:     `"Site Fondation CDA" <${process.env.SMTP_USER}>`,
      to:       'info@chretiensdafrique.org',
      replyTo:  email,
      subject:  `[${sujetLabel}] Message de ${fname} ${lname || ''}`.trim(),
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

    res.json({ ok: true });
  } catch (err) {
    console.error('Erreur SMTP :', err.message);
    res.status(500).json({ ok: false, error: 'Échec de l\'envoi. Réessayez.' });
  }
});

app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
