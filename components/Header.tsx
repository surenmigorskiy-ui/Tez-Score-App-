import React from 'react';

const FootballIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className}>
        <path fill="currentColor" d="M480 32H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM256 416c-13.88 0-26.69-5.91-35.78-15.55L142.1 304H112c-8.84 0-16-7.16-16-16v-64c0-8.84 7.16-16 16-16h30.1l78.12-96.45c9.09-9.64 21.9-15.55 35.78-15.55s26.69 5.91 35.78 15.55L369.9 208H400c8.84 0 16 7.16 16 16v64c0 8.84-7.16 16-16 16h-30.1l-78.12 96.45C282.7 410.1 269.9 416 256 416z"/>
    </svg>
);

const SunIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
);

const MoonIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
);

const BackArrowIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>
    </svg>
);

const SearchIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);


const timezones = [
    { value: 'Asia/Tashkent', label: 'Tashkent' }, { value: 'Europe/London', label: 'London' }, { value: 'Europe/Moscow', label: 'Moscow' }, { value: 'America/New_York', label: 'New York' }, { value: 'Europe/Paris', label: 'Paris' }, { value: 'Europe/Berlin', label: 'Berlin' }, { value: 'Asia/Dubai', label: 'Dubai' }, { value: 'Asia/Tokyo', label: 'Tokyo' },
];

const LanguageSwitcher: React.FC<{language: string, setLanguage: (lang: string) => void}> = ({ language, setLanguage}) => (
  <div className="relative"><select value={language} onChange={(e) => setLanguage(e.target.value)} className="bg-gray-200/50 dark:bg-gray-700/50 text-sm p-2 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-brand-blue cursor-pointer">
      <option value="en">EN</option><option value="ru">RU</option><option value="uz">UZ</option>
  </select></div>
);

const TimezoneSwitcher: React.FC<{timezone: string, setTimezone: (tz: string) => void, t: (key: string) => string}> = ({ timezone, setTimezone, t }) => (
    <div className="relative"><select value={timezone} onChange={(e) => setTimezone(e.target.value)} className="bg-gray-200/50 dark:bg-gray-700/50 text-sm p-2 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-brand-blue cursor-pointer" aria-label={t('selectTimezone')}>
        {timezones.map(tz => (<option key={tz.value} value={tz.value}>{tz.label}</option>))}
    </select></div>
);

interface HeaderProps {
  theme: string; toggleTheme: () => void; language: string; setLanguage: (lang: string) => void;
  timezone: string; setTimezone: (tz: string) => void; t: (key: string) => string;
  onBack?: () => void; onTitleClick: () => void; onTodayClick: () => void;
  isSearchVisible: boolean; onToggleSearch: () => void;
  searchQuery: string; onSearchChange: (q: string) => void; currentView: string;
}

const Header: React.FC<HeaderProps> = ({ 
    theme, toggleTheme, language, setLanguage, timezone, setTimezone, t, 
    onBack, onTitleClick, onTodayClick, isSearchVisible, onToggleSearch, 
    searchQuery, onSearchChange, currentView 
}) => {
  return (
    <header className="bg-white/80 dark:bg-brand-deep-blue/80 backdrop-blur-sm shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between flex-wrap">
         <div className="flex items-center gap-2">
            {onBack && (
              <button onClick={onBack} className="p-2 rounded-full text-brand-deep-blue dark:text-white hover:bg-brand-blue/20 focus:outline-none focus:ring-2 focus:ring-brand-blue" aria-label={t('back')}>
                  <BackArrowIcon className="h-6 w-6" />
              </button>
            )}
            <div onClick={onTitleClick} className="flex items-center cursor-pointer group">
                <FootballIcon className="h-8 w-8 text-brand-blue mr-3 transition-transform group-hover:rotate-180" />
                <h1 className="text-xl md:text-3xl font-bold text-brand-deep-blue dark:text-white tracking-tight">
                {t('appTitle')}
                </h1>
            </div>
         </div>
         <div className="flex items-center gap-2 md:gap-3">
           <button onClick={onTodayClick} className="hidden sm:block bg-gray-200/50 dark:bg-gray-700/50 text-sm p-2 rounded-md font-semibold hover:bg-brand-blue/20 focus:outline-none focus:ring-2 focus:ring-brand-blue">{t('today')}</button>
           <TimezoneSwitcher timezone={timezone} setTimezone={setTimezone} t={t} />
           <LanguageSwitcher language={language} setLanguage={setLanguage} />
           {(currentView === 'competitionSelection' || currentView === 'teamSelection') && (
            <button onClick={onToggleSearch} className="p-2 rounded-full text-brand-deep-blue dark:text-white hover:bg-brand-blue/20 focus:outline-none focus:ring-2 focus:ring-brand-blue" aria-label={t('search')}>
                <SearchIcon className="h-6 w-6" />
            </button>
           )}
           <button onClick={toggleTheme} className="p-2 rounded-full text-brand-deep-blue dark:text-white hover:bg-brand-blue/20 focus:outline-none focus:ring-2 focus:ring-brand-blue" aria-label={t('toggleTheme')}>
              {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
           </button>
         </div>
      </div>
      {isSearchVisible && (currentView === 'competitionSelection' || currentView === 'teamSelection') && (
          <div className="container mx-auto px-4 pb-3">
              <input type="text" value={searchQuery} onChange={(e) => onSearchChange(e.target.value)}
                  placeholder={currentView === 'competitionSelection' ? t('searchCompetitions') : t('searchTeams')}
                  className="w-full p-2 bg-white/80 dark:bg-gray-800/60 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
          </div>
      )}
    </header>
  );
};

export default Header;