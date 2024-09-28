import { data } from "./data";

function generateTasks(e) {
  let tasksDiv = document.createElement("div");
  tasksDiv.classList.add("tasks");
  e.list.forEach((l) => {
    let taskDiv = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");

    let iconClass = ["fa-regular", "fa-circle"];
    if (l.done) iconClass[1] = "fa-circle-check";
    switch (l.priority) {
      case "High":
        iconClass.push("danger");
        break;
      case "Medium":
        iconClass.push("warning");
        break;
      case "Low":
        iconClass.push("success");
        break;
      default:
        break;
    }

    let icon = document.createElement("i");
    iconClass.forEach((j) => {
      icon.classList.add(j);
    });

    let name = document.createElement("div");
    name.classList.add("name");
    name.textContent = l.title;

    let date = document.createElement("span");
    date.classList.add("date");
    date.textContent = l.dueDate;

    let editIcon = document.createElement("i");
    editIcon.classList.add("fa-solid", "fa-pen-to-square", "warning");

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash", "danger");

    div1.append(icon, name);
    div2.append(date, editIcon, deleteIcon);
    taskDiv.append(div1, div2);
    tasksDiv.append(taskDiv);
  });

  return tasksDiv;
}

function initializeContent(Object) {
  let container = document.createElement("div");
  container.classList.add("content");

  let h1 = document.createElement("h1");
  h1.textContent = data[0].project;

  let main = document.createElement("div");
  main.classList.add("main");

  let h3 = document.createElement("h3");
  h3.textContent = "Tasks";

  let tasks = generateTasks(data[0]);

  main.append(h3, tasks);
  container.append(h1, main);
  return container;
}

function setContent(obj) {
  document.querySelector("div.content h1").textContent = obj.project;
  let main = document.querySelector("div.content div.main");
  let tasks = generateTasks(obj);
  main.removeChild(document.querySelector("div.content div.main div.tasks"));
  main.append(tasks);
}

function addTask() {
  let container = document.createElement("div");
  container.classList.add("modalContainer");

  let modal = document.createElement("div");
  modal.classList.add("modal");

  let h3 = document.createElement("h3");
  h3.textContent = "Add Task";

  let form = document.createElement("form");
  form.id = "addTaskForm";

  // Title input
  let titleGroup = document.createElement("div");
  titleGroup.classList.add("form-group");
  let titleLabel = document.createElement("label");
  titleLabel.textContent = "Title";
  let titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";
  titleGroup.append(titleLabel, titleInput);

  // Due Date input
  let dateGroup = document.createElement("div");
  dateGroup.classList.add("form-group");
  let dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = "Due Date";
  let dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "dueDate";
  dateGroup.append(dueDateLabel, dueDateInput);

  // Priority select
  let priorityGroup = document.createElement("div");
  priorityGroup.classList.add("form-group");
  let priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority";
  let prioritySelect = document.createElement("select");
  prioritySelect.name = "priority";
  let priorities = ["high", "medium", "low"];
  priorities.forEach((priority) => {
    let option = document.createElement("option");
    option.value = priority;
    option.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);
    prioritySelect.appendChild(option);
  });
  priorityGroup.append(priorityLabel, prioritySelect);

  // Add Task button
  let addButton = document.createElement("button");
  addButton.type = "submit";
  addButton.textContent = "Add Task";

  // Append elements to form
  form.appendChild(titleGroup);
  form.appendChild(dateGroup);
  form.appendChild(priorityGroup);
  form.appendChild(addButton);

  // Append form to modal
  modal.append(h3, form);

  // Append modal to container
  container.appendChild(modal);

  // Append container to body or a specific element
  document.body.appendChild(container);
}

export { initializeContent, setContent, addTask };
