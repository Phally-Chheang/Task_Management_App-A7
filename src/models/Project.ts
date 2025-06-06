import { Task } from "./Task";
import { Report } from "./Report";

export class Project {
  public tasks: Task[] = [];

  constructor(
    public projectId: number,
    public name: string,
    public description: string,
    public createdDate: Date,
    public report?: Report
  ) {}

  addTask(task: Task): void {
    this.tasks.push(task);
  }
}
