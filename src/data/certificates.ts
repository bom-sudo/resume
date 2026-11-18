export interface Bilingual {
  en: string;
  th: string;
}

export interface Certificate {
  title: Bilingual;
  issuer: Bilingual;
  /** ISO date printed on the certificate (Thai year 2569 = 2026). */
  date: string;
  /** File name inside public/certificates. */
  file: string;
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
    date: '2026-07-06',
    file: 'dga-ai-governance-ethics.pdf',
  },
  {
    title: {
      en: 'Canva AI: Smart Design, Smart Work',
      th: 'Canva AI: Smart Design, Smart Work สร้างสรรค์งานอย่างมืออาชีพในยุค AI',
    },
    issuer: { en: 'Burapha University (BUU MOOC)', th: 'มหาวิทยาลัยบูรพา (BUU MOOC)' },
    date: '2026-07-07',
    file: 'canva-ai-buu-mooc.pdf',
  },
  {
    title: {
      en: 'PDPA for the general public',
      th: 'หลักสูตรด้านการคุ้มครองข้อมูลส่วนบุคคลสำหรับประชาชนทั่วไป',
    },
    issuer: PDPC,
    date: '2026-08-05',
    file: 'pdpc-general-public.pdf',
  },
  {
    title: {
      en: 'PDPA duties of controllers, processors, DPOs, employees and contractors',
      th: 'หลักสูตรการปฏิบัติหน้าที่ของผู้ควบคุมข้อมูลส่วนบุคคล ผู้ประมวลผลข้อมูลส่วนบุคคล เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล ลูกจ้าง ผู้รับจ้าง',
    },
    issuer: PDPC,
    date: '2026-08-06',
    file: 'pdpc-controller-duties.pdf',
  },
  {
    title: {
      en: 'CE102 Sustainable Waste Management (How to be a Zero-Waste Office?)',
      th: 'CE102 การจัดการขยะอย่างยั่งยืน (How to be a Zero-Waste Office?)',
    },
    issuer: SET,
    date: '2026-07-07',
    file: 'set-ce102-zero-waste-office.pdf',
  },
  {
    title: { en: 'CFO 02 Carbon Footprint for Organization', th: 'CFO 02 Carbon Footprint for Organization' },
    issuer: SET,
    date: '2026-07-07',
    file: 'set-cfo02-carbon-footprint.pdf',
  },
];

// Internal e-Learning courses run by PWA's Human Resource Development Division.
export const internalCertificates: Certificate[] = [
  {
    title: {
      en: 'Cybersecurity Awareness (basic level)',
      th: 'การสร้างความตระหนักรู้ด้านความมั่นคงปลอดภัยไซเบอร์ ระดับพื้นฐาน (Cybersecurity Awareness)',
    },
    issuer: PWA,
    date: '2026-07-06',
    file: 'pwa-cybersecurity-awareness.pdf',
  },
  {
    title: {
      en: 'Risk management, internal control and business continuity (RM-IC-BCM)',
      th: 'การเรียนรู้ด้านการบริหารความเสี่ยง การควบคุมภายใน และการบริหารความต่อเนื่องทางธุรกิจ (RM-IC-BCM)',
    },
    issuer: PWA,
    date: '2026-07-06',
    file: 'pwa-rm-ic-bcm.pdf',
  },
  {
    title: { en: 'Green Office management', th: 'สร้างความรู้ความเข้าใจการจัดการสำนักงานสีเขียว (Green Office)' },
    issuer: PWA,
    date: '2026-07-08',
    file: 'pwa-green-office.pdf',
  },
  {
    title: { en: 'Workplace safety and occupational health', th: 'ความปลอดภัย อาชีวอนามัยในการทำงาน' },
    issuer: PWA,
    date: '2026-07-06',
    file: 'pwa-safety-health.pdf',
  },
  {
    title: { en: 'Anti-corruption and ethics', th: 'ความรู้เกี่ยวกับการป้องกันทุจริตและส่งเสริมจริยธรรม' },
    issuer: PWA,
    date: '2026-08-04',
    file: 'pwa-anti-corruption-ethics.pdf',
  },
  {
    title: { en: 'Corporate values and culture', th: 'ความรู้เกี่ยวกับค่านิยมและวัฒนธรรมองค์กร' },
    issuer: PWA,
    date: '2026-08-05',
    file: 'pwa-values-culture.pdf',
  },
  {
    title: { en: 'Risk management (RM)', th: 'ความรู้เกี่ยวกับการบริหารความเสี่ยง (RM)' },
    issuer: PWA,
    date: '2026-08-05',
    file: 'pwa-risk-management.pdf',
  },
  {
    title: { en: 'Internal control (IC)', th: 'ความรู้เกี่ยวกับการควบคุมภายใน (IC)' },
    issuer: PWA,
    date: '2026-08-05',
    file: 'pwa-internal-control.pdf',
  },
  {
    title: { en: 'Business continuity management (BCM)', th: 'ความรู้เกี่ยวกับการบริหารความต่อเนื่องทางธุรกิจ (BCM)' },
    issuer: PWA,
    date: '2026-08-05',
    file: 'pwa-bcm.pdf',
  },
  {
    title: { en: 'PWA water production systems', th: 'ความรู้เกี่ยวกับระบบผลิตน้ำประปา การประปาส่วนภูมิภาค' },
    issuer: PWA,
    date: '2026-08-05',
    file: 'pwa-water-production.pdf',
  },
  {
    title: { en: 'Human resource management', th: 'ความรู้เกี่ยวกับการบริหารทรัพยากรบุคคล' },
    issuer: PWA,
    date: '2026-08-05',
    file: 'pwa-hr-management.pdf',
  },
  {
    title: { en: 'Digital technology in HR', th: 'ความรู้เกี่ยวกับเทคโนโลยีดิจิทัลในงาน HR' },
    issuer: PWA,
    date: '2026-08-05',
    file: 'pwa-digital-hr.pdf',
  },
  {
    title: { en: 'Employee discipline', th: 'ความรู้เกี่ยวกับวินัยพนักงาน' },
    issuer: PWA,
    date: '2026-08-05',
    file: 'pwa-employee-discipline.pdf',
  },
  {
    title: { en: 'Performance evaluation', th: 'ความรู้เกี่ยวกับการประเมินผลการปฏิบัติงาน' },
    issuer: PWA,
    date: '2026-08-05',
    file: 'pwa-performance-evaluation.pdf',
  },
  {
    title: { en: 'Career progression paths', th: 'ความรู้เกี่ยวกับเส้นทางความก้าวหน้าสายอาชีพ' },
    issuer: PWA,
    date: '2026-08-11',
    file: 'pwa-career-path.pdf',
  },
  {
    title: { en: 'Knowledge management and innovation', th: 'ความรู้เกี่ยวกับการจัดการความรู้และนวัตกรรม' },
    issuer: PWA,
    date: '2026-08-11',
    file: 'pwa-knowledge-innovation.pdf',
  },
];
