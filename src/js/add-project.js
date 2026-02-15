import projects from "./Projects.js";
import Project from "./Project.js";

import pubSub from "./PubSub.js";

import { errorMsg } from "./utils.js";

const addProject = (projectData) => {
  if (projectData.title) {
    const newProject = new Project(projectData.title);

    projects.addProject(newProject);

    pubSub.publish("close-project-dialog");
  } else errorMsg("Please enter a valid project title");
};

export default addProject;
