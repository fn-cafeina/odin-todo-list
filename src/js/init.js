import projects from "./Projects.js";

import Project from "./Project.js";

import renderTodos from "./render-todos.js";
import renderProjects from "./render-projects.js";

import initEvents from "./init-events.js";
import initSubscribers from "./init-subscribers.js";

import { getProjectsFromLocalStorage } from "./local-storage.js";

export default function init() {
  if (localStorage.getItem("projects") !== null) {
    getProjectsFromLocalStorage();
  } else {
    const defaultProject = new Project("Default");

    defaultProject.setRemovableState(false);
    defaultProject.setSelectedState(true);

    projects.addProject(defaultProject);
  }

  initEvents();
  initSubscribers();

  renderProjects();
  renderTodos();

  getProjectsFromLocalStorage();
}
