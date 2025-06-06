import { Label } from "./Label";

export class Attachment {
  public labels: Label[] = [];

  constructor(
    public attachmentId: number,
    public fileName: string,
    public fileUrl: string
  ) {}

  addLabel(label: Label): void {
    this.labels.push(label);
  }
}
