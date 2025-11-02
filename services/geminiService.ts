import { GoogleGenAI } from "@google/genai";
import { Match } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

async function parseGeminiResponse(responseText: string): Promise<Match[]> {
    let jsonText = responseText.trim();
    const jsonMatch = jsonText.match(/```json\n([\s\S]*?)\n```/);
    if (jsonMatch && jsonMatch[1]) {
        jsonText = jsonMatch[1];
    }
    try {
        const parsedData = JSON.parse(jsonText);
        return Array.isArray(parsedData) ? parsedData : [parsedData];
    } catch (parseError) {
         console.error("Failed to parse JSON response:", jsonText);
         throw new Error("Received invalid data format from the API.");
    }
}

async function fetchMatchesWithPrompt(prompt: string): Promise<Match[]> {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                systemInstruction: "You are an expert sports data API. Your only task is to find and provide structured data about football matches in the exact JSON format requested. You must return only the raw JSON data inside a markdown block, without any wrapper or extra text.",
                tools: [{ googleSearch: {} }],
                temperature: 0.1,
            },
        });
        
        const matchesData = await parseGeminiResponse(response.text);
        return matchesData.sort((a, b) => new Date(a.dateTimeUTC).getTime() - new Date(b.dateTimeUTC).getTime());
    } catch (error) {
        console.error("Error fetching matches from Gemini API:", error);
        if (error instanceof Error && error.message.includes("invalid data format")) {
             throw error;
        }
        throw new Error("Could not retrieve match data from the external service.");
    }
}

export async function fetchUpcomingMatches(teamName: string): Promise<Match[]> {
    const prompt = `Using Google Search, find the next 15 upcoming official matches for the ${teamName} men's first team across all competitions. Try sourcing information from reliable sports sites like ESPN or BBC Sport.

Return the data *only* as a valid JSON array of objects inside a markdown block. Each object must have these properties:
- "homeTeam": string (The name of the home team.)
- "awayTeam": string (The name of the away team.)
- "competition": string (The name of the competition, e.g., Premier League.)
- "dateTimeUTC": string (The exact date and time of the match in UTC, formatted as a valid ISO 8601 string.)
- "venue": string (The name of the stadium or venue.)
- "odds": an object with number or string properties for "homeWin", "draw", "awayWin". It is absolutely crucial to find these betting odds. Search multiple reliable sources if necessary. For example: "odds": {"homeWin": 2.5, "draw": "3.0", "awayWin": 2.8}. If, after a thorough search, odds are truly unavailable, and only in that case, return null for this property.`;
    return fetchMatchesWithPrompt(prompt);
}

export async function fetchTodayMatches(): Promise<Match[]> {
    const specificDate = '2025-11-02';
    const prompt = `Using Google Search, find all official men's first team matches scheduled for the date ${specificDate} (UTC) across the top 5 European leagues (Premier League, La Liga, Serie A, Bundesliga, Ligue 1) and the UEFA Champions League.

Return the data *only* as a valid JSON array of objects inside a markdown block. Each object must have these properties:
- "homeTeam": string (The name of the home team.)
- "awayTeam": string (The name of the away team.)
- "competition": string (The name of the competition.)
- "dateTimeUTC": string (The exact date and time of the match in UTC, formatted as a valid ISO 8601 string.)
- "venue": string (The name of the stadium or venue.)
- "odds": an object with number or string properties for "homeWin", "draw", "awayWin". It is absolutely crucial to find these betting odds. Search multiple reliable sources. For example: "odds": {"homeWin": 1.9, "draw": "3.5", "awayWin": 4.0}. If, after a thorough search, odds are truly unavailable, return null.`;
    return fetchMatchesWithPrompt(prompt);
}