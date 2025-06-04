// Import the Project class
import { Project } from "../project/Project";

export class Report {
  // Properties
  private reportId: number;
  private reportName: string;
  private completedTasks: number;
  private pendingTasks: number;
  private createdAt: Date;

  // Constructor to create a new Report
  constructor(
    reportId: number,
    reportName: string,
    completedTasks: number,
    pendingTasks: number,
    createdAt: Date = new Date()
  ) {
    this.reportId = reportId;
    this.reportName = reportName;
    this.completedTasks = completedTasks;
    this.pendingTasks = pendingTasks;
    this.createdAt = createdAt;
  }

  // Get methods
  getReportId(): number {
    return this.reportId;
  }

  getReportName(): string {
    return this.reportName;
  }

  getCompletedTasks(): number {
    return this.completedTasks;
  }

  getPendingTasks(): number {
    return this.pendingTasks;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  // Set methods
  setReportName(name: string): void {
    this.reportName = name;
  }

  setCompletedTasks(count: number): void {
    this.completedTasks = count;
  }

  setPendingTasks(count: number): void {
    this.pendingTasks = count;
  }

  // Show report details
  generateReport(project: Project): string {
    return `Report Name: ${this.reportName}
            Project Name: ${project.getName()}
            Completed Tasks: ${this.completedTasks}
            Pending Tasks: ${this.pendingTasks}
            Created At: ${this.createdAt.toLocaleDateString()}`;
  }
}
