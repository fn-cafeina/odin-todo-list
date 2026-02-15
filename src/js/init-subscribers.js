import pubSub from "./PubSub.js";

import addProject from "./add-project.js";
import addTodo from "./add-todo.js";

import renderProjects from "./render-projects.js";
import renderTodos from "./render-todos.js";

import projectDialog from "./project-dialog.js";
import todoDialog from "./todo-dialog.js";

const initSubscribers = () => {
  pubSub.subscribe("add-project", addProject);
  pubSub.subscribe("add-todo", addTodo);
  pubSub.subscribe("render-projects", renderProjects);
  pubSub.subscribe("render-todos", renderTodos);
  pubSub.subscribe("show-project-dialog", () => projectDialog(true));
  pubSub.subscribe("close-project-dialog", () => projectDialog(false));
  pubSub.subscribe("show-todo-dialog", () => todoDialog(true));
  pubSub.subscribe("close-todo-dialog", () => todoDialog(false));
};

export default initSubscribers;
