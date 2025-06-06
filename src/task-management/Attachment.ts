import { Task } from "./Task";

export abstract class Attachment extends Task {
  protected attachmentId: number | undefined;
  public fileName: string | undefined;
  protected fileUrl: string | undefined;

  constructor(
    attachmentId: number | undefined,
    fileName: string | undefined,
    fileUrl: string | undefined,
    // Add required Task constructor parameters
    taskId: number,
    title: string,
    description: string,
    dueDate: Date
  ) {
    super(taskId, title, description, dueDate);
    this.attachmentId = attachmentId;
    this.fileName = fileName;
    this.fileUrl = fileUrl;
  }
}