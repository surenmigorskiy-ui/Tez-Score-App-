import { Match } from '../types';

interface ICSTranslations {
  vs: string;
  match: string;
  competition: string;
  venue: string;
  reminderDescription: string;
}

const formatDateToICS = (date: Date): string => {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
};

export const generateICSFileContent = (matches: Match[], t: ICSTranslations): string => {
  let icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//MatchCalendar//EN',
  ];

  matches.forEach((match, index) => {
    const startDate = new Date(match.dateTimeUTC);
    // Assuming a match lasts about 2 hours
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000); 
    const now = new Date();

    const event = [
      'BEGIN:VEVENT',
      `UID:${startDate.getTime()}-${match.homeTeam}-${index}@matchcalendar.app`,
      `DTSTAMP:${formatDateToICS(now)}`,
      `DTSTART:${formatDateToICS(startDate)}`,
      `DTEND:${formatDateToICS(endDate)}`,
      `SUMMARY:${match.homeTeam} ${t.vs} ${match.awayTeam} (${t.match})`,
      `LOCATION:${match.venue}`,
      `DESCRIPTION:${t.competition}: ${match.competition}\\n${t.venue}: ${match.venue}`,
      'BEGIN:VALARM',
      'TRIGGER:-PT1H', // 1 hour before
      'ACTION:DISPLAY',
      `DESCRIPTION:${t.reminderDescription}: ${match.homeTeam} ${t.vs} ${match.awayTeam}`,
      'END:VALARM',
      'END:VEVENT'
    ];
    icsContent.push(...event);
  });

  icsContent.push('END:VCALENDAR');
  return icsContent.join('\r\n');
};

export const generateGoogleCalendarUrl = (match: Match, t: { vs: string; match: string; competition: string; venue: string; }): string => {
  const startDate = new Date(match.dateTimeUTC);
  const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);

  const formatDate = (date: Date) => date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  const details = `${t.competition}: ${match.competition}\n${t.venue}: ${match.venue}`;
  
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${match.homeTeam} ${t.vs} ${match.awayTeam}`,
    dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
    details: details,
    location: match.venue,
    trp: 'true',
  });

  return `https://www.google.com/calendar/render?${params.toString()}`;
};
