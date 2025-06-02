import { Task } from "../task_management/Task";

// ActivityLog.ts
interface Entity {
  id: number;
}

export class ActivityLog implements Entity {
  id: number;
  actionType: string;
  timestamp: Date;
  task: Task | null = null; // 1 ActivityLog belongs to 1 Task

  constructor(id: number, actionType: string, timestamp: Date) {
    this.id = id;
    this.actionType = actionType;
    this.timestamp = timestamp;
  }

  setTask(task: Task): void {
    this.task = task;
  }
}
