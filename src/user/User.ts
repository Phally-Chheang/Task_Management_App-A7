// ↙ User.ts ↘
import { Role } from "./Role";
import { Team } from "./Team";
import { Project } from "../project/Project";
import { Task } from "../task_management/Task";
import { Comment } from "../task_management/Comment";
import { Attachment } from "../task_management/Attachment";
import { Reminder } from "../task_management/Reminder";

import { Priority, Status } from "../common/enums";

export abstract class User {
  private userId: number;
  private name: string;
  private email: string;
  private password: string;
  private projects: Project[];
  private role: Role;
  private team?: Team;

  constructor(
    userId: number,
    name: string,
    email: string,
    password: string,
    projects: Project[],
    role: Role,
    team?: Team
  ) {
    this.userId   = userId;
    this.name     = name;
    this.email    = email;
    this.password = password;
    this.projects = projects ?? [];
    this.role     = role;
    this.team     = team;
  }

  abstract displayInfo(): void;

  getUserId(): number {
    return this.userId;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getRole(): Role {
    return this.role;
  }

  getTeam(): Team | undefined {
    return this.team;
  }

  addProject(project: Project): void {
    this.projects.push(project);
  }

  removeProject(project: Project): void {
    this.projects = this.projects.filter(
      (p) => p.getProjectId() !== project.getProjectId()
    );
  }

  setRole(newRole: Role): void {
    this.role = newRole;
  }

  assignTeam(team: Team): void {
    this.team = team;
  }

  removeTeam(): void {
    this.team = undefined;
  }

  createTask(
    taskData: { title: string; description: string; dueDate: Date; priority: Priority },
    projectId: number
  ): Task {
    const project = this.projects.find((p) => p.getProjectId() === projectId);
    if (!project) {
      throw new Error("Project not found for this user.");
    }

    // Build a new Task by passing along all Project fields + the task-specific fields
    const task = new Task(
      project.getProjectId(),
      project.getProjectName(),
      project.getDescription(),
      project.getStartDate(),
      project.getEndDate(),
      Date.now(),                         
      taskData.title,
      taskData.description,
      taskData.dueDate,
      taskData.priority,
      Status.TODO
    );

    project.addTask(task);
    task.assignUser(this);
    return task;
  }

  assignTask(task: Task, user: User): void {
    const projectWithTask = this.projects.find((project) =>
      project.getTasks().includes(task)
    );
    if (!projectWithTask) {
      throw new Error("Task does not belong to any of the user's projects.");
    }

    if (
      this.role === Role.ADMIN ||
      this.team?.getId() === user.getTeam()?.getId()
    ) {
      task.assignUser(user);
    } else {
      throw new Error("User does not have permission to assign this task.");
    }
  }

  getReminders(): Reminder[] {
    const now = new Date("2025-06-01T01:09:00+07:00");
    return this.projects
      .flatMap((project) => project.getTasks())
      .filter((task) => task.getAssignedUsers().includes(this))
      .flatMap((task) => task.getReminders())
      .filter(
        (reminder) =>
          !reminder.isAcknowledged() && reminder.getRemindAt() > now
      );
  }

  getDashboardData(): { completed: number; pending: number; overdue: number } {
    const now = new Date("2025-06-01T01:09:00+07:00");
    let completed = 0;
    let pending = 0;
    let overdue = 0;

    this.projects.forEach((project) => {
      project.getTasks().forEach((task) => {
        if (task.getAssignedUsers().includes(this)) {
          if (task.getStatus() === Status.DONE) completed++;
          else if (task.getDueDate() < now) overdue++;
          else pending++;
        }
      });
    });

    return { completed, pending, overdue };
  }

  generateReport(): {
    completedTasks: Task[];
    pendingTasks: Task[];
    overdueTasks: Task[];
  } {
    const now = new Date("2025-06-01T01:09:00+07:00");
    const completedTasks: Task[] = [];
    const pendingTasks: Task[] = [];
    const overdueTasks: Task[] = [];

    this.projects.forEach((project) => {
      project.getTasks().forEach((task) => {
        if (task.getAssignedUsers().includes(this)) {
          if (task.getStatus() === Status.DONE) completedTasks.push(task);
          else if (task.getDueDate() < now) overdueTasks.push(task);
          else pendingTasks.push(task);
        }
      });
    });

    return { completedTasks, pendingTasks, overdueTasks };
  }

  addCommentToTask(
    task: Task,
    content: string,
    createdAt: Date
  ): Comment {
    const projectWithTask = this.projects.find((project) =>
      project.getTasks().includes(task)
    );
    if (!projectWithTask) {
      throw new Error("Task does not belong to any of the user's projects.");
    }
    return task.addComment(
      projectWithTask.getProjectId(),
      task.getTaskId(),
      this.getUserId(),
      content,
      createdAt,
      createdAt, // updatedAt (set to createdAt initially)
      false,     // isEdited
      false,     // isPinned
      null,      // parentCommentId
      0,         // likes
      0          // dislikes
      // attachments, mentions, reactions use default values
    );
  }

  addAttachmentToTask(
    task: Task,
    fileName: string,
    fileUrl: string
  ): Attachment {
    const projectWithTask = this.projects.find((project) =>
      project.getTasks().includes(task)
    );
    if (!projectWithTask) {
      throw new Error("Task does not belong to any of the user's projects.");
    }
    return task.addAttachment(fileName, fileUrl);
  }
}
