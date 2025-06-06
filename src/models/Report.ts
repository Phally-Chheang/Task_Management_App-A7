export class Report {
  constructor(
    public reportId: number,
    public month: string,
    public completedTasks: string,
    public pendingTasks: string
  ) {}
}
