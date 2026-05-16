/* ============================================================
   FONDATION CHRÉTIENS D'AFRIQUE — Internationalization (i18n)
   Supported languages: fr (default), en
   ============================================================ */

(function () {
  'use strict';

  const translations = {
    fr: {
      /* ---- STICKY DONATE ---- */
      'sticky-donate': 'Faire un don',

      /* ---- MOBILE MENU ---- */
      'nav-home': 'Accueil',
      'nav-about': 'À propos',
      'nav-pillars': 'Nos piliers',
      'nav-impact': 'Impact',
      'nav-plan': 'Vision 2030',
      'nav-women': 'Femmes',
      'nav-donation': 'Faire un don',
      'nav-contact': 'Contact',

      /* ---- HERO ---- */
      'hero-eyebrow': 'Kinshasa · République Démocratique du Congo',
      'hero-title': 'Bâtir l\'avenir.<br><em>Transformer</em> une génération<br>par l\'éducation et la santé.',
      'hero-subtitle': 'La Fondation Chrétiens d\'Afrique forge des jeunes qui impactent toutes les sphères de la société africaine.',
      'hero-btn-discover': 'Découvrir la Fondation',
      'hero-btn-donate': 'Faire un Don',
      'hero-stat-1': 'Repas distribués en 2025',
      'hero-stat-2': 'Jeunes formés',
      'hero-stat-3': 'Ans d\'impact',
      'hero-stat-4': 'Familles touchées',
      'hero-slide-edu': 'Éducation',
      'hero-slide-health': 'Santé',
      'hero-scroll': 'Découvrir',

      /* ---- COMMUNITY BRIDGE ---- */
      'bridge-label': 'Fondation Chrétiens d\'Afrique · Kinshasa, RDC',
      'bridge-title': 'Une grande famille,<br>un seul <em>appel</em>.',
      'bridge-text': 'Des centaines de bénévoles, de donateurs et de partenaires unis autour d\'une même vision : voir l\'Afrique prospérer par ses propres enfants.',

      /* ---- INTRO BAND ---- */
      'intro-quote': '« <em>Éduquer un enfant, c\'est construire une nation.</em><br>Soigner une mère, c\'est protéger une génération. »',
      'intro-text-1': 'Au cœur de la République Démocratique du Congo, une fondation agit — avec foi, rigueur et amour — pour que chaque jeune africain puisse devenir l\'architecte de son propre avenir.',
      'intro-text-2': 'Nous croyons que l\'Afrique n\'a pas besoin d\'aide. Elle a besoin de jeunes équipés, de femmes valorisées, et de leaders intègres. C\'est notre mission.',

      /* ---- ABOUT ---- */
      'about-label': 'Notre identité',
      'about-title': 'Une fondation.<br>Une mission sacrée.',
      'about-mission': '« La Fondation Chrétiens d\'Afrique bâtit des jeunes qui impactent toutes les sphères de la société africaine. »',
      'about-body-1': 'Fondée à Kinshasa, au cœur de la République Démocratique du Congo, la Fondation Chrétiens d\'Afrique est née d\'une conviction profonde : les jeunes africains — filles et garçons — portent en eux le potentiel de transformer leur continent.',
      'about-body-2': 'Notre vision est de voir émerger une génération de jeunes formés, responsables et enracinés dans des valeurs solides, capables de transformer durablement leurs communautés et leur nation. Nous accordons une attention stratégique particulière aux femmes, car autonomiser une femme, c\'est transformer une famille et des générations entières.',
      'about-badge-text': 'Ans d\'engagement',
      'pillar-edu-title': 'Éducation',
      'pillar-edu-desc': 'Formation, leadership, entrepreneuriat et technologie',
      'pillar-health-title': 'Santé',
      'pillar-health-desc': 'Prévention, nutrition, santé maternelle et bien-être',
      'pillar-lead-title': 'Leadership',
      'pillar-lead-desc': 'Des leaders intègres formés pour l\'Afrique de demain',
      'pillar-family-title': 'Famille',
      'pillar-family-desc': 'Soutien aux structures familiales, piliers de la société',

      /* ---- PILLARS SECTION ---- */
      'pillars-label': 'Nos deux piliers',
      'pillars-title': 'Éducation &amp; Santé :<br>les deux fondations de l\'avenir',
      'pillars-body': 'Chaque programme que nous menons s\'inscrit dans l\'un de ces deux piliers complémentaires et indissociables.',
      'p1-number': 'Pilier 01',
      'p1-title': 'Éducation &amp; Formation',
      'p1-desc': 'Nous investissons dans les esprits et les compétences pour préparer la prochaine génération de bâtisseurs africains.',
      'p1-item-1': 'Écoles et appui scolaire',
      'p1-item-2': 'Académie d\'entrepreneuriat',
      'p1-item-3': 'Développement du leadership',
      'p1-item-4': 'Autonomisation des jeunes',
      'p1-item-5': 'Apprentissage des langues',
      'p1-item-6': 'Intelligence artificielle &amp; technologie',
      'p1-item-7': 'Développement du caractère',
      'p1-tag-1': 'Persévérance',
      'p1-tag-2': 'Résilience',
      'p1-tag-3': 'Intégrité',
      'p1-tag-4': 'Responsabilité',
      'p2-number': 'Pilier 02',
      'p2-title': 'Santé &amp; Bien-être',
      'p2-desc': 'La santé est le fondement de toute vie épanouie. Nous œuvrons pour des communautés saines, protégées et informées.',
      'p2-item-1': 'Prévention &amp; sensibilisation',
      'p2-item-2': 'Éducation à l\'hygiène',
      'p2-item-3': 'Nutrition &amp; alimentation saine',
      'p2-item-4': 'Santé maternelle et infantile',
      'p2-item-5': 'Éducation à la santé reproductive',
      'p2-item-6': 'Sensibilisation aux premiers secours',
      'p2-item-7': 'Soutien communautaire',
      'p2-tag-1': 'Prévention',
      'p2-tag-2': 'Dignité',
      'p2-tag-3': 'Solidarité',
      'p2-tag-4': 'Espoir',

      /* ---- IMPACT ---- */
      'impact-label': 'Bilan 2020 – 2025',
      'impact-title': 'Des actions concrètes.<br>Des vies transformées.',
      'impact-body': 'Depuis 5 ans, nous construisons pierre par pierre un édifice humain durable à Kinshasa et au-delà.',
      'stat-1-label': 'Repas distribués en 2025',
      'stat-2-label': 'Tonnes de riz distribuées (COVID-19)',
      'stat-3-label': 'Jeunes formés',
      'stat-4-label': 'Centre opérationnel à Ngaliema',
      'tl-1-year': '2020 — Crise COVID-19',
      'tl-1-title': 'Réponse humanitaire d\'urgence',
      'tl-1-text': 'Distribution de plus de 5 tonnes de riz aux familles vulnérables. Mobilisation à travers des églises, des prisons et des associations locales. Des centaines de repas distribués aux plus démunis de Kinshasa.',
      'tl-2-year': '2021 – 2022',
      'tl-2-title': 'Soutien aux enfants vulnérables',
      'tl-2-text': 'Visites hospitalières pour enfants malades et familles vulnérables. Soutien aux orphelinats et aux enfants albinos. Partenariat durable avec un orphelinat — accompagnement hebdomadaire. Aide aux frais de scolarité pour des enfants en difficulté.',
      'tl-3-year': '2023 – 2024',
      'tl-3-title': 'Formation des jeunes &amp; sensibilisation à la santé',
      'tl-3-text': 'Programmes de formation en leadership, théologie et éthique, compétences audiovisuelles, service client, opérations et logistique. Sensibilisation à la santé préventive, éducation à l\'hygiène, prévention de la malnutrition, initiatives d\'éducation des mères.',
      'tl-4-year': '2025 — Aujourd\'hui',
      'tl-4-title': 'Premier centre opérationnel — Ngaliema, Kinshasa',
      'tl-4-text': 'Ouverture du premier centre à Ngaliema (quartier Pigeon). Distribution de plus de 15 000 repas. Base solide pour le déploiement national et continental du plan 2026–2030.',
      'ic-1-title': 'Jeunes formés &amp; accompagnés',
      'ic-1-text': 'Des centaines de jeunes congolais ont bénéficié de formations scolaires, professionnelles, spirituelles et technologiques.',
      'ic-2-title': 'Familles touchées par nos actions',
      'ic-2-text': 'Consultations, kits alimentaires, formations pratiques — l\'impact de chaque action se multiplie au sein des familles.',
      'ic-3-title': 'Santé &amp; sensibilisation communautaire',
      'ic-3-text': 'Visites hospitalières, sensibilisation à la nutrition, prévention de la malnutrition, éducation des mères pour des familles plus saines.',
      'ic-4-title': 'Formation en compétences numériques',
      'ic-4-text': 'Initiation à l\'audiovisuel, à la technologie et à l\'intelligence artificielle pour préparer les jeunes à l\'économie numérique africaine.',
      'ic-5-title': 'Soutien aux orphelinats',
      'ic-5-text': 'Partenariat à long terme avec un orphelinat. Accompagnement hebdomadaire des enfants. Soutien aux enfants albinos et aux enfants des rues.',
      'ic-6-title': 'Leadership &amp; valeurs chrétiennes',
      'ic-6-text': 'Séminaires de théologie et d\'éthique, camps de leadership et programmes de formation du caractère pour une génération intègre.',
      'photo-quote': 'Ensemble, nous touchons <em>des milliers de vies</em> chaque année à Kinshasa et au-delà.',

      /* ---- PLAN 2026–2030 ---- */
      'plan-label': 'Vision 2026 – 2030',
      'plan-title': 'Un plan audacieux<br>pour l\'Afrique de demain.',
      'plan-body': 'Nous ne travaillons pas uniquement pour aujourd\'hui. Notre regard est tourné vers l\'horizon — vers une Afrique où chaque jeune est équipé, chaque femme valorisée, chaque famille soutenue. Notre stratégie de déploiement couvre les milieux urbains, péri-urbains et ruraux.',
      'area-1-title': 'Zones urbaines',
      'area-1-desc': 'Centres polyvalents au cœur des grandes villes — éducation, santé, protection et autonomisation en un seul lieu.',
      'area-2-title': 'Zones péri-urbaines',
      'area-2-desc': 'Extension vers les périphéries pour toucher les familles souvent oubliées, avec des programmes adaptés à leurs réalités.',
      'area-3-title': 'Zones rurales',
      'area-3-desc': 'Atteindre les communautés les plus isolées du Congo et d\'Afrique pour y planter des centres de transformation durable.',
      'prog-a-title': 'Programmes pour enfants (3–12 ans)',
      'prog-a-desc': 'Alphabétisation, nutrition, éveil, activités créatives et valeurs fondamentales pour les plus petits. Chaque enfant mérite le meilleur départ dans la vie.',
      'prog-b-title': 'Autonomisation des femmes et des mères',
      'prog-b-desc': 'Formation professionnelle, santé maternelle, alphabétisation, soutien psychosocial et activités génératrices de revenus pour toutes les femmes.',
      'prog-c-title': 'Incubateur entrepreneurial',
      'prog-c-desc': 'Accompagnement de micro-entreprises, formation à la gestion, accès au microcrédit et réseau d\'alumni pour stimuler l\'économie locale congolaise.',
      'prog-d-title': 'IA &amp; Technologies modernes',
      'prog-d-desc': 'Initiation à l\'intelligence artificielle, au numérique et aux outils technologiques pour préparer les jeunes à l\'économie de demain.',
      'prog-e-title': 'Écosystème centré sur la famille',
      'prog-e-desc': 'Soutien holistique aux familles : santé, éducation, valeurs, accompagnement spirituel — car une famille solide bâtit une nation solide.',
      'prog-f-title': 'Déploiement national &amp; continental',
      'prog-f-desc': 'Multiplication des centres à travers la RDC, puis vers les pays voisins. Devenir un modèle de développement africain, par des Africains, pour l\'Afrique.',
      'plan-break-title': 'L\'Afrique de demain',
      'plan-break-sub': 'Armée de technologie, de foi et de détermination.',
      'plan-goals-title': 'Nos objectifs pour 2030',
      'goal-1': 'Réduire la mortalité infantile évitable',
      'goal-2': 'Autonomiser des milliers de femmes',
      'goal-3': 'Multiplier les centres à travers le Congo',
      'goal-4': 'Rayonner sur tout le continent africain',

      /* ---- WOMEN ---- */
      'women-label': 'La force du continent',
      'women-title': 'La femme africaine,<br>cœur de l\'<em>avenir</em>.',
      'women-quote': '« Quand tu éduques un homme, tu éduques un individu.<br>Quand tu éduques une femme, tu éduques toute une nation. »',
      'women-p1-title': 'Santé maternelle &amp; infantile',
      'women-p1-desc': 'Accompagnement des femmes enceintes, suivi pré et postnatal, sensibilisation à la nutrition et aux soins essentiels pour la mère et l\'enfant.',
      'women-p2-title': 'Entrepreneuriat &amp; autonomie économique',
      'women-p2-desc': 'Formation aux métiers, microcrédit, mentorat commercial — nous donnons aux femmes les outils pour créer leur propre avenir et celui de leurs enfants.',
      'women-p3-title': 'Écoute, dignité &amp; accompagnement',
      'women-p3-desc': 'Espaces sécurisés de parole, soutien psychosocial et renforcement de l\'estime de soi pour des femmes qui méritent d\'être entendues et valorisées.',
      'women-p4-title': 'Femme, famille &amp; société',
      'women-p4-desc': 'La femme est le pivot de la famille africaine. En la formant et la valorisant, nous construisons des foyers stables qui fondent une société saine et durable.',
      'women-footer': '« La femme n\'est pas seulement la mère de l\'Afrique. Elle en est l\'architecte silencieuse, la gardienne de la mémoire, et la première enseignante. »',

      /* ---- GALLERY ---- */
      'gallery-label': 'Impact humain',
      'gallery-title': 'Des visages.<br>Des histoires vraies.',
      'gallery-body': 'Ces images sont celles de notre réalité — la fondation sur le terrain, au cœur de Kinshasa.',
      'gallery-cap-1': 'La joie, fruit de chaque action',
      'gallery-cap-2': 'Des centaines d\'enfants touchés chaque année',
      'gallery-cap-3': 'Chaque regard porte une histoire',
      'gallery-cap-4': 'Notre équipe — bâtisseurs au quotidien',
      'gallery-cap-5': 'L\'élan de toute une génération',

      /* ---- DONATION ---- */
      'donation-label': 'Agir maintenant',
      'donation-title': 'Ensemble, transformons<br>une génération.',
      'donation-body': 'Votre générosité est le carburant de notre mission. Choisissez le mode de don qui vous convient — toutes les informations sont directement disponibles ci-dessous.',
      'don-bank-title': 'Compte bancaire',
      'don-bank-badge': 'RDC · International',
      'don-bank-desc': 'Effectuez un virement depuis votre banque locale ou internationale avec les coordonnées suivantes :',
      'don-bank-row-1': 'Titulaire',
      'don-bank-row-2': 'Banque',
      'don-bank-row-3': 'N° Compte',
      'don-bank-row-4': 'Référence',
      'don-bank-val-2': 'RDC — Sur demande',
      'don-bank-val-3': 'Disponible par email',
      'don-bank-val-4': 'DON · [Votre nom]',
      'don-bank-cta': 'Recevoir les coordonnées',
      'don-mm-title': 'Mobile Money',
      'don-mm-badge': 'M-Pesa · Orange Money',
      'don-mm-desc': 'Envoyez votre don instantanément depuis votre téléphone. Simple, rapide et sécurisé depuis la RDC.',
      'don-mm-row-1': 'M-Pesa',
      'don-mm-row-2': 'Orange Money',
      'don-mm-row-3': 'Bénéficiaire',
      'don-mm-row-4': 'Message',
      'don-mm-val-1': 'Numéro sur demande',
      'don-mm-val-2': 'Numéro sur demande',
      'don-mm-val-3': 'Fondation CA',
      'don-mm-val-4': 'DON + [Votre nom]',
      'don-mm-cta': 'Obtenir le numéro',
      'don-card-title': 'Carte bancaire',
      'don-card-badge': 'Visa · Mastercard',
      'don-card-desc': 'Pour les donateurs internationaux, votre don par carte est traité via un processus sécurisé sur demande.',
      'don-card-row-1': 'Cartes',
      'don-card-row-2': 'Devises',
      'don-card-row-3': 'Processus',
      'don-card-row-4': 'Reçu fiscal',
      'don-card-val-1': 'Visa · Mastercard',
      'don-card-val-2': 'USD · EUR · CDF',
      'don-card-val-3': 'Lien sécurisé par email',
      'don-card-val-4': 'Fourni systématiquement',
      'don-card-cta': 'Initier mon don',
      'don-note': 'Pour toute question, écrivez-nous à <a href="mailto:info@chretiensdafrique.org">info@chretiensdafrique.org</a> — nous répondons sous 24h depuis Kinshasa, du lundi au samedi.',
      'don-security': 'Chaque contribution est utilisée avec intégrité et transparence totale',

      /* ---- CONTACT ---- */
      'contact-label': 'Nous rejoindre',
      'contact-title': 'Parlons<br>de l\'avenir.',
      'contact-body': 'Vous êtes une organisation, un donateur, un partenaire, ou simplement quelqu\'un qui veut contribuer à la transformation de l\'Afrique ? Contactez-nous. Nous vous répondrons avec joie.',
      'contact-email-label': 'Email',
      'contact-loc-label': 'Localisation',
      'contact-loc-value': 'Ngaliema (Pigeon), Kinshasa, RDC',
      'contact-avail-label': 'Disponibilité',
      'contact-avail-value': 'Lundi – Samedi, 8h00 – 18h00 (WAT)',
      'form-fname-label': 'Prénom',
      'form-fname-placeholder': 'Votre prénom',
      'form-lname-label': 'Nom',
      'form-lname-placeholder': 'Votre nom',
      'form-email-label': 'Email',
      'form-subject-label': 'Sujet',
      'form-subject-default': 'Choisir un sujet…',
      'form-subject-1': 'Faire un don',
      'form-subject-2': 'Partenariat',
      'form-subject-3': 'Devenir bénévole',
      'form-subject-4': 'Presse / Médias',
      'form-subject-5': 'Autre',
      'form-msg-label': 'Message',
      'form-msg-placeholder': 'Comment pouvons-nous travailler ensemble ?',
      'form-submit': 'Envoyer le message',
      'form-sending': 'Envoi en cours…',
      'form-sent': '✓ Message envoyé !',
      'map-text': 'Ngaliema · Kinshasa · RDC',

      /* ---- FOOTER ---- */
      'footer-tagline': 'Bâtir l\'avenir. Transformer une génération par l\'éducation et la santé. Fondés sur la foi, guidés par l\'amour, engagés pour l\'Afrique.',
      'footer-nav-title': 'Navigation',
      'footer-nav-about': 'À propos',
      'footer-nav-pillars': 'Nos piliers',
      'footer-nav-impact': 'Impact 2020–2025',
      'footer-nav-plan': 'Vision 2030',
      'footer-nav-women': 'Femmes',
      'footer-nav-gallery': 'Galerie',
      'footer-act-title': 'Agir',
      'footer-act-1': 'Faire un don',
      'footer-act-2': 'Devenir partenaire',
      'footer-act-3': 'Bénévolat',
      'footer-act-4': 'Nous contacter',
      'footer-contact-title': 'Contact',
      'footer-contact-hours': 'Lun – Sam, 8h – 18h',
      'footer-contact-country': 'République Démocratique du Congo',
      'footer-copy': '© 2025 Fondation Chrétiens d\'Afrique — Tous droits réservés',
      'footer-made': 'Fait avec ♥ pour l\'Afrique · Kinshasa, RDC',
    },

    en: {
      /* ---- STICKY DONATE ---- */
      'sticky-donate': 'Donate',

      /* ---- MOBILE MENU ---- */
      'nav-home': 'Home',
      'nav-about': 'About',
      'nav-pillars': 'Our Pillars',
      'nav-impact': 'Impact',
      'nav-plan': 'Vision 2030',
      'nav-women': 'Women',
      'nav-donation': 'Donate',
      'nav-contact': 'Contact',

      /* ---- HERO ---- */
      'hero-eyebrow': 'Kinshasa · Democratic Republic of the Congo',
      'hero-title': 'Building the future.<br><em>Transforming</em> a generation<br>through education and healthcare.',
      'hero-subtitle': 'The Chrétiens d\'Afrique Foundation shapes young people who impact every sphere of African society.',
      'hero-btn-discover': 'Discover the Foundation',
      'hero-btn-donate': 'Make a Donation',
      'hero-stat-1': 'Meals distributed in 2025',
      'hero-stat-2': 'Young people trained',
      'hero-stat-3': 'Years of impact',
      'hero-stat-4': 'Families reached',
      'hero-slide-edu': 'Education',
      'hero-slide-health': 'Healthcare',
      'hero-scroll': 'Discover',

      /* ---- COMMUNITY BRIDGE ---- */
      'bridge-label': 'Chrétiens d\'Afrique Foundation · Kinshasa, DRC',
      'bridge-title': 'One great family,<br>one single <em>calling</em>.',
      'bridge-text': 'Hundreds of volunteers, donors and partners united around one vision: seeing Africa thrive through its own children.',

      /* ---- INTRO BAND ---- */
      'intro-quote': '« <em>Educating a child is building a nation.</em><br>Caring for a mother is protecting a generation. »',
      'intro-text-1': 'At the heart of the Democratic Republic of the Congo, a foundation acts — with faith, rigor and love — so that every young African can become the architect of their own future.',
      'intro-text-2': 'We believe Africa does not need aid. It needs equipped youth, empowered women, and people of integrity. That is our mission.',

      /* ---- ABOUT ---- */
      'about-label': 'Our identity',
      'about-title': 'One foundation.<br>One sacred mission.',
      'about-mission': '« The Chrétiens d\'Afrique Foundation builds young people who impact every sphere of African society. »',
      'about-body-1': 'Founded in Kinshasa, at the heart of the Democratic Republic of the Congo, the Chrétiens d\'Afrique Foundation was born from a deep conviction: young Africans — girls and boys alike — carry within them the potential to transform their continent.',
      'about-body-2': 'Our vision is to see a generation of trained, responsible young people rooted in strong values emerge, capable of lastingly transforming their communities and their nation. We give particular strategic attention to women, because empowering a woman means transforming a family and entire generations.',
      'about-badge-text': 'Years of commitment',
      'pillar-edu-title': 'Education',
      'pillar-edu-desc': 'Training, leadership, entrepreneurship and technology',
      'pillar-health-title': 'Healthcare',
      'pillar-health-desc': 'Prevention, nutrition, maternal health and well-being',
      'pillar-lead-title': 'Leadership',
      'pillar-lead-desc': 'People of integrity trained for the Africa of tomorrow',
      'pillar-family-title': 'Family',
      'pillar-family-desc': 'Support for family structures, the pillars of society',

      /* ---- PILLARS SECTION ---- */
      'pillars-label': 'Our two pillars',
      'pillars-title': 'Education &amp; Healthcare:<br>the two foundations of the future',
      'pillars-body': 'Every programme we run falls within one of these two complementary and inseparable pillars.',
      'p1-number': 'Pillar 01',
      'p1-title': 'Education &amp; Training',
      'p1-desc': 'We invest in minds and skills to prepare the next generation of African builders.',
      'p1-item-1': 'Schools and academic support',
      'p1-item-2': 'Entrepreneurship academy',
      'p1-item-3': 'Leadership development',
      'p1-item-4': 'Youth empowerment',
      'p1-item-5': 'Language learning',
      'p1-item-6': 'Artificial intelligence &amp; technology',
      'p1-item-7': 'Character development',
      'p1-tag-1': 'Perseverance',
      'p1-tag-2': 'Resilience',
      'p1-tag-3': 'Integrity',
      'p1-tag-4': 'Responsibility',
      'p2-number': 'Pillar 02',
      'p2-title': 'Health &amp; Well-being',
      'p2-desc': 'Health is the foundation of every fulfilling life. We work for healthy, protected and informed communities.',
      'p2-item-1': 'Prevention &amp; awareness',
      'p2-item-2': 'Hygiene education',
      'p2-item-3': 'Nutrition &amp; healthy eating',
      'p2-item-4': 'Maternal and child health',
      'p2-item-5': 'Reproductive health education',
      'p2-item-6': 'First aid awareness',
      'p2-item-7': 'Community support',
      'p2-tag-1': 'Prevention',
      'p2-tag-2': 'Dignity',
      'p2-tag-3': 'Solidarity',
      'p2-tag-4': 'Hope',

      /* ---- IMPACT ---- */
      'impact-label': 'Review 2020 – 2025',
      'impact-title': 'Concrete actions.<br>Transformed lives.',
      'impact-body': 'For 5 years, we have been building stone by stone a lasting human edifice in Kinshasa and beyond.',
      'stat-1-label': 'Meals distributed in 2025',
      'stat-2-label': 'Tonnes of rice distributed (COVID-19)',
      'stat-3-label': 'Young people trained',
      'stat-4-label': 'Operational centre in Ngaliema',
      'tl-1-year': '2020 — COVID-19 Crisis',
      'tl-1-title': 'Emergency humanitarian response',
      'tl-1-text': 'Distribution of over 5 tonnes of rice to vulnerable families. Mobilisation through churches, prisons and local associations. Hundreds of meals distributed to the most destitute in Kinshasa.',
      'tl-2-year': '2021 – 2022',
      'tl-2-title': 'Support for vulnerable children',
      'tl-2-text': 'Hospital visits for sick children and vulnerable families. Support for orphanages and albino children. Lasting partnership with an orphanage — weekly mentoring. School fee assistance for children in difficulty.',
      'tl-3-year': '2023 – 2024',
      'tl-3-title': 'Youth training &amp; health awareness',
      'tl-3-text': 'Training programmes in leadership, theology and ethics, audiovisual skills, customer service, operations and logistics. Preventive health awareness, hygiene education, malnutrition prevention, mothers\' education initiatives.',
      'tl-4-year': '2025 — Today',
      'tl-4-title': 'First operational centre — Ngaliema, Kinshasa',
      'tl-4-text': 'Opening of the first centre in Ngaliema (Pigeon neighbourhood). Distribution of over 15,000 meals. A solid base for the national and continental rollout of the 2026–2030 plan.',
      'ic-1-title': 'Young people trained &amp; mentored',
      'ic-1-text': 'Hundreds of Congolese youth have benefited from academic, professional, spiritual and technological training.',
      'ic-2-title': 'Families reached by our actions',
      'ic-2-text': 'Consultations, food kits, practical training — the impact of every action multiplies within families.',
      'ic-3-title': 'Health &amp; community awareness',
      'ic-3-text': 'Hospital visits, nutrition awareness, malnutrition prevention, mothers\' education for healthier families.',
      'ic-4-title': 'Digital skills training',
      'ic-4-text': 'Introduction to audiovisual, technology and artificial intelligence to prepare young people for the African digital economy.',
      'ic-5-title': 'Orphanage support',
      'ic-5-text': 'Long-term partnership with an orphanage. Weekly accompaniment of children. Support for albino children and street children.',
      'ic-6-title': 'Leadership &amp; Christian values',
      'ic-6-text': 'Theology and ethics seminars, leadership camps and character formation programmes for a generation of integrity.',
      'photo-quote': 'Together, we touch <em>thousands of lives</em> every year in Kinshasa and beyond.',

      /* ---- PLAN 2026–2030 ---- */
      'plan-label': 'Vision 2026 – 2030',
      'plan-title': 'A bold plan<br>for the Africa of tomorrow.',
      'plan-body': 'We are not only working for today. Our gaze is set on the horizon — towards an Africa where every young person is equipped, every woman empowered, every family supported. Our deployment strategy covers urban, peri-urban and rural areas.',
      'area-1-title': 'Urban areas',
      'area-1-desc': 'Multi-purpose centres in the heart of major cities — education, health, protection and empowerment all in one place.',
      'area-2-title': 'Peri-urban areas',
      'area-2-desc': 'Expansion to the peripheries to reach families often forgotten, with programmes tailored to their realities.',
      'area-3-title': 'Rural areas',
      'area-3-desc': 'Reaching the most isolated communities of the Congo and Africa to plant centres of lasting transformation.',
      'prog-a-title': 'Programmes for children (ages 3–12)',
      'prog-a-desc': 'Literacy, nutrition, early learning, creative activities and core values for the youngest. Every child deserves the best start in life.',
      'prog-b-title': 'Women and mothers\' empowerment',
      'prog-b-desc': 'Vocational training, maternal health, literacy, psychosocial support and income-generating activities for all women.',
      'prog-c-title': 'Entrepreneurship incubator',
      'prog-c-desc': 'Micro-enterprise support, management training, access to microcredit and alumni network to stimulate the local Congolese economy.',
      'prog-d-title': 'AI &amp; Modern technologies',
      'prog-d-desc': 'Introduction to artificial intelligence, digital tools and technology to prepare young people for the economy of tomorrow.',
      'prog-e-title': 'Family-centred ecosystem',
      'prog-e-desc': 'Holistic family support: health, education, values, spiritual accompaniment — because a strong family builds a strong nation.',
      'prog-f-title': 'National &amp; continental deployment',
      'prog-f-desc': 'Multiplication of centres across the DRC, then toward neighbouring countries. Becoming a model of African development, by Africans, for Africa.',
      'plan-break-title': 'The Africa of tomorrow',
      'plan-break-sub': 'Armed with technology, faith and determination.',
      'plan-goals-title': 'Our goals for 2030',
      'goal-1': 'Reduce preventable infant mortality',
      'goal-2': 'Empower thousands of women',
      'goal-3': 'Multiply centres across the Congo',
      'goal-4': 'Shine across the entire African continent',

      /* ---- WOMEN ---- */
      'women-label': 'The strength of the continent',
      'women-title': 'The African woman,<br>heart of the <em>future</em>.',
      'women-quote': '« When you educate a man, you educate an individual.<br>When you educate a woman, you educate an entire nation. »',
      'women-p1-title': 'Maternal &amp; child health',
      'women-p1-desc': 'Support for pregnant women, pre- and post-natal follow-up, nutrition awareness and essential care for mother and child.',
      'women-p2-title': 'Entrepreneurship &amp; economic empowerment',
      'women-p2-desc': 'Vocational training, microcredit, business mentoring — we give women the tools to build their own future and that of their children.',
      'women-p3-title': 'Listening, dignity &amp; support',
      'women-p3-desc': 'Safe spaces for dialogue, psychosocial support and self-esteem building for women who deserve to be heard and valued.',
      'women-p4-title': 'Woman, family &amp; society',
      'women-p4-desc': 'The woman is the pivot of the African family. By training and valuing her, we build stable homes that are the foundation of a healthy and lasting society.',
      'women-footer': '« The African woman is not only the mother of Africa. She is its silent architect, keeper of memory, and first teacher. »',

      /* ---- GALLERY ---- */
      'gallery-label': 'Human impact',
      'gallery-title': 'Faces.<br>True stories.',
      'gallery-body': 'These images are our reality — the foundation in the field, at the heart of Kinshasa.',
      'gallery-cap-1': 'Joy, the fruit of every action',
      'gallery-cap-2': 'Hundreds of children reached every year',
      'gallery-cap-3': 'Every gaze carries a story',
      'gallery-cap-4': 'Our team — builders every day',
      'gallery-cap-5': 'The momentum of an entire generation',

      /* ---- DONATION ---- */
      'donation-label': 'Act now',
      'donation-title': 'Together, let us transform<br>a generation.',
      'donation-body': 'Your generosity is the fuel of our mission. Choose the donation method that suits you — all information is directly available below.',
      'don-bank-title': 'Bank account',
      'don-bank-badge': 'DRC · International',
      'don-bank-desc': 'Make a transfer from your local or international bank with the following details:',
      'don-bank-row-1': 'Account holder',
      'don-bank-row-2': 'Bank',
      'don-bank-row-3': 'Account No.',
      'don-bank-row-4': 'Reference',
      'don-bank-val-2': 'DRC — On request',
      'don-bank-val-3': 'Available by email',
      'don-bank-val-4': 'DONATION · [Your name]',
      'don-bank-cta': 'Receive bank details',
      'don-mm-title': 'Mobile Money',
      'don-mm-badge': 'M-Pesa · Orange Money',
      'don-mm-desc': 'Send your donation instantly from your phone. Simple, fast and secure from the DRC.',
      'don-mm-row-1': 'M-Pesa',
      'don-mm-row-2': 'Orange Money',
      'don-mm-row-3': 'Beneficiary',
      'don-mm-row-4': 'Message',
      'don-mm-val-1': 'Number on request',
      'don-mm-val-2': 'Number on request',
      'don-mm-val-3': 'Foundation CA',
      'don-mm-val-4': 'DONATION + [Your name]',
      'don-mm-cta': 'Get the number',
      'don-card-title': 'Bank card',
      'don-card-badge': 'Visa · Mastercard',
      'don-card-desc': 'For international donors, your card payment is processed via a secure process on request.',
      'don-card-row-1': 'Cards',
      'don-card-row-2': 'Currencies',
      'don-card-row-3': 'Process',
      'don-card-row-4': 'Tax receipt',
      'don-card-val-1': 'Visa · Mastercard',
      'don-card-val-2': 'USD · EUR · CDF',
      'don-card-val-3': 'Secure link by email',
      'don-card-val-4': 'Provided systematically',
      'don-card-cta': 'Start my donation',
      'don-note': 'For any questions, write to us at <a href="mailto:info@chretiensdafrique.org">info@chretiensdafrique.org</a> — we reply within 24h from Kinshasa, Monday to Saturday.',
      'don-security': 'Every contribution is used with full integrity and transparency',

      /* ---- CONTACT ---- */
      'contact-label': 'Join us',
      'contact-title': 'Let\'s talk<br>about the future.',
      'contact-body': 'Are you an organisation, a donor, a partner, or simply someone who wants to contribute to the transformation of Africa? Contact us. We will reply with joy.',
      'contact-email-label': 'Email',
      'contact-loc-label': 'Location',
      'contact-loc-value': 'Ngaliema (Pigeon), Kinshasa, DRC',
      'contact-avail-label': 'Availability',
      'contact-avail-value': 'Monday – Saturday, 8:00 – 18:00 (WAT)',
      'form-fname-label': 'First name',
      'form-fname-placeholder': 'Your first name',
      'form-lname-label': 'Last name',
      'form-lname-placeholder': 'Your last name',
      'form-email-label': 'Email',
      'form-subject-label': 'Subject',
      'form-subject-default': 'Choose a subject…',
      'form-subject-1': 'Make a donation',
      'form-subject-2': 'Partnership',
      'form-subject-3': 'Become a volunteer',
      'form-subject-4': 'Press / Media',
      'form-subject-5': 'Other',
      'form-msg-label': 'Message',
      'form-msg-placeholder': 'How can we work together?',
      'form-submit': 'Send message',
      'form-sending': 'Sending…',
      'form-sent': '✓ Message sent!',
      'map-text': 'Ngaliema · Kinshasa · DRC',

      /* ---- FOOTER ---- */
      'footer-tagline': 'Building the future. Transforming a generation through education and healthcare. Founded on faith, guided by love, committed to Africa.',
      'footer-nav-title': 'Navigation',
      'footer-nav-about': 'About',
      'footer-nav-pillars': 'Our pillars',
      'footer-nav-impact': 'Impact 2020–2025',
      'footer-nav-plan': 'Vision 2030',
      'footer-nav-women': 'Women',
      'footer-nav-gallery': 'Gallery',
      'footer-act-title': 'Act',
      'footer-act-1': 'Donate',
      'footer-act-2': 'Become a partner',
      'footer-act-3': 'Volunteering',
      'footer-act-4': 'Contact us',
      'footer-contact-title': 'Contact',
      'footer-contact-hours': 'Mon – Sat, 8am – 6pm',
      'footer-contact-country': 'Democratic Republic of the Congo',
      'footer-copy': '© 2025 Fondation Chrétiens d\'Afrique — All rights reserved',
      'footer-made': 'Made with ♥ for Africa · Kinshasa, DRC',
    }
  };

  /* -------- APPLY TRANSLATIONS -------- */
  function applyLang(lang) {
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (!(key in t)) return;
      const value = t[key];

      /* option elements */
      if (el.tagName === 'OPTION') {
        el.textContent = value;
        return;
      }
      /* labels */
      if (el.tagName === 'LABEL') {
        el.textContent = value;
        return;
      }
      /* innerHTML for elements that contain markup */
      el.innerHTML = value;
    });

    /* handle placeholder translations separately */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key in t) el.placeholder = t[key];
    });

    /* update html lang attribute */
    document.documentElement.lang = lang;

    /* update switcher buttons */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    /* persist choice */
    try { localStorage.setItem('cda_lang', lang); } catch (e) {}
  }

  /* -------- INIT -------- */
  function init() {
    let saved = 'fr';
    try { saved = localStorage.getItem('cda_lang') || 'fr'; } catch (e) {}
    applyLang(saved);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(this.getAttribute('data-lang'));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* expose globally for potential external use */
  window.CDA_i18n = { applyLang: applyLang, translations: translations };

})();
