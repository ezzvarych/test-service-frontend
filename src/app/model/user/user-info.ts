import {UniversityOutput} from '../university/university-output';

export class UserInfo {
  id: number;
  login: string;
  realName: string;
  role: number;
  graduationYear: number;
  desiredUniversity: UniversityOutput = new UniversityOutput();
}
