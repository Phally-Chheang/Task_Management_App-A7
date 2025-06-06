import { Task } from "../models/Task";
import { Report } from "../models/Report";

export class ReportService {
  generateMonthlyReport(tasks: Task[], month: string): Report {
    const completed = tasks.filter(t => t.status === "Completed").length;
    const pending = tasks.length - completed;

    return new Report(
      Date.now(),
      month,
      `${completed} tasks`,
      `${pending} tasks`
    );
  }
}
