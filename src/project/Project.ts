import { Task } from "../task_management/Task";
import { Report } from "../activity/Report";
import { User } from "../user/User";

export class Project {
    getProjectName(): string {
      throw new Error("Method not implemented.");
    }
    protected projectId: number;
    protected name: string;
    protected description: string;
    protected startDate: Date;
    protected endDate: Date;
    protected reports: Report[] = [];
    protected tasks: Task[] = [];

    constructor(
        projectId: number,
        name: string,
        description: string,
        startDate: Date,
        endDate: Date
    ) {
        this.projectId = projectId;
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    getProjectId(): number {
        return this.projectId;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getStartDate(): Date {
        return this.startDate;
    }

    getEndDate(): Date {
        return this.endDate;
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    getReports(): Report[] {
        return this.reports;
    }

    addTask(task: Task): void {
        this.tasks.push(task);
    }

    removeTask(taskId: number): void {
        this.tasks = this.tasks.filter(task => task.getTaskId() !== taskId);
    }

    getTasksByStatus(status: string): Task[] {
        return this.tasks.filter(task => task.getStatus() === status);
    }

    getTasksByUser(user: User): Task[] {
        return this.tasks.filter(task =>
            task.getAssignedUsers().some(
                (assigned: User) => assigned.getUserId() === user.getUserId()
            )
        );
    }

    getOverdueTasks(referenceDate: Date): Task[] {
        return this.tasks.filter(
            task => task.getDueDate() < referenceDate && task.getStatus() !== "DONE"
        );
    }

    getCompletedTasks(): Task[] {
        return this.tasks.filter(task => task.getStatus() === "DONE");
    }

    getPendingTasks(referenceDate: Date): Task[] {
        return this.tasks.filter(
            task => task.getStatus() !== "DONE" && task.getDueDate() >= referenceDate
        );
    }

    generateMonthlyReport(): Report {
        const completed = this.getCompletedTasks().length.toString();
        const pending = this.getPendingTasks(new Date()).length.toString();

        const report = new Report(
            Date.now(),
            new Date().toLocaleString('default', { month: 'long' }),
            completed,
            pending
        );

        this.reports.push(report);
        return report;
    }

    updateProjectDetails(name: string, description: string, endDate: Date): void {
        this.name = name;
        this.description = description;
        this.endDate = endDate;
    }
}
