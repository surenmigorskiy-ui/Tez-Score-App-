import React from 'react';
import { Match } from '../types';
import { generateGoogleCalendarUrl } from '../utils/calendar';
import { getTeamLogo, getCompetitionLogo } from '../assets/images';
import Emblem from './Emblem';

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

interface MatchCardProps {
  match: Match;
  t: (key: string, replacements?: Record<string, string>) => string;
  language: string;
  timezone: string;
  onSelectTeam: (teamName: string) => void;
}

const MatchCard: React.FC<MatchCardProps> = ({ match, t, language, timezone, onSelectTeam }) => {
  const calendarUrl = generateGoogleCalendarUrl(match, {
    vs: t('vs'), match: 'Match', competition: 'Competition', venue: 'Venue'
  });
  const matchDate = new Date(match.dateTimeUTC);
  const locale = language === 'uz' ? 'uz-UZ' : language === 'ru' ? 'ru-RU' : 'en-GB';

  const formattedDate = matchDate.toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: timezone });
  const tzDisplay = timezone.split('/').pop()?.replace('_', ' ') || timezone;
  const formattedTime = `${matchDate.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', timeZone: timezone, hour12: false })} (${tzDisplay})`;
  
  const { homeTeam, awayTeam } = match;
  const competitionLogoSrc = getCompetitionLogo(match.competition);
  const homeTeamLogoSrc = getTeamLogo(homeTeam);
  const awayTeamLogoSrc = getTeamLogo(awayTeam);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition-all transform hover:-translate-y-1 duration-300 ease-in-out dark:bg-gray-800/60 dark:shadow-brand-blue/10">
      <div className="p-5">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4">
            <div className="flex-grow w-full">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-blue uppercase tracking-wider mb-2">
                    <Emblem src={competitionLogoSrc} alt={`${match.competition} emblem`} className="h-5 w-5 object-contain" />
                    <span>{match.competition}</span>
                </div>

                <div className="flex items-center justify-between gap-2 text-xl md:text-2xl font-bold text-brand-deep-blue dark:text-gray-100 mb-3">
                    <div className="flex items-center text-center gap-3 w-2/5 cursor-pointer group" onClick={() => onSelectTeam(homeTeam)}>
                        <span className="group-hover:text-brand-blue transition-colors flex-1 text-right">{homeTeam}</span>
                        <Emblem src={homeTeamLogoSrc} alt={`${homeTeam} emblem`} className="h-14 w-14 object-contain" />
                    </div>
                    <span className="text-gray-400 font-light text-2xl">{t('vs')}</span>
                    <div className="flex items-center text-center gap-3 w-2/5 cursor-pointer group" onClick={() => onSelectTeam(awayTeam)}>
                        <Emblem src={awayTeamLogoSrc} alt={`${awayTeam} emblem`} className="h-14 w-14 object-contain" />
                        <span className="group-hover:text-brand-blue transition-colors flex-1 text-left">{awayTeam}</span>
                    </div>
                </div>

                <div className="text-brand-secondary dark:text-gray-300 space-y-1 text-xs md:text-sm">
                    <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg><span className="capitalize">{formattedDate}</span></p>
                    <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.415L11 9.586V6z" clipRule="evenodd" /></svg><span>{formattedTime}</span></p>
                    <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg><span>{match.venue}</span></p>
                </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0 md:pl-4">
                <a href={calendarUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-full md:w-auto justify-center items-center bg-brand-blue text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-white hover:text-brand-blue border-2 border-transparent hover:border-brand-blue transition-colors duration-300 text-sm">
                    <CalendarIcon />{t('addToCalendar')}
                </a>
            </div>
        </div>
        {match.odds && (
            <div className="mt-4 pt-4 border-t border-black/10 dark:border-white/10">
                <div className="flex justify-around items-center text-center text-sm">
                    <div className="flex-1"><span className="text-xs text-brand-secondary dark:text-gray-400 font-bold">{t('win')}</span><p className="font-bold text-lg text-brand-deep-blue dark:text-white">{match.odds.homeWin}</p></div>
                    <div className="border-l border-gray-300 dark:border-gray-600 h-8 mx-2"></div>
                    <div className="flex-1"><span className="text-xs text-brand-secondary dark:text-gray-400 font-bold">{t('draw')}</span><p className="font-bold text-lg text-brand-deep-blue dark:text-white">{match.odds.draw}</p></div>
                    <div className="border-l border-gray-300 dark:border-gray-600 h-8 mx-2"></div>
                    <div className="flex-1"><span className="text-xs text-brand-secondary dark:text-gray-400 font-bold">{t('win2')}</span><p className="font-bold text-lg text-brand-deep-blue dark:text-white">{match.odds.awayWin}</p></div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default MatchCard;