import { User } from "../user/User";

export class ActivityLog extends User {
  public id: number | undefined;
  public actionType: string | undefined;
  public timestamp: Date | undefined;
}