// ─── Site Config ─────────────────────────────────────────────────────────────
export const SITE = {
  name:        'Sawla Films',
  tagline:     'Ethiopia Film Fixer',
  url:         'https://www.ethiopiafilmfixer.com',
  email:       'production@ethiopiafilmfixer.com',
  whatsapp1:   '+251 927 115 454',
  whatsapp1Raw: '251927115454',
  whatsapp2:   '+251 970 578 306',
  whatsapp2Raw: '251970578306',
  sisterSite:  'https://www.sawlatours.com/',
} as const

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { number: '12',  label: 'Regional states covered' },
  { number: '7',   label: 'Working languages' },
  { number: '4',   label: 'Continents — intl. broadcasts' },
  { number: 'NDA', label: 'Safe by default' },
] as const

// ─── Quick Answers ────────────────────────────────────────────────────────────
export const QA_ITEMS = [
  {
    q: 'Do you handle filming permits in Ethiopia?',
    a: 'Yes. We support federal, regional, and location-specific approvals including heritage sites, protected areas, religious locations, and community settings. Permit requirements vary significantly by location, subject matter, crew nationality, and format — we assess your specific route and build the correct approval pathway for your shoot.',
  },
  {
    q: 'Do you support drone permits in Ethiopia?',
    a: 'Yes. Drone filming requires aviation authority approvals and location-level restrictions that vary by region. We plan aerial permissions as a dedicated workflow — covering permissions, restricted zones, shoot-day readiness, and contingency planning when drone access is unavailable.',
  },
  {
    q: 'Can you help with customs and equipment import?',
    a: 'Yes. ATA Carnet guidance, temporary import planning, manifest preparation, and airport clearance. Film equipment customs in Ethiopia requires clean documentation and advance coordination — we provide structured support to reduce delays.',
  },
  {
    q: 'How much does a film fixer cost in Ethiopia?',
    a: 'Costs vary based on shoot duration, regions, permit complexity, crew size, and drone requirements. We provide project-specific quotes following a feasibility review. Contact us with your dates, regions, and brief for an initial cost framework.',
  },
  {
    q: 'How long do filming permits take in Ethiopia?',
    a: 'Federal and regional approvals typically require a minimum of two to four weeks from a complete application. We advise building permit lead time into your pre-production schedule from the first planning call — not as a last step.',
  },
  {
    q: 'How early should a producer contact you?',
    a: 'As early as possible. Early review identifies permit needs, access limitations, route constraints, and realistic logistics before a schedule becomes expensive to change. A rough brief is enough to begin.',
  },
  {
    q: 'Can you work from a rough brief?',
    a: 'Yes. Dates, regions, crew size, subject matter, equipment list, and drone needs are the most useful starting details. We will tell you exactly what we need to take the next step — and what will drive the cost and timeline.',
  },
  {
    q: 'Where in Ethiopia do you operate?',
    a: 'Across all 12 regional states — including Afar, Omo Valley, Tigray, Somali Regional State, Gambela, and Addis Ababa. Access-sensitive regions are planned subject to current permissions, security conditions, and local authority guidance.',
  },
] as const

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    num: '01',
    title: 'Filming permits and compliance',
    desc: 'Federal, regional, and location approvals — including heritage, religious, protected-area, and access-sensitive filming coordination.',
    href: '/filming-permits-ethiopia',
  },
  {
    num: '02',
    title: 'Production logistics and remote field',
    desc: '4×4 transport, routing, fuel planning, accommodation strategy, staging, and schedule buffers for Ethiopia\'s varied terrain.',
    href: '/production-logistics-ethiopia',
  },
  {
    num: '03',
    title: 'Location scouting and recce',
    desc: 'Feasibility assessment, seasonal timing, access protocol, and briefing materials producers can use immediately.',
    href: '/location-scouting-ethiopia',
  },
  {
    num: '04',
    title: 'Drone permits and aerial coordination',
    desc: 'Aviation authority approvals, restriction mapping, operational readiness, and shoot-day contingency. Planned as a workflow.',
    href: '/drone-permits-ethiopia',
  },
  {
    num: '05',
    title: 'Customs and equipment handling',
    desc: 'ATA Carnet and temporary import support, manifest preparation, airport clearance planning, and local equipment rental connections.',
    href: '/customs-clearance-film-equipment-ethiopia',
  },
  {
    num: '06',
    title: 'Local crew, translators, and liaison',
    desc: 'Translation support across Amharic, Tigrinya, Oromo, Somali, Afar, Sidama, and English. Selected for judgment and discretion.',
    href: '/local-crew-translators-ethiopia',
  },
] as const

// ─── Process Steps ────────────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    n: '1',
    title: 'Feasibility check',
    desc: 'We review your dates, locations, crew size, subject matter, equipment list, and drone requirements. We tell you what is achievable — and what may not be on your current timeline.',
  },
  {
    n: '2',
    title: 'Access and permit planning',
    desc: 'Every approval required at federal, regional, heritage, religious, and protected-area level — built into a realistic timeline that fits your pre-production schedule.',
  },
  {
    n: '3',
    title: 'Logistics build',
    desc: 'Transport, accommodation, crew, customs, field timing, route flow, and backup options aligned into one operational plan. Nothing assumed; everything confirmed.',
  },
  {
    n: '4',
    title: 'Shoot-day fixing',
    desc: 'Access, movement, local communication, schedule changes, and real-time problem solving on the day. You focus on the story; we manage the ground.',
  },
] as const

// ─── Guide Cards ──────────────────────────────────────────────────────────────
export const GUIDE_CARDS = [
  {
    tag: 'Permits',
    title: 'Filming permits in Ethiopia',
    desc: 'Federal, regional, and heritage approval pathways — what you need, how long it takes, and what to prepare.',
    href: '/filming-permits-ethiopia',
  },
  {
    tag: 'Aerial',
    title: 'Drone permits in Ethiopia',
    desc: 'Aviation authority requirements, restricted zones, and planning aerial filming as a workflow, not an afterthought.',
    href: '/drone-permits-ethiopia',
  },
  {
    tag: 'Equipment',
    title: 'Bringing film equipment to Ethiopia',
    desc: 'ATA Carnet, temporary import, manifests, and what to prepare before you arrive at Bole International Airport.',
    href: '/bringing-film-equipment-to-ethiopia',
  },
  {
    tag: 'Planning',
    title: 'Best time to film in Ethiopia',
    desc: 'Seasonal guide covering dry season windows, rain constraints, festival timing, and regional differences.',
    href: '/best-time-to-film-in-ethiopia',
  },
  {
    tag: 'Budget',
    title: 'Ethiopia film production costs',
    desc: 'What drives costs — permits, logistics, crew, drone, remote-field operations — and how to build a realistic budget.',
    href: '/ethiopia-film-production-costs',
  },
  {
    tag: 'Locations',
    title: 'What to film in Ethiopia',
    desc: 'Afar, Omo Valley, Lalibela, Simien Mountains, Addis Ababa — access realities, visual potential, and planning notes.',
    href: '/what-to-film-in-ethiopia',
  },
] as const

// ─── Why Choose ───────────────────────────────────────────────────────────────
export const WHY_ITEMS = [
  {
    title: 'Producer-first planning',
    desc: 'We speak in schedules, constraints, deliverables, call sheets, access windows, and field realities — not tourism language. Your production brief is the starting point for every conversation.',
    proof: 'Our team includes former broadcast production coordinators with direct experience working to international broadcaster standards.',
  },
  {
    title: 'Nationwide coverage with access awareness',
    desc: 'We support planning across all 12 regional states — Afar, Omo, the highlands, sacred sites, urban Addis Ababa, and access-sensitive regions — subject to current permissions and conditions.',
    proof: 'We have coordinated logistics in regions requiring specialist local knowledge, diplomatic awareness, and multi-authority permit stacking.',
  },
  {
    title: 'Discreet, respectful operations',
    desc: 'Community consent, cultural protocol, privacy, and location sensitivity are not compliance checkboxes — they are operational practice. Access earned through respect is access that holds.',
    proof: 'Our local team spans multiple Ethiopian ethnic and linguistic communities with established community relationships.',
  },
  {
    title: 'Integrated field support',
    desc: 'Through Sawla Tours, we align travel, accommodation, expedition logistics, guides, mobile camps, and remote-field movement under one coordinated plan — fewer suppliers, cleaner logistics.',
    proof: 'Sawla Tours shares infrastructure, local knowledge, and field logistics networks with Sawla Films across Ethiopia.',
  },
  {
    title: 'Calm communication under pressure',
    desc: 'We keep production teams updated with practical options, realistic constraints, and clear next steps when conditions shift. Knowing what you are dealing with is more useful than silence.',
    proof: 'Experienced in managing communications across remote shoots with variable connectivity and rapidly changing field conditions.',
  },
] as const

// ─── Deliverables ─────────────────────────────────────────────────────────────
export const DELIVERABLES = [
  { n: '01', text: 'Clear permit pathways — federal, regional, heritage, and site-level, aligned to your specific route and format' },
  { n: '02', text: 'Access planning for heritage sites, sacred locations, protected areas, and community settings with cultural protocol' },
  { n: '03', text: 'Production logistics: staging, routing, accommodation, field timing, and backup options that protect shoot days' },
  { n: '04', text: 'Customs and equipment support with clean documentation, manifest preparation, and clearance planning' },
  { n: '05', text: 'Local crew and cultural liaisons across Amharic, Tigrinya, Oromo, Somali, Afar, Sidama, and English' },
  { n: '06', text: 'Drone planning as a dedicated workflow: aerial permissions, restriction mapping, and shoot-day readiness' },
  { n: '07', text: 'Shoot-day fixing with calm coordination, fast field updates, and clear decision-making under pressure' },
  { n: '08', text: 'Integrated remote-field logistics through Sawla Tours: transport, mobile camps, and accommodation' },
] as const

// ─── CTA Receives ─────────────────────────────────────────────────────────────
export const CTA_RECEIVES = [
  'Initial permit and access considerations for your specific route',
  'Location and route feasibility questions we need answered',
  'Customs and equipment notes based on your kit list',
  'Drone-planning restrictions or unknowns to verify',
  'Logistics risks, buffers, and next-step recommendations',
  'A clear indication of what we need to quote accurately',
] as const

// ─── Nav ──────────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',            href: '/' },
  { label: 'Services',        href: '/ethiopia-film-fixer-services' },
  { label: 'Filming Guide',   href: '/ethiopia-filming-guide' },
  { label: 'Gallery',         href: '/gallery' },
  { label: 'Our Work',        href: '/case-studies' },
  { label: 'About',           href: '/about' },
  { label: 'FAQ',             href: '/faq' },
  { label: 'Contact',         href: '/contact' },
] as const

// ─── Services dropdown ────────────────────────────────────────────────────────
export const NAV_SERVICES = [
  { label: 'Filming Permits & Compliance',         href: '/filming-permits-ethiopia' },
  { label: 'Drone Permits & Aerial Coordination',  href: '/drone-permits-ethiopia' },
  { label: 'Customs & Equipment Import',           href: '/customs-clearance-film-equipment-ethiopia' },
  { label: 'Production Logistics',                 href: '/production-logistics-ethiopia' },
  { label: 'Location Scouting & Recce',            href: '/location-scouting-ethiopia' },
  { label: 'Local Crew, Translators & Liaison',    href: '/local-crew-translators-ethiopia' },
  { label: 'Security & Access Coordination',       href: '/filming-security-access-ethiopia' },
  { label: 'On-Ground Fixing',                     href: '/on-ground-fixer-ethiopia' },
  { label: 'VIP & Celebrity Handling',             href: '/vip-celebrity-handling-ethiopia' },
] as const

// ─── Guide dropdown ───────────────────────────────────────────────────────────
export const NAV_GUIDES = [
  { label: 'What to Film in Ethiopia',             href: '/what-to-film-in-ethiopia' },
  { label: 'Filming Permits Guide',                href: '/filming-permits-ethiopia' },
  { label: 'Drone Permits Guide',                  href: '/drone-permits-ethiopia' },
  { label: 'Bringing Film Equipment',              href: '/bringing-film-equipment-to-ethiopia' },
  { label: 'Best Time to Film',                    href: '/best-time-to-film-in-ethiopia' },
  { label: 'Film Production Costs',                href: '/ethiopia-film-production-costs' },
] as const

// ─── Footer ───────────────────────────────────────────────────────────────────
export const FOOTER_SERVICES = [
  { label: 'Filming permits',     href: '/filming-permits-ethiopia' },
  { label: 'Production logistics',href: '/production-logistics-ethiopia' },
  { label: 'Location scouting',   href: '/location-scouting-ethiopia' },
  { label: 'Drone permits',       href: '/drone-permits-ethiopia' },
  { label: 'Customs support',     href: '/customs-clearance-film-equipment-ethiopia' },
  { label: 'Local crew',          href: '/local-crew-translators-ethiopia' },
  { label: 'On-ground fixing',    href: '/on-ground-fixing-ethiopia' },
  { label: 'VIP handling',        href: '/vip-celebrity-handling-ethiopia' },
] as const

export const FOOTER_GUIDES = [
  { label: 'What to film in Ethiopia',    href: '/what-to-film-in-ethiopia' },
  { label: 'Filming permits',             href: '/filming-permits-ethiopia' },
  { label: 'Drone permits',               href: '/drone-permits-ethiopia' },
  { label: 'Bring equipment',             href: '/bringing-film-equipment-to-ethiopia' },
  { label: 'Best time to film',           href: '/best-time-to-film-in-ethiopia' },
  { label: 'Production costs',            href: '/ethiopia-film-production-costs' },
] as const

export const FOOTER_COMPANY = [
  { label: 'About Sawla Films',   href: '/about' },
  { label: 'Our Team',             href: '/team' },
  { label: 'How We Work',          href: '/how-we-work' },
  { label: 'Clients and Credits',  href: '/clients' },
  { label: 'Case Studies',         href: '/case-studies' },
  { label: 'FAQ',                  href: '/faq' },
  { label: 'Request a Quote',      href: '/request-a-quote' },
  { label: 'Contact',              href: '/contact' },
  { label: 'Sawla Tours', href: 'https://www.sawlatours.com/', external: true },
] as const
