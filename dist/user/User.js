"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// ↙ User.ts ↘
const Role_1 = require("./Role");
const Task_1 = require("../task_management/Task");
const enums_1 = require("../common/enums");
class User {
    constructor(userId, name, email, password, projects, role, team) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.projects = projects !== null && projects !== void 0 ? projects : [];
        this.role = role;
        this.team = team;
    }
    getUserId() {
        return this.userId;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    getProjects() {
        return this.projects;
    }
    getRole() {
        return this.role;
    }
    getTeam() {
        return this.team;
    }
    addProject(project) {
        this.projects.push(project);
    }
    removeProject(project) {
        this.projects = this.projects.filter((p) => p.getProjectId() !== project.getProjectId());
    }
    setRole(newRole) {
        this.role = newRole;
    }
    assignTeam(team) {
        this.team = team;
    }
    removeTeam() {
        this.team = undefined;
    }
    createTask(taskData, projectId) {
        const project = this.projects.find((p) => p.getProjectId() === projectId);
        if (!project) {
            throw new Error("Project not found for this user.");
        }
        // Build a new Task by passing along all Project fields + the task-specific fields
        const task = new Task_1.Task(project.getProjectId(), project.getProjectName(), project.getDescription(), project.getStartDate(), project.getEndDate(), Date.now(), taskData.title, taskData.description, taskData.dueDate, taskData.priority, enums_1.Status.TODO);
        project.addTask(task);
        task.assignUser(this);
        return task;
    }
    assignTask(task, user) {
        var _a, _b;
        const projectWithTask = this.projects.find((project) => project.getTasks().includes(task));
        if (!projectWithTask) {
            throw new Error("Task does not belong to any of the user's projects.");
        }
        if (this.role === Role_1.Role.ADMIN ||
            ((_a = this.team) === null || _a === void 0 ? void 0 : _a.getId()) === ((_b = user.getTeam()) === null || _b === void 0 ? void 0 : _b.getId())) {
            task.assignUser(user);
        }
        else {
            throw new Error("User does not have permission to assign this task.");
        }
    }
    getReminders() {
        const now = new Date("2025-06-01T01:09:00+07:00");
        return this.projects
            .flatMap((project) => project.getTasks())
            .filter((task) => task.getAssignedUsers().includes(this))
            .flatMap((task) => task.getReminders())
            .filter((reminder) => !reminder.isAcknowledged() && reminder.getRemindAt() > now);
    }
    getDashboardData() {
        const now = new Date("2025-06-01T01:09:00+07:00");
        let completed = 0;
        let pending = 0;
        let overdue = 0;
        this.projects.forEach((project) => {
            project.getTasks().forEach((task) => {
                if (task.getAssignedUsers().includes(this)) {
                    if (task.getStatus() === enums_1.Status.DONE)
                        completed++;
                    else if (task.getDueDate() < now)
                        overdue++;
                    else
                        pending++;
                }
            });
        });
        return { completed, pending, overdue };
    }
    generateReport() {
        const now = new Date("2025-06-01T01:09:00+07:00");
        const completedTasks = [];
        const pendingTasks = [];
        const overdueTasks = [];
        this.projects.forEach((project) => {
            project.getTasks().forEach((task) => {
                if (task.getAssignedUsers().includes(this)) {
                    if (task.getStatus() === enums_1.Status.DONE)
                        completedTasks.push(task);
                    else if (task.getDueDate() < now)
                        overdueTasks.push(task);
                    else
                        pendingTasks.push(task);
                }
            });
        });
        return { completedTasks, pendingTasks, overdueTasks };
    }
    addCommentToTask(task, content, createdAt) {
        const projectWithTask = this.projects.find((project) => project.getTasks().includes(task));
        if (!projectWithTask) {
            throw new Error("Task does not belong to any of the user's projects.");
        }
        return task.addComment(projectWithTask.getProjectId(), task.getTaskId(), this.getUserId(), content, createdAt, createdAt, // updatedAt (set to createdAt initially)
        false, // isEdited
        false, // isPinned
        null, // parentCommentId
        0, // likes
        0 // dislikes
        // attachments, mentions, reactions use default values
        );
    }
    addAttachmentToTask(task, fileName, fileUrl) {
        const projectWithTask = this.projects.find((project) => project.getTasks().includes(task));
        if (!projectWithTask) {
            throw new Error("Task does not belong to any of the user's projects.");
        }
        return task.addAttachment(fileName, fileUrl);
    }
}
exports.User = User;
