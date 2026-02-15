import projects from "./Projects.js";
import Todo from "./Todo.js";

import pubSub from "./PubSub.js";

import { errorMsg } from "./utils.js";

const addTodo = (todoData) => {
  if (todoData.title && todoData.duedate) {
    const newTodo = new Todo(
      todoData.title,
      todoData.priority,
      todoData.duedate,
    );

    projects.projects[projects.getSelectedProjectIndex()].addTodo(newTodo);

    pubSub.publish("close-todo-dialog");
  } else errorMsg("Please enter a valid todo data.");
};

export default addTodo;
