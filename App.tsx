import React, { useState, useCallback, useEffect } from 'react';
import { Match, Team, Competition } from './types';
import { fetchUpcomingMatches, fetchTodayMatches } from './services/geminiService';
import { generateICSFileContent } from './utils/calendar';
import { competitions as localCompetitions, teams as allTeams } from './utils/localData';
import { translations } from './utils/localData';
import { getCompetitionLogo, getTeamLogo } from './assets/images';
import Header from './components/Header';
import MatchCard from './components/MatchCard';
import MatchCardSkeleton from './components/MatchCardSkeleton';
import Footer from './components/Footer';
import ExportModal from './components/ExportModal';
import Emblem from './components/Emblem';

type View = 'competitionSelection' | 'teamSelection' | 'matchList' | 'todayMatches';

const App: React.FC = () => {
  const [competitions] = useState<Competition[]>(localCompetitions);
  const [matches, setMatches] = useState<Match[]>([]);
  const [todayMatches, setTodayMatches] = useState<Match[]>([]);
  const [displayedCount, setDisplayedCount] = useState(5);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [selectedCompetition, setSelectedCompetition] = useState<Competition | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en');
  const [timezone, setTimezone] = useState(localStorage.getItem('timezone') || Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [matchesCache, setMatchesCache] = useState<Record<string, Match[]>>({});
  const [view, setView] = useState<View>('competitionSelection');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const t = useCallback((key: string, replacements?: Record<string, string>) => {
    let translation = translations[language]?.[key] || key;
    if (replacements) {
      Object.keys(replacements).forEach(rKey => {
        translation = translation.replace(`{${rKey}}`, replacements[rKey]);
      });
    }
    return translation;
  }, [language]);

  useEffect(() => {
    localStorage.setItem('lang', language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    localStorage.setItem('timezone', timezone);
  }, [timezone]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const resetToHome = () => {
    setView('competitionSelection');
    setSelectedCompetition(null);
    setSelectedTeam(null);
    setMatches([]);
    setTodayMatches([]);
    setSearchQuery('');
    setIsSearchVisible(false);
  };
  
  const handleSelectCompetition = (competition: Competition) => {
    setSelectedCompetition(competition);
    setView('teamSelection');
    setSearchQuery('');
  };

  const handleSelectTeam = (team: Team) => {
    setSelectedTeam(team);
    setView('matchList');
    setSearchQuery('');
  };
  
  const handleSelectTeamFromCard = (teamName: string) => {
    const team = allTeams.find(t => t.name === teamName);
    if(team) {
        const competition = competitions.find(c => c.teams.some(t => t.name === teamName));
        setSelectedCompetition(competition || null);
        handleSelectTeam(team);
    }
  };

  const handleFetchMatches = useCallback(async (team: Team) => {
    const teamName = team.name;
    if (matchesCache[teamName]) {
      setMatches(matchesCache[teamName]);
      return;
    }
    setIsLoading(true);
    setError(null);
    setMatches([]);
    try {
      const result = await fetchUpcomingMatches(teamName);
      setMatches(result);
      if (result.length > 0) {
          setMatchesCache(prevCache => ({ ...prevCache, [teamName]: result }));
      }
    } catch (err) {
      setError(t('genericError'));
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [matchesCache, t]);

  const handleFetchTodayMatches = useCallback(async () => {
    setView('todayMatches');
    setIsLoading(true);
    setError(null);
    setTodayMatches([]);
    try {
        const result = await fetchTodayMatches();
        setTodayMatches(result);
    } catch (err) {
        setError(t('genericError'));
        console.error(err);
    } finally {
        setIsLoading(false);
    }
}, [t]);


  useEffect(() => {
    if(view === 'matchList' && selectedTeam) {
        handleFetchMatches(selectedTeam);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTeam, view])


  const handleDownloadICS = () => {
    if (matches.length === 0) return;
    const icsContent = generateICSFileContent(matches, {
      vs: t('vs'), match: 'Match', competition: 'Competition', venue: 'Venue', reminderDescription: t('reminderDescription')
    });
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${selectedTeam?.name.replace(/\s+/g, '_').toLowerCase() || 'matches'}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setIsExportModalOpen(false);
  };
  
  const handleBackClick = () => {
    setSearchQuery('');
    if (view === 'matchList') {
        setView('teamSelection');
        setSelectedTeam(null);
        setMatches([]);
    } else if (view === 'teamSelection' || view === 'todayMatches') {
        resetToHome();
    }
  };
  
  const renderContent = () => {
    const filteredCompetitions = competitions.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const filteredTeams = selectedCompetition?.teams.filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase())) || [];

    switch (view) {
        case 'competitionSelection':
            return (
                <>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-deep-blue dark:text-white drop-shadow-md">{t('chooseCompetition')}</h2>
                    <p className="text-brand-secondary dark:text-gray-300 mb-8 max-w-2xl mx-auto">{t('selectCompetitionPrompt')}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredCompetitions.map(comp => (
                            <button key={comp.name} onClick={() => handleSelectCompetition(comp)} className="flex flex-col items-center p-4 bg-white/60 dark:bg-gray-800/50 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-blue">
                                <Emblem src={getCompetitionLogo(comp.name)} alt={`${comp.name} emblem`} className="h-20 w-20 object-contain mb-3" />
                                <span className="font-semibold text-center">{comp.name}</span>
                            </button>
                        ))}
                    </div>
                </>
            );
        case 'teamSelection':
            if (!selectedCompetition) return null;
            return (
                <div className="w-full text-center">
                    <div className="flex items-center justify-center gap-4 mb-2">
                        <Emblem src={getCompetitionLogo(selectedCompetition.name)} alt={`${selectedCompetition.name} emblem`} className="h-16 w-16 md:h-20 md:w-20 object-contain" />
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-deep-blue dark:text-white drop-shadow-md">{selectedCompetition.name}</h2>
                    </div>
                    <p className="text-brand-secondary dark:text-gray-300 mb-6">{t('chooseYourTeam')}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                        {filteredTeams.map(team => (
                            <button key={team.name} onClick={() => handleSelectTeam(team)} className="flex flex-col items-center p-4 bg-white/60 dark:bg-gray-800/50 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-blue">
                                <Emblem src={getTeamLogo(team.name)} alt={`${team.name} emblem`} className="h-16 w-16 object-contain mb-2" />
                                <span className="font-semibold text-center">{team.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            );
        case 'matchList':
        case 'todayMatches':
            const currentMatches = view === 'todayMatches' ? todayMatches : matches;
            const title = view === 'todayMatches' ? t('todayMatchesTitle') : `${t('upcomingMatchesFor')} ${selectedTeam?.name}`;

            return (
                <div className="w-full">
                    <div className="w-full text-left mb-8">
                        <div className="flex items-center gap-4 md:gap-6">
                            {selectedTeam && view === 'matchList' && <Emblem src={getTeamLogo(selectedTeam.name)} alt={`${selectedTeam.name} emblem`} className="h-16 w-16 md:h-20 md:w-20 object-contain" />}
                            <h2 className="text-2xl md:text-3xl font-semibold text-brand-deep-blue dark:text-white drop-shadow-md">{title}</h2>
                        </div>
                    </div>
                    {isLoading ? (
                        <div className="w-full">
                            <h3 className="text-xl text-center text-brand-secondary dark:text-gray-400 mb-6 animate-pulse">{t('loadingMatches')}</h3>
                            <div className="grid grid-cols-1 gap-6">{Array.from({ length: 5 }).map((_, index) => <MatchCardSkeleton key={index} />)}</div>
                        </div>
                    ) : error ? (
                        <div className="text-center p-6 bg-red-100 border border-red-400 text-red-700 rounded-lg dark:bg-red-900/50 dark:text-red-200 dark:border-red-700">
                            <p className="font-bold">{t('errorOccurred')}</p><p>{error}</p>
                        </div>
                    ) : currentMatches.length === 0 ? (
                        <div className="text-center p-6 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg dark:bg-yellow-900/50 dark:text-yellow-200 dark:border-yellow-700">
                            <p>{view === 'todayMatches' ? t('noMatchesToday') : t('noMatchesFound', { team: selectedTeam?.name || '' })}</p>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 gap-6">
                                {currentMatches.slice(0, displayedCount).map((match, index) => (
                                    <MatchCard key={`${match.homeTeam}-${match.awayTeam}-${index}`} match={match} onSelectTeam={handleSelectTeamFromCard} t={t} language={language} timezone={timezone} />
                                ))}
                            </div>
                            {currentMatches.length > displayedCount && (
                                <div className="text-center mt-8">
                                    <button onClick={() => setDisplayedCount(prev => prev + 5)} className="bg-gray-200 text-brand-deep-blue font-bold py-2 px-6 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors">
                                        {t('loadMore')}
                                    </button>
                                </div>
                            )}
                            {view === 'matchList' && matches.length > 0 && (
                                <div className="text-center mt-12">
                                    <button onClick={() => setIsExportModalOpen(true)} className="inline-flex items-center justify-center bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                        {t('addMatchesToCalendar')}
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            );
        default: return null;
    }
  }

  return (
    <div className="min-h-screen bg-brand-light-blue text-brand-deep-blue dark:bg-brand-deep-blue dark:text-gray-200 font-sans flex flex-col transition-colors duration-300">
      <Header 
        theme={theme} toggleTheme={toggleTheme} language={language} setLanguage={setLanguage} 
        timezone={timezone} setTimezone={setTimezone} t={t} onTitleClick={resetToHome}
        onBack={view !== 'competitionSelection' ? handleBackClick : undefined}
        onTodayClick={handleFetchTodayMatches}
        isSearchVisible={isSearchVisible}
        onToggleSearch={() => setIsSearchVisible(!isSearchVisible)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        currentView={view}
      />
      <main className="container mx-auto px-4 py-8 md:py-12 flex flex-col items-center flex-grow">
        <div className="w-full max-w-4xl text-center">
            {renderContent()}
        </div>
      </main>
      <Footer t={t}/>
      {isExportModalOpen && (
        <ExportModal 
            matches={matches}
            onClose={() => setIsExportModalOpen(false)}
            onDownloadICS={handleDownloadICS}
            t={t}
            language={language}
            timezone={timezone}
        />
      )}
    </div>
  );
};

export default App;