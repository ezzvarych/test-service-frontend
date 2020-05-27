import {CompetitionOutput} from './competition-output';
import {QuestionOutput} from '../question/question-output';

export class CompetitionOutputWithQuestions {
  competitionInfo: CompetitionOutput = new CompetitionOutput();
  questions: QuestionOutput[] = [];
}
