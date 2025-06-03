export class Report {
    private reportId: number;
    private month: string;
    private completedTasks: string;
    private pendingTasks: string;

    constructor(reportId: number, month: string, completedTasks: string, pendingTasks: string) {
        this.reportId = reportId;
        this.month = month;
        this.completedTasks = completedTasks;
        this.pendingTasks = pendingTasks;
    }

    getReportId(): number {
        return this.reportId;
    }

    getMonth(): string {
        return this.month;
    }

    getCompletedTasks(): string {
        return this.completedTasks;
    }

    getPendingTasks(): string {
        return this.pendingTasks;
    }
}
