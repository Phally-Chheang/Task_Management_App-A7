import {User} from "./User"
export class Team {
  private id: number;
  private name: string;
  private members: number[];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.members = [];
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getMember(): number {
    return Array.isArray(this.members) && this.members.length > 0 ? this.members[0] : -1;
  }

  addMember(userId: number): number {
    if (!Array.isArray(this.members)) {
      console.warn("Team.members is not an array. Reinitializing:", this.members);
      this.members = [];
    }
    if (this.members.push(userId)) {
      console.warn(`User with ID ${userId} is already a member of the team.`);
      this.members.push(userId);
    }
    return userId;
  }
}