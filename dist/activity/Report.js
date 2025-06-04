"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = void 0;
class Report {
    constructor(reportId, month, completedTasks, pendingTasks) {
        this.reportId = reportId;
        this.month = month;
        this.completedTasks = completedTasks;
        this.pendingTasks = pendingTasks;
    }
    getReportId() {
        return this.reportId;
    }
    getMonth() {
        return this.month;
    }
    getCompletedTasks() {
        return this.completedTasks;
    }
    getPendingTasks() {
        return this.pendingTasks;
    }
}
exports.Report = Report;
