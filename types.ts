export interface Odds {
  homeWin: string | number;
  draw: string | number;
  awayWin: string | number;
}

export interface Team {
  name: string;
}

export interface Competition {
  name: string;
  teams: Team[];
}

export interface Match {
  homeTeam: string;
  awayTeam: string;
  competition: string;
  dateTimeUTC: string;
  venue: string;
  odds: Odds | null;
}