"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const enums_1 = require("../common/enums");
class TaskService {
    // Set priority for a specific task
    setPriority(task, priority) {
        // Assuming priority is a string matching the Priority enum names
        // If you want type safety, you can change string to Priority enum
        task.setPriority(priority); // or convert string to enum if needed
    }
    assignTask(task, user) {
        // Use getter for task title and user name
        return `Task "${task.getTitle()}" assigned to ${user.getName()}`;
    }
    getUpcomingTasks(tasks) {
        const today = new Date();
        return tasks.filter(task => task.getDueDate() > today && task.getStatus() !== enums_1.Status.Completed);
    }
    addCommentToTask(task, 
    // Instead of passing Comment object (Task.addComment expects params)
    content, userId, createdAt = new Date(), updatedAt = new Date(), isEdited = false, isPinned = false, parentCommentId = null, likes = 0, dislikes = 0) {
        // Call Task.addComment with proper parameters
        task.addComment(0, // projectId (replace with actual if available)
        task.getTaskId(), userId, content, createdAt, updatedAt, isEdited, isPinned, parentCommentId, likes, dislikes);
    }
    completeTask(task) {
        task.markComplete();
    }
}
exports.TaskService = TaskService;
