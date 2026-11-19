export interface Bilingual {
  en: string;
  th: string;
}

/** Topic of the course; drives the card art (icon + colors). */
export type CertificateCategory =
  | 'ai'
  | 'design'
  | 'privacy'
  | 'waste'
  | 'carbon'
  | 'security'
  | 'risk'
  | 'green'
  | 'safety'
  | 'ethics'
  | 'culture'
  | 'control'
  | 'continuity'
  | 'water'
  | 'people'
  | 'digital'
  | 'discipline'
  | 'performance'
  | 'career'
  | 'knowledge';

/** Card rarity; drives the frame, star count and holo foil. */
export type CertificateRarity = 'common' | 'rare' | 'epic' | 'legendary';

export interface Certificate {
  title: Bilingual;
  issuer: Bilingual;
  /** Short issuer code shown on the card gem. */
  issuerCode: string;
  /** ISO date printed on the certificate (Thai year 2569 = 2026). */
  date: string;
  /** File name inside public/certificates. */
  file: string;
  category: CertificateCategory;
  rarity: CertificateRarity;
  artImage?: string;
}

const PWA: Bilingual = { en: 'Provincial Waterworks Authority', th: 'การประปาส่วนภูมิภาค' };
const SET: Bilingual = { en: 'The Stock Exchange of Thailand (SET)', th: 'ตลาดหลักทรัพย์แห่งประเทศไทย (SET)' };
const PDPC: Bilingual = {
  en: 'Personal Data Protection Committee Office (PDPC)',
  th: 'สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล',
};

export const featuredCertificates: Certificate[] = [
  {
    title: {
      en: 'AI Governance & Ethics',
      th: 'AI Governance & Ethics หลักการจริยธรรม ธรรมาภิบาล และข้อกฎหมายในการประยุกต์ใช้ AI',
    },
    issuer: {
      en: 'Digital Government Development Agency (DGA), TDGA',
      th: 'สำนักงานพัฒนารัฐบาลดิจิทัล (องค์การมหาชน) สถาบันพัฒนาบุคลากรภาครัฐด้านดิจิทัล',
    },
    issuerCode: 'DGA',
    date: '2026-07-06',
    file: 'dga-ai-governance-ethics.pdf',
    category: 'ai',
    rarity: 'legendary',
    artImage: '/assets/images/yugioh-ai-governance.jpg',
  },
  {
    title: {
      en: 'Canva AI: Smart Design, Smart Work',
      th: 'Canva AI: Smart Design, Smart Work สร้างสรรค์งานอย่างมืออาชีพในยุค AI',
    },
    issuer: { en: 'Burapha University (BUU MOOC)', th: 'มหาวิทยาลัยบูรพา (BUU MOOC)' },
    issuerCode: 'BUU',
    date: '2026-07-07',
    file: 'canva-ai-buu-mooc.pdf',
    category: 'design',
    rarity: 'epic',
    artImage: '/assets/images/yugioh-canva-ai.jpg',
  },
  {
    title: {
      en: 'PDPA for the general public',
      th: 'หลักสูตรด้านการคุ้มครองข้อมูลส่วนบุคคลสำหรับประชาชนทั่วไป',
    },
    issuer: PDPC,
    issuerCode: 'PDPC',
    date: '2026-08-05',
    file: 'pdpc-general-public.pdf',
    category: 'privacy',
    rarity: 'rare',
    artImage: '/assets/images/yugioh-pdpa-public.jpg',
  },
  {
    title: {
      en: 'PDPA duties of controllers, processors, DPOs, employees and contractors',
      th: 'หลักสูตรการปฏิบัติหน้าที่ของผู้ควบคุมข้อมูลส่วนบุคคล ผู้ประมวลผลข้อมูลส่วนบุคคล เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล ลูกจ้าง ผู้รับจ้าง',
    },
    issuer: PDPC,
    issuerCode: 'PDPC',
    date: '2026-08-06',
    file: 'pdpc-controller-duties.pdf',
    category: 'privacy',
    rarity: 'epic',
    artImage: '/assets/images/yugioh-pdpa-duties.jpg',
  },
  {
    title: {
      en: 'CE102 Sustainable Waste Management (How to be a Zero-Waste Office?)',
      th: 'CE102 การจัดการขยะอย่างยั่งยืน (How to be a Zero-Waste Office?)',
    },
    issuer: SET,
    issuerCode: 'SET',
    date: '2026-07-07',
    file: 'set-ce102-zero-waste-office.pdf',
    category: 'waste',
    rarity: 'rare',
    artImage: '/assets/images/yugioh-zero-waste.jpg',
  },
  {
    title: { en: 'CFO 02 Carbon Footprint for Organization', th: 'CFO 02 Carbon Footprint for Organization' },
    issuer: SET,
    issuerCode: 'SET',
    date: '2026-07-07',
    file: 'set-cfo02-carbon-footprint.pdf',
    category: 'carbon',
    rarity: 'rare',
    artImage: '/assets/images/yugioh-carbon-footprint.jpg',
  },
];

// Internal e-Learning courses run by PWA's Human Resource Development Division.
const internal = (
  title: Bilingual,
  date: string,
  file: string,
  category: CertificateCategory,
): Certificate => ({ title, issuer: PWA, issuerCode: 'PWA', date, file, category, rarity: 'common' });

export const internalCertificates: Certificate[] = [
  internal(
    {
      en: 'Cybersecurity Awareness (basic level)',
      th: 'การสร้างความตระหนักรู้ด้านความมั่นคงปลอดภัยไซเบอร์ ระดับพื้นฐาน (Cybersecurity Awareness)',
    },
    '2026-07-06',
    'pwa-cybersecurity-awareness.pdf',
    'security',
  ),
  internal(
    {
      en: 'Risk management, internal control and business continuity (RM-IC-BCM)',
      th: 'การเรียนรู้ด้านการบริหารความเสี่ยง การควบคุมภายใน และการบริหารความต่อเนื่องทางธุรกิจ (RM-IC-BCM)',
    },
    '2026-07-06',
    'pwa-rm-ic-bcm.pdf',
    'risk',
  ),
  internal(
    { en: 'Green Office management', th: 'สร้างความรู้ความเข้าใจการจัดการสำนักงานสีเขียว (Green Office)' },
    '2026-07-08',
    'pwa-green-office.pdf',
    'green',
  ),
  internal(
    { en: 'Workplace safety and occupational health', th: 'ความปลอดภัย อาชีวอนามัยในการทำงาน' },
    '2026-07-06',
    'pwa-safety-health.pdf',
    'safety',
  ),
  internal(
    { en: 'Anti-corruption and ethics', th: 'ความรู้เกี่ยวกับการป้องกันทุจริตและส่งเสริมจริยธรรม' },
    '2026-08-04',
    'pwa-anti-corruption-ethics.pdf',
    'ethics',
  ),
  internal(
    { en: 'Corporate values and culture', th: 'ความรู้เกี่ยวกับค่านิยมและวัฒนธรรมองค์กร' },
    '2026-08-05',
    'pwa-values-culture.pdf',
    'culture',
  ),
  internal(
    { en: 'Risk management (RM)', th: 'ความรู้เกี่ยวกับการบริหารความเสี่ยง (RM)' },
    '2026-08-05',
    'pwa-risk-management.pdf',
    'risk',
  ),
  internal(
    { en: 'Internal control (IC)', th: 'ความรู้เกี่ยวกับการควบคุมภายใน (IC)' },
    '2026-08-05',
    'pwa-internal-control.pdf',
    'control',
  ),
  internal(
    { en: 'Business continuity management (BCM)', th: 'ความรู้เกี่ยวกับการบริหารความต่อเนื่องทางธุรกิจ (BCM)' },
    '2026-08-05',
    'pwa-bcm.pdf',
    'continuity',
  ),
  internal(
    { en: 'PWA water production systems', th: 'ความรู้เกี่ยวกับระบบผลิตน้ำประปา การประปาส่วนภูมิภาค' },
    '2026-08-05',
    'pwa-water-production.pdf',
    'water',
  ),
  internal(
    { en: 'Human resource management', th: 'ความรู้เกี่ยวกับการบริหารทรัพยากรบุคคล' },
    '2026-08-05',
    'pwa-hr-management.pdf',
    'people',
  ),
  internal(
    { en: 'Digital technology in HR', th: 'ความรู้เกี่ยวกับเทคโนโลยีดิจิทัลในงาน HR' },
    '2026-08-05',
    'pwa-digital-hr.pdf',
    'digital',
  ),
  internal(
    { en: 'Employee discipline', th: 'ความรู้เกี่ยวกับวินัยพนักงาน' },
    '2026-08-05',
    'pwa-employee-discipline.pdf',
    'discipline',
  ),
  internal(
    { en: 'Performance evaluation', th: 'ความรู้เกี่ยวกับการประเมินผลการปฏิบัติงาน' },
    '2026-08-05',
    'pwa-performance-evaluation.pdf',
    'performance',
  ),
  internal(
    { en: 'Career progression paths', th: 'ความรู้เกี่ยวกับเส้นทางความก้าวหน้าสายอาชีพ' },
    '2026-08-11',
    'pwa-career-path.pdf',
    'career',
  ),
  internal(
    { en: 'Knowledge management and innovation', th: 'ความรู้เกี่ยวกับการจัดการความรู้และนวัตกรรม' },
    '2026-08-11',
    'pwa-knowledge-innovation.pdf',
    'knowledge',
  ),
];
