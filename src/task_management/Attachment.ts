export class Attachment {
  private attachmentId: number;
  private fileName: string;
  private fileUrl: string;

  constructor(attachmentId: number, fileName: string, fileUrl: string) {
    this.attachmentId = attachmentId;
    this.fileName = fileName;
    this.fileUrl = fileUrl;
  }

  getFileName(): string { return this.fileName; }
}