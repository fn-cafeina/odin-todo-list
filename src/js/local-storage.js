import projects from "./Projects.js";

import Project from "./Project.js";
import Todo from "./Todo.js";

const saveProjectsToLocalStorage = () => {
  const strItem = JSON.stringify(projects);

  localStorage.setItem("projects", strItem);
};

const getProjectsFromLocalStorage = () => {
  if (localStorage.getItem("projects") !== null) {
    projects.removeAllProjects();

    const projectsData = JSON.parse(localStorage.getItem("projects"));

    projectsData.projects.forEach((project) => {
      const newProject = new Project(project.title);

      if (project.isSelected) {
        newProject.setSelectedState(true);
      }

      if (project.title === "Default") newProject.setRemovableState(false);

      if (project.todos.length) {
        project.todos.forEach((todo) => {
          const newTodo = new Todo(todo.title, todo.priority, todo.duedate);

          if (todo.isCompleted) newTodo.isCompleted = true;

          newProject.addTodo(newTodo);
        });
      }

      projects.addProject(newProject);
    });
  }
};

export { saveProjectsToLocalStorage, getProjectsFromLocalStorage };
