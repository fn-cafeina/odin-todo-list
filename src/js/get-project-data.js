import { $ } from "./utils.js";

const getProjectData = () => {
  const projectTitle = $("#project-title");

  return { projectTitle: projectTitle.value.trim() };
};

export default getProjectData;
