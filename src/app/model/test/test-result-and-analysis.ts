import {TestResultOutput} from './test-result-output';
import {UserAnswerAnalysisOutput} from '../question/user-answer-analysis-output';

export class TestResultAndAnalysis {
  testResult: TestResultOutput = new TestResultOutput();
  userAnswerAnalysisList: UserAnswerAnalysisOutput[] = [];
}
