import { Project } from "../project/Project";

export abstract class User {
  constructor(
    private userId: number,
    private name: string,
    private email: string,
    private password: string,
    private projects: Project[] = []
  ) {}
  getId(): number {
    return this.userId;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }

  getProjects(): Project[] {
    return this.projects;
  }

  addProject(project: Project): void {
    this.projects.push(project);
  }
}


  