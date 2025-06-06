import { Task } from "./models/Task";
import { Comment } from "./models/Comment";
import { User } from "./models/User";
import { TaskService } from "./services/TaskService";
import { Reminder } from "./models/Reminder";
import { ReminderService } from "./services/ReminderService";

const user = new User(1, "Alice", "alice@example.com", "pass123");

const task = new Task(
  101,
  "Submit Report",
  "Finish the Q2 financial report",
  new Date("2025-06-01"),
  "High",
  "In Progress"
);

const comment = new Comment(1, "Almost done!", new Date());
const taskService = new TaskService();

taskService.addCommentToTask(task, comment);
taskService.setPriority?.("Urgent"); // optional chaining in case method doesn't exist
taskService.completeTask(task);

const reminder = new Reminder(1, "Don't forget the deadline!", new Date(), true);
const reminderService = new ReminderService();

console.log(reminderService.sendReminder(reminder));
console.log(task);
