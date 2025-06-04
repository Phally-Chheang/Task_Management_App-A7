import { Task } from "../task_management/Task";
import { Report } from "../activity/Report";
import {  Status } from "../common/enums";

export class ReportService {
  generateMonthlyReport(tasks: Task[], month: string): Report {
    // Count how many tasks are completed
    const completedCount = tasks.filter(t => t.getStatus() === Status.Completed).length;
    // Calculate pending tasks count
    const pendingCount = tasks.length - completedCount;

    // Generate a simple numeric reportId using Date.now()
    const reportId = Date.now();

    // Create new Report object with string summaries
    return new Report(
      reportId,
      month,
      `${completedCount} tasks`,
      `${pendingCount} tasks`
    );
  }
}
