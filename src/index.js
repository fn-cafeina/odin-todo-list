import "./styles.css";

const dialog = document.querySelector("dialog");
const createTaskBtn = document.querySelector(".create-task-btn");
const closeDialogBtn = document.querySelector(".close-dialog-btn");

createTaskBtn.addEventListener("click", () => dialog.showModal());
closeDialogBtn.addEventListener("click", () => dialog.close());
