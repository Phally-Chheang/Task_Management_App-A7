import { Notification } from "../activity/Notification";
import { Status } from "../common/enums";

export class Dashboard {
  constructor(
    private status: Status,
    private notifications: Notification[] = [],
    private completionRate: number = 0,
    private overdueTasksCount: number = 0
  ) {}

  // Update dashboard status based on tasks
  updateStatus(newStatus: Status): void {
    this.status = newStatus;
  }

  // Add a new notification to the dashboard
  addNotification(notification: Notification): void {
    this.notifications.push(notification);
  }

  // Clear all notifications
  clearNotifications(): void {
    this.notifications = [];
  }

  // Calculate and update completion rate
  updateCompletionRate(completedTasks: number, totalTasks: number): void {
    if (totalTasks > 0) {
      this.completionRate = Math.round((completedTasks / totalTasks) * 100);
    } else {
      this.completionRate = 0;
    }
  }

  // Update count of overdue tasks
  updateOverdueTasksCount(count: number): void {
    this.overdueTasksCount = count;
  }

  // Get summary of dashboard data
  getSummary(): {
    status: Status;
    notificationCount: number;
    completionRate: number;
    overdueTasks: number;
  } {
    return {
      status: this.status,
      notificationCount: this.notifications.length,
      completionRate: this.completionRate,
      overdueTasks: this.overdueTasksCount,
    };
  }
}