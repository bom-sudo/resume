import React from 'react';

interface LiveProjectButtonProps {
  href?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href,
  label = 'Live Project',
}) => {
  const className =
    'rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-colors duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap';

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }

  return (
    <span className={`${className} opacity-50 cursor-default`}>Coming Soon</span>
  );
};
