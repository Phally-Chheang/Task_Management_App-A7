import { AdminUser } from "./user/AdminUser";
import { Team } from "./user/Team";
import { Project } from "./project/Project";
import { Role } from "./user/Role";

// Optional: Create a Team
const devTeam = new Team(101, "Development Team");

// Optional: Create a Project
const sampleProject = new Project(
  201,
  "Website Redesign",
  "Redesigning the corporate website.",
  new Date("2025-06-01"),
  new Date("2025-09-30")
);

// ✅ Create the AdminUser
const admin = new AdminUser(
  1,
  "Phally Chheang",
  "admin@example.com",
  "securePass123",
  [sampleProject], // assign the project to admin
  devTeam           // assign the team to admin (optional)
);

// Display info and log in
admin.displayInfo();
admin.logIn();
