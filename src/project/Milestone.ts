import { Project } from "./Project";

export class Milestone extends Project {
    private id: number;
    private title: string;
    private dueDate: Date;

    constructor(
        id: number,
        title: string,
        dueDate: Date,
        projectId: number,
        name: string,
        description: string,
        startDate: Date,
        endDate: Date
    ) {
        super(projectId, name, description, startDate, endDate);
        this.id = id;
        this.title = title;
        this.dueDate = dueDate;
    }

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getDueDate(): Date {
        return this.dueDate;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    setDueDate(dueDate: Date): void {
        this.dueDate = dueDate;
    }

    isOverdue(referenceDate: Date = new Date()): boolean {
        return this.dueDate < referenceDate;
    }
}
