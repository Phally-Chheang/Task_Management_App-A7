export class Label {
  private labelId: number;
  private name: string;

  constructor(labelId: number, name: string) {
    this.labelId = labelId;
    this.name = name;
  }

  getName(): string { return this.name; }
}