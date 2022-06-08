export class Person {
  id: number | undefined;
  public name: string | undefined;
  public surname: string | undefined;

  constructor() {}

  // constructor(public name: string, public surname: string) {}

  // age is an attribute
  get age() {
    return 22;
  }
}
