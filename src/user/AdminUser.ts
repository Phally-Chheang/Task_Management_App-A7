import { User } from "./User";

export class AdminUser extends User {
  constructor(
    private adminId: number,
    private permissions: string[]
  ) {
    super(adminId, "Admin", "admin@example.com", "password");
  }

  getAdminId(): number {
    return this.adminId;
  }

  getPermissions(): string[] {
    return this.permissions;
  }
}
