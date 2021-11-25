import { MatchTuple } from "./MatchTuple";
import HTMLReport from "./reporters/HTMLReport";
import WinAnalysis from "./analyzers/WinAnalysis";

export interface iAnalyzer {
  run(matches: MatchTuple[]): string;
}

export interface iOutputTarget {
  print(report: string): void;
}

export default class Summary {
  constructor(public analyzer: iAnalyzer, public outputTarget: iOutputTarget) {}

  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinAnalysis(team), new HTMLReport());
  }

  buildAndPrintReport(matches: MatchTuple[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
