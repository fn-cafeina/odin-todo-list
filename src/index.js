import "./styles.css";

const taskDialog = document.querySelector(".task-dialog");
const dialogCreateTaskBtn = document.querySelector(".dialog-create-task-btn");
const listDialog = document.querySelector(".list-dialog");
const dialogCreateListBtn = document.querySelector(".dialog-create-list-btn");
const closeListDialogBtn = document.querySelector(".close-list-dialog-btn");
const closeTaskDialogBtn = document.querySelector(".close-task-dialog-btn");

dialogCreateTaskBtn.onclick = () => taskDialog.showModal();
dialogCreateListBtn.onclick = () => listDialog.showModal();
closeListDialogBtn.onclick = () => listDialog.close();
closeTaskDialogBtn.onclick = () => taskDialog.close();

const taskAlldayOption = document.querySelector("#task-allday-option");
const taskDuedate = document.querySelector("#task-duedate");
taskAlldayOption.addEventListener("change", () => {
  if (taskAlldayOption.checked) {
    taskDuedate.setAttribute("type", "date");
  } else {
    taskDuedate.setAttribute("type", "datetime-local");
  }
});
