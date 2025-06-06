export class Reminder {
  constructor(
    public reminderId: number,
    public message: string,
    public remindAt: Date,
    public isSet: boolean
  ) {}
}
