export class QuestionType {
  private static VALUES: QuestionType[] = [];

  public static SINGLE_ANSWER = new QuestionType(0, 'З однією відповіддю');
  public static MULTI_ANSWER = new QuestionType(1, 'З багатьма відповідями');
  public static OPEN = new QuestionType(2, 'Відкрите');

  public readonly ordinal: number;
  public readonly name: string;


  constructor(ordinal: number, name: string) {
    this.ordinal = ordinal;
    this.name = name;

    QuestionType.VALUES.push(this);
  }

  static getDescrFromOrdinal(ordinal: number): string {
    return QuestionType.values.find(r => r.ordinal === ordinal).name;
  }

  static get values(): QuestionType[] {
    return this.VALUES;
  }
}
