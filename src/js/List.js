export default class List {
  constructor(name) {
    this.name = name;

    this.tasks = [];
    this.default = "NODEFAULT";
    this.selected = false;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  toggleSelected() {
    this.selected = !this.selected;
  }
}
