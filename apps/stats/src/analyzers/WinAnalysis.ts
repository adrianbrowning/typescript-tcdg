import { iAnalyzer } from "../Summary";
import { MatchTuple } from "../MatchTuple";
import { MatchResult } from "../MatchResult";

export default class WinAnalysis implements iAnalyzer {
  constructor(public team: string) {}

  run(matches: MatchTuple[]): string {
    let wins = 0;
    for (let match of matches) {
      if (match[1] == this.team && match[5] === MatchResult.HOME) wins++;
      if (match[2] == this.team && match[5] === MatchResult.AWAY) wins++;
    }
    return `${this.team} won ${wins} games!`;
  }
}
