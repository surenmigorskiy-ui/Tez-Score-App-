import React from 'react';

interface FooterProps {
  t: (key: string) => string;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white text-brand-secondary mt-auto dark:bg-brand-deep-blue/50 dark:text-gray-400 border-t border-black/10 dark:border-white/10">
      <div className="container mx-auto px-4 py-4 text-center">
        <p>&copy; {currentYear} {t('allRightsReserved')}</p>
        <p className="text-sm mt-1">{t('dataSource')}</p>
        <p className="text-sm mt-2 font-semibold">{t('developedBy')}</p>
      </div>
    </footer>
  );
};

export default Footer;
