import "./styles.css";

const dialog = document.querySelector("dialog");
const createTaskBtn = document.querySelector(".create-task-btn");
const closeDialogBtn = document.querySelector(".close-dialog-btn");

createTaskBtn.onclick = () => dialog.showModal();
closeDialogBtn.onclick = () => dialog.close();

const taskAlldayOption = document.querySelector("#task-allday-option");
const taskDuedate = document.querySelector("#task-duedate");
taskAlldayOption.addEventListener("change", () => {
  if (taskAlldayOption.checked) {
    taskDuedate.setAttribute("type", "date");
  } else {
    taskDuedate.setAttribute("type", "datetime-local");
  }
});
