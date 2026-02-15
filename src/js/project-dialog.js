import { $ } from "./utils.js";

const projectDialog = (option) => {
  const projectDialog = $("#project-dialog");

  if (option) {
    projectDialog.showModal();
  } else {
    projectDialog.close();
  }
};

export default projectDialog;
