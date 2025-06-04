"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const Report_1 = require("../activity/Report");
class Project {
    getProjectName() {
        throw new Error("Method not implemented.");
    }
    constructor(projectId, name, description, startDate, endDate) {
        this.reports = [];
        this.tasks = [];
        this.projectId = projectId;
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    getProjectId() {
        return this.projectId;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getStartDate() {
        return this.startDate;
    }
    getEndDate() {
        return this.endDate;
    }
    getTasks() {
        return this.tasks;
    }
    getReports() {
        return this.reports;
    }
    addTask(task) {
        this.tasks.push(task);
    }
    removeTask(taskId) {
        this.tasks = this.tasks.filter(task => task.getTaskId() !== taskId);
    }
    getTasksByStatus(status) {
        return this.tasks.filter(task => task.getStatus() === status);
    }
    getTasksByUser(user) {
        return this.tasks.filter(task => task.getAssignedUsers().some((assigned) => assigned.getUserId() === user.getUserId()));
    }
    getOverdueTasks(referenceDate) {
        return this.tasks.filter(task => task.getDueDate() < referenceDate && task.getStatus() !== "DONE");
    }
    getCompletedTasks() {
        return this.tasks.filter(task => task.getStatus() === "DONE");
    }
    getPendingTasks(referenceDate) {
        return this.tasks.filter(task => task.getStatus() !== "DONE" && task.getDueDate() >= referenceDate);
    }
    generateMonthlyReport() {
        const completed = this.getCompletedTasks().length.toString();
        const pending = this.getPendingTasks(new Date()).length.toString();
        const report = new Report_1.Report(Date.now(), new Date().toLocaleString('default', { month: 'long' }), completed, pending);
        this.reports.push(report);
        return report;
    }
    updateProjectDetails(name, description, endDate) {
        this.name = name;
        this.description = description;
        this.endDate = endDate;
    }
}
exports.Project = Project;
