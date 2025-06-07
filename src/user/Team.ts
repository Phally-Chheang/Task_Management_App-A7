import { User } from "./User";

export class Team {
  private personId!: number;
  private teamName: string;

  constructor(personId: number, teamName: string) {
    this.personId = personId;
    this.teamName = teamName;
  }

  getId(): number {
    return this.personId;
  }

 
  getname(): string {
    return this.teamName;
  }
  getmember(): number {
    return 0; // Needs logic to count members
  }
}