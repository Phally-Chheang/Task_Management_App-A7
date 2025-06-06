export class Reminder {
  constructor(
    public reminderId: number = 0,
    public message: string = "",
    public remindAt: Date = new Date(),
    public isset: boolean = true
  ) {}

  getMessage(): string {
    return this.message;
  }
  getRemindAt(): Date {
    return this.remindAt;
  }
  isSet(): boolean {
    return this.isset;
  }
  setMessage(message: string): void {
    this.message = message;
  }
  setRemindAt(remindAt: Date): void {
    this.remindAt = remindAt;
  }
  setIsSet(isSet: boolean): void {
    this.isset = isSet;
  }
  toString(): string {
    return `Reminder ID: ${this.reminderId}, Message: ${this.message}, Remind At: ${this.remindAt}, Is Set: ${this.isset}`;
  }
  
}