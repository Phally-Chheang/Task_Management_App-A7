import { Project } from "./Project";

export class Milestone extends Project {
  public id!: number;
  public title!: string;
  public dueDate!: Date;
}