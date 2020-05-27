export class Status {
  private static VALUES: Status[] = [];
  public static CONTINUE = new Status(0, 'ПРОДОВЖУЄТЬСЯ');
  public static FINISHED = new Status(1, 'ЗАКІНЧЕНЕ');

  public readonly ordinal: number;
  public readonly description: string;


  constructor(ordinal: number, description: string) {
    this.ordinal = ordinal;
    this.description = description;
    Status.VALUES.push(this);
  }

  static getStatusFromOrdinal(ordinal: number): string {
    return Status.values.find(r => r.ordinal === ordinal).description;
  }

  static get values(): Status[] {
    return this.VALUES;
  }
}
