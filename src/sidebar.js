import { data } from "./data";

function generateList(obj) {
  let ul = document.createElement("ul");

  obj.forEach((element) => {
    let li = document.createElement("li");
    if (element.class) {
      element.class.forEach((e) => {
        li.classList.add(e);
      });
    }
    if (element.id) {
      li.dataset["id"] = element.id;
    }
    let icon = document.createElement("i");
    element.iconClass.forEach((c) => {
      icon.classList.add(c);
    });
    li.append(icon, element.text);
    ul.append(li);
  });
  return ul;
}

function initializeSidebar() {
  let controls = [
    {
      class: ["add-task"],
      iconClass: ["fa-solid", "fa-circle-plus"],
      text: "Add Task",
    },
    {
      iconClass: ["fa-solid", "fa-magnifying-glass"],
      text: "Search",
    },
    {
      class: ["active"],
      iconClass: ["fa-solid", "fa-calendar"],
      text: "All",
    },
    {
      iconClass: ["fa-solid", "fa-calendar-day"],
      text: "Today",
    },
    {
      iconClass: ["fa-solid", "fa-calendar-week"],
      text: "This Week",
    },
  ];

  let Projects = data.map((e) => {
    return {
      id: e.id,
      class: ["project"],
      iconClass: ["fa-solid", "fa-minus"],
      text: e.project,
    };
  });
  Projects.unshift({
    class: ["add-project"],
    iconClass: ["fa-solid", "fa-circle-plus"],
    text: "Add Project",
  });
  Object.assign(Projects[1], {
    class: ["project", "active"],
  });

  let Notes = [
    {
      class: ["add-notes"],
      iconClass: ["fa-solid", "fa-circle-plus"],
      text: "Add Notes",
    },
  ];

  let sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  let bufferDiv = document.createElement("div");
  bufferDiv.append(generateList(controls), generateList(Projects));

  sidebar.append(bufferDiv, generateList(Notes));

  return sidebar;
}

function setActiveClassForProject(id) {
  let projectDivs = document.querySelectorAll("div.sidebar li.project");
  projectDivs.forEach((e) => {
    if (e.dataset["id"] == id) e.classList.add("active");
    else e.classList.remove("active");
  });
}

export { initializeSidebar, setActiveClassForProject };
