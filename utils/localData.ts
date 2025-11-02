import { Team, Competition } from '../types';

const premierLeagueTeams: Team[] = [
    { name: "Arsenal FC" }, { name: "Aston Villa" }, { name: "AFC Bournemouth" },
    { name: "Brentford FC" }, { name: "Brighton & Hove Albion" }, { name: "Chelsea FC" },
    { name: "Crystal Palace" }, { name: "Everton FC" }, { name: "Fulham FC" },
    { name: "Ipswich Town" }, { name: "Leicester City" }, { name: "Liverpool FC" },
    { name: "Manchester City" }, { name: "Manchester United" }, { name: "Newcastle United" },
    { name: "Nottingham Forest" }, { name: "Southampton FC" }, { name: "Tottenham Hotspur" },
    { name: "West Ham United" }, { name: "Wolverhampton Wanderers" },
];

const laLigaTeams: Team[] = [
    { name: "Deportivo Alavés" }, { name: "Athletic Club" }, { name: "Atlético Madrid" },
    { name: "FC Barcelona" }, { name: "Celta Vigo" }, { name: "RCD Espanyol" },
    { name: "Getafe CF" }, { name: "Girona FC" }, { name: "CD Leganés" },
    { name: "RCD Mallorca" }, { name: "CA Osasuna" }, { name: "Real Betis" },
    { name: "Real Madrid" }, { name: "Real Sociedad" }, { name: "Rayo Vallecano" },
    { name: "Sevilla FC" }, { name: "Valencia CF" }, { name: "Real Valladolid" },
    { name: "Villarreal CF" }, { name: "UD Las Palmas" },
];

const serieATeams: Team[] = [
    { name: "Atalanta BC" }, { name: "Bologna FC 1909" }, { name: "Cagliari Calcio" },
    { name: "Como 1907" }, { name: "Empoli FC" }, { name: "ACF Fiorentina" },
    { name: "Genoa CFC" }, { name: "Hellas Verona FC" }, { name: "Inter Milan" },
    { name: "Juventus FC" }, { name: "SS Lazio" }, { name: "US Lecce" },
    { name: "AC Milan" }, { name: "AC Monza" }, { name: "SSC Napoli" },
    { name: "Parma Calcio 1913" }, { name: "AS Roma" }, { name: "Torino FC" },
    { name: "Udinese Calcio" }, { name: "Venezia FC" },
];

const bundesligaTeams: Team[] = [
    { name: "FC Augsburg" }, { name: "Bayer 04 Leverkusen" }, { name: "Bayern Munich" },
    { name: "VfL Bochum" }, { name: "Borussia Dortmund" }, { name: "Borussia Mönchengladbach" },
    { name: "Eintracht Frankfurt" }, { name: "SC Freiburg" }, { name: "1. FC Heidenheim 1846" },
    { name: "TSG 1899 Hoffenheim" }, { name: "Holstein Kiel" }, { name: "1. FSV Mainz 05" },
    { name: "RB Leipzig" }, { name: "FC St. Pauli" }, { name: "VfB Stuttgart" },
    { name: "1. FC Union Berlin" }, { name: "Werder Bremen" }, { name: "VfL Wolfsburg" },
];

const ligue1Teams: Team[] = [
    { name: "Angers SCO" }, { name: "AJ Auxerre" }, { name: "Stade Brestois 29" },
    { name: "Le Havre AC" }, { name: "RC Lens" }, { name: "Lille OSC" },
    { name: "Olympique Lyonnais" }, { name: "Olympique de Marseille" }, { name: "AS Monaco FC" },
    { name: "Montpellier HSC" }, { name: "FC Nantes" }, { name: "OGC Nice" },
    { name: "Paris Saint-Germain" }, { name: "Stade de Reims" }, { name: "Stade Rennais FC" },
    { name: "AS Saint-Étienne" }, { name: "RC Strasbourg Alsace" }, { name: "Toulouse FC" },
];

const otherEuropeanTeams: Team[] = [
    { name: "PSV Eindhoven" }, { name: "Feyenoord" }, { name: "Celtic FC" },
    { name: "Rangers FC" }, { name: "SL Benfica" }, { name: "Sporting CP" },
    { name: "FC Red Bull Salzburg" }, { name: "FC Shakhtar Donetsk" }, { name: "Club Brugge KV" },
    { name: "SK Sturm Graz" },
];

const championsLeagueTeams: Team[] = [
    ...premierLeagueTeams.slice(0, 8), ...laLigaTeams.slice(0, 5), ...serieATeams.slice(0, 5), ...bundesligaTeams.slice(0, 5),
    ...ligue1Teams.filter(t => ["Paris Saint-Germain", "AS Monaco FC", "Lille OSC", "Stade Brestois 29"].includes(t.name)),
    ...otherEuropeanTeams
];

export const competitions: Competition[] = [
    { name: "UEFA Champions League", teams: [...new Map(championsLeagueTeams.map(item => [item['name'], item])).values()] },
    { name: "Premier League", teams: premierLeagueTeams },
    { name: "La Liga", teams: laLigaTeams },
    { name: "Serie A", teams: serieATeams },
    { name: "Bundesliga", teams: bundesligaTeams },
    { name: "Ligue 1", teams: ligue1Teams }
];

const allTeamsData = competitions.flatMap(c => c.teams).concat(otherEuropeanTeams);
export const teams = [...new Map(allTeamsData.map(item => [item['name'], item])).values()];

export const translations: Record<string, Record<string, string>> = {
  en: {
    appTitle: "Tez Score",
    chooseCompetition: "Choose Your Competition",
    selectCompetitionPrompt: "Select a league or competition to see participating teams.",
    chooseYourTeam: "Choose Your Team",
    upcomingMatchesFor: "Upcoming Matches for",
    errorOccurred: "An error occurred:",
    genericError: "Could not load match data. Please try again later.",
    noMatchesFound: "No upcoming matches found for {team} at this moment.",
    addMatchesToCalendar: "Add Matches to Calendar",
    loadMore: "Load More",
    developedBy: "Application developed by Migorsky Suren",
    allRightsReserved: "Tez Score. All rights reserved.",
    dataSource: "Data sourced via Gemini API with Google Search grounding.",
    vs: "VS",
    add: "Add",
    addToCalendar: "Add to Calendar",
    exportModalTitle: "Add Matches to Calendar",
    exportMethod1: "Method 1: Import All at Once (Recommended)",
    exportMethod1Desc: "Click the button below to download a single (.ics) file containing all matches. Then, import this file into your calendar app.",
    downloadICS: "Download .ics File",
    exportMethod2: "Method 2: Add One-by-One to Google Calendar",
    exportMethod2Desc: "Click a match to open and save it directly in your Google Calendar.",
    reminderDescription: "Match Reminder",
    win: "1", draw: "X", win2: "2",
    selectTimezone: "Select Timezone",
    back: "Back",
    today: "Today",
    search: "Search",
    searchCompetitions: "Search competitions...",
    searchTeams: "Search teams...",
    todayMatchesTitle: "Today's Matches",
    noMatchesToday: "No matches scheduled for today.",
    toggleTheme: "Toggle Theme",
    loadingMatches: "Loading matches..."
  },
  ru: {
    appTitle: "Tez Score",
    chooseCompetition: "Выберите соревнование",
    selectCompetitionPrompt: "Выберите лигу, чтобы увидеть команды.",
    chooseYourTeam: "Выберите свою команду",
    upcomingMatchesFor: "Предстоящие матчи для",
    errorOccurred: "Произошла ошибка:",
    genericError: "Не удалось загрузить данные о матчах. Пожалуйста, повторите попытку позже.",
    noMatchesFound: "Предстоящих матчей для {team} не найдено.",
    addMatchesToCalendar: "Добавить матчи в календарь",
    loadMore: "Загрузить еще",
    developedBy: "Приложение разработано Мигорским Суреном",
    allRightsReserved: "Tez Score. Все права защищены.",
    dataSource: "Данные получены через Gemini API с использованием Google Search.",
    vs: "VS",
    add: "Добавить",
    addToCalendar: "Добавить в календарь",
    exportModalTitle: "Добавить матчи в календарь",
    exportMethod1: "Способ 1: Импорт всех сразу",
    exportMethod1Desc: "Нажмите кнопку ниже, чтобы скачать файл (.ics) со всеми матчами для импорта в ваш календарь.",
    downloadICS: "Скачать файл .ics",
    exportMethod2: "Способ 2: Добавить по одному",
    exportMethod2Desc: "Нажмите на матч, чтобы сохранить его в Google Calendar.",
    reminderDescription: "Напоминание о матче",
    win: "П1", draw: "X", win2: "П2",
    selectTimezone: "Выберите часовой пояс",
    back: "Назад",
    today: "Сегодня",
    search: "Поиск",
    searchCompetitions: "Поиск соревнований...",
    searchTeams: "Поиск команд...",
    todayMatchesTitle: "Сегодняшние матчи",
    noMatchesToday: "На сегодня матчей не запланировано.",
    toggleTheme: "Переключить тему",
    loadingMatches: "Загрузка матчей..."
  },
  uz: {
    appTitle: "Tez Score",
    chooseCompetition: "Musobaqani tanlang",
    selectCompetitionPrompt: "Jamoalarni ko'rish uchun ligani tanlang.",
    chooseYourTeam: "Jamoangizni tanlang",
    upcomingMatchesFor: "uchun bo'lajak o'yinlar",
    errorOccurred: "Xatolik yuz berdi:",
    genericError: "O'yin ma'lumotlarini yuklab bo'lmadi. Iltimos, keyinroq qayta urining.",
    noMatchesFound: "{team} uchun bo'lajak o'yinlar topilmadi.",
    addMatchesToCalendar: "O'yinlarni taqvimga qo'shish",
    loadMore: "Ko'proq yuklash",
    developedBy: "Dastur Migorskiy Suren tomonidan ishlab chiqilgan",
    allRightsReserved: "Tez Score. Barcha huquqlar himoyalangan.",
    dataSource: "Ma'lumotlar Gemini API va Google Search orqali olingan.",
    vs: "vs",
    add: "Qo'shish",
    addToCalendar: "Taqvimga qo'shish",
    exportModalTitle: "O'yinlarni taqvimga qo'shish",
    exportMethod1: "1-usul: Hammasini import qilish",
    exportMethod1Desc: "Barcha oʻyinlar bilan (.ics) faylni yuklab olish uchun quyidagi tugmani bosing va uni taqvimingizga import qiling.",
    downloadICS: ".ics faylini yuklab olish",
    exportMethod2: "2-usul: Birma-bir qo'shish",
    exportMethod2Desc: "O'yinni Google Taqvimingizda saqlash uchun ustiga bosing.",
    reminderDescription: "O'yin haqida eslatma",
    win: "G'1", draw: "X", win2: "G'2",
    selectTimezone: "Vaqt mintaqasini tanlang",
    back: "Orqaga",
    today: "Bugun",
    search: "Qidiruv",
    searchCompetitions: "Musobaqalarni qidirish...",
    searchTeams: "Jamoalarni qidirish...",
    todayMatchesTitle: "Bugungi o'yinlar",
    noMatchesToday: "Bugun uchun rejalashtirilgan o'yinlar yo'q.",
    toggleTheme: "Mavzuni o'zgartirish",
    loadingMatches: "Oʻyinlar yuklanmoqda..."
  }
};