"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dashboard = void 0;
class Dashboard {
    constructor(status, notifications = [], completionRate = 0, overdueTasksCount = 0) {
        this.status = status;
        this.notifications = notifications;
        this.completionRate = completionRate;
        this.overdueTasksCount = overdueTasksCount;
    }
    // Update dashboard status based on tasks
    updateStatus(newStatus) {
        this.status = newStatus;
    }
    // Add a new notification to the dashboard
    addNotification(notification) {
        this.notifications.push(notification);
    }
    // Clear all notifications
    clearNotifications() {
        this.notifications = [];
    }
    // Calculate and update completion rate
    updateCompletionRate(completedTasks, totalTasks) {
        if (totalTasks > 0) {
            this.completionRate = Math.round((completedTasks / totalTasks) * 100);
        }
        else {
            this.completionRate = 0;
        }
    }
    // Update count of overdue tasks
    updateOverdueTasksCount(count) {
        this.overdueTasksCount = count;
    }
    // Get summary of dashboard data
    getSummary() {
        return {
            status: this.status,
            notificationCount: this.notifications.length,
            completionRate: this.completionRate,
            overdueTasks: this.overdueTasksCount,
        };
    }
}
exports.Dashboard = Dashboard;
