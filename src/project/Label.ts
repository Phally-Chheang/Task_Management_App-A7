import { Task } from "../task_management/Task";


export class Label{
  private labelId: number;
  private name: string;

  constructor(
    labelId: number,
    name: string,
  ) {
    this.labelId = labelId;
    this.name = name;
  }

  getLabelId(): number {
    return this.labelId;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  attachToTask(task: Task): void {
    task.addLabel(this);
  }

  removeFromTask(task: Task): void {
    const updatedLabels = task.getLabels().filter(l => l.getLabelId() !== this.labelId);
  }
}
