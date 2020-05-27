import {QuestionArea} from '../question/question-area';

export class CompetitionOutput {
  id: number;
  questionArea: QuestionArea = new QuestionArea();
  status: number;
  startTime: number;
}
