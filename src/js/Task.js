export default class Task {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;

    this.completed = false;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}
