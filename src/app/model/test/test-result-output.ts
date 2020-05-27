import {QuestionArea} from '../question/question-area';

export class TestResultOutput {
  testId: number;
  questionArea: QuestionArea = new QuestionArea();
  result: number;
  testFinishTime: Date = new Date();
}
