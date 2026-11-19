import React, { useRef } from 'react';
import {
  ArrowUpRight,
  BrainCircuit,
  Cpu,
  Droplets,
  Gauge,
  Gavel,
  HardHat,
  Leaf,
  LifeBuoy,
  Lightbulb,
  LockKeyhole,
  Palette,
  Recycle,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Sprout,
  Star,
  TrendingUp,
  TriangleAlert,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type {
  Bilingual,
  Certificate,
  CertificateCategory,
  CertificateRarity,
} from '../../data/certificates';

interface CategoryStyle {
  icon: LucideIcon;
  /** Art window gradient. */
  from: string;
  to: string;
  label: Bilingual;
}

// หมวดหมู่ของหลักสูตร กำหนดไอคอนและสีของภาพบนการ์ด
const CATEGORY: Record<CertificateCategory, CategoryStyle> = {
  ai: { icon: BrainCircuit, from: '#7c3aed', to: '#db2777', label: { en: 'AI · Ethics', th: 'AI · จริยธรรม' } },
  design: { icon: Palette, from: '#f97316', to: '#ec4899', label: { en: 'Design · AI', th: 'ออกแบบ · AI' } },
  privacy: { icon: ShieldCheck, from: '#0ea5e9', to: '#4f46e5', label: { en: 'Data Privacy', th: 'คุ้มครองข้อมูล' } },
  waste: { icon: Recycle, from: '#16a34a', to: '#0d9488', label: { en: 'Sustainability', th: 'ความยั่งยืน' } },
  carbon: { icon: Leaf, from: '#059669', to: '#65a30d', label: { en: 'Carbon', th: 'คาร์บอน' } },
  security: { icon: ShieldAlert, from: '#2563eb', to: '#0891b2', label: { en: 'Cybersecurity', th: 'ไซเบอร์' } },
  risk: { icon: TriangleAlert, from: '#d97706', to: '#dc2626', label: { en: 'Risk', th: 'ความเสี่ยง' } },
  green: { icon: Sprout, from: '#22c55e', to: '#15803d', label: { en: 'Green Office', th: 'สำนักงานสีเขียว' } },
  safety: { icon: HardHat, from: '#eab308', to: '#ea580c', label: { en: 'Safety', th: 'ความปลอดภัย' } },
  ethics: { icon: Scale, from: '#6366f1', to: '#334155', label: { en: 'Ethics', th: 'จริยธรรม' } },
  culture: { icon: Users, from: '#e11d48', to: '#9333ea', label: { en: 'Culture', th: 'วัฒนธรรม' } },
  control: { icon: LockKeyhole, from: '#475569', to: '#0f766e', label: { en: 'Internal Control', th: 'ควบคุมภายใน' } },
  continuity: { icon: LifeBuoy, from: '#0284c7', to: '#e11d48', label: { en: 'Continuity', th: 'ความต่อเนื่อง' } },
  water: { icon: Droplets, from: '#0ea5e9', to: '#1d4ed8', label: { en: 'Waterworks', th: 'ระบบประปา' } },
  people: { icon: Users, from: '#14b8a6', to: '#2563eb', label: { en: 'HR', th: 'บุคคล' } },
  digital: { icon: Cpu, from: '#8b5cf6', to: '#0ea5e9', label: { en: 'Digital HR', th: 'ดิจิทัล HR' } },
  discipline: { icon: Gavel, from: '#78716c', to: '#b45309', label: { en: 'Discipline', th: 'วินัย' } },
  performance: { icon: Gauge, from: '#f59e0b', to: '#16a34a', label: { en: 'Performance', th: 'ประเมินผล' } },
  career: { icon: TrendingUp, from: '#10b981', to: '#0ea5e9', label: { en: 'Career', th: 'สายอาชีพ' } },
  knowledge: { icon: Lightbulb, from: '#facc15', to: '#f97316', label: { en: 'Innovation', th: 'นวัตกรรม' } },
};

interface RarityStyle {
  stars: number;
  label: string;
  /** Outer frame gradient. */
  frame: string;
  glow: string;
  holo: boolean;
}

// ระดับความหายากของการ์ด: กรอบ จำนวนดาว และเอฟเฟกต์ฟอยล์
const RARITY: Record<CertificateRarity, RarityStyle> = {
  common: {
    stars: 1,
    label: 'Common',
    frame: 'linear-gradient(145deg,#cbd5e1,#64748b 45%,#cbd5e1)',
    glow: 'rgba(148,163,184,.35)',
    holo: false,
  },
  rare: {
    stars: 2,
    label: 'Rare',
    frame: 'linear-gradient(145deg,#7dd3fc,#2563eb 45%,#a5f3fc)',
    glow: 'rgba(56,189,248,.45)',
    holo: true,
  },
  epic: {
    stars: 3,
    label: 'Epic',
    frame: 'linear-gradient(145deg,#f0abfc,#7c3aed 45%,#c4b5fd)',
    glow: 'rgba(168,85,247,.5)',
    holo: true,
  },
  legendary: {
    stars: 4,
    label: 'Legendary',
    frame: 'linear-gradient(145deg,#fde68a,#d97706 40%,#fef3c7 60%,#b45309)',
    glow: 'rgba(251,191,36,.55)',
    holo: true,
  },
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface CertificateCardProps {
  cert: Certificate;
  /** 1-based collector number. */
  number: number;
  total: number;
  /** Smaller card for the internal deck. */
  mini?: boolean;
  /** Callback when card is selected / clicked to view modal. */
  onSelect?: () => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ cert, number, total, mini, onSelect }) => {
  const { lang, t } = useLanguage();
  const ref = useRef<HTMLAnchorElement>(null);
  const cat = CATEGORY[cert.category];
  const rar = RARITY[cert.rarity];
  const Icon = cat.icon;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onSelect) {
      e.preventDefault();
      onSelect();
    }
  };

  const date = new Date(cert.date).toLocaleDateString(lang === 'th' ? 'th-TH' : 'en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const no = `${String(number).padStart(3, '0')}/${String(total).padStart(3, '0')}`;

  // Tilt + foil follow the pointer through CSS variables, so moving the mouse never re-renders.
  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const max = mini ? 10 : 14;
    el.style.setProperty('--rx', `${(0.5 - py) * max}deg`);
    el.style.setProperty('--ry', `${(px - 0.5) * max}deg`);
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <a
      ref={ref}
      href={`/certificates/${cert.file}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${cert.title[lang]}, ${cert.issuer[lang]} (${t.certificates.viewPdf})`}
      title={cert.title[lang]}
      onClick={handleClick}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`tcg-card group block w-full aspect-[5/7] ${mini ? 'rounded-[14px] p-[5px]' : 'rounded-[22px] p-[8px]'}`}
      style={{ background: rar.frame, '--glow': rar.glow } as React.CSSProperties}
    >
      <div
        className={`relative h-full flex flex-col overflow-hidden bg-[#10131c] text-white ${mini ? 'rounded-[10px] p-2 gap-1.5' : 'rounded-[15px] p-3 gap-2'
          }`}
      >
        {/* Header: category + issuer gem */}
        <div className="flex items-center justify-between gap-2">
          <span
            className={`font-semibold uppercase tracking-wider truncate text-white/85 ${mini ? 'text-[9px]' : 'text-[11px]'}`}
          >
            {cat.label[lang]}
          </span>
          <span
            className={`shrink-0 rounded-full font-black tracking-tight text-[#10131c] shadow-inner ${mini ? 'text-[8px] px-1.5 py-0.5' : 'text-[10px] px-2 py-0.5'
              }`}
            style={{ background: rar.frame }}
          >
            {cert.issuerCode}
          </span>
        </div>

        {/* Art window */}
        <div
          className={`tcg-art relative overflow-hidden flex items-center justify-center ${mini ? 'rounded-md h-[38%]' : 'rounded-lg h-[44%]'
            }`}
          style={{ background: `linear-gradient(135deg, ${cat.from}, ${cat.to})` }}
        >
          {cert.artImage ? (
            <img
              src={cert.artImage}
              alt={cert.title[lang]}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <>
              <span
                aria-hidden
                className={`absolute font-black text-white/10 select-none ${mini ? 'text-4xl' : 'text-7xl'} -bottom-2 -right-1`}
              >
                {cert.issuerCode}
              </span>
              <Icon
                aria-hidden
                className={`relative text-white drop-shadow-[0_4px_12px_rgba(0,0,0,.35)] transition-transform duration-500 group-hover:scale-110 ${mini ? 'w-9 h-9' : 'w-16 h-16'
                  }`}
                strokeWidth={1.5}
              />
            </>
          )}
        </div>

        {/* Type line */}
        <div
          className={`flex items-center justify-between rounded border border-white/10 bg-white/[0.06] ${mini ? 'px-1.5 py-0.5 text-[8px]' : 'px-2 py-1 text-[10px]'
            } uppercase tracking-wider text-white/70`}
        >
          <span>{lang === 'th' ? 'เกียรติบัตร' : 'Certificate'}</span>
          <span className="flex gap-0.5" aria-label={rar.label}>
            {Array.from({ length: rar.stars }, (_, i) => (
              <Star key={i} className={`${mini ? 'w-2 h-2' : 'w-2.5 h-2.5'} fill-amber-300 text-amber-300`} />
            ))}
          </span>
        </div>

        {/* Text box */}
        <div className="flex-1 min-h-0 flex flex-col gap-1">
          <h3
            className={`font-bold leading-snug text-white ${mini ? 'text-[11px] line-clamp-4' : 'text-sm sm:text-[15px] line-clamp-3'
              }`}
          >
            {cert.title[lang]}
          </h3>
          {!mini && <p className="text-[11px] leading-snug text-white/55 line-clamp-2">{cert.issuer[lang]}</p>}
        </div>

        {/* Footer */}
        <div
          className={`flex items-center justify-between border-t border-white/10 text-white/55 ${mini ? 'pt-1 text-[8px]' : 'pt-1.5 text-[10px]'
            }`}
        >
          <span className="tabular-nums">{mini ? no : date}</span>
          {mini ? (
            <ArrowUpRight className="w-3 h-3 text-white/70" />
          ) : (
            <span className="inline-flex items-center gap-1 font-medium text-white/85">
              {rar.label} · {no}
            </span>
          )}
        </div>

        {/* Hover call-to-action */}
        {!mini && (
          <span className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur px-3 py-1.5 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            {t.certificates.viewPdf}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        )}

        {/* Foil + glare */}
        {rar.holo && <span aria-hidden className="tcg-holo" />}
        <span aria-hidden className="tcg-glare" />
      </div>
    </a>
  );
};

/** Face-down card back, used for the internal-training deck. */
export const CardBack: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = '', style }) => (
  <div
    aria-hidden
    className={`aspect-[5/7] rounded-[14px] p-[5px] ${className}`}
    style={{ background: RARITY.common.frame, ...style }}
  >
    <div className="tcg-back h-full rounded-[10px] flex items-center justify-center">
      <div className="w-[46%] aspect-square rounded-full bg-white/95 flex items-center justify-center shadow-lg p-2">
        <img src="/assets/images/pwa-logo.png" alt="" className="w-full h-full object-contain" />
      </div>
    </div>
  </div>
);
