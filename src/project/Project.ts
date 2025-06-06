import { Report } from "./Report";
import { Task } from "../task-management/Task";

export class Project {
  constructor(
    protected projectId: number,
    protected name: string,
    protected description: string,
    protected createdDate: Date,
    protected report: Report[] = [],
    protected task: Task[] = []
  ) {}
  // Getters and setters can be added here if needed
  public getProjectId(): number {
    return this.projectId;
  }
  public getName(): string {
    return this.name;
  }
  public getDescription(): string {
    return this.description;
  }
  public getCreatedDate(): Date {
    return this.createdDate;
  }
  public getReport(): Report[] {
    return this.report;
  }
  public getTask(): Task[] {
    return this.task;
  }
  public setProjectId(projectId: number): void {
    this.projectId = projectId;
  }
  public setName(name: string): void {
    this.name = name;
  }
  public setDescription(description: string): void {
    this.description = description;
  }
  public setCreatedDate(createdDate: Date): void {
    this.createdDate = createdDate;
  }
  public setReport(report: Report[]): void {
    this.report = report;
  }
  public setTask(task: Task[]): void {
    this.task = task;
  }
  public addReport(report: Report): void {
    this.report.push(report);
  }
  public addTask(task: Task): void {
    this.task.push(task);
  }
  public removeReport(report: Report): void {
    this.report = this.report.filter(r => r !== report);
  }
  public removeTask(task: Task): void {
    this.task = this.task.filter(t => t !== task);
  }
  public clearReports(): void {
    this.report = [];
  }
  public clearTasks(): void {
    this.task = [];
  }
  public toString(): string {
    return `Project ID: ${this.projectId}, Name: ${this.name}, Description: ${this.description}, Created Date: ${this.createdDate}`;
  }
  public getProjectInfo(): any {
    return {
      projectId: this.projectId,
      name: this.name,
      description: this.description,
      createdDate: this.createdDate,
      reportCount: this.report.length,
      taskCount: this.task.length
    };
  }
  // public getTaskInfo(): any[] {
  //   return this.task.map(t => t.getTaskInfo());
  // }
  
}
