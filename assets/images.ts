const competitionLogos: Record<string, string> = {
    "UEFA Champions League": "https://e7.pngegg.com/pngimages/146/299/png-clipart-uefa-champions-league-logo-uefa-champions-league-2017-18-uefa-champions-league-final-uefa-super-cup-uefa-europa-league-football-emblem-label-thumbnail.png",
    "Premier League": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png",
    "La Liga": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/1024px-LaLiga_Santander_logo_%28stacked%29.svg.png",
    "Serie A": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Serie_A_logo_%282019%29.svg/1200px-Serie_A_logo_%282019%29.svg.png",
    "Bundesliga": "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png",
    "Ligue 1": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Ligue_1_Uber_Eats_logo.svg/1200px-Ligue_1_Uber_Eats_logo.svg.png"
};

const teamLogos: Record<string, string> = {
    // Premier League
    "Arsenal FC": "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png",
    "Aston Villa": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Aston_Villa_FC_crest_%282023%29.svg/1200px-Aston_Villa_FC_crest_%282023%29.svg.png",
    "AFC Bournemouth": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/AFC_Bournemouth_%282013%29.svg/1200px-AFC_Bournemouth_%282013%29.svg.png",
    "Brentford FC": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Brentford_FC_crest.svg/1200px-Brentford_FC_crest.svg.png",
    "Brighton & Hove Albion": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/1200px-Brighton_%26_Hove_Albion_logo.svg.png",
    "Chelsea FC": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png",
    "Crystal Palace": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Crystal_Palace_FC_logo_%282022%29.svg/1200px-Crystal_Palace_FC_logo_%282022%29.svg.png",
    "Everton FC": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Everton_FC_logo.svg/1200px-Everton_FC_logo.svg.png",
    "Fulham FC": "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Fulham_FC_%28shield%29.svg/1200px-Fulham_FC_%28shield%29.svg.png",
    "Ipswich Town": "https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Ipswich_Town.svg/1200px-Ipswich_Town.svg.png",
    "Leicester City": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Leicester_City_crest.svg/1200px-Leicester_City_crest.svg.png",
    "Liverpool FC": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png",
    "Manchester City": "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png",
    "Manchester United": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png",
    "Newcastle United": "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/1200px-Newcastle_United_Logo.svg.png",
    "Nottingham Forest": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Nottingham_Forest_F.C._logo.svg/1200px-Nottingham_Forest_F.C._logo.svg.png",
    "Southampton FC": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Southampton_FC.svg/1200px-Southampton_FC.svg.png",
    "Tottenham Hotspur": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/1200px-Tottenham_Hotspur.svg.png",
    "West Ham United": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/West_Ham_United_FC_logo.svg/1200px-West_Ham_United_FC_logo.svg.png",
    "Wolverhampton Wanderers": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Wolverhampton_Wanderers.svg/1200px-Wolverhampton_Wanderers.svg.png",
    // La Liga
    "Deportivo Alavés": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Deportivo_Alaves_logo_%282020%29.svg/1200px-Deportivo_Alaves_logo_%282020%29.svg.png",
    "Athletic Club": "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Club_Athletic_Bilbao_logo.svg/1200px-Club_Athletic_Bilbao_logo.svg.png",
    "Atlético Madrid": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png",
    "FC Barcelona": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
    "Celta Vigo": "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/RC_Celta_de_Vigo_logo.svg/1200px-RC_Celta_de_Vigo_logo.svg.png",
    "RCD Espanyol": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/RCD_Espanyol_logo.svg/1200px-RCD_Espanyol_logo.svg.png",
    "Getafe CF": "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Getafe_CF_logo.svg/1200px-Getafe_CF_logo.svg.png",
    "Girona FC": "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Girona_FC_logo.svg/1200px-Girona_FC_logo.svg.png",
    "CD Leganés": "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Club_Deportivo_Legan%C3%A9s_logo.svg/1200px-Club_Deportivo_Legan%C3%A9s_logo.svg.png",
    "RCD Mallorca": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Rcd_mallorca.svg/1200px-Rcd_mallorca.svg.png",
    "CA Osasuna": "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Osasuna_logo.svg/1200px-Osasuna_logo.svg.png",
    "Real Betis": "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Real_betis_logo.svg/1200px-Real_betis_logo.svg.png",
    "Real Madrid": "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png",
    "Real Sociedad": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Real_Sociedad_logo.svg/1200px-Real_Sociedad_logo.svg.png",
    "Rayo Vallecano": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Rayo_Vallecano_logo.svg/1200px-Rayo_Vallecano_logo.svg.png",
    "Sevilla FC": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/1200px-Sevilla_FC_logo.svg.png",
    "Valencia CF": "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Valencia_CF_logo.svg/1200px-Valencia_CF_logo.svg.png",
    "Real Valladolid": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Real_Valladolid_Crest_%282022%29.svg/1200px-Real_Valladolid_Crest_%282022%29.svg.png",
    "Villarreal CF": "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Villarreal_CF_logo.svg/1200px-Villarreal_CF_logo.svg.png",
    "UD Las Palmas": "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/UD_Las_Palmas_logo_%282018%29.svg/1200px-UD_Las_Palmas_logo_%282018%29.svg.png",
    // Serie A
    "Atalanta BC": "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Atalanta_BC_logo.svg/1200px-Atalanta_BC_logo.svg.png",
    "Bologna FC 1909": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Bologna_F.C._1909_logo.svg/1200px-Bologna_F.C._1909_logo.svg.png",
    "Cagliari Calcio": "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Cagliari_Calcio_1920.svg/1200px-Cagliari_Calcio_1920.svg.png",
    "Como 1907": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Como_1907_logo.svg/1200px-Como_1907_logo.svg.png",
    "Empoli FC": "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Empoli_F.C._logo.svg/1200px-Empoli_F.C._logo.svg.png",
    "ACF Fiorentina": "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/ACF_Fiorentina_2.svg/1200px-ACF_Fiorentina_2.svg.png",
    "Genoa CFC": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Genoa_C.F.C._logo.svg/1200px-Genoa_C.F.C._logo.svg.png",
    "Hellas Verona FC": "https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Hellas_Verona_FC_logo_%282020%29.svg/1200px-Hellas_Verona_FC_logo_%282020%29.svg.png",
    "Inter Milan": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/1200px-FC_Internazionale_Milano_2021.svg.png",
    "Juventus FC": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Juventus_FC_2017_logo.svg/1200px-Juventus_FC_2017_logo.svg.png",
    "SS Lazio": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/SS_Lazio_badge.svg/1200px-SS_Lazio_badge.svg.png",
    "US Lecce": "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/US_Lecce_logo.svg/1200px-US_Lecce_logo.svg.png",
    "AC Milan": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1200px-Logo_of_AC_Milan.svg.png",
    "AC Monza": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/AC_Monza_logo.svg/1200px-AC_Monza_logo.svg.png",
    "SSC Napoli": "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/S.S.C._Napoli_logo.svg/1200px-S.S.C._Napoli_logo.svg.png",
    "Parma Calcio 1913": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Parma_Calcio_1913_logo.svg/1200px-Parma_Calcio_1913_logo.svg.png",
    "AS Roma": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/AS_Roma_logo_%282017%29.svg/1200px-AS_Roma_logo_%282017%29.svg.png",
    "Torino FC": "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Torino_FC_Logo.svg/1200px-Torino_FC_Logo.svg.png",
    "Udinese Calcio": "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Udinese_Calcio_logo.svg/1200px-Udinese_Calcio_logo.svg.png",
    "Venezia FC": "https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Venezia_FC_logo.svg/1200px-Venezia_FC_logo.svg.png",
    // Bundesliga
    "FC Augsburg": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/FC_Augsburg_logo.svg/1200px-FC_Augsburg_logo.svg.png",
    "Bayer 04 Leverkusen": "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Bayer_04_Leverkusen_logo.svg/1200px-Bayer_04_Leverkusen_logo.svg.png",
    "Bayern Munich": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
    "VfL Bochum": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VfL_Bochum_logo.svg/1200px-VfL_Bochum_logo.svg.png",
    "Borussia Dortmund": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png",
    "Borussia Mönchengladbach": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Borussia_M%C3%B6nchengladbach_logo.svg/1200px-Borussia_M%C3%B6nchengladbach_logo.svg.png",
    "Eintracht Frankfurt": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Eintracht_Frankfurt_Logo.svg/1200px-Eintracht_Frankfurt_Logo.svg.png",
    "SC Freiburg": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/SC_Freiburg_logo.svg/1200px-SC_Freiburg_logo.svg.png",
    "1. FC Heidenheim 1846": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/1._FC_Heidenheim_1846_logo.svg/1200px-1._FC_Heidenheim_1846_logo.svg.png",
    "TSG 1899 Hoffenheim": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/TSG_1899_Hoffenheim_logo.svg/1200px-TSG_1899_Hoffenheim_logo.svg.png",
    "Holstein Kiel": "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Holstein_Kiel_logo.svg/1200px-Holstein_Kiel_logo.svg.png",
    "1. FSV Mainz 05": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Logo_Mainz_05.svg/1200px-Logo_Mainz_05.svg.png",
    "RB Leipzig": "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/RB_Leipzig_2014_logo.svg/1200px-RB_Leipzig_2014_logo.svg.png",
    "FC St. Pauli": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/FC_St._Pauli-Logo.svg/1200px-FC_St._Pauli-Logo.svg.png",
    "VfB Stuttgart": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/VfB_Stuttgart_1893_Logo.svg/1200px-VfB_Stuttgart_1893_Logo.svg.png",
    "1. FC Union Berlin": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/1._FC_Union_Berlin_logo.svg/1200px-1._FC_Union_Berlin_logo.svg.png",
    "Werder Bremen": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SV-Werder-Bremen-Logo.svg/1200px-SV-Werder-Bremen-Logo.svg.png",
    "VfL Wolfsburg": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VfL_Wolfsburg_Logo.svg/1200px-VfL_Wolfsburg_Logo.svg.png",
    // Ligue 1
    "Angers SCO": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Angers_SCO_logo.svg/1200px-Angers_SCO_logo.svg.png",
    "AJ Auxerre": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/AJ_Auxerre_logo.svg/1200px-AJ_Auxerre_logo.svg.png",
    "Stade Brestois 29": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Stade_Brestois_29_logo.svg/1200px-Stade_Brestois_29_logo.svg.png",
    "Le Havre AC": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Le_Havre_AC_logo.svg/1200px-Le_Havre_AC_logo.svg.png",
    "RC Lens": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/RC_Lens_logo.svg/1200px-RC_Lens_logo.svg.png",
    "Lille OSC": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Lille_OSC_logo.svg/1200px-Lille_OSC_logo.svg.png",
    "Olympique Lyonnais": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Olympique_Lyonnais.svg/1200px-Olympique_Lyonnais.svg.png",
    "Olympique de Marseille": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Olympique_de_Marseille_logo.svg/1200px-Olympique_de_Marseille_logo.svg.png",
    "AS Monaco FC": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/AS_Monaco_FC.svg/1200px-AS_Monaco_FC.svg.png",
    "Montpellier HSC": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Montpellier_HSC_logo.svg/1200px-Montpellier_HSC_logo.svg.png",
    "FC Nantes": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/FC_Nantes_logo.svg/1200px-FC_Nantes_logo.svg.png",
    "OGC Nice": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/OGC_Nice_logo.svg/1200px-OGC_Nice_logo.svg.png",
    "Paris Saint-Germain": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png",
    "Stade de Reims": "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Stade_de_Reims_logo.svg/1200px-Stade_de_Reims_logo.svg.png",
    "Stade Rennais FC": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Stade_Rennais_F.C..svg/1200px-Stade_Rennais_F.C..svg.png",
    "AS Saint-Étienne": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Logo_AS_Saint-%C3%89tienne.svg/1200px-Logo_AS_Saint-%C3%89tienne.svg.png",
    "RC Strasbourg Alsace": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/RC_Strasbourg_Alsace_logo.svg/1200px-RC_Strasbourg_Alsace_logo.svg.png",
    "Toulouse FC": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Toulouse_FC_logo.svg/1200px-Toulouse_FC_logo.svg.png",
    // Other European Teams
    "PSV Eindhoven": "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/PSV_Eindhoven_logo.svg/1200px-PSV_Eindhoven_logo.svg.png",
    "Feyenoord": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Feyenoord_logo.svg/1200px-Feyenoord_logo.svg.png",
    "Celtic FC": "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Celtic_FC.svg/1200px-Celtic_FC.svg.png",
    "Rangers FC": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Rangers_F.C._logo.svg/1200px-Rangers_F.C._logo.svg.png",
    "SL Benfica": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/SL_Benfica_logo.svg/1200px-SL_Benfica_logo.svg.png",
    "Sporting CP": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Sporting_Clube_de_Portugal.svg/1200px-Sporting_Clube_de_Portugal.svg.png",
    "FC Red Bull Salzburg": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/FC_Red_Bull_Salzburg_logo.svg/1200px-FC_Red_Bull_Salzburg_logo.svg.png",
    "FC Shakhtar Donetsk": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/FC_Shakhtar_Donetsk.svg/1200px-FC_Shakhtar_Donetsk.svg.png",
    "Club Brugge KV": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Club_Brugge_KV_logo.svg/1200px-Club_Brugge_KV_logo.svg.png",
    "SK Sturm Graz": "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/SK_Sturm_Graz_logo.svg/1200px-SK_Sturm_Graz_logo.svg.png",
    "Kasımpaşa S.K.": "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Kas%C4%B1mpa%C5%9Fa_S.K._logo.svg/1200px-Kas%C4%B1mpa%C5%9Fa_S.K._logo.svg.png",
};

const competitionNameAliases: Record<string, string> = {
    "Champions League": "UEFA Champions League",
    "LALIGA EA SPORTS": "La Liga",
};

const teamNameAliases: Record<string, string> = {
    'Arsenal': 'Arsenal FC', 'Aston Villa FC': 'Aston Villa', 'Bournemouth': 'AFC Bournemouth',
    'Brentford': 'Brentford FC', 'Brighton': 'Brighton & Hove Albion', 'Chelsea': 'Chelsea FC',
    'Crystal Palace FC': 'Crystal Palace', 'Everton': 'Everton FC', 'Fulham': 'Fulham FC',
    'Liverpool': 'Liverpool FC', 'Man City': 'Manchester City', 'Manchester City FC': 'Manchester City',
    'Man United': 'Manchester United', 'Manchester United FC': 'Manchester United', 'Newcastle': 'Newcastle United',
    'Nottingham Forest FC': 'Nottingham Forest', 'Southampton': 'Southampton FC', 'Tottenham': 'Tottenham Hotspur',
    'West Ham': 'West Ham United', 'Wolves': 'Wolverhampton Wanderers', 'Alavés': 'Deportivo Alavés',
    'Athletic Bilbao': 'Athletic Club', 'Atlético de Madrid': 'Atlético Madrid', 'Barcelona': 'FC Barcelona',
    'Celta de Vigo': 'Celta Vigo', 'Espanyol': 'RCD Espanyol', 'Getafe': 'Getafe CF',
    'Girona': 'Girona FC', 'Leganés': 'CD Leganés', 'Mallorca': 'RCD Mallorca',
    'Osasuna': 'CA Osasuna', 'Real Betis Balompié': 'Real Betis', 'Real Madrid CF': 'Real Madrid',
    'Sevilla': 'Sevilla FC', 'Valencia': 'Valencia CF', 'Valladolid': 'Real Valladolid',
    'Villarreal': 'Villarreal CF', 'Las Palmas': 'UD Las Palmas', 'Atalanta': 'Atalanta BC',
    'Bologna': 'Bologna FC 1909', 'Cagliari': 'Cagliari Calcio', 'Como': 'Como 1907',
    'Empoli': 'Empoli FC', 'Fiorentina': 'ACF Fiorentina', 'Genoa': 'Genoa CFC',
    'Verona': 'Hellas Verona FC', 'Inter': 'Inter Milan', 'Internazionale': 'Inter Milan',
    'Juventus': 'Juventus FC', 'Lazio': 'SS Lazio', 'Lecce': 'US Lecce',
    'Milan': 'AC Milan', 'Monza': 'AC Monza', 'Napoli': 'SSC Napoli',
    'Parma': 'Parma Calcio 1913', 'Roma': 'AS Roma', 'Torino': 'Torino FC',
    'Udinese': 'Udinese Calcio', 'Venezia': 'Venezia FC', 'Augsburg': 'FC Augsburg',
    'Leverkusen': 'Bayer 04 Leverkusen', 'Bayern': 'Bayern Munich', 'Bochum': 'VfL Bochum',
    'Dortmund': 'Borussia Dortmund', 'Mönchengladbach': 'Borussia Mönchengladbach', 'Frankfurt': 'Eintracht Frankfurt',
    'Freiburg': 'SC Freiburg', 'Heidenheim': '1. FC Heidenheim 1846', 'Hoffenheim': 'TSG 1899 Hoffenheim',
    'Mainz': '1. FSV Mainz 05', 'Leipzig': 'RB Leipzig', 'Stuttgart': 'VfB Stuttgart',
    'Union Berlin': '1. FC Union Berlin', 'Bremen': 'Werder Bremen', 'Wolfsburg': 'VfL Wolfsburg',
    'Angers': 'Angers SCO', 'Auxerre': 'AJ Auxerre', 'Brest': 'Stade Brestois 29',
    'Le Havre': 'Le Havre AC', 'Lens': 'RC Lens', 'Lille': 'Lille OSC',
    'Lyon': 'Olympique Lyonnais', 'Marseille': 'Olympique de Marseille', 'Monaco': 'AS Monaco FC',
    'Montpellier': 'Montpellier HSC', 'Nantes': 'FC Nantes', 'Nice': 'OGC Nice',
    'PSG': 'Paris Saint-Germain', 'Reims': 'Stade de Reims', 'Rennes': 'Stade Rennais FC',
    'Saint-Étienne': 'AS Saint-Étienne', 'Strasbourg': 'RC Strasbourg Alsace', 'Toulouse': 'Toulouse FC',
    'PSV': 'PSV Eindhoven', 'Celtic': 'Celtic FC', 'Rangers': 'Rangers FC',
    'Benfica': 'SL Benfica', 'Sporting': 'Sporting CP', 'Salzburg': 'FC Red Bull Salzburg',
    'Shakhtar': 'FC Shakhtar Donetsk', 'Club Brugge': 'Club Brugge KV', 'Sturm Graz': 'SK Sturm Graz',
    'Kasımpaşa': 'Kasımpaşa S.K.',
};

export const getTeamLogo = (teamName: string): string | undefined => {
    if (teamLogos[teamName]) {
      return teamLogos[teamName];
    }
    const alias = teamNameAliases[teamName];
    if (alias && teamLogos[alias]) {
      return teamLogos[alias];
    }
    return undefined; 
};

export const getCompetitionLogo = (competitionName: string): string | undefined => {
    if (competitionLogos[competitionName]) {
        return competitionLogos[competitionName];
    }
    const alias = competitionNameAliases[competitionName];
    if (alias && competitionLogos[alias]) {
        return competitionLogos[alias];
    }
    return undefined;
};