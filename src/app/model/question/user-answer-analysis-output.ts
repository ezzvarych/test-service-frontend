import {UserAnswer} from './user-answer';

export class UserAnswerAnalysisOutput {
  userAnswerDto: UserAnswer = new UserAnswer();
  correct: boolean;
  
  constructor(userAnswerDto: UserAnswer, correct: boolean) {
    this.userAnswerDto = userAnswerDto;
    this.correct = correct;
  }
}
