import { Task } from "./Task";

export class Notification extends Task {
    getMessage(): any {
      throw new Error("Method not implemented.");
    }
    protected notificationId: number;
    public message: string;
    protected notifyAt: Date;
    protected isSent: boolean;
    
    constructor(
        notificationId: number,
        message: string,
        notifyAt: Date,
        isSent: boolean = false,
        // Add required Task constructor parameters
        taskId: number,
        title: string,
        description: string,
        dueDate: Date,
        
    ) {
        super(taskId, title, description, dueDate);
        this.notificationId = notificationId;
        this.message = message;
        this.notifyAt = notifyAt;
        this.isSent = isSent;
    }
    
    // Additional methods can be added here
}