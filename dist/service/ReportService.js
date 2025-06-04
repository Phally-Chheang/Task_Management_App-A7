"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportService = void 0;
const Report_1 = require("../activity/Report");
const enums_1 = require("../common/enums");
class ReportService {
    generateMonthlyReport(tasks, month) {
        // Count how many tasks are completed
        const completedCount = tasks.filter(t => t.getStatus() === enums_1.Status.Completed).length;
        // Calculate pending tasks count
        const pendingCount = tasks.length - completedCount;
        // Generate a simple numeric reportId using Date.now()
        const reportId = Date.now();
        // Create new Report object with string summaries
        return new Report_1.Report(reportId, month, `${completedCount} tasks`, `${pendingCount} tasks`);
    }
}
exports.ReportService = ReportService;
