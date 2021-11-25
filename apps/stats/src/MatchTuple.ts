import { MatchResult } from "./MatchResult";

export type MatchTuple = [
  date: Date,
  HomeTeam: string,
  AwayTeam: string,
  HomeScore: number,
  AwayScore: number,
  WinningTeam: MatchResult,
  ManOfTheMatch: string
];
