import {Injectable} from '@angular/core';
import {QuestionOutput} from '../../model/question/question-output';
import {UserAnswer} from '../../model/question/user-answer';
import {QuestionType} from '../../model/question/question-type.enum';

@Injectable({
  providedIn: 'root'
})
export class UserAnswersHandlingService {

  constructor() { }

  mapAnswersOnQuestions(questions: QuestionOutput[], userAnswers: UserAnswer[]): UserAnswer[] {
    return userAnswers.map((answer, i) => {
      const q = questions[i];
      if (q.questionType === QuestionType.MULTI_ANSWER.ordinal) {
        answer.answers = answer.answers.map((ans, j) => {
          if (ans) {
            return q.answerOptions[j];
          }
          return ans;
        }).filter(obj => obj);
      }
      return answer;
    });
  }
}
