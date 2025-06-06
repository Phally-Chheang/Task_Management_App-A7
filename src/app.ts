import { Task } from "./task-management/Task";
import { Comment } from "./task-management/Comment";
import { Reminder } from "./task-management/Reminder";
import { Priority } from "./activity/Priority";
import { Status } from "./activity/Status";
import { Dashboard } from "./models/Dashboard";
import { Project } from "./project/Project";


// Provide appropriate arguments for Task constructor
let project = new Project(
  1, // projectId
  "Sample Project", // name
  "This is a sample project description.", // description
  new Date(), // createdDate
  [], // reports (optional)
  []  // tasks (optional)
);

let report = {  id: 1,
  title: "Sample Report",
  content: "This is a sample report content.",
  createdDate: new Date()
};

project.addTask(new Task(1, "Sample Task", "This is a sample task description.", new Date()));


const task = new Task(
  1, // taskId
  "Sample Task", // name
  "This is a sample task description.", // description
  new Date(), // createdDate
  [], // comments (optional)
  []  // reminders (optional)
);
task.setPriority("High");
task.markComplete();

const comment = new Comment(1, "Looks good!", new Date());
task.addComment(comment);

const reminder = new Reminder(1, "Due soon!", new Date(), true);
task.addReminder(reminder);

const dashboard = new Dashboard(Status.Active);
console.log("Dashboard Status:", dashboard.getStatus());

// Console Output Project
console.log("Project created:", project);
console.log("Project Name:", project.getName());
console.log("Project Description:", project.getDescription());
console.log("Project Created Date:", project.getCreatedDate());
console.log("Project ID:", project.getProjectId());
console.log("Project Report:", project.getReport());
console.log("Project Task:", project.getTask());
console.log("Project Reports:", project.getReport());
console.log("Project Tasks:", project.getTask());
console.log("Project ID:", project.getProjectId());

//Task Console Output
console.log("Task created:", task);
console.log("Task Info:", task.getTaskInfo());
console.log("Task ID:", task.taskId);
console.log("Task Title:", task.title);
console.log("Task Description:", task.description);
console.log("Task Due Date:", task.dueDate);
console.log("Task Priority:", task.priority);
console.log("Task Status:", task.status);
console.log("Task Comments:", task.comment.map(c => c.content));
console.log("Task Reminders:", task.reminder.map(r => r.message));
console.log("Task Attachments:", task.attachment.map(a => a.fileName));
console.log("Task Notifications:", task.notification.map(n => n.message));
console.log("Task Method Output:", task.method("example"));

//Comment Console Output
console.log("Comment Content:", comment.content);
console.log("Reminder Message:", reminder.getMessage());
console.log("Reminder IsSet:", reminder.isset);
console.log("Reminder RemindAt:", reminder.remindAt);
// Reminder Console Output
console.log("Reminder ID:", reminder.reminderId);
console.log("Reminder Message:", reminder.message);
console.log("Reminder Remind At:", reminder.remindAt);
console.log("Reminder Is Set:", reminder.isset);


// Priority and Status Console Output
console.log("Priority:", Priority.High);
console.log("Priority:", task.priority);

// Status Console Output
console.log("Status:", Status.Pending);
console.log("Status:", task.status);
console.log("Status:", Status.Active);



// Dashboard Console Output
console.log("Dashboard Status:", dashboard.getStatus());







