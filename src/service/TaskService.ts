import { Task } from "../task_management/Task";
import { User } from "../user/User";
import { Comment } from "../task_management/Comment";
import { Status } from "../common/enums";

export class TaskService {
  // Set priority for a specific task
  setPriority(task: Task, priority: string): void {
    // Assuming priority is a string matching the Priority enum names
    // If you want type safety, you can change string to Priority enum
    task.setPriority(priority as any); // or convert string to enum if needed
  }

  assignTask(task: Task, user: User): string {
    // Use getter for task title and user name
    return `Task "${task.getTitle()}" assigned to ${user.getName()}`;
  }

  getUpcomingTasks(tasks: Task[]): Task[] {
    const today = new Date();
    return tasks.filter(task =>
      task.getDueDate() > today && task.getStatus() !== Status.Completed
    );
  }

  addCommentToTask(
    task: Task,
    // Instead of passing Comment object (Task.addComment expects params)
    content: string,
    userId: number,
    createdAt: Date = new Date(),
    updatedAt: Date = new Date(),
    isEdited: boolean = false,
    isPinned: boolean = false,
    parentCommentId: number | null = null,
    likes: number = 0,
    dislikes: number = 0
  ): void {
    // Call Task.addComment with proper parameters
    task.addComment(
      0, // projectId (replace with actual if available)
      task.getTaskId(),
      userId,
      content,
      createdAt,
      updatedAt,
      isEdited,
      isPinned,
      parentCommentId,
      likes,
      dislikes
    );
  }

  completeTask(task: Task): void {
    task.markComplete();
  }
}
