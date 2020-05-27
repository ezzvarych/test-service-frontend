export class Rol {
  private static _VALUES: Rol[] = [];

  public static STUDENT = new Rol(0, 'СТУДЕНТ');
  public static TEACHER = new Rol(1, 'ВИКЛАДАЧ');
  public static ADMIN = new Rol(2, 'АДМІН');

  public readonly ordinal: number;
  public readonly name: string;


  constructor(ordinal: number, name: string) {
    this.ordinal = ordinal;
    this.name = name;

    Rol._VALUES.push(this);
  }

  static getRoleFromOrdinal(ordinal: number): string {
    return Rol.values.find(r => r.ordinal === ordinal).name;
  }

  static get values(): Rol[] {
    return this._VALUES;
  }
}
