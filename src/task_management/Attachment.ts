import { Task } from "./Task";
import { Priority, Status } from "../common/enums";

export abstract class Attachment extends Task{
    private attachmentId: number;
    private fileName: string;
    private fileUrl: string;

    constructor(
        projectId: number,
        projectName: string,
        projectDescription: string,
        startDate: Date,
        endDate: Date,
        taskId: number,
        title: string,
        description: string,
        dueDate: Date,
        priority: Priority,
        status: Status,
        attachmentId: number,
        fileName: string,
        fileUrl: string
    ) {
        super(
            projectId,
            projectName,
            projectDescription,
            startDate,
            endDate,
            taskId,
            title,
            description,
            dueDate,
            priority,
            status
        );
        this.attachmentId = attachmentId;
        this.fileName = fileName;
        this.fileUrl = fileUrl;
    }
    public getAttachmentId(): number {
        return this.attachmentId;
    }

    public getFileName(): string {
        return this.fileName;
    }

    public setFileName(fileName: string): void {
        this.fileName = fileName;
    }   
    public getFileUrl(): string {
        return this.fileUrl;
    }
    public setFileUrl(fileUrl: string): void {
        this.fileUrl = fileUrl;
    }
    public abstract getAttachmentDetails(): string;
    public abstract setAttachmentDetails(fileName: string, fileUrl: string): void;  
}
