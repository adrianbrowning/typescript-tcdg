import MatchReader from "./MatchReader";
import Summary from "./Summary";
import WinAnalysis from "./analyzers/WinAnalysis";
import HTMLReport from "./reporters/HTMLReport";

/* OLD
//const csvFileReader = new CsvFileReader("football.csv");
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
*/

//New
const matchReader = MatchReader.fromCSV("football.csv");
matchReader.load();

/* OLD
// prettier-ignore
const summary = new Summary(
    new WinAnalysis("Man United"),
    new HTMLReport()
);
// prettier-resume
summary.buildAndPrintReport(matchReader.matches);
*/

// NEW
const summary = Summary.winsAnalysisWithHtmlReport("Wolves");
summary.buildAndPrintReport(matchReader.matches);
