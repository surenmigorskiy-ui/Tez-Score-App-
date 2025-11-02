import React from 'react';
import { Match } from '../types';
import { generateGoogleCalendarUrl } from '../utils/calendar';

interface ExportModalProps {
  matches: Match[];
  onClose: () => void;
  onDownloadICS: () => void;
  t: (key: string, replacements?: Record<string, string>) => string;
  language: string;
  timezone: string;
}

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);


const ExportModal: React.FC<ExportModalProps> = ({ matches, onClose, onDownloadICS, t, language, timezone }) => {
  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 transition-opacity"
        onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col transform transition-transform scale-95 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-brand-deep-blue dark:text-brand-blue">{t('exportModalTitle')}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" aria-label="Close modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        <main className="p-6 overflow-y-auto">
            <div className="bg-brand-blue/10 dark:bg-brand-blue/20 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-brand-deep-blue dark:text-white mb-2">{t('exportMethod1')}</h3>
                <p className="text-sm text-brand-secondary dark:text-gray-300 mb-4">
                    {t('exportMethod1Desc')}
                </p>
                <button
                    onClick={onDownloadICS}
                    className="inline-flex items-center justify-center w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition-transform transform hover:scale-105 duration-300 ease-in-out"
                >
                    <DownloadIcon />
                    {t('downloadICS')}
                </button>
            </div>

            <div className="mt-6">
                <h3 className="font-bold text-lg text-brand-deep-blue dark:text-white mb-3">{t('exportMethod2')}</h3>
                <p className="text-sm text-brand-secondary dark:text-gray-300 mb-4">
                    {t('exportMethod2Desc')}
                </p>
                <ul className="space-y-2">
                    {matches.slice(0, 10).map((match) => {
                        const locale = language === 'uz' ? 'uz-UZ' : language === 'ru' ? 'ru-RU' : 'en-GB';
                        const matchDate = new Date(match.dateTimeUTC);
                        const formattedDate = matchDate.toLocaleDateString(locale, {
                            month: 'long',
                            day: 'numeric',
                            timeZone: timezone,
                        });
                        
                        return (
                            <li key={match.dateTimeUTC}>
                                <a 
                                    href={generateGoogleCalendarUrl(match, {
                                      vs: t('vs'), match: t('match'), competition: t('competition'), venue: t('venue')
                                    })}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between w-full p-3 bg-gray-100 dark:bg-gray-700/50 rounded-lg hover:bg-brand-blue/20 dark:hover:bg-brand-blue/30 transition-colors"
                                >
                                    <div className="font-semibold dark:text-gray-200 text-left">
                                        {match.homeTeam} <span className="font-light">{t('vs')}</span> {match.awayTeam}
                                        <span className="block text-xs font-normal text-gray-500 dark:text-gray-400">{formattedDate} - {match.competition}</span>
                                    </div>
                                    <span className="flex items-center text-xs text-brand-blue font-bold">
                                        <CalendarIcon/>
                                        {t('add')}
                                    </span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </main>
      </div>
      <style>{`
        @keyframes scale-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in { animation: scale-in 0.2s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ExportModal;