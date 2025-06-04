import { User } from "./User";
import { Role } from "./Role";
import { Team } from "./Team";
import { Project } from "../project/Project";

export class AdminUser extends User {
  constructor(
    userId: number,
    name: string,
    email: string,
    password: string,
    projects: Project[],
    team?: Team
  ) {
    super(userId, name, email, password, projects, Role.ADMIN, team);
  }

  displayInfo(): void {
    console.log("=== Admin Info ===");
    console.log(`ID: ${this.getUserId()}`);
    console.log(`Name: ${this.getName()}`);
    console.log(`Email: ${this.getEmail()}`);
    console.log(`Role: ${this.getRole()}`);
    if (this.getTeam()) {
      console.log(`Team: ${this.getTeam()?.getName()}`);
    } else {
      console.log("No team assigned.");
    }
    console.log("==================");
  }
}
