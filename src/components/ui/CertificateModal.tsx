import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  ExternalLink,
  Sparkles,
  FileText,
  Star,
  Calendar,
  Building2,
  Check,
  Copy,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type { Certificate } from '../../data/certificates';

interface CertificateModalProps {
  cert: Certificate | null;
  number: number;
  total: number;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  cert,
  number,
  total,
  onClose,
}) => {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<'card' | 'pdf'>('card');
  const [copied, setCopied] = useState(false);

  // Reset tab to card whenever a new certificate is opened
  useEffect(() => {
    if (cert) {
      setActiveTab(cert.artImage ? 'card' : 'pdf');
      setCopied(false);
    }
  }, [cert]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (cert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  const formattedDate = new Date(cert.date).toLocaleDateString(
    lang === 'th' ? 'th-TH' : 'en-GB',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
  );

  const collectorNo = `${String(number).padStart(3, '0')}/${String(total).padStart(3, '0')}`;

  const copyTitle = () => {
    navigator.clipboard.writeText(cert.title[lang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Dark blurred backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl bg-[#0e121e]/95 border border-white/15 shadow-2xl overflow-hidden z-10 text-white"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 text-black shadow-md">
                {cert.rarity.toUpperCase()}
              </span>
              <span className="text-xs sm:text-sm text-white/50 font-mono">
                No. {collectorNo}
              </span>
            </div>

            {/* View Switcher: Card vs PDF */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-white/10 border border-white/10 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('card')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'card'
                    ? 'bg-amber-400 text-black shadow-md font-bold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                {lang === 'th' ? 'การ์ดยูกิ' : 'Card Art'}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('pdf')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'pdf'
                    ? 'bg-blue-500 text-white shadow-md font-bold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                {lang === 'th' ? 'ใบประกาศ PDF' : 'Certificate PDF'}
              </button>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center">
            {/* Display Area (Card or PDF) */}
            <div className="w-full md:w-[50%] flex justify-center items-center">
              {activeTab === 'card' ? (
                <div className="relative group max-w-[340px] w-full aspect-[5/7] rounded-2xl p-2.5 shadow-2xl bg-gradient-to-br from-amber-300 via-amber-600 to-amber-900 border border-amber-300/40">
                  <div className="relative h-full w-full rounded-xl bg-[#0b0e17] overflow-hidden flex flex-col p-3 border border-amber-300/20">
                    {/* Yu-Gi-Oh Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <span className="text-xs font-bold tracking-wider text-amber-200 uppercase truncate">
                        {cert.title[lang]}
                      </span>
                      <span className="shrink-0 text-[10px] px-2 py-0.5 rounded font-black bg-amber-400 text-black">
                        {cert.issuerCode}
                      </span>
                    </div>

                    {/* Art Box */}
                    <div className="relative my-2 flex-1 rounded-lg overflow-hidden border border-amber-300/30 bg-black flex items-center justify-center">
                      {cert.artImage ? (
                        <img
                          src={cert.artImage}
                          alt={cert.title[lang]}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-950 p-4 text-center">
                          <FileText className="w-16 h-16 text-amber-300 mb-2" />
                          <span className="text-xs text-white/70">{cert.issuer[lang]}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 pointer-events-none" />
                    </div>

                    {/* Card Description Box */}
                    <div className="rounded-lg bg-black/60 p-2.5 border border-white/10 text-[11px] text-white/80 leading-relaxed">
                      <p className="line-clamp-2 text-white/90 font-medium">
                        {cert.issuer[lang]}
                      </p>
                      <div className="mt-1 flex items-center justify-between text-amber-300/80 text-[10px]">
                        <span>{formattedDate}</span>
                        <span>[ {lang === 'th' ? 'เกียรติบัตรรับรอง' : 'Official Certificate'} ]</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-[380px] sm:h-[450px] md:h-[500px] rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl relative flex flex-col">
                  {/* Clean PDF Embed */}
                  <iframe
                    src={`/certificates/${cert.file}#view=FitH&toolbar=0`}
                    title={cert.title[lang]}
                    className="w-full h-full border-none"
                  />
                  <div className="absolute top-2 right-2 flex gap-1">
                    <a
                      href={`/certificates/${cert.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-black/70 hover:bg-black text-white/80 hover:text-white transition-colors backdrop-blur text-xs flex items-center gap-1 px-2.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {lang === 'th' ? 'ขยายเต็มจอ' : 'Full Screen'}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Info & Details Column */}
            <div className="w-full md:w-[50%] flex flex-col gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold mb-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>
                    {lang === 'th' ? 'ข้อมูลเกียรติบัตรทางการ' : 'Verified Official Certificate'}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                  {cert.title[lang]}
                </h3>
              </div>

              <div className="space-y-3 py-2 text-sm text-white/80 border-y border-white/10">
                <div className="flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/40 text-xs block">
                      {lang === 'th' ? 'หน่วยงานผู้ออกเกียรติบัตร' : 'Issuing Organization'}
                    </span>
                    <span className="font-medium text-white">{cert.issuer[lang]}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-white/50 shrink-0" />
                  <div>
                    <span className="text-white/40 text-xs block">
                      {lang === 'th' ? 'วันที่ได้รับ' : 'Issue Date'}
                    </span>
                    <span className="font-medium text-white">{formattedDate}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`/certificates/${cert.file}`}
                  download={cert.file}
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg transition-all"
                >
                  <Download className="w-4 h-4" />
                  {lang === 'th' ? 'ดาวน์โหลด PDF' : 'Download PDF'}
                </a>

                <a
                  href={`/certificates/${cert.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-sm bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {lang === 'th' ? 'เปิดแท็บใหม่' : 'Open in Tab'}
                </a>

                <button
                  type="button"
                  onClick={copyTitle}
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white border border-white/10 transition-colors"
                  title={lang === 'th' ? 'คัดลอกชื่อหลักสูตร' : 'Copy title'}
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
