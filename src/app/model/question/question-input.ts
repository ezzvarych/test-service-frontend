import {TestAnswerOption} from './test-answer-option';

export class QuestionInput {
  text: string;
  areaThemeId: number;
  questionType: number;
  answerOptions: TestAnswerOption[] = [];

  constructor() {
  }
}
