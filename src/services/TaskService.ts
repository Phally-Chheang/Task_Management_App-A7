import { Task } from "../task-management/Task";
import { User } from "../user/User";
import { Comment } from "../task-management/Comment";

export class TaskService {
  setPriority(priority: string): void {
    // This method would typically set the priority for a task or a set of tasks.
    console.log(`Set priority called with: ${priority}`);
  }
  assignTask(task: Task, user: User): string {
    return `Task "${task.title}" assigned to ${user.getName()}`;
  }

  getUpcomingTasks(tasks: Task[]): Task[] {
    const today = new Date();
    return tasks.filter(task => task.dueDate > today && task.status !== "Completed");
  }

  addCommentToTask(task: Task, comment: Comment): void {
    task.addComment(comment);
  }

  completeTask(task: Task): void {
    task.markComplete();
  }
}
