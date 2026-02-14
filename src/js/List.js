export default class List {
  constructor(name) {
    this.name = name;

    this.tasks = [];
    this.default = "NODEFAULT";
  }

  addTask(task) {
    this.tasks.push(task);
  }
}
