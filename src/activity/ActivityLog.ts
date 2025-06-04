import { Task } from "../task_management/Task";
import { User } from "../user/User";

// Entity interface
interface Entity {
  id: number;
}

// ActivityLog class
export class ActivityLog implements Entity {
  id: number;
  actionType: string;
  timestamp: Date;
  task: Task | null = null;   // This log is related to 1 Task
  user: User | null = null;   // This log is created by 1 User

  constructor(id: number, actionType: string, timestamp: Date) {
    this.id = id;
    this.actionType = actionType;
    this.timestamp = timestamp;
  }

  // Set the task that this log is related to
  setTask(task: Task): void {
    this.task = task;
  }

  // Set the user who did the action
  setUser(user: User): void {
    this.user = user;
  }

  // Optional: Method to describe this log clearly
  getLogMessage(): string {
    const userName = this.user ? this.user.getName() : "Unknown User";
    const taskTitle = this.task ? this.task.getTitle() : "Unknown Task";
    return `[${this.timestamp.toISOString()}] ${userName} ${this.actionType} on "${taskTitle}"`;
  }
}
