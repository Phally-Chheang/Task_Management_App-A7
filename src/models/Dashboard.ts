import { Notification } from "../task-management/Notification";

export class Dashboard {
  constructor(
    private status: string,
    private notifications: Notification[] = []
  ) {}

  getStatus(): string {
    return this.status;
  }

  getNotifications(): Notification[] {
    return this.notifications;
  }
}
